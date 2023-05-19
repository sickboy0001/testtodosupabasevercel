import React, { useCallback, useEffect, useState } from "react";
import { login } from "@/utils/supabaseFunctions";
import { setUserStorage, getUserStorage } from "@/utils/LocalStorageUser";

// import { KEYS, setItem, getItem, removeItem } from "@/utils/LocalStorage";

const LOGIN_EXPIRES_SEC = 172800;

const HeaderLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [localStorageEmail, setLocalStorageEmail] = useState("");

  useEffect(() => {
    setLocalStorageEmail(getUserStorage()?.email ?? "");
    console.log(getUserStorage()?.email);
  }, []);

  //useLocalStorage フック 使えそう？
  const handleLogin = async () => {
    let result = await login(email, password);
    const { data, error } = result;

    // ログイン
    if (result.error === null) {
      // console.log(data.user)
      // setIsLoggedIn(true);
      // setActiveEmail(email);
      // local(KEYS.SAMPLE_TEXT, email);
      setErrorMessage("");

      var expire_date = new Date();
      expire_date.setSeconds(expire_date.getSeconds() + LOGIN_EXPIRES_SEC);
      console.log(expire_date);

      setUserStorage(data.user, expire_date);
      setLocalStorageEmail(data.user?.email ?? "");
      // console.log('handleLogin OK');
      // console.log(localStorageEmail);
    } else {
      console.log(result);
      // setIsLoggedIn(false);
      // setActiveEmail('');
      setErrorMessage(result.error.message);
      // var date = new Date();
      // date.setSeconds(date.getSeconds());
      // console.log(date);
      setUserStorage("", new Date());
      setLocalStorageEmail("");
      console.log("handleLogin NG");
      console.log(localStorageEmail);
    }
  };
  //ログアウト
  const handleLogout = () => {
    // setIsLoggedIn(false);
    // var date = new Date();
    // date.setSeconds(date.getSeconds());
    // console.log(date);
    setUserStorage("", new Date());
    setLocalStorageEmail("");
    console.log("handleLogout");
    console.log(localStorageEmail);
  };

  //サインイン
  const handleSignIn = () => {};

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
            <form action="">
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
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderLogin;
