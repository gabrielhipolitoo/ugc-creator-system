import { ColorsStyles } from "@/types/tailwind/tailwind.colors";
import { LayoutStyles } from "@/types/tailwind/tailwind.layout";
import { processProps } from "@/utils/processProps";

export interface InputComponentProps extends LayoutStyles, ColorsStyles {
  error?: string;
  placeholder: string;
}

const InputComponent = ({ bg = "neutral-50", error, ...props }: InputComponentProps) => {
  const customClass = processProps(["p-3 w-full  rounded-lg "], props);
  const bgClass = bg ? `bg-${bg}` : "";
  return (
    <>
      <input
        className={`${customClass}   outline-neutral-100 focus:outline-1 transition-none ${bgClass}`}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </>
  );
};

export default InputComponent;
