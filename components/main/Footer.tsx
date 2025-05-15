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
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    
                    <div className="font-bold text-[16px]">Community</div>
                    <a
                      href="https://youtube.com/yourchannel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
                    >
                      <FaYoutube />
                      <span className="text-[15px] ml-[6px]">Youtube</span>
                    </a>
                    <a
                      href="https://github.com/Dealer-09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
                    >
                      <RxGithubLogo />
                      <span className="text-[15px] ml-[6px]">Github</span>
                    </a>
                    <a
                      href="https://discord.gg/yourinvite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
                    >
                      <RxDiscordLogo />
                      <span className="text-[15px] ml-[6px]">Discord</span>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a
                      href="https://instagram.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
                    >
                      <RxInstagramLogo />
                      <span className="text-[15px] ml-[6px]">Instagram</span>
                    </a>
                    <a
                      href="https://twitter.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
                    >
                      <RxTwitterLogo />
                      <span className="text-[15px] ml-[6px]">Twitter</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
                    >
                      <RxLinkedinLogo />
                      <span className="text-[15px] ml-[6px]">Linkedin</span>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <a href="mailto:archismankuma@gmail.com" className="text-[15px] ml-[6px] hover:underline">
                          archismankuma@gmail.com
                        </a>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Archisman Pal (2025) Alpha4 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer