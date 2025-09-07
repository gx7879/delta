"use client";

import TitleStyle from "@/components/TitleStyle";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Content() {
  const [mainImage, setMainImage] = useState("/images/banner-01.jpg");
  const [fade, setFade] = useState(true);
  const fadeRef = useRef<HTMLDivElement>(null);

  const [banner, setBanner] = useState([
    "/images/banner-01.jpg",
    "/images/banner-02.jpg",
    "/images/banner-03.jpg",
  ]);

  function scrollToSection(headerSelector = "header") {
    const el = document.getElementById("stay-ahead");
    if (!el) return;
    const headerEl = document.querySelector(
      headerSelector,
    ) as HTMLElement | null;
    const headerHeight = headerEl?.getBoundingClientRect().height || 0;
    const top =
      el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }

  function handleMouseEnter(image: string) {
    if (mainImage !== image) {
      setFade(false);
      setTimeout(() => {
        setMainImage(image);
        setFade(true);
      }, 300);
    }
  }

  return (
    <div className="font-sans">
      <main className="">
        <div className="relative mb-25 aspect-[1920/1279] overflow-hidden">
          <video
            className="absolute z-0 h-full w-full scale-180 object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/banner-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 z-10 h-full w-full bg-(image:--bg-image-gradient)"></div>
          <div className="relative z-20 px-60 pt-60 text-white">
            <div className="mb-12 text-[64px]/19 font-semibold">
              Ｗe are
              <br /> Delta ESG Consulting
              <br /> Turn ESG ambition into measurable
              <br /> impact.
            </div>
            <p className="mb-[70px] text-[28px]/11 italic">
              We help organizations translate ESG goals into actionable
              strategies—driven by data, <br />
              guided by expertise, and built for real-world results.
            </p>
            <Link
              href="/contact"
              className="bg-main-blue rounded-md px-12 py-4 text-2xl"
            >
              Contact Us
            </Link>
            <div className="flex place-content-center">
              <Image
                className="mt-7 cursor-pointer"
                src="/images/svg/arrow-down.svg"
                width={38}
                height={38}
                alt="arrow-down"
                onClick={() => scrollToSection()}
              />
            </div>
          </div>
        </div>
        <section id="stay-ahead" className="mb-60">
          <div className="flex flex-col place-items-center">
            <TitleStyle className="mb-8" />
            <h2 className="mb-2 text-[64px]/19 font-semibold">Stay Ahead.</h2>
            <span className="mb-12 text-2xl">
              Act on the ESG Trends That Matter
            </span>
            <div className="relative w-full">
              <div
                ref={fadeRef}
                className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
                style={{ position: "relative", width: "100%", height: "576px" }}
              >
                <Image
                  src={mainImage}
                  width={1920}
                  height={576}
                  alt="banner"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute right-0 bottom-0 left-0 z-10 mx-auto -mb-13 flex w-full max-w-360 gap-x-[122px]">
                <article className="flex-1 text-white">
                  <h3 className="text-[40px] font-semibold">
                    Industry Alliances (TCA)
                  </h3>
                  <p className="text-2xl">
                    In partnership with TCA, we drive cross-sector ESG
                    innovation and build momentum for sustainable
                    transformation.
                  </p>
                </article>
                <div className="flex w-full max-w-238 flex-col rounded-md bg-white p-6 shadow-[0_0_24px_0_#0000001a]">
                  <div></div>
                  <div className="w-full">
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={25}
                      className="p-6 **:[.swiper-slide]:aspect-[284/398] **:[.swiper-slide]:overflow-hidden **:[.swiper-slide]:rounded-md"
                    >
                      {banner.map((bannerImage, index) => (
                        <SwiperSlide
                          className="group relative"
                          key={index}
                          onMouseEnter={() => handleMouseEnter(bannerImage)}
                        >
                          <div className="aspect-[4/3] w-full overflow-hidden rounded-md">
                            <Image
                              src={bannerImage}
                              width={284}
                              height={208}
                              alt="banner"
                            />
                          </div>
                          <div
                            className="absolute top-0 left-0 hidden h-full w-full bg-cover bg-center bg-no-repeat bg-blend-multiply group-hover:block group-hover:bg-[#0041C199]"
                            style={{ backgroundImage: `url(${bannerImage})` }}
                          >
                            <h3 className="text-2xl font-semibold text-white">
                              Industry Alliances (TCA)
                            </h3>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
