import { Dialog } from "./Dialog";
import figma from "@figma/code-connect";

figma.connect(
  Dialog,
  "https://www.figma.com/file/SS2xN8AagXT0ofpo8PNIp9?node-id=9215-9336",
  {
    props: {
      children: figma.boolean("Actions", {
        true: figma.children(["Dialog Content", "Dialog Actions"]),
        false: figma.children(["Dialog Content"]),
      }),
    },
    example: (props) => <Dialog>{props.children}</Dialog>,
  }
);
