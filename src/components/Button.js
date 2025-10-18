export default function Button() {
  return (
    <button className="flex bg-[#BAB9B9]">
      <div className="text-white border-r border-white py-2 pr-6 pl-3">
        CLICK HERE!
      </div>
      <div className="text-white py-2 pr-3 pl-3 hover:bg-[#979797] transition-colors duration-300">
        →
      </div>
    </button>
  );
}