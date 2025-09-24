import { WrapperTypographyProps } from "@/baseComponents/WrapperComponent/wrappers/WrapperTypography";
import { ReactNode } from "react";
import { TextComponent } from "../../baseComponents/TextComponent";
import InputComponent, {
  InputComponentProps,
} from "@/baseComponents/InputComponent";

interface LabelProps extends InputComponentProps {
  value?: string;
}

export const Label = ({ value, ...props }: LabelProps) => {
  return (
    <div>
      {value && <p className="mb-3">{value}</p>}
      <InputComponent {...props} />
    </div>
  );
};
