import { useState, useRef } from "react";
import Validation from "../utils/Validation";
import { auth } from "../utils/Firebaseconfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { adduser } from "../utils/userSlice";

const Form = () => {
  const navigate = useNavigate();
  const [isopen, setisOpen] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const switchForm = () => {
    setisOpen(!isopen);
  };

  const clickSubmit = () => {
    const message = Validation(email.current.value, password.current.value);
    seterrorMessage(message);
    setTimeout(() => {
      seterrorMessage(null);
    }, 3000);

    if (message) return;

    if (!isopen) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        fullName.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

    if (isopen) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          seterrorMessage("login successful");
          setTimeout(() => {
            navigate("/browse");
          }, [3000]);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorMessage);
        });
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-lg absolute mx-auto right-0 left-0 w-3/12 p-12 bg-black my-36 text-white bg-opacity-70"
    >
      <h1 className="text-3xl py-4 font-bold">
        {isopen ? "Sign In" : "Sign up"}
      </h1>

      {!isopen && (
        <input
          ref={fullName}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-600"
        />
      )}

      <input
        type="email"
        ref={email}
        placeholder="Email address or Phone"
        className="p-4 my-4 w-full bg-gray-600"
      />
      <input
        type="password"
        ref={password}
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-600"
      />
      <p className={`text-${isopen ? "red" : "green"}-600 font-bold`}>
        {errorMessage}
      </p>
      <button
        className="p-4 my-4 w-full bg-red-700 rounded-lg"
        onClick={clickSubmit}
      >
        {isopen ? "Sign In" : "Sign up"}
      </button>
      <h2
        onClick={switchForm}
        className="cursor-pointer hover:text-red-600 text-center"
      >
        {isopen ? "Not a member? Sign up now" : "Already a member? Sign in now"}
      </h2>
    </form>
  );
};

export default Form;
