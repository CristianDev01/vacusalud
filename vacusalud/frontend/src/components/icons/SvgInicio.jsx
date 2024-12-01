
const svgInicio = (props) => (
  <svg
    className="size-[60px] previo-sm:size-[70px] previo-lg:size-[80px] xl:size-[90px]"
    viewBox="0 0 50 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={50} height={90} fill="url(#pattern0_18_55)" />
    <defs>
      <pattern
        id="pattern0_18_55"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_18_55"
          transform="matrix(0.0111111 0 0 0.00617284 0 0.222222)"
        />
      </pattern>
      <image
        id="image0_18_55"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)
export default svgInicio
