import { ColorsStyles } from "./tailwind.colors";
import { FlexStyles } from "./tailwind.flex";
import { LayoutStyles } from "./tailwind.layout";
import { SpacingStyles } from "./tailwind.spacing";
import { TypographyStyles } from "./tailwind.typography";

export interface WrapperLayout
  extends LayoutStyles,
    FlexStyles,
    ColorsStyles,
    SpacingStyles {}

export interface WrapperTypography
  extends ColorsStyles,
    TypographyStyles,
    SpacingStyles {}
