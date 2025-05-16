import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-6">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col md:flex-row items-center justify-around gap-8 md:gap-0 flex-wrap">
          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col items-center mb-6 md:mb-0">
            <div className="font-bold text-[16px] mb-2">Community</div>
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-2 cursor-pointer hover:underline"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a
              href="https://github.com/Dealer-09"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-2 cursor-pointer hover:underline"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a
              href="https://discord.gg/yourinvite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-2 cursor-pointer hover:underline"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>
          {/* Social Media Section */}
          <div className="min-w-[200px] flex flex-col items-center mb-6 md:mb-0">
            <div className="font-bold text-[16px] mb-2">Social Media</div>
            <a
              href="https://www.instagram.com/archis__0909/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-2 cursor-pointer hover:underline"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://x.com/ArchismanPal2?s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-2 cursor-pointer hover:underline"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a
              href="https://in.linkedin.com/in/archisman-pal-32554632a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-2 cursor-pointer hover:underline"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-[16px] mb-2">About</div>
            <span className="flex flex-row items-center my-2 text-[15px] ml-[6px]">
              Become Sponsor
            </span>
            <span className="flex flex-row items-center my-2 text-[15px] ml-[6px]">
              Learning about me
            </span>
            <a
              href="mailto:archismankuma@gmail.com"
              className="flex flex-row items-center my-2 text-[15px] ml-[6px] hover:underline"
            >
              archismankuma@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-8 text-[15px] text-center">
          &copy; Archisman Pal (2025) Alpha4 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;