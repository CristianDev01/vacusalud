
export function InputVer({textVer, dato}) {
  return(

    <>
      <p className="py-4 whitespace-normal break-words">
        <strong className="font-semibold">
          {textVer}
        </strong>

        {dato}
      </p>
      <hr />
    </>

  )
}