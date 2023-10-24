import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

import { auth } from "../utils/firebase";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usered = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showSearchView);

  const toggleSearch = () => {
    //TODO: toggle search
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          setUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className=" absolute z-10 px-10 gap-4 bg-gradient-to-b from-black w-full">
      <img className="w-48 absolute cursor-pointer" src={LOGO_URL} alt="logo" />
      {usered && (
        <div className=" flex justify-end w-full gap-8 m-2 p-8 pt-4">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="bg-red-700 text-white p-2 m-2 shadow-lg z-20 cursor-pointer rounded-lg"
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-red-700 text-white p-2 m-2 shadow-lg z-20 cursor-pointer rounded-lg"
            onClick={toggleSearch}
          >
            {showGptSearch ? "Home Page" : "GPT search"}
          </button>
          <img
            className="w-8 h-8 rounded-full cursor-pointer"
            src={usered?.photoURL}
            alt="profile"
          />
          <button
            className="bg-red-700 text-white p-2 rounded-lg "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
