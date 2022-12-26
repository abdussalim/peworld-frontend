import React from "react";
import styles from "../../styles/Home.module.css";
import Banner from "../../public/image/baner1.png";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Home1() {
  return (
    <div className="container my-5">
      <div
        className={`${styles.banner} row d-flex align-items-center mb-5 px-3 px-md-0`}
      >
        <div className="col-12 col-md-7 col-lg-6">
          <p className="display-5 fw-bold">
            Talenta terbaik negeri untuk perubahan revolusi 4.0
          </p>
          <p className="text-secondary">
            Ayo raih Impianmu untuk berkarir dibidang IT bersama{" "}
            <b>{process.env.NEXT_PUBLIC_APP_NAME}</b>
            !.
          </p>
          <Link href="../../auth/register">
            <div
              className="btn btn-lg text-white"
              style={{ backgroundColor: "#5E50A1" }}
            >
              Mulai Dari Sekarang
            </div>
          </Link>
        </div>
        <div className="col-md-5 col-lg-6 d-none d-md-block">
          <div className="d-flex justify-content-end">
            <div className="position-relative">
              <Image
                className={`${styles["z-index"]} position-absolute`}
                crossOrigin="anonymous"
                src={Banner}
                alt="Gambar Landing 1"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
