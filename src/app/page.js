import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <div className="overflow-hidden">

      <div className="flex justify-between flex-col h-screen">
        <NavBar />
        <div className="flex justify-end mt-[175px] mb-[175px] mr-[75px]">
          <div className="mr-[125px]">
            <span className="text-[25px]">Hello, my name is Aleck!</span> <br />
            I'm a second year computer science major studying at the University Of<br />
            Auckland, passionate about coding and problem solving.
          </div>
          <div>
            *CONNECT WITH ME
          </div>
        </div>
        <div>
          <div className="ml-[15px] text-[150px] leading-none font-semibold">ALECK</div>
          <div className="text-[150px] ml-[275px] leading-none font-semibold">SHEN</div>
        </div>
      </div>
      
    </div>
  );
}
