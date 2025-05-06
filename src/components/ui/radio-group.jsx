import * as React from "react";

export const RadioGroup = ({ children, className = "", ...props }) => {
  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const RadioGroupItem = ({ id, value, ...props }) => {
  return (
    <input
      type="radio"
      id={id}
      value={value}
      name="radio-group"
      className="mr-2 accent-rose-500"
      {...props}
    />
  );
};
