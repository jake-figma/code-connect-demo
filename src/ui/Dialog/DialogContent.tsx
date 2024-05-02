import { ReactNode } from "react";
import "./dialogContent.css";

type DialogContentProps = {
  /**
   * Headline text
   */
  headline: ReactNode;
  /**
   * Content text
   */
  content: ReactNode;
};

export const DialogContent = (props: DialogContentProps) => {
  return (
    <div className="dialog-content">
      {props.headline}
      {props.content}
    </div>
  );
};
