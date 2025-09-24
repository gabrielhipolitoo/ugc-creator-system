export const processProps = (
  base: string[],
  props: Record<string, any>,
  className?: string
) => {
  return [...base,  ...Object.values(props), className]
    .filter(Boolean)
    .join(" ");
};
