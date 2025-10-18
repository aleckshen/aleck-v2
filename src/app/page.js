import NavBar from '@/components/NavBar'
import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="overflow-hidden">

      <div className="flex justify-between flex-col h-screen">
        <NavBar />
        <div className="flex justify-end mt-[175px] mb-[175px] mr-[75px]">
          <div className="mr-[100px]">
            <span className="text-[25px]">Hello, my name is Aleck!</span> <br />
            I'm a second year computer science major studying at the University Of<br />
            Auckland, passionate about coding and problem solving.
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-[5px]">
              Terminal website?!?
            </div>
            <Button url="https://www.alecksterminal.com"/>
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
