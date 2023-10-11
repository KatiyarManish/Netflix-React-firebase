import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebaseconfig";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => {
    return store.user;
  });
  const navigate = useNavigate();
  console.log(user);

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
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
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
