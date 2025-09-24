export type SpaceMargin = "m-2" | "m-4" | "m-5" | "m-6" | "m-7" | "mb-5";
export type SpacePadding = "p-4" | "p-5" | "p-6";
export type SpaceBottom = "mb-2" | "mb-4" | "mb-5";

export interface SpacingStyles {
  margin?: SpaceMargin;
  padding?: SpacePadding;
  bottom?:SpaceBottom
}
