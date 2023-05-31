import React, { Dispatch, useEffect, useState } from "react";
import { setUserStorage, getUserStorage } from "@/utils/LocalStorageUser";
import { login } from "@/utils/supabaseFunctions";
import Modal from "react-modal";
import LabelLogin from "../Atoms/LabelLogin";
import InputLogin from "../Atoms/InputLogin";
import Svg from "../Atoms/Svg";

const LOGIN_EXPIRES_SEC = 864000;
//3600 1h
//172800 48h 2d
//864000     10d

function LoginModal(props: any) {
  const { setEmail } = props;
  const [openLogin, setOpenLogin] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localStorageEmail, setLocalStorageEmail] = useState("");

  const handleLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
  };

  //useLocalStorage フック 使えそう？
  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // console.log(`handleLogin `);

    let result = await login(inputEmail, password);

    const { data, error } = result;
    // ログイン
    if (result.error === null) {
      // console.log(data.user);

      console.log(`handleLogin start${data.user}`);
      console.log(data.user);
      var expire_date = new Date();
      expire_date.setSeconds(expire_date.getSeconds() + LOGIN_EXPIRES_SEC);

      setUserStorage(data.user, expire_date);
      setLocalStorageEmail(data.user?.email ?? "");
      setEmail(inputEmail);
      setOpenLogin(false);
      // console.log("handleLogin OK");
    } else {
      // console.log(result);
      setUserStorage("", new Date());
      setLocalStorageEmail("");
      // console.log("handleLogin NG");
    }
  };

  return (
    <section>
      <button
        className="shadow-sm border-2 px-5 mr-2  text-normal rounded-xl bg-blue-500 text-white"
        onClick={handleLoginOpen}
      >
        Login
      </button>

      <Modal
        isOpen={openLogin}
        contentLabel="My Modal"
        ariaHideApp={false}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md ">
          <div className="flex justify-center items-center mt-6">
            <div className="inline-flex items-center font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
              <span className="ml-2"> Login To Your Account</span>

              <Svg onClick={handleLoginClose} pathd="M6 18L18 6M6 6l12 12" />
            </div>
          </div>

          <div className="mt-10">
            <form onSubmit={handleLogin}>
              <div className="flex flex-col mb-6">
                <LabelLogin htmlFor="email">E-Mail Address:</LabelLogin>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <Svg pathd="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </div>
                  <InputLogin
                    type="email"
                    name="email"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="E-Mail Address"
                    onChange={(e: {
                      target: { value: React.SetStateAction<string> };
                    }) => setInputEmail(e.target.value)}
                    value={inputEmail}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <LabelLogin htmlFor="password">Password:</LabelLogin>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <Svg pathd="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </span>
                  </div>

                  <input
                    type="password"
                    name="password"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                  <span className="mr-2 uppercase">Login</span>
                  <span>
                    <Svg pathd="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </span>
                </button>
              </div>
              <div className="flex w-full"></div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
            >
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
              <span className="ml-2">You donot have an account?</span>
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default LoginModal;
