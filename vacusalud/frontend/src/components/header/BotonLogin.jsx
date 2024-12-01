
export function BotonLogin({ children, color, textColor, type, onClick }) {
  return (
    
    <button 
    type={type} 
    onClick={onClick} 
    className={`${color} ${textColor} flex justify-center items-center font-bold text-[13px] rounded-[30px] w-auto px-5 h-[35px] previo-sm:text-[16px] previo-sm:h-[45px]`}>
      {children}
    </button>
  
  )
}