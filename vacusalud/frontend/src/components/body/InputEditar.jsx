import React from "react"

// eslint-disable-next-line react/display-name
const InputEditar = React.forwardRef(({texto, ...props},  ref ) => {

  return(

    <label className="font-semibold flex flex-col gap-2">
      {texto}

      <input ref={ref} {...props}
      className="w-full h-6 px-2 font-normal rounded-sm outline-none ring-1 ring-neutral-300 focus:ring-cyan-800
      previo-sm:h-8"/>
    </label>
  
  )
})

export default InputEditar