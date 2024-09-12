import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "./../types";

const MediumButton = ({ children, onClick }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
    //   className="px-6 py-3 bg-[#F65B36] text-[#EDE5D8] rounded-lg hover:scale-110 transition-transform ease-in-out duration-200 hover:bg-[#EDE5D8] hover:text-[#F65B36] hover:border-2 border-[#F65B36]"
    className="px-6 py-2 rounded-sm font-medium bg-[#F65B36] text-[#EDE5D8] w-fit transition-all shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
    >
      {children}
    </Button>
  );
};

export default MediumButton;