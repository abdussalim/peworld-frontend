import React from "react";
import Slider from "react-slick";
import Image from "next/legacy/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Home.module.css";
import { NEXT_PUBLIC_APP_NAME } from "../../utils/env";

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#5E50A1",
        borderRadius: "100%",
        width: "35px",
        height: "35px",
        zIndex: "999",
      }}
      onClick={onClick}
    />
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#5E50A1",
        borderRadius: "100%",
        width: "35px",
        height: "35px",
        zIndex: "999",
      }}
      onClick={onClick}
    />
  );
}

export default function Carousel({ worker }) {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    swipeToSlide: true,
    infinite: true,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimony = [
    "Peworld telah membantu bertemu dengan karir yang saya impikan!",
    "Ayo gabung dengan Peworld, saya jamin anda tidak akan menyesal!",
    "Dengan Peworld saya merasa sangat terbantu menemukan pekerjaan impian saya!",
    "Kalau saja saya tidak menemukan Peworld, saya tidak akan mengira bagaimana masa depan saya!",
    "Peworld mempunyai tim yang sangat kompeten dalam membantu saya menemukan penkerjaan yang saya inginkan!",
  ];

  return (
    <div className={`container-fluid ${styles["slider-container"]}`}>
      <h1 className="fw-bold text-center mb-5">
        Their opinion about {NEXT_PUBLIC_APP_NAME}
      </h1>
      <Slider {...settings}>
        {worker.slice(0, 5).map((worker, index) => (
          <div className="h-100" key={worker.id}>
            <div
              className="shadow p-4 mb-5 bg-body rounded mx-2"
              style={{ height: "350px" }}
            >
              <div
                style={{
                  position: "relative",
                  height: 120,
                  width: 120,
                }}
                className="mx-auto"
              >
                {worker.photo ? (
                  <Image
                    src={`https://drive.google.com/thumbnail?id=${worker.photo}&sz=s1080`}
                    className="rounded-circle"
                    alt="Gambar Profile"
                    unoptimized={true}
                    layout="fill"
                    sizes="100vw"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                ) : (
                  <Image
                    src={`https://ui-avatars.com/api/${worker.name}?`}
                    className="rounded-circle"
                    alt="Gambar Profile"
                    layout="fill"
                    sizes="100vw"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                )}
              </div>
              <p className="text-center mt-2 fw-bold my-0">{worker.name}</p>
              <p className="text-center text-secondary">
                <small>{worker.job_desc}</small>
              </p>
              <p className="text-center text-secondary">{testimony[index]}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
