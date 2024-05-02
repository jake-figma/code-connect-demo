import {
  ButtonBase,
  ButtonBaseElementProps,
  ButtonBaseIconsProps,
  ButtonBaseSharedProps,
} from "./ButtonBase";

type ButtonProps = ButtonBaseSharedProps &
  ButtonBaseElementProps &
  ButtonBaseIconsProps;

/**
 * Button component for most tap and click actions
 * @figma component c17de31c1db94514f6683e7ec44aafae425c6f76
 */
export const Button = (props: ButtonProps) => <ButtonBase {...props} />;
