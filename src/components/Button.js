export default function Button({url}) {
  return (
    <button className="flex bg-[#BAB9B9]">
      <div className="text-white border-r border-white py-2 pr-6 pl-3">
        CLICK HERE!
      </div>
      <div className="text-white py-2 pr-3 pl-3 hover:bg-[#979797] transition-colors duration-300">
        <a href={url} target="_blank">→</a>
      </div>
    </button>
  );
}