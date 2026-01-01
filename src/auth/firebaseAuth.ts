import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, type User } from "firebase/auth";
import { auth } from "../utils/firebase";
import { PROFILE_LOGO } from "../utils/constants";

async function signUp(email: string, password: string, fullName: string | undefined) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user: User = userCredential.user;
        console.log("sign up", user);
        await updateProfile(user, {
            displayName: fullName,
            photoURL: PROFILE_LOGO
        });
        // ...
        return {success: true, data: user, message: "user signed up successfully"};
    } catch(error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { success: false, message: errorCode + errorMessage };
    }
};

async function signIn(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in 
        const user: User = userCredential.user;
        console.log("signed in", user);
        return { success: true, data: user, message: "user logged in successfully" };
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { success: false, message: errorCode + errorMessage };
    }
}

export {signIn, signUp};

