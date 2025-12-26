import {  useRef, useState } from "react";
import Header from "./Header";
import validateLogin from "../utils/validate";
import { signIn, signUp } from "../auth/firebaseAuth";
import { useDispatch } from "react-redux";
import { storeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const fullName = useRef<HTMLInputElement | null>(null);
    const email = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const [inputErrorMessage, setInputErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const toggleSignIn = () => {
        setIsSignIn(prev => !prev);
    }

    const handleClick = () => {
        if(email.current && password.current) {
            const validateMessage = validateLogin(email.current.value, password.current.value, fullName?.current?.value);
            setInputErrorMessage(validateMessage);
            if(validateMessage) return;
            if(isSignIn) {
                signIn(email.current.value, password.current.value).then((currentUserInfo) => {
                    console.log("current user", currentUserInfo);
                    if(currentUserInfo.success) {
                        const userJsonData = currentUserInfo.data?.toJSON();
                        dispatch(storeUser(userJsonData));
                        navigate("/browse");
                    } else {
                        setInputErrorMessage(currentUserInfo.message);
                    }
                });
            } else {
                signUp(email.current.value, password.current.value, fullName?.current?.value).then((currentUserInfo) => {
                    console.log("current user", currentUserInfo);
                    if(currentUserInfo.success) {
                        const userJsonData = currentUserInfo.data?.toJSON();
                        dispatch(storeUser(userJsonData));
                        navigate("/browse");
                    } else {
                        setInputErrorMessage(currentUserInfo.message);
                    }
                });
            }
        }
    }
    return (
        <div className="relative">
            <Header />
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_medium.jpg" alt=""/>
            <form onSubmit={(e) => e.preventDefault()} className=" bg-black bg-opacity-70 absolute top-40 left-0 right-0 w-3/12 h-auto mx-auto rounded-md
            p-16">
                <h1 className="text-white font-bold text-3xl pb-10">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignIn && <input ref={fullName} className="block p-3 my-5 w-full bg-transparent rounded-lg border-gray-400 border-2 text-gray-100" type="text" placeholder="Enter Full Name" />}
                <input ref={email} className="block p-3 my-5 w-full bg-transparent rounded-lg border-gray-400 border-2 text-gray-100" type="text" placeholder="Enter Email"/>
                <input ref={password} className="block p-3 my-5 w-full bg-transparent rounded-lg border-gray-400 border-2 text-gray-100" type="password" placeholder="Enter Password" />
                <p className="text-red-600 font-semibold">{inputErrorMessage}</p>
                <button onClick={handleClick} className="bg-red-700 w-full text-center text-white p-3 my-5 rounded-lg">
                   {isSignIn ? 'Sign In' : 'Sign Up'}
                </button>
                <p className="text-gray-50">{isSignIn ? 'New to Netflix? ': 'Existing User? '} <button type="button" className="text-white font-bold" onClick={toggleSignIn}>{isSignIn ? 'Sign Up Now' : 'Sign In'}</button></p>
            </form>
        </div>
    )
};

export default Login;