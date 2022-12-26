import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Banner from "../../components/Auth/Banner";
import { register } from "../../redux/actions/auth";
import { createToast } from "../../utils/createToast";
import RegisterForm from "../../components/Auth/Register";

const RegisterRecruiter = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const onInputPhoneNumber = (e) => {
    setForm({ ...form, phone: e });
    console.log(form);
    setPhone(e);
  };

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!form.name) throw "Tolong masukkan Nama Lengkap!";
      if (!form.email) throw "Tolong masukkan Email!";
      if (!form.phone) throw "Tolong masukkan Nomor HP!";
      if (!form.role) throw "Tolong masukkan Role!";
      if (!form.address) throw "Tolong masukkan Alamat!";
      if (!form.password) throw "Tolong masukkan Kata Sandi!";
      if (!form.confirmPassword) throw "Tolong masukkan Konfirmasi Kata Sandi!";
      if (form.password !== form.confirmPassword)
        throw "Kata sandi anda tidak cocok!";

      setErrors([]);
      setIsLoading(true);

      const registerStatus = await register(form, setErrors, true);
      if (registerStatus) {
        createToast("Register Success, Please Login", "success");
        router.push("/auth/login");
      }

      setIsLoading(false);
    } catch (error) {
      setErrors([{ msg: error }]);
    }
  };

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME} - Register</title>
        <meta name="description" content="Register page for Hiring App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid">
        <div className="row">
          <Banner />
          <RegisterForm
            form={form}
            onInputPhoneNumber={onInputPhoneNumber}
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

export default RegisterRecruiter;
