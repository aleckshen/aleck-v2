import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <div className="overflow-hidden">

      <div className="flex justify-between flex-col h-screen">
        <NavBar />
        <div className="flex justify-end mt-[175px] mb-[175px] mr-[50px]">
          <div className="mr-[250px]">
            Hello, I'm Aleck! <br />
            I'm a second year computer science major studying <br />
            at the University Of Auckland
          </div>
          <div>
            *CONNECT WITH ME
          </div>
        </div>
        <div>
          <div className="ml-[15px] text-[150px] leading-none font-medium">ALECK</div>
          <div className="text-[150px] ml-[275px] leading-none font-medium">SHEN</div>
        </div>
      </div>
      
    </div>
  );
}
