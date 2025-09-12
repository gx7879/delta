"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel, Parallax } from "swiper/modules";
// import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// 引入 Swiper 的樣式
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

// 定義幻燈片內容類型
interface SlideContent {
  id: number;
  title: string;
  description: string;
  image: string;
}

// 幻燈片資料
const slideContents: SlideContent[] = [
  {
    id: 1,
    title: "Supply Chain Management",
    description: `In today’s increasingly complex global business environment, companies are not only facing challenges in cost and efficiency, but are also under growing pressure to address multiple expectations related to Environmental, Social, and Governance (ESG) factors. Delta’s Ruiguang Building 2 targets LEED Platinum, WELL Platinum, EEWH Diamond, and Intelligent Building Diamond certifications. Leveraging existing smart facility and global energy management systems, it integrates advanced features, setting a new technological benchmark for Delta’s smart green buildings.`,
    image: "https://picsum.photos/id/200/948/533",
  },
  {
    id: 2,
    title: "永續發展",
    description: "致力於環境保護與永續經營，為地球盡一份心力",
    image: "https://picsum.photos/id/29/948/533",
  },
  {
    id: 3,
    title: "智慧生活",
    description: "打造智慧化生活體驗，提升生活品質",
    image: "https://picsum.photos/id/400/948/533",
  },
];

const SwiperParallax = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-full w-full overflow-hidden">
      <Swiper
        direction="vertical"
        speed={500}
        parallax={true}
        effect="fade"
        mousewheel={{ releaseOnEdges: true }}
        modules={[Parallax, EffectFade, Mousewheel]}
        className="h-full w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slideContents.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <div
              className="absolute inset-0 ml-auto grid max-w-420 grid-cols-[1fr_948px] overflow-hidden"
              data-swiper-parallax="-300"
            >
              <div className="flex flex-col items-start justify-center pr-36.5 text-start">
                <h5 className="mb-6 text-4xl font-semibold">{slide.title}</h5>
                <span className="mb-8 block leading-7">
                  {slide.description}
                </span>
                <Link
                  href="/"
                  className="text-main-blue flex items-center gap-x-4 font-semibold"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    fill="none"
                  >
                    <path
                      stroke="#0087DC"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m10 16.5 4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
              <div className="overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={948}
                  height={533}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* <div className="relative z-10 flex h-full w-full items-center justify-center px-8 text-white">
              <div className="max-w-4xl space-y-8">
                <motion.h2
                  key={`title-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 50,
                  }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl font-bold"
                  data-swiper-parallax="-100"
                >
                  {slide.title}
                </motion.h2>

                <motion.div
                  key={`line-${index}`}
                  initial={{ width: 0 }}
                  animate={{ width: activeIndex === index ? "100px" : 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className={`h-1 ${slide.color}`}
                  data-swiper-parallax="-200"
                />

                <motion.p
                  key={`desc-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 50,
                  }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="max-w-2xl text-lg"
                  data-swiper-parallax="-300"
                >
                  {slide.description}
                </motion.p>

                <motion.button
                  key={`button-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 50,
                  }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className={`rounded-md px-6 py-3 font-semibold text-white transition-colors ${slide.color} hover:opacity-90`}
                  data-swiper-parallax="-400"
                >
                  了解更多
                </motion.button>
              </div>
            </div> */}

            {/* <div
              className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
              data-swiper-parallax-opacity="0.5"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="flex cursor-pointer flex-col items-center gap-2"
              >
                <span className="text-sm font-light text-white">向下滑動</span>
                <Image
                  src="/images/svg/arrow-down.svg"
                  alt="Arrow Down"
                  width={24}
                  height={24}
                  className="text-white"
                />
              </motion.div>
            </div> */}

            {/* 頁碼指示器 */}
            <div className="absolute top-1/2 left-38 z-20 -translate-y-1/2">
              <div className="flex flex-col items-center space-y-6">
                {slideContents.map((_, i) => (
                  <div
                    key={i}
                    className={`size-3 rounded-full transition-all duration-300 ${
                      i === activeIndex ? `size-6 bg-[#B9EB5F]` : "bg-main-blue"
                    }`}
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperParallax;
