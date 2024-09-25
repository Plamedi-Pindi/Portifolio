
function Logo() {
  return (
    <div className="flex">
      <h1 className="text-black text-base md:text-xl font-bold  ">Plamedi</h1>
      <span className="relative flex h-3 w-3 ml-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    </div>
  );
}

export default Logo;
