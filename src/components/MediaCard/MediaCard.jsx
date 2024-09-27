

function MediaCard({icon, margin, name, opcional, url, width, target}) {
  return (
    <a href={url} target={target} className= {` w-[7rem] sm:w-36 h-[6.8rem] sm:h-24 bg-white rounded-lg p-3 drop-shadow flex flex-col justify-between items-center items-start ${margin} hover:scale-110 duration-500`} >
        <img src={icon} className={`  mb-2 ${width} `}/>
        <p className="text-sm   text-zinc-600 font-medium">{name}</p>
        <span className="text-xs text-center  text-zinc-600 font-medium"> {opcional} </span>
    </a>
  )
}

export default MediaCard