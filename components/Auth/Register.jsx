import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import "react-phone-number-input/style.css";
import Logo from "../../public/image/logo.png";
import PhoneInput from "react-phone-number-input";
import styles from "../../styles/Auth.module.css";
import AuthFormPassword from "../AuthFormPassword";

export default function RegisterForm({
  form,
  onInputPhoneNumber,
  onInputChange,
  onSubmit,
  isLoading,
  errors,
}) {
  return (
    <div className={`${styles.auth} ${styles.register} col-sm-7 col-md-6`}>
      <div className={styles.content}>
        <div className="d-sm-none text-center mb-5">
          <Link href="/" legacyBehavior>
            <div className="d-flex justify-content-center align-items-center">
              <div style={{ position: "relative", height: 40, width: 40 }}>
                <Image src={Logo} alt="Hiring App Logo" fill sizes="100vw" />
              </div>
              <p className="ms-2 mt-3">{process.env.NEXT_PUBLIC_APP_NAME}</p>
            </div>
          </Link>
        </div>
        <h1 className="fs-4 fw-bold mb-3">Hello, Pewpeople</h1>
        <h2 className="fs-6 text-secondary mb-4">
          Mulai daftar akun baru anda untuk segera mencari{" "}
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              * Nama
            </label>
            <input
              type="text"
              className="form-control form-control-sm p-3"
              id="name"
              placeholder="Nama Lengkap"
              value={form.name}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              * E-mail
            </label>
            <input
              type="email"
              className="form-control form-control-sm p-3"
              id="email"
              placeholder="Alamat E-mail"
              value={form.email}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              * No. Handphone
            </label>
            <PhoneInput
              className="form-control form-control-sm p-3"
              id="phone"
              type="text"
              placeholder="No. Handphone"
              country="US"
              value={form.phone}
              onChange={onInputPhoneNumber}
              // onChange={(e) => console.log(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              * Alamat
            </label>
            <input
              type="text"
              className="form-control form-control-sm p-3"
              id="address"
              placeholder="Alamat Tempat Tinggal"
              value={form.address}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              * Role
            </label>
            <select
              class="form-select form-select-sm p-3"
              aria-label="Default select example"
              id="role"
              value={form.role}
              onChange={onInputChange}
            >
              <option selected>Pilih Role</option>
              <option value="recruiter">Recruiter</option>
              <option value="worker">Worker</option>
            </select>
          </div>
          <div className="mb-3">
            <AuthFormPassword
              password={form.password}
              setPassword={onInputChange}
              id="password"
              placeholder="Kata sandi"
            />
          </div>
          <div className="mb-3">
            <AuthFormPassword
              password={form.confirmPassword}
              setPassword={onInputChange}
              id="confirmPassword"
              placeholder="Konfirmasi kata sandi"
            />
          </div>
          {errors.length > 0 && (
            <div className="alert alert-danger mx-0 py-2">
              <ul className="m-0">
                {errors.map((error, index) => (
                  <li key={index}>{error.msg}</li>
                ))}
              </ul>
            </div>
          )}
          {isLoading ? (
            <button
              className="btn w-100 text-light mb-2"
              type="submit"
              style={{ backgroundColor: "#FBB017" }}
              disabled
            >
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="btn w-100 text-light mb-2"
              style={{ backgroundColor: "#FBB017" }}
            >
              Register
            </button>
          )}
        </form>
        <p className="text-center text-secondary mt-4">
          Anda sudah punya akun?{" "}
          <Link href="/auth/login" className="text-orange text-decoration-none">
            Sign In
          </Link>
        </p>
        <br />
      </div>
    </div>
  );
}
