import React, { useCallback, useEffect, useState } from "react";
import { setUserStorage, getUserStorage } from "@/utils/LocalStorageUser";
import LoginModal from "./LoginModal";

// import { KEYS, setItem, getItem, removeItem } from "@/utils/LocalStorage";

const HeaderLogin = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [localStorageEmail, setLocalStorageEmail] = useState("");
  const [userId, setUserId] = useState("");

  console.log(`HeaderLogin:`);
  useEffect(() => {
    const userStroage = getUserStorage();
    setLocalStorageEmail(userStroage?.email ?? "");
    console.log(`HeaderLogin:setLocalStorageEmail:${getUserStorage()?.email}`);
  }, [email]);

  //ログアウト
  const handleLogout = () => {
    setUserStorage("", new Date());
    setLocalStorageEmail("");
    // console.log("handleLogout");
    // console.log(localStorageEmail);
  };

  return (
    <div>
      <div className="flex">
        <p className="font-bold text-red-700 ">{errorMessage}</p>
        {localStorageEmail ? (
          <div className="flex">
            <p className="md:text-xl text-sm px-2">{localStorageEmail}</p>
            <button
              onClick={handleLogout}
              className="shadow-sm border-2 px-5 mr-2  text-normal rounded-xl bg-blue-500 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex  ">
            <LoginModal setEmail={setEmail} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderLogin;
