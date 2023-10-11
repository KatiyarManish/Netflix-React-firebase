import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebaseconfig";
import { adduser, removeuser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(adduser({ uid: uid, email: email }));
      } else {
        dispatch(removeuser());
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
