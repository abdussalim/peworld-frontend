import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Auth.module.css";
import Logo from "../../public/image/logo.png";

export default function ForgotForm({
  form,
  onInputChange,
  onSubmit,
  isLoading,
  errors,
}) {
  return (
    <div className={`${styles.auth} ${styles.login} col-sm-7 col-md-6`}>
      <div className={styles.content}>
        <div className="d-sm-none text-center mb-5">
          <div className="d-flex justify-content-center align-items-center">
            <div style={{ position: "relative", height: 40, width: 40 }}>
              <Image src={Logo} layout="fill" alt="Peworld Logo" />
            </div>
            <p className="ms-2 mt-3">Peworld</p>
          </div>
        </div>
        <h1 className="fs-4 fw-bold mb-3">Hello, Pewpeople</h1>
        <h2 className="fs-6 text-secondary mb-4">
          Masukkan email untuk mereset kata sandi anda
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              * E-mail
            </label>
            <input
              type="email"
              className="form-control form-control-sm p-3"
              id="email"
              placeholder="Masukkan alamat E-mail"
              value={form.email}
              onChange={onInputChange}
              required
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
              Submit
            </button>
          )}
        </form>
        <p className="text-center text-secondary mt-4">
          Ingat kata sandi?{" "}
          <Link href="/auth/login" className="text-orange text-decoration-none">
            Masuk di sini
          </Link>
        </p>
        <br />
      </div>
    </div>
  );
}
