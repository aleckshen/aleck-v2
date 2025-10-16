import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <div>

      <div className="flex flex-col h-screen">
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
      </div>
      
    </div>
  );
}
