import Image from "next/image";

export default function ProjectCard({ bgColor, title, details, image}) {
    return (
        <div className="flex-1">
            <div className="bg-[#D2D6E0] w-full h-110 flex justify-center items-center"
            style={{ backgroundColor: bgColor}}>
                <Image src={image} alt="project-image" width={400} height={300}/>
            </div>
            <div className="pt-2 text-xl">{title}</div>
            <div className="text-[#727272]">{details}</div>
        </div>
    )
}