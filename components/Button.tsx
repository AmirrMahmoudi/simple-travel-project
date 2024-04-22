import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  varient: string;
  full?: boolean;
};

const Button = ({ type, title, icon, varient, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${varient} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 cursor-pointer whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};

export default Button;
