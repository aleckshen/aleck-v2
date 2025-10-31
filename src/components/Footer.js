export default function Footer() {
    return (
        <div id="contact" className="relative bg-white h-82 p-8 flex justify-between">

            <div className="flex flex-col justify-between pr-34">
                <div className="flex">
                    <div className="text-5xl">CONTACTS</div>
                    <div>[5]</div>
                </div>
                <div>
                    © 2025 - All Rights Reserved
                </div>
            </div>

            <div className="flex flex-col justify-between">
                <div className="flex">
                    <div className="flex flex-col gap-3 pr-26">
                        <div>GITHUB</div>
                        <div>LINKEDIN</div>
                        <div>INSTAGRAM</div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>EMAIL</div>
                        <div>TIKTOK</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div>New Zealand Local Time</div>
                    <div>10:07 AM</div>
                </div>
            </div>

            <div className="relative flex-1 -mr-2 -mb-1">
                <div className="absolute top-0 right-0 text-[150px] font-semibold leading-[0.8] -m-1">SHEN</div>
                <div className="absolute bottom-0 right-0 text-[150px] font-semibold leading-[0.8] pr-42">ALECK</div>
            </div>

        </div>
    )
}