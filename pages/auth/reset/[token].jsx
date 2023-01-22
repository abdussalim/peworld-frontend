import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../../../components/Header";
import { reset } from "../../../redux/actions/auth";
import { createToast } from "../../../utils/createToast";
import SideAuth from "../../../components/Auth/SideAuth";
import ResetForm from "../../../components/Auth/ResetForm";
import { NEXT_PUBLIC_APP_NAME } from "../../../utils/env";

const Reset = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    password: "",
    passwordConfirm: "",
  });

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.password || !form.passwordConfirm) {
      setErrors([{ msg: "All field required (*) must be filled" }]);
    } else if (form.password !== form.passwordConfirm) {
      setErrors([{ msg: "Password & Password Confirm not same" }]);
    } else {
      setErrors([]);
      setIsLoading(true);

      const resetStatus = await reset(router.query.token, form, setErrors);
      if (resetStatus) {
        createToast("Reset Password Success", "success");
        router.push("/auth/login");
      }

      setIsLoading(false);
    }
  };

  return (
    <>
      <Header
        title="Reset Password"
        content={`Reset Password page for ${NEXT_PUBLIC_APP_NAME}`}
      />

      <div className="container-fluid">
        <div className="row">
          <SideAuth />
          <ResetForm
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

export default Reset;
