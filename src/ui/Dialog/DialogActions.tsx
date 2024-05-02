import { ReactNode } from "react";
import "./dialogActions.css";

type DialogActionsProps = {
  /**
   * React children
   */
  children: ReactNode;
};

export const DialogActions = (props: DialogActionsProps) => {
  return <div className="dialog-actions">{props.children}</div>;
};
