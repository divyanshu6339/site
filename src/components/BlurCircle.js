import React from 'react';

const BlurCircle = ({ variant }) => {
  const getCircleConfig = () => {
    switch (variant) {
      case 1:
        return {
          width: 403, height: 403, left: 1183, top: 355, cx: 901.5, cy: 556.5, r: 201.5,
          viewBox: "0 0 956 636", filterId: "filter0_f_712_5784", gradientId: "paint0_linear_712_5784"
        };
      case 2:
        return {
          width: 304, height: 304, left: -91, top: -83, cx: 61, cy: 69, r: 152,
          viewBox: "0 0 913 636", filterId: "filter0_f_712_5785", gradientId: "paint0_linear_712_5785"
        };
      case 3:
        return {
          width: 512, height: 512, left: -239, top: -128, cx: 17, cy: 128, r: 256,
          viewBox: "0 0 973 636", filterId: "filter0_f_712_6106", gradientId: "paint0_linear_712_6106"
        };
      case 4:
        return {
          width: 512, height: 512, left: 1053, top: 310, cx: 956, cy: 566, r: 256,
          viewBox: "0 0 1086 636", filterId: "filter0_f_712_6107", gradientId: "paint0_linear_712_6107"
        };
      default:
        return {
            width: 403, height: 403, left: 1183, top: 355, cx: 901.5, cy: 556.5, r: 201.5,
            viewBox: "0 0 956 636", filterId: "filter0_f_712_5784", gradientId: "paint0_linear_712_5784"
        };
    }
  };

  const config = getCircleConfig();

  return (
    <div
      className="absolute opacity-70"
      style={{
        filter: 'blur(350px)',
        width: `${config.width}px`,
        height: `${config.height}px`,
        left: `${config.left}px`,
        top: `${config.top}px`
      }}
    >
      <svg
        width={config.viewBox.split(' ')[2]}
        height={config.viewBox.split(' ')[3]}
        viewBox={config.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7" filter={`url(#${config.filterId})`}>
          <circle cx={config.cx} cy={config.cy} r={config.r} fill={`url(#${config.gradientId})`} />
        </g>
        <defs>
          <filter
            id={config.filterId}
            x="0"
            y="-345"
            width="1803"
            height="1803"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="350" result="effect1_foregroundBlur" />
          </filter>
          <linearGradient
            id={config.gradientId}
            x1="714.296"
            y1="421.265"
            x2="1004.86"
            y2="635.129"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4678AE" stopOpacity="0.8" />
            <stop offset="0.278846" stopColor="#1ECCDC" stopOpacity="0.7" />
            <stop offset="0.488257" stopColor="#0062FF" stopOpacity="0.6" />
            <stop offset="0.721154" stopColor="#006CBF" stopOpacity="0.4" />
            <stop offset="1" stopColor="#004173" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BlurCircle; 