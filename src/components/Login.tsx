import {  useRef, useState } from "react";
import Header from "./Header";
import validateLogin from "../utils/validate";
import { signIn, signUp } from "../auth/firebaseAuth";
import { NETFLIX_LOGO } from "../utils/constants";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const fullName = useRef<HTMLInputElement | null>(null);
    const email = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const [inputErrorMessage, setInputErrorMessage] = useState<string | null>(null);

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
                    if(!currentUserInfo.success) {
                        setInputErrorMessage(currentUserInfo.message);
                    }
                });
            } else {
                signUp(email.current.value, password.current.value, fullName?.current?.value).then((currentUserInfo) => {
                    if(!currentUserInfo.success) {
                        setInputErrorMessage(currentUserInfo.message);
                    }
                });
            }
        }
    }
    return (
        <div className="relative">
            <Header />
            <img src={NETFLIX_LOGO} alt=""/>
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