
export function HoverAnimation({ children }) {
  return (
    
    <p className={`relative inline-block before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-neutral-100 before:transition-all before:duration-200 hover:before:w-full hover:before:left-0`}>
      {children}
    </p>
  )
}