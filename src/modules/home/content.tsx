"use client";

import TitleStyle from "@/components/TitleStyle";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperRef } from "swiper";
import { Mousewheel } from "swiper/modules";
import { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeRef = useRef<HTMLDivElement>(null);

  const [banner] = useState([
    "/images/banner-01.jpg",
    "https://picsum.photos/id/29/1920/576",
    "https://picsum.photos/id/49/1920/576",
    "https://picsum.photos/id/77/1920/576",
    "https://picsum.photos/id/256/1920/576",
  ]);

  function scrollToSection() {
    const el = document.getElementById("stay-ahead");
    if (!el) return;
    // const headerEl = document.querySelector(
    //   headerSelector,
    // ) as HTMLElement | null;
    // const headerHeight = headerEl?.getBoundingClientRect().height || 0;
    const top = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }

  function handleMouseEnter(index: number) {
    setCurrentIndex(index);
  }
  const swiperRef = useRef<SwiperRef | null>(null);

  function swiperAction(action: string) {
    if (action === "prev") {
      swiperRef.current?.slidePrev();
    } else if (action === "next") {
      swiperRef.current?.slideNext();
    }
    handleMouseEnter(swiperRef.current?.realIndex ?? 0);
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
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 px-60 pt-60 text-white"
          >
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
          </motion.div>
        </div>
        <section id="stay-ahead" className="mb-60">
          <div className="flex flex-col place-items-center">
            <TitleStyle className="mb-8" />
            <h2 className="mb-2 text-[64px]/19 font-semibold">Stay Ahead.</h2>
            <span className="mb-12 text-2xl">
              Act on the ESG Trends That Matter
            </span>
            <div className="relative w-full">
              {/* className={`transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`} */}
              <div
                ref={fadeRef}
                style={{ position: "relative", width: "100%", height: "576px" }}
              >
                {banner.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute h-full w-full bg-cover bg-center ${currentIndex === index ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
                    style={{ backgroundImage: `url(${img})` }}
                  ></div>
                ))}
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
                <div className="">
                  <div className="mb-4 flex justify-end gap-x-2">
                    <button
                      onClick={() => swiperAction("prev")}
                      className="flex size-14 cursor-pointer items-center justify-center rounded-sm border border-white text-white"
                    >
                      {
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                          />
                        </svg>
                      }
                    </button>
                    <button
                      onClick={() => swiperAction("next")}
                      className="flex size-14 cursor-pointer items-center justify-center rounded-sm border border-white text-white"
                    >
                      {
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      }
                    </button>
                  </div>
                  <div className="flex w-full max-w-238 rounded-md bg-white p-6 shadow-[0_0_24px_0_#0000001a]">
                    <Swiper
                      slidesPerView={3.3}
                      spaceBetween={25}
                      loop={banner.length >= 4}
                      className="p-6 **:[.swiper-slide]:aspect-[284/398] **:[.swiper-slide]:overflow-hidden **:[.swiper-slide]:rounded-md"
                      onInit={(swiper) => {
                        swiperRef.current = swiper;
                      }}
                    >
                      {banner.map((bannerImage, index) => (
                        <SwiperSlide
                          className="group relative"
                          key={index}
                          onMouseEnter={() => handleMouseEnter(index)}
                        >
                          <div className="aspect-[4/3] w-full overflow-hidden rounded-md">
                            <Image
                              src={bannerImage}
                              width={284}
                              height={208}
                              alt={`Banner image ${index + 1}`}
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
        <section>
          <div className="flex flex-col place-items-center">
            <TitleStyle className="mb-8" />
            <h2 className="mb-2 text-[64px]/19 font-semibold">
              Build. Engage. Decarbonize.
            </h2>
            <span className="mb-12 text-2xl">
              Explore how our tailored ESG services turn strategies into
              measurable outcomes
            </span>
          </div>
          <div className="h-133">
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              modules={[Mousewheel]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="h-full bg-amber-300">Slide 1</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-amber-300">Slide 2</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-amber-300">Slide 3</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-amber-300">Slide 4</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-amber-300">Slide 5</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-amber-300">Slide 6</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-amber-300">Slide 7</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-amber-300">Slide 8</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full bg-amber-300">Slide 9</div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
    </div>
  );
}
