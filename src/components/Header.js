import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebaseconfig";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adduser, removeuser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => {
    return store.user;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, fullName, email } = user;
        dispatch(adduser({ uid: uid, email: email, fullName: fullName }));
        navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handlesignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div>
          <button
            className="text-white font-bold text-xl hover:text-red-500"
            onClick={handlesignout}
          >
            <span>Welcome {user.email.split("@")[0]} </span> &nbsp; &nbsp;
            &nbsp; &nbsp; Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
