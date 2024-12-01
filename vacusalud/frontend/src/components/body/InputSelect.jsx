import React from "react"

// eslint-disable-next-line react/display-name
const InputSelect = React.forwardRef(( {children, ...props} , ref) => {
  return (

    <select ref={ref} {...props} 
      className="h-[32px] w-full px-1 ring-1 ring-neutral-300 text-neutral-900/75 text-[11px] rounded-sm outline-none focus:ring-cyan-800 valid:ring-cyan-500 valid:focus:ring-cyan-500 previo-sm:h-[42px] previo-sm:px-2 previo-sm:text-[14px]" >

      {children}

    </select>

  )
})

export default InputSelect