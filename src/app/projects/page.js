'use client';
import ProjectCard from '@/components/ProjectCard';
import useScrollIntoView from '@/hooks/useScrollIntoView';

export default function Projects() {

    const [projectsRef, projectsInView] = useScrollIntoView(0.7);
    const [projectsPhotosRef, projectsPhotosInView] = useScrollIntoView(0.15);

    return (
        <section>
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
                    Here are some of my recent projects, with
                </div>
                <div 
                    className={`pl-48 pt-2 opacity-0 ${projectsInView ? 'animate-fadeUpLine' : ''}`}
                    style={{ animationDelay: projectsInView ? '0.3s' : '0s' }}
                >   
                    more in depth details and description.
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
                    <div className="pt-5 pb-5">
                        This portfolio transforms the conventional web-page experience 
                        into an engaging command-line interface. Instead of scrolling through 
                        sections, visitors type commands, explore my projects, and navigate a dynamic, 
                        terminal-inspired UI, blending developer aesthetics with modern web 
                        architecture.
                    </div>
                </div>
                <div className="flex-1">
                    <ProjectCard
                    bgColor={"#EEEEEE"}
                    title={"Personal website"}
                    details={"—  next, react, javascript"}
                    image={"/personal-website.png"}
                    hoverImage={"/hover-personal-website.png"}
                    />
                    <div className="pt-5 pb-5">
                        This portfolio is a sleek, responsive portfolio designed to showcase projects and 
                        writing with clarity and performance, featuring a fast, polished interface and a 
                        clean, maintainable architecture that emphasizes both design quality and developer 
                        experience.
                    </div>
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
                    hoverImage={"/hover-pylib.png"}
                    />
                    <div className="pt-5 pb-5">
                        pylib is a lightweight Python CLI tool that randomly selects a library from across
                         Auckland, helping users discover new spots to visit or study. Designed with simplicity 
                         and speed in mind, it provides an easy, interactive way to explore Auckland’s libraries 
                         directly from the command line — perfect for locals, students, or anyone wanting a spontaneous 
                         reading destination.
                    </div>
                </div>
                <div className="flex-1">
                    <ProjectCard
                    bgColor={"#D6E1D7"}
                    title={"UOA/WINCS hackathon template"}
                    details={"—  react, vite"}
                    image={"/hackathon.png"}
                    hoverImage={"/hover-hackathon.png"}
                    />
                    <div className="pt-5 pb-5">
                        This is a hackathon starter template designed for students participating in the UOACS/WINCS 
                        hackathon. It provides a pre-configured project structure with essential tooling, standard 
                        folder organization, and example files, allowing participants to quickly start building their 
                        projects without spending time on setup.
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}