import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {userName && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            alt="usericon"
            src="https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXEGkEDGo2vzJlj1oDachFRFYTAVQRAG_fdkuAWml_xtwVmdX9BoU6GPltBf8HIizsJVJWLcYbQ5k82qdHCdSI-3LBb_Zxk.png?r=b7b"
          />
          <button
            onClick={() => {
              signOut(auth)
                .then(() => {
                  // Sign-out successful.
                  navigate("/");
                })
                .catch((error) => {
                  // An error happened.
                });
            }}
            className="font-bold text-white"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
