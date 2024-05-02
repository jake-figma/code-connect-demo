import {
  ButtonBase,
  ButtonBaseElementProps,
  ButtonBaseIconOnlyProps,
  ButtonBaseSharedProps,
} from "./ButtonBase";

type ButtonProps = ButtonBaseSharedProps &
  ButtonBaseElementProps &
  ButtonBaseIconOnlyProps;

/**
 * IconButton component for most tap and click actions
 * @figma component 3a9d0b29a0c6d648ed3af756cbe3d1f1f94fde9e
 */
export const IconButton = (props: ButtonProps) => <ButtonBase {...props} />;
