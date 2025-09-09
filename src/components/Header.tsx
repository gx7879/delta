import Image from "next/image";
import Link from "next/link";
// import { Link } from "next-view-transitions";

export default function Header() {
  return (
    <header className="flex h-33 flex-col">
      <div className="h-1.5 w-full bg-linear-[90deg,#007ED7_0,#007ED7_60%,#64D7D7_0,#64D7D7_80%,#B9EB5F_0,#B9EB5F]"></div>
      <div className="flex flex-1 items-center justify-between pt-7.5 pr-16 pb-6 pl-6">
        <div className="flex items-center gap-x-2">
          <Image
            src="/images/logo.png"
            width={223}
            height={71}
            alt="logo"
            priority
          />
          <span className="text-main-blue block pt-3.5 text-xl/[100%] font-semibold">
            ESG Consulting
          </span>
        </div>
        <ul className="*:hover:text-main-blue flex h-full gap-x-8 *:cursor-pointer *:place-content-center">
          <li className="">
            <Link href="/">Home</Link>
          </li>
          <li className="group relative">
            <span>Capabilities</span>
            <ul className="text-main-black *:hover:text-main-blue absolute top-full z-99 hidden gap-y-8 rounded-md bg-white p-16 shadow-md *:whitespace-nowrap group-hover:grid">
              <li>ESG & Net Zero Strategy</li>
              <li>Supply Chain Engagement</li>
              <li>Energy Management</li>
              <li>Digital Platform Service</li>
              <li>Decarbonize Service</li>
            </ul>
          </li>
          <li className="">Success Stories</li>
          <li className="">
            <Link href="/about">About us</Link>
          </li>
          <li className="">ESG Portal</li>
        </ul>
        <div className="flex items-center gap-x-5">
          <Link href="/login" className="text-main-blue text-lg">
            Login Portal
          </Link>
          <Link
            href="/contact"
            className="bg-main-blue rounded-md px-8 py-4 text-white"
          >
            Contact US
          </Link>
        </div>
      </div>
    </header>
  );
}
