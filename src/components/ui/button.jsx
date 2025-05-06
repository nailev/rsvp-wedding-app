import * as React from "react";

export const Button = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md bg-rose-500 px-4 py-2 text-white hover:bg-rose-600 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 ${className}`}
      {...props}
    />
  );
});
Button.displayName = "Button";
