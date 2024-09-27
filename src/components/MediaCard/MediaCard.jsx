

function MediaCard({icon, margin, name, opcional, url}) {
  return (
    <a href={url} className= {` w-[7rem] sm:w-36 h-[6.8rem] sm:h-24 bg-white rounded-lg p-3 drop-shadow flex flex-col justify-between items-center items-start ${margin} hover:scale-110 duration-500`} >
        <img src={icon} className="w-8 mb-2 e"/>
        <p className="text-sm   text-zinc-600 font-medium">{name}</p>
        <span className="text-xs text-center  text-zinc-600 font-medium"> {opcional} </span>
    </a>
  )
}

export default MediaCard