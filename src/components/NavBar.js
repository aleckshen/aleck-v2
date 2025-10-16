export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-[15px]">
            <div>ALECKSHEN</div>
            <div className="flex gap-8">
                <div className="relative cursor-pointer hover-underline">ABOUT</div>
                <div className="relative cursor-pointer hover-underline">PROJECTS</div>
                <div className="relative cursor-pointer hover-underline">CONTACT</div>
            </div>
        </nav>
    )
}