
const IrArrow = ({ currentColor , props}) => (
  <svg
    width={30}
    height={25}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_18_64"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={30}
      height={30}
    >
      <rect width={30} height={30} fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_18_64)">
      <path
        d="M17.5 22.5L15.75 20.6875L20.1875 16.25H5V13.75H20.1875L15.75 9.3125L17.5 7.5L25 15L17.5 22.5Z"
        fill={currentColor}
      />
    </g>
  </svg>
)
export default IrArrow