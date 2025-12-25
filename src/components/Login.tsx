import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const toggleSignIn = () => {
        setIsSignIn(prev => !prev);
    }
    return (
        <div className="relative">
            <Header />
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_medium.jpg" alt=""/>
            <form className=" bg-black bg-opacity-70 absolute top-40 left-0 right-0 w-3/12 h-2/3 mx-auto rounded-md
            p-16">
                <h1 className="text-white font-bold text-3xl pb-10">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignIn && <input className="block p-3 my-5 w-full bg-transparent rounded-lg border-gray-400 border-2" type="text" placeholder="Enter Full Name" />}
                <input className="block p-3 my-5 w-full bg-transparent rounded-lg border-gray-400 border-2" type="text" placeholder="Enter Email"/>
                <input className="block p-3 my-5 w-full bg-transparent rounded-lg border-gray-400 border-2" type="text" placeholder="Enter Password" />
                <button className="bg-red-700 w-full text-center text-white p-3 my-5 rounded-lg">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                <p className="text-gray-50">{isSignIn ? 'New to Netflix? ': 'Existing User? '} <button type="button" className="text-white font-bold" onClick={toggleSignIn}>{isSignIn ? 'Sign Up Now' : 'Sign In'}</button></p>
            </form>
        </div>
    )
};

export default Login;