import { DialogActions } from "./DialogActions";
import figma from "@figma/code-connect";

figma.connect(
  DialogActions,
  "https://www.figma.com/file/SS2xN8AagXT0ofpo8PNIp9?node-id=9215-9330",
  {
    props: { children: figma.children(["Button"]) },
    example: (props) => <DialogActions>{props.children}</DialogActions>,
  }
);
