'use client';
import { useEffect, useState } from "react";
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {

  const introLines = [
    "Hello, my name is Aleck!",
    "I'm a second year computer science major studying at the University Of",
    "Auckland, passionate about coding and problem solving."
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      setScrollY(currentScrollY);
      
      const fadeHeight = window.innerHeight * 0.65;
      const progress = Math.min(currentScrollY / fadeHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //overlay fade effect
  const overlayMax = 0.15; // max black overlay opacity
  const eased = Math.pow(scrollProgress, 0.7);
  const overlayOpacity = Math.min(eased * overlayMax, overlayMax);

  // parallax
  const parallaxTranslate = scrollY * 0.05;
  const parallaxScale = 1 + -scrollY * 0.0001;

  return (
    <div>

      <section className="flex justify-between flex-col h-screen sticky top-0">
        <div
          className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-200 ease-linear"
          style={{ opacity: overlayOpacity }}
        />
        <div className="opacity-0">
          <NavBar />
        </div>
        <div className="flex justify-end mt-[175px] mb-[175px] mr-[75px]"
        style={{
          transform: `translateY(${parallaxTranslate}px) scale(${parallaxScale})`,
          transition: 'transform 0.1s linear, opacity 0.1s linear'
        }}>
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
        <div
        style={{
          transform: `translateY(${parallaxTranslate}px) scale(${parallaxScale})`,
          transition: 'transform 0.1s linear, opacity 0.1s linear'
        }}>
          <div className="ml-[15px] text-[150px] leading-none font-semibold opacity-0 animate-slideInLeft ">ALECK</div>
          <div className="text-[150px] ml-[275px] leading-none font-semibold opacity-0 animate-slideInUp [animation-delay:0.3s]">SHEN</div>
        </div>
      </section>

      <section className="relative z-20 h-auto bg-white">
        <div className="flex pt-22">
          <div className="pl-8 pt-20 text-5xl">
            PROJECTS
          </div>
          <div className="pt-21">[4]</div>
          <div className="text-4xl pt-20 pl-28 pb-8">
            <div>Here are some of the projects I have worked on</div>
            <div className="pl-54 pt-2">across my years studying computer science.</div>
          </div>
        </div>
        <div className="ml-8 mr-8 mt-20 flex gap-8">
          <ProjectCard
            bgColor={"#D2D6E0"}
            title={"Terminal based portfolio"}
            details={"—  next, react, typescript"}
          />
          <ProjectCard
            bgColor={"#EEEEEE"}
            title={"Personal website"}
            details={"—  next, react, javascript"}
          />
        </div>
        <div className="pb-68 ml-8 mr-8 mt-18 flex gap-8">
          <ProjectCard
            bgColor={"#D4D4D4"}
            title={"Pylib, cli tool"}
            details={"— python"}
          />
          <ProjectCard
            bgColor={"#D6E1D7"}
            title={"UOA/WINCS hackathon template"}
            details={"—  react, vite"}
          />
        </div>
      </section>

    </div>
  );
}