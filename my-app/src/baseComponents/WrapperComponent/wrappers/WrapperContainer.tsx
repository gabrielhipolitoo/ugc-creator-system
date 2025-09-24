import { WrapperLayout } from "@/types/tailwind";
import { processProps } from "@/utils/processProps";
import { ReactNode } from "react";

export interface WrapperContainerProps extends WrapperLayout {
  children: ReactNode;
  className?: string;
}

export const WrapperContainer = ({
  className,
  children,
  bg,
  ...rest
}: WrapperContainerProps) => {
  const customClass = processProps([""], rest);

  const bgClass = bg ? `bg-${bg}` : "";

  return (
    <section className={`${customClass}    ${bgClass}`} {...rest}>
      {children}
    </section>
  );
};
