import { User } from "@supabase/supabase-js";

export const LOGIN_EMAIL='local_todo_test_email'

export const setUserStorage = ( value: string | User | null, expire:Date) => {
    const key = LOGIN_EMAIL;
    let data;
    if (expire !== undefined) {
      data = {
        expire: expire,
        value: value
      };
    } else {
      data = value;
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  export const getUserStorage = () => {
    let storage: Storage | null = null;
    if (typeof window !== "undefined") {
      storage = window.localStorage;
    }
    const localStorageUser = storage?.getItem(LOGIN_EMAIL);
    if (localStorageUser === undefined) {
      return undefined;
    }
    if (localStorageUser === null) {
        return undefined;
      }
      const user = JSON.parse(localStorageUser);
    if (new Date(user.expire) > new Date()) {
      return user.value;
    } else {
      localStorage.removeItem(LOGIN_EMAIL);
      return undefined;
    }
  }

  export const getUserIdStorage = () => {
    const user = getUserStorage();
    console.log(user)
    console.log(user?.id??'')
    return user?.id??''
  }

  export const getUserEmailStorage = () => {
    const user = getUserStorage();
    console.log(user)
    console.log(user?.email??'')
    return user?.email??''
  }
