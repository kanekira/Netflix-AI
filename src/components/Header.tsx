import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, storeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((store: {user: {userInfo: User}}) => store?.user?.userInfo);
    const handleSignOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                dispatch(storeUser(user.toJSON()));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between">
            <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="NETFLIX"/>
            {userInfo && <div className="flex items-center w-1/3">
                <p className="text-black font-bold w-full mx-2 text-right">{userInfo.displayName}</p>
                <img className="w-24 mx-2" src={userInfo.photoURL!} alt="" />
                <button className="w-full mx-2" onClick={handleSignOut}>Sign Out</button>
            </div>
            }
        </div>
    )
};

export default Header;
