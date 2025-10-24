export default function ProjectCard({ bgColor, title, details }) {
    return (
        <div className="flex-1">
            <div className="bg-[#D2D6E0] w-full h-110"
            style={{ backgroundColor: bgColor}}>
            </div>
            <div className="pt-2 text-xl">{title}</div>
            <div className="text-[#727272]">{details}</div>
        </div>
    )
}