import React from "react";

const variantClasses = {
  h1: "text-[9.88px]",
  h2: "font-normal sm:text-5xl md:text-5xl text-[82px]",
  h3: "font-normal sm:text-[40px] md:text-[46px] text-[50px]",
  h4: "font-bold sm:text-4xl md:text-[38px] text-[40px]",
  h5: "font-normal text-4xl sm:text-[32px] md:text-[34px]",
  h6: "sm:text-[21px] md:text-[23px] text-[25px]",
  body1: "font-normal sm:text-[17.75px] md:text-[19.75px] text-[21.75px]",
  body2: "font-normal text-xl",
  body3: "font-normal text-lg",
  body4: "text-base",
  body5: "font-normal text-[15px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
