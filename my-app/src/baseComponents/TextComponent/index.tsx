import { ElementType } from "react";
import {
  WrapperTypograpgy,
  WrapperTypographyProps,
} from "../WrapperComponent/wrappers/WrapperTypography";

export interface TextComponentProps<T extends ElementType>
  extends WrapperTypographyProps<T> {}

export const TextComponent = <T extends ElementType>(
  props: TextComponentProps<T>
) => {
  return <WrapperTypograpgy {...props} />;
};
