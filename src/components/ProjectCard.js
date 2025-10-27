import Image from "next/image";

export default function ProjectCard({ bgColor, title, details, image, hoverImage }) {
    return (
        <div className="flex-1">
            <div 
                className="relative bg-[#D2D6E0] w-full h-110 flex justify-center items-center overflow-hidden group cursor-pointer"
                style={{ backgroundColor: bgColor }}
            >
                {/* Default Image */}
                <div className="absolute inset-0 flex justify-center items-center transition-all duration-700 ease-in-out group-hover:opacity-0">
                    <Image 
                        src={image} 
                        alt="project-image" 
                        width={400} 
                        height={300}
                        className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                </div>
                
                {/* Hover Image */}
                {hoverImage && (
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100">
                        <Image 
                            src={hoverImage} 
                            alt="project-image-hover" 
                            width={400} 
                            height={300}
                            className="transition-transform duration-700 ease-in-out scale-100 group-hover:scale-105"
                        />
                    </div>
                )}
            </div>
            <div className="pt-2 text-xl">{title}</div>
            <div className="text-[#727272]">{details}</div>
        </div>
    );
}