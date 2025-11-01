'use client';
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export default function Footer() {

    const [nzTime, setNzTime] = useState(
        DateTime.now().setZone("Pacific/Auckland").toISO()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setNzTime(DateTime.now().setZone("Pacific/Auckland").toISO());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

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
                        <a href="https://github.com/aleckshen" target="_blank">GITHUB</a>
                        <a href="https://www.linkedin.com/in/aleckshen/" target="_blank">LINKEDIN</a>
                        <a href="https://www.instagram.com/alecksn/" target="_blank">INSTAGRAM</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <a href="mailto:aleckshn@gmail.com">EMAIL</a>
                        <a href="https://www.tiktok.com/@aleckshen" target="_blank">TIKTOK</a>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div>New Zealand Local Time</div>
                    <div>{nzTime}</div>
                </div>
            </div>

            <div className="relative flex-1 -mr-2 -mb-1">
                <div className="absolute top-0 right-0 text-[150px] font-semibold leading-[0.8] -m-1">SHEN</div>
                <div className="absolute bottom-0 right-0 text-[150px] font-semibold leading-[0.8] pr-42">ALECK</div>
            </div>

        </div>
    )
}