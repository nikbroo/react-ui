import React from "react";

interface propType {
  children?: React.ReactNode;
  className?: string;
  mainClass?: string;
}

const Container: React.FC<propType> = ({ children, className, mainClass }) => {
  return (
    <div className={`w-full ${mainClass && mainClass}`}>
      <div className={`max-w-[1100px] mx-auto px-6 ${className && className}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
