import { Link } from "react-router-dom"

export function Footer() {
  return (

    <div className="relative h-[60px] w-full flex flex-col justify-center items-center  border-t border-neutral-300 previo-sm:h-[80px] md:top-[65px]" >

      <Link to={"/"}>
        <img src="/logo.svg" alt="VacuSalud" className="h-[30px] previo-sm:h-[48px] select-none " />
      </Link>

      <strong className="text-[8px] text-neutral-900/70 tracking-tight previo-sm:text-[10px]">
        © Copyright 2024 VacuSalud.
      </strong>

    </div>
  )
}