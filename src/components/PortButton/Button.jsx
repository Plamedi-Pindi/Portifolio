

function Button({display, children, width, color, background, border, font, margin, hover, onclick, shadow}) {
  return (
    <button 
      className={`block text-sm select-none pt-1.5 pb-1.5 rounded-full ${hover} ${margin} ${shadow} ${font} ${border} ${display} ${width} ${color} ${background}`} 
      onClick={onclick}
    > {children} </button>
  )
}

export default Button