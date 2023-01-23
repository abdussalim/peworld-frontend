import Link from "next/link";
import Swal from "sweetalert2";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logo from "../public/image/logo.png";
import styles from "../styles/Navbar.module.css";
import { NEXT_PUBLIC_APP_NAME } from "../utils/env";

export default function Navbar({ token = null, id = null }) {
  const router = useRouter();

  const [Navigation, setNavigation] = useState(
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item mx-1 my-1">
        <Link href="/auth/login" passHref legacyBehavior>
          <a className={`${styles.login} nav-link`}>Sign In</a>
        </Link>
      </li>
      <li className="nav-item mx-1 my-1">
        <Link href="/auth/register" passHref legacyBehavior>
          <a className={`${styles.register} nav-link`}>Sign Up</a>
        </Link>
      </li>
    </ul>
  );

  useEffect(() => {
    const logout = () => {
      Swal.fire({
        title: "Apakah anda yakin?",
        text: "Anda akan keluar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Keluar!",
      }).then((result) => {
        if (result.isConfirmed) {
          document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie =
            "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie =
            "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          router.push("/auth/login");
        }
        return 0;
      });
    };

    if (token) {
      setNavigation(
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item mx-1 my-1">
            <Link href={`/list/worker`} passHref legacyBehavior>
              <a className={`nav-link`}>List Pekerja</a>
            </Link>
          </li>
          <li className="nav-item mx-1 my-1">
            <Link href={`/list/recruiter`} passHref legacyBehavior>
              <a className={`nav-link`}>List Perekrut</a>
            </Link>
          </li>
          <li className="nav-item mx-1 my-1">
            <Link href={`/profile/${id}`} passHref legacyBehavior>
              <a className={`nav-link`}>Profile Saya</a>
            </Link>
          </li>
          <li className="nav-item mx-1 my-1">
            <button
              className="btn text-white w-100"
              style={{ backgroundColor: "#5E50A1" }}
              onClick={logout}
            >
              Keluar
            </button>
          </li>
        </ul>
      );
    }
  }, [router, id, token]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-3">
      <div className="container">
        <Link href="/" passHref legacyBehavior>
          <a className="navbar-brand" style={{ color: "#5E50A1" }}>
            <div className="d-flex align-items-center">
              <div style={{ position: "relative", height: 35, width: 35 }}>
                <Image
                  src={Logo}
                  alt="Hiring App Logo"
                  fill
                  sizes="100vw"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <span className="ms-2">{NEXT_PUBLIC_APP_NAME}</span>
            </div>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {Navigation}
        </div>
      </div>
    </nav>
  );
}
