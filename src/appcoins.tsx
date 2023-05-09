import * as React from "react";
import { SVGProps } from "react";

const Appcoins = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 97 97"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={20.29}
        x2={86.38}
        y1={17.93}
        y2={89.51}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fc8f55" />
        <stop offset={0.44} stopColor="#fe7a6a" />
        <stop offset={1} stopColor="#fe687c" />
      </linearGradient>
    </defs>
    <circle cx={48.71} cy={48.71} r={48.71} fill="url(#a)" />
    <circle
      cx={48.71}
      cy={48.71}
      r={43.82}
      fill="none"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={3}
    />
    <path
      fill="#fefefe"
      d="m42.38 53.92 6.48-19.72 6.6 19.72zm27.47 12.47-5.36-14.72h3.2A2.33 2.33 0 0 0 70 49.35a2.2 2.2 0 0 0-2.2-2.2h-5l-.8-2.29h5.69a2.3 2.3 0 0 0 2.3-2.24 2.3 2.3 0 0 0-2.31-2.31h-7.39l-4-11a9.91 9.91 0 0 0-2.87-4.05 6.7 6.7 0 0 0-4.52-1.52 6.89 6.89 0 0 0-4.54 1.52 10 10 0 0 0-2.88 4.05l-4.19 11.1h-7.35a2.22 2.22 0 0 0-2.22 2.21 2.3 2.3 0 0 0 2.3 2.3h5.58l-.86 2.23h-5a2.22 2.22 0 0 0-2.22 2.22 2.28 2.28 0 0 0 2.27 2.28H33l-5.45 14.74A7.64 7.64 0 0 0 27 69a4.82 4.82 0 0 0 1.52 3.3 5.49 5.49 0 0 0 3.64 1.34 4.9 4.9 0 0 0 5-3.62l2.11-6.29h19.41l2.11 6.44a4.93 4.93 0 0 0 5 3.44 4.66 4.66 0 0 0 2.4-.61 8.21 8.21 0 0 0 1.67-1.66 4.5 4.5 0 0 0 .61-2.34 15.36 15.36 0 0 0-.62-2.57z"
    />
  </svg>
);

export default Appcoins;
