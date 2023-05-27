import React, { useCallback, useEffect, useState } from "react";
import { setUserStorage, getUserStorage } from "@/utils/LocalStorageUser";
import LoginModal from "./LoginModal";

// import { KEYS, setItem, getItem, removeItem } from "@/utils/LocalStorage";

const HeaderLogin = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [localStorageEmail, setLocalStorageEmail] = useState("");

  console.log(`HeaderLogin:`);
  useEffect(() => {
    setLocalStorageEmail(getUserStorage()?.email ?? "");
    console.log(`HeaderLogin:setLocalStorageEmail:${getUserStorage()?.email}`);
  }, [email]);

  //ログアウト
  const handleLogout = () => {
    // setIsLoggedIn(false);
    // var date = new Date();
    // date.setSeconds(date.getSeconds());
    // console.log(date);
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
          <div className="flex  ">
            <p>{localStorageEmail}</p>
            <button
              onClick={handleLogout}
              className="shadow-sm border-1 px-2 rounded-lg bg-blue-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex  ">
            {/* <form action="">
              <input
                type="text"
                value={email}
                placeholder="mailaddress"
                onChange={(e) => setEmail(e.target.value)}
                className="rounded border-2  px-2 border-gray-300 "
              />
              <input
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="rounded border-2  px-2 border-gray-300"
              />
            </form>
            <button
              onClick={handleLogin}
              className="shadow-sm border-1 px-2 mr-2 rounded-lg bg-blue-200"
            >
              Login
            </button>
            <button
              onClick={handleSignIn}
              className="shadow-sm border-1 px-2 mr-2 rounded-lg bg-blue-200"
            >
              SignIn
            </button> */}
            <LoginModal setEmail={setEmail} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderLogin;
