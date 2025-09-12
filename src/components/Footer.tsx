import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-main-gray pt-41 pb-32">
      <div className="mx-auto max-w-360">
        <div className="flex justify-between">
          <Image
            src="/images/footer-logo.png"
            width={269}
            height={83.5}
            className="h-auto max-h-[83.5px] w-auto"
            alt="footer-logo"
          />
          <div className="flex max-w-238 gap-x-[117px] text-white">
            <div>
              <div className="mb-8 text-4xl font-semibold">
                How can we assist you?
              </div>
              <span className="">
                We value the opportunity to connect with you. Please submit your
                inquiries and feedback, and our experienced professionals are
                ready to assist you.
              </span>
            </div>
            <div className="grid gap-y-4">
              <button className="flex w-[259px] justify-between rounded-md border px-6 py-5 font-semibold">
                English
                <Image
                  src="/images/svg/locale.svg"
                  width={25}
                  height={24}
                  alt="locale-icon"
                />
              </button>
              <button className="text-main-gray flex w-[259px] justify-between rounded-md bg-white px-6 py-5 font-semibold">
                Contact Us
                <Image
                  src="/images/svg/mail.svg"
                  width={25}
                  height={24}
                  alt="mail-icon"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="border-light-gray mt-[85px] flex justify-end border-t pt-3.5">
          <div className="flex w-full max-w-238 items-center justify-between">
            <ul className="*:border-right text-light-gray *:border-light-gray flex py-3.5 *:px-4 *:not-last:border-r">
              <li>Back to Delta</li>
              <li>Legal & Privacy</li>
              <li>Data-Collection</li>
              <li>Terms-of-use</li>
            </ul>
            <div className="text-light-gray">
              © 2025 Delta Electronics , Inc.
              <br /> All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
