import axios from "axios";
import { setCookie } from "cookies-next";
import { NEXT_PUBLIC_API_URL } from "../../utils/env";

export const login = async (data, setErrors) => {
  try {
    const res = await axios.post(`${NEXT_PUBLIC_API_URL}/auth/login`, data);
    setCookie("token", `${res.data.token.jwt}`);
    setCookie("id", `${res.data.token.id}`);
    setCookie("role", `${res.data.token.role}`);

    return true;
  } catch (error) {
    if (error.response) {
      if (Array.isArray(error.response.data.error)) {
        setErrors(error.response.data.error);
      } else {
        setErrors([{ msg: error.response.data.error }]);
      }
    } else {
      setErrors([{ msg: error.message }]);
    }

    return false;
  }
};

export const register = async (data, setErrors) => {
  try {
    await axios.post(`${NEXT_PUBLIC_API_URL}/auth/register`, data);

    return true;
  } catch (error) {
    if (error.response) {
      if (Array.isArray(error.response.data.error)) {
        setErrors(error.response.data.error);
      } else {
        setErrors([{ msg: error.response.data.error }]);
      }
    } else {
      setErrors([{ msg: error.message }]);
    }

    return false;
  }
};

export const forgot = async (data, setErrors) => {
  try {
    await axios.post(`${NEXT_PUBLIC_API_URL}/auth/forgot`, data);

    return true;
  } catch (error) {
    if (error.response) {
      if (Array.isArray(error.response.data.error)) {
        setErrors(error.response.data.error);
      } else {
        setErrors([{ msg: error.response.data.error }]);
      }
    } else {
      setErrors([{ msg: error.message }]);
    }

    return false;
  }
};

export const reset = async (token, data, setErrors) => {
  try {
    await axios.post(`${NEXT_PUBLIC_API_URL}/auth/reset/${token}`, data);

    return true;
  } catch (error) {
    if (error.response) {
      if (Array.isArray(error.response.data.error)) {
        setErrors(error.response.data.error);
      } else {
        setErrors([{ msg: error.response.data.error }]);
      }
    } else {
      setErrors([{ msg: error.message }]);
    }

    console.log(error.response);

    return false;
  }
};
