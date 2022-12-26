import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

export default function Home4() {
  return (
    <div className={`container ${styles["invitation-container"]}`}>
      <div className={styles.invitation}>
        <div className="d-block d-md-flex justify-content-between">
          <h3 style={{ maxWidth: "300px" }}>
            Jika tidak meniti karir dari sekarang, kapan lagi ?
          </h3>
          <br />
          <div className="d-flex align-items-center">
            <Link href="../../auth/register">
              <button
                className="btn bg-light py-3"
                style={{ color: "#5E50A1" }}
              >
                Mulai Dari Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
