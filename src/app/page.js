'use client';
import { useEffect, useState } from "react";
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'


export default function Home() {

  const introLines = [
    "Hello, my name is Aleck!",
    "I'm a second year computer science major studying at the University Of",
    "Auckland, passionate about coding and problem solving."
  ];

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      const fadeHeight = window.innerHeight * 0.65; // fade a bit faster
      const progress = Math.min(scrollY / fadeHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overlayMax = 0.15; // max black overlay opacity

  const eased = Math.pow(scrollProgress, 0.7);
  const overlayOpacity = Math.min(eased * overlayMax, overlayMax);

  return (
    <div>

      <div className="flex justify-between flex-col h-screen sticky top-0">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-200 ease-linear"
          style={{ opacity: overlayOpacity }}
        />
        <div className="opacity-0">
          <NavBar />
        </div>
        <div className="flex justify-end mt-[175px] mb-[175px] mr-[75px]">
          <div className="mr-[100px]">
            {introLines.map((line, index) => (
              <div
                key={index}
                className={`opacity-0 animate-fadeUpLine ${index === 0 ? "text-[25px]" : "text-[15px]"}`}
                style={{ animationDelay: `${index * 0.3 + 1}s` }} // 0.3 represents staggers, 1 represents delay
              >
                {line}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center opacity-0 animate-fadeUpLine" style={{ animationDelay: '1.6s' }}>
            <div className="mb-[5px]">
              Terminal website?!?
            </div>
            <Button url="https://www.alecksterminal.com"/>
          </div>
        </div>
        <div>
          <div className="ml-[15px] text-[150px] leading-none font-semibold opacity-0 animate-slideInLeft ">ALECK</div>
          <div className="text-[150px] ml-[275px] leading-none font-semibold opacity-0 animate-slideInUp [animation-delay:0.3s]">SHEN</div>
        </div>
      </div>

      <div className="relative z-20 h-[1500px] bg-white">

      </div>

    </div>
  );
}