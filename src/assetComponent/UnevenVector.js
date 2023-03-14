import * as React from "react";
const SvgUnevenVector = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 886 893"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#uneven_vector_svg__a)">
      <path
        d="M579.48 268.776c-20.88-7.475-37.149-22.25-49.421-38.94-26.503-36.042-56.934-77.295-101.613-79.587-45.688-2.343-95.72 10.928-112.169 79.408-2.117 8.812-4.359 17.78-8.202 25.987-47.104 100.582-87.851 27.785-118.338 82.205C65.868 558.961 266.914 674.34 313.606 729.135c46.692 54.796 377.394-76.79 413.667-143.934 36.273-67.144-56.725-89.139-36.273-123.869 20.452-34.729-49.007-170.175-111.52-192.556Z"
        fill="#2C2A2A"
      />
    </g>
    <defs>
      <filter
        id="uneven_vector_svg__a"
        x={0}
        y={0}
        width={885.761}
        height={892.163}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={75} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.980392 0 0 0 0 0.92549 0 0 0 0 0.862745 0 0 0 0.2 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_16_2" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16_2"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgUnevenVector;
