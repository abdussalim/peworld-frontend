import React from "react";
import Image from "next/legacy/image";
import styles from "../../styles/Home.module.css";
import Banner2 from "../../public/image/baner2.png";
import { NEXT_PUBLIC_APP_NAME } from "../../utils/env";

export default function Home2() {
  return (
    <div className="container-lg">
      <div className={`${styles.why} row mb-5`}>
        <div className="col-12 col-md-6 d-none d-md-block">
          <div className="position-relative d-flex align-items-center justify-content-center h-100">
            <Image
              className={`${styles["z-index"]} position-absolute`}
              src={Banner2}
              alt="Gambar Landing 2"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className={`${styles.side} col-12 col-md-6`}>
          <h1 className="fw-bold">
            Kenapa harus mencari talent di {NEXT_PUBLIC_APP_NAME} ?
          </h1>
          <ul className="list-unstyled mt-3 text-start">
            <li className="mb-3">
              <div className="d-flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                    fill="#5E50A1"
                  />
                  <g opacity="0.2">
                    <path
                      opacity="0.2"
                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                    fill="white"
                  />
                </svg>
                <p className="ms-2">
                  <span>
                    Talent peworld <strong>berstandar global</strong>.
                  </span>
                </p>
              </div>
            </li>
            <li className="mb-3">
              <div className="d-flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                    fill="#5E50A1"
                  />
                  <g opacity="0.2">
                    <path
                      opacity="0.2"
                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                    fill="white"
                  />
                </svg>
                <p className="ms-2">
                  <span>
                    Talent peworld <strong>berstandar global</strong>.
                  </span>
                </p>
              </div>
            </li>
            <li className="mb-3">
              <div className="d-flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                    fill="#5E50A1"
                  />
                  <g opacity="0.2">
                    <path
                      opacity="0.2"
                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                    fill="white"
                  />
                </svg>
                <p className="ms-2">
                  <span>
                    Talent peworld <strong>berstandar global</strong>.
                  </span>
                </p>
              </div>
            </li>
            <li className="mb-3">
              <div className="d-flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                    fill="#5E50A1"
                  />
                  <g opacity="0.2">
                    <path
                      opacity="0.2"
                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                    fill="white"
                  />
                </svg>
                <p className="ms-2">
                  <span>
                    Talent peworld <strong>berstandar global</strong>.
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
