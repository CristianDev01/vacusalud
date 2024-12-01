import React from "react"


// eslint-disable-next-line react/display-name
const Inputs = React.forwardRef(({...props}, ref ) => {
  return (
    
      <input ref={ref} {...props} 
        className="h-[32px] px-2 w-full text-neutral-900/75 placeholder:text-neutral-900/75 text-[11px] rounded-sm outline-none previo-sm:h-[42px] previo-sm:text-[14px] previo-sm:px-3 ring-1 ring-neutral-300 focus:ring-cyan-800 valid:ring-cyan-500 valid:focus:ring-cyan-500 disabled:bg-white " 
      />
  )
})

export default Inputs