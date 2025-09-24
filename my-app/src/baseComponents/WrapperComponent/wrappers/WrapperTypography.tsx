"use client";
import { WrapperTypography } from "@/types/tailwind";
import { processProps } from "@/utils/processProps";
import { ElementType } from "react";

export interface WrapperTypographyProps<T extends ElementType>
  extends WrapperTypography {
  as?: T;
  value: string;
  className?: string;
}

export const WrapperTypograpgy = <T extends ElementType = "p">({
  className,
  as,
  value,
  ...rest
}: WrapperTypographyProps<T>) => {
  const Component = as || "p";
  const customClass = processProps([""], rest);

  return (
    <Component className={`${customClass} `} {...rest}>
      {value}
    </Component>
  );
};
