"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Automatically close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const handleToggleAudio = () => {
    if (audioRef.current) {
      if (!audioStarted) {
        audioRef.current.play();
        setAudioStarted(true);
        setAudioMuted(false);
      } else {
        if (audioMuted) {
          audioRef.current.muted = false;
          setAudioMuted(false);
        } else {
          audioRef.current.muted = true;
          setAudioMuted(true);
        }
      }
    }
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10">
      {/* Audio element */}
      <audio ref={audioRef} loop hidden>
        <source src="/PortfolioMusic.aac" type="audio/aac" />
        <source src="/PortfolioMusic.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[6px] sm:px-[10px]">
        {/* Logo */}
        <a
          href="https://alpha-coders.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Alpha4
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* Desktop Socials + Speaker Icon */}
        <div className="hidden md:flex flex-row gap-5 items-center">
          {Socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </a>
          ))}
          <button
            onClick={handleToggleAudio}
            className="p-2 rounded-lg transition flex items-center"
            aria-label={audioMuted || !audioStarted ? "Play Music" : "Mute Music"}
          >
            {!audioStarted || audioMuted ? (
              <SpeakerXMarkIcon className="h-6 w-6 text-gray-300" />
            ) : (
              <SpeakerWaveIcon className="h-6 w-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" fill="none" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h20M4 16h20" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#030014]/60 backdrop-blur-xl rounded-b-xl px-4 py-4 flex flex-col gap-4 z-50 shadow-2xl border-t border-white/10">
          <div className="flex flex-col gap-2 text-gray-200 items-center text-center">
            <a href="#about-me" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              About me
            </a>
            <a href="#skills" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </div>
          <div className="flex flex-row gap-5 mt-3 justify-center items-center">
            {Socials.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={28}
                  height={28}
                  className="cursor-pointer"
                />
              </a>
            ))}
            <button
              onClick={handleToggleAudio}
              className="p-2 rounded-lg transition flex items-center"
              aria-label={audioMuted || !audioStarted ? "Play Music" : "Mute Music"}
            >
              {!audioStarted || audioMuted ? (
                <SpeakerXMarkIcon className="h-6 w-6 text-gray-300" />
              ) : (
                <SpeakerWaveIcon className="h-6 w-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;