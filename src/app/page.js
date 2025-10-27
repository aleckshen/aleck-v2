/* eslint-disable react/no-unescaped-entities */
'use client';
import { useEffect, useState } from "react";
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import useScrollIntoView from '@/hooks/useScrollIntoView';

export default function Home() {

  const introLines = [
    "Hello, my name is Aleck!",
    "I'm a second year computer science major studying at the University Of",
    "Auckland, passionate about coding and problem solving."
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [projectsRef, projectsInView] = useScrollIntoView(0.7);
  const [projectsPhotosRef, projectsPhotosInView] = useScrollIntoView(0.15);
  const [aboutMeTitleRef, AboutMeTitleInView] = useScrollIntoView(0.45);

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

      {/*LANDING PAGE*/}
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

      {/*PROJECTS SECTION*/}
      <section className="relative z-20 h-auto bg-white">
        <div className="flex pt-22">
          <div className={`flex opacity-0 ${projectsInView ? 'animate-fadeUpLine' : ''}`}>
            <div className="pl-8 pt-20 text-5xl">
              PROJECTS
            </div>
            <div className="pt-21">[4]</div>
          </div>
          <div ref={projectsRef} className="text-5xl pt-20 pl-20 pb-8">
            <div 
              className={`opacity-0 ${projectsInView ? 'animate-fadeUpLine' : ''}`}
              style={{ animationDelay: projectsInView ? '0s' : '0s' }}
            >
              Here are some of the projects I have worked
            </div>
            <div 
              className={`pl-54 pt-2 opacity-0 ${projectsInView ? 'animate-fadeUpLine' : ''}`}
              style={{ animationDelay: projectsInView ? '0.3s' : '0s' }}
            >
              on across my years studying comp sci.
            </div>
          </div>
        </div>
        <div ref={projectsPhotosRef} >
          <div className={`ml-8 mr-8 mt-20 flex gap-8 opacity-0
            ${projectsPhotosInView ? 'animate-fadeUpLine' : ''}`}>
            <div className="flex-1">
              <ProjectCard
                bgColor={"#D2D6E0"}
                title={"Terminal based portfolio"}
                details={"—  next, react, typescript"}
                image={"/terminal-website.png"}
                hoverImage={"/hover-terminal-website.png"}
              />
            </div>
            <div className="flex-1">
              <ProjectCard
                bgColor={"#EEEEEE"}
                title={"Personal website"}
                details={"—  next, react, javascript"}
                image={"/personal-website.png"}
              />
            </div>
          </div>
          <div className={`pb-68 ml-8 mr-8 mt-18 flex gap-8 opacity-0
            ${projectsPhotosInView ? 'animate-fadeUpLine' : ''}`}>
            <div className="flex-1">
              <ProjectCard
                bgColor={"#D4D4D4"}
                title={"Pylib, cli tool"}
                details={"— python"}
                image={"/pylib.png"}
              />
            </div>
            <div className="flex-1">
              <ProjectCard
                bgColor={"#D6E1D7"}
                title={"UOA/WINCS hackathon template"}
                details={"—  react, vite"}
                image={"/hackathon.png"}
              />
            </div>
          </div>
        </div>
      </section>

      {/*ABOUT ME SECTION*/}
      <section className="relative flex flex-col bg-white pb-50 p-8">
        <div ref={aboutMeTitleRef} className="flex">
          <div className="flex flex-col text-5xl w-428 gap-3 ml-8">
            <div className={`opacity-0 pl-42 
              ${AboutMeTitleInView ? 'animate-fadeUpLine' : ''}`}
              style={{ animationDelay: AboutMeTitleInView ? '0.0s' : '0s' }}
              >Hello, my name is Aleck! I love coding
            </div>
            <div className={`opacity-0 ${AboutMeTitleInView ? 'animate-fadeUpLine' : ''}`}
              style={{ animationDelay: AboutMeTitleInView ? '0.3s' : '0s' }}
              >and problem solving, crafting simplicity
            </div>
            <div className={`opacity-0 ${AboutMeTitleInView ? 'animate-fadeUpLine' : ''}`}
              style={{ animationDelay: AboutMeTitleInView ? '0.6s' : '0s' }}
              >through elegant code.
            </div>
          </div>
          <div className="flex pr-10 pt-2">
            <div className={`opacity-0 text-5xl flex justify-end w-[25vw] 
              ${AboutMeTitleInView ? 'animate-fadeUpLine' : ''}`}
              >ABOUT ME
            </div>
            <div className={`opacity-0 
              ${AboutMeTitleInView ? 'animate-fadeUpLine' : ''}`}
              >[0]
            </div>
          </div>
        </div>
        <div className="flex pt-32 pl-9 gap-28">
          <div className="bg-[#D9D9D9] h-130 w-100"></div>
          <div className="flex flex-col">
            <div className="pb-2">MORE</div>
            <div className="text-[#4F4F4F] w-76">
              I was born in May 13, 2005. Some of my
              favourite hobbies include rock climbing,
              running and creative arts. I'm super
              passionate about coding, and often code
              in my spare time (check my github cont-
              tributions). I also have a loving fat
              cat named Mochi!
            </div>
          </div>
          <div className="flex flex-col">
            <div className="pb-2">EXPERIENCE</div>
            <div className="text-[#4F4F4F] w-76">
              I'm currently a tech/education executive
              at the Univeristy of Auckland computer
              science club. To find out more about my
              experience click the button below for 
              my attached resume!
            </div>
            <div className="pt-30 pb-2">RESUME BELOW</div>
            <div>
              <Button url="https://www.alecksterminal.com"/>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex justify-center items-center h-dvh w-dvw bg-white pb-50">
        DESIGNED AND CODED BY ALECK.
      </section>

    </div>
  );
}