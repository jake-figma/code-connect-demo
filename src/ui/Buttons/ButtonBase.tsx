import { ReactEventHandler, ReactNode } from "react";
import "./buttonBase.css";

type ButtonBasePropsSize = "small" | "medium";
type ButtonBasePropsVariant = "primary" | "secondary" | "inverse";

export interface ButtonBaseIconOnlyProps {
  /**
   * A descriptive aria-label is required when there is no text
   */
  ariaLabel: string;
  /**
   * The icon for the button
   */
  icon: ReactNode;
}

export interface ButtonBaseIconsProps {
  /**
   * A descriptive aria-label is only recommended when the button text is not descriptive of the action
   */
  ariaLabel?: string;
  /**
   * React children
   */
  children: ReactNode;
  /**
   * The icon following the text
   */
  iconEnd?: ReactNode;
  /**
   * The icon preceeding the text
   */
  iconStart?: ReactNode;
  /**
   * The size of the button
   * @default medium
   */
  size?: ButtonBasePropsSize;
}

interface ButtonBaseElementAnchorProps {
  /**
   * html "anchor" element
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
   */
  element: "a";
  /**
   * The destination url
   */
  href: string;
  /**
   * Optional click handler, href should provide destination, click handler can be used for analytics or secondary click events
   */
  onClick?: ReactEventHandler<HTMLAnchorElement>;
}

interface ButtonBaseElementButtonSharedProps {
  /**
   * html "button" element.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
   */
  element?: "button";
  href?: undefined;
}

interface ButtonBaseElementButtonTypeButtonProps {
  /**
   * Required click handler for buttons
   */
  onClick: ReactEventHandler<HTMLButtonElement>;
  /**
   * html type for button element. defaults to "button"
   * Only use "submit" when is descendant of form and action is to submit the form
   */
  type?: "button";
}
interface ButtonBaseElementButtonTypeSubmitProps {
  /**
   * Optional click handler for buttons
   */
  onClick?: ReactEventHandler<HTMLButtonElement>;
  /**
   * html type for button element.
   * Only use "submit" when is descendant of form and action is to submit the form
   */
  type: "submit";
}

type ButtonBaseElementButtonProps = ButtonBaseElementButtonSharedProps &
  (
    | ButtonBaseElementButtonTypeButtonProps
    | ButtonBaseElementButtonTypeSubmitProps
  );

export interface ButtonBaseSharedProps {
  /**
   * Whether or not the button is disabled
   */
  disabled?: boolean;
  /**
   * The visual style of the button
   * @default primary
   */
  variant?: ButtonBasePropsVariant;
}

export type ButtonBaseElementProps =
  | ButtonBaseElementAnchorProps
  | ButtonBaseElementButtonProps;

type ButtonBaseProps = ButtonBaseSharedProps &
  (ButtonBaseIconOnlyProps | ButtonBaseIconsProps) &
  ButtonBaseElementProps;

function isIconOnlyProps(
  props: Partial<ButtonBaseProps>
): props is ButtonBaseIconOnlyProps {
  return "icon" in props;
}
function isIconsProps(
  props: Partial<ButtonBaseProps>
): props is ButtonBaseIconsProps {
  return !isIconOnlyProps(props);
}
function isElementAnchorProps(
  props: Partial<ButtonBaseProps>
): props is ButtonBaseElementAnchorProps {
  return props.element === "a";
}
function isElementButtonProps(
  props: Partial<ButtonBaseProps>
): props is ButtonBaseElementButtonProps {
  return props.element !== "a";
}

/**
 * ButtonBase component for most tap and click actions
 * @figma component ee6aa9fc246d76871f580719412b4ce839add9d2
 */
export const ButtonBase = ({
  ariaLabel,
  disabled = false,
  variant = "primary",
  ...props
}: ButtonBaseProps) => {
  const classNames = ["button-base", `button-base-variant-${variant}`];
  const contents: ReactNode[] = [];

  if (isIconOnlyProps(props)) {
    classNames.push("button-base-icon-only");
    contents.push(props.icon);
  } else if (isIconsProps(props)) {
    classNames.push(`button-base-size-${props.size}`);
    if (props.iconStart) {
      classNames.push("button-base-icon-start");
      contents.push(props.iconStart);
    }
    contents.push(props.children);
    if (props.iconEnd) {
      classNames.push("button-base-icon-end");
      contents.push(props.iconEnd);
    }
  }

  if (isElementAnchorProps(props)) {
    if (disabled) classNames.push("button-base-disabled");
    return (
      <a
        aria-label={ariaLabel}
        className={classNames.join(" ")}
        href={props.href}
        onClick={props.onClick}
      >
        {contents}
      </a>
    );
  }
  if (isElementButtonProps(props))
    return (
      <button
        aria-label={ariaLabel}
        className={classNames.join(" ")}
        disabled={disabled}
        onClick={props.onClick}
        type={props.type || "button"}
      >
        {contents}
      </button>
    );
};
