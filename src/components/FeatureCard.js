import React from 'react';
import CardLine from './CardLine';

const FeatureCard = ({
  title,
  description,
  variant = 'left'
}) => {
  const shadowOffset = variant === 'left' ? 'left-[223px]' : 'left-0';
  const cardOffset = variant === 'left' ? 'left-0' : 'left-[9px]';
  const borderColor = variant === 'left' ? 'border-slate-500' : 'border-gray-200';

  return (
    <div className="relative h-[163px] w-[664px] max-md:w-full max-md:max-w-[600px] max-sm:h-auto">
      <div
        className={`absolute rounded-md bg-slate-500 h-[150px] opacity-[0.92] top-[13px] w-[441px] max-md:left-2/4 max-md:-translate-x-2/4 max-md:w-[90%] ${shadowOffset}`}
      />
      <div
        className={`box-border inline-flex absolute top-0 items-center py-5 pr-9 pl-5 rounded-md border border-solid backdrop-blur-[17.5px] bg-blue-300 bg-opacity-20 h-[154px] w-[655px] max-md:relative max-md:top-0 max-md:left-0 max-md:w-full max-sm:p-5 max-sm:h-auto ${cardOffset} ${borderColor}`}
      >
        <div className="flex absolute top-5 left-5 flex-col gap-4 items-start h-[114px] w-[598px] max-md:relative max-md:top-0 max-md:left-0 max-md:p-5 max-md:w-full max-sm:gap-3 max-sm:h-auto">
          <div className="flex gap-5 items-center">
            <h3 className="text-2xl text-white max-sm:text-xl">
              {title}
            </h3>
            <CardLine />
          </div>
          <p className="w-full text-base text-white max-sm:text-sm max-sm:leading-snug">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard; 