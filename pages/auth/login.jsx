import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../../components/Header";
import { login } from "../../redux/actions/auth";
import Banner from "../../components/Auth/Banner";
import LoginForm from "../../components/Auth/Login";
import { createToast } from "../../utils/createToast";
import { NEXT_PUBLIC_APP_NAME } from "../../utils/env";

const Login = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setErrors([{ msg: "All field required (*) must be filled" }]);
    } else {
      setErrors([]);
      setIsLoading(true);

      const loginStatus = await login(form, setErrors);
      if (loginStatus) {
        createToast("Login Success", "success");
        router.push("/");
      }

      setIsLoading(false);
    }
  };

  return (
    <>
      <Header
        title="Login"
        content={`Login page for ${NEXT_PUBLIC_APP_NAME}`}
      />

      <div className="container-fluid">
        <div className="row">
          <Banner />
          <LoginForm
            form={form}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            isLoading={isLoading}
            errors={errors}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
