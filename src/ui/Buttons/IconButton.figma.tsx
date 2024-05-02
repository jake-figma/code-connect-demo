import { IconButton } from "./IconButton";
import figma from "@figma/code-connect";

figma.connect(
  IconButton,
  "https://www.figma.com/file/SS2xN8AagXT0ofpo8PNIp9?node-id=9215-9232",
  {
    props: {
      variant: figma.enum("Variant", {
        Inverse: "inverse",
        Secondary: "secondary",
      }),
      icon: figma.instance("Icon"),
      disabled: figma.enum("* State", {
        Disabled: true,
      }),
    },
    example: ({ icon, variant }) => (
      <IconButton
        ariaLabel="Describe the action here."
        variant={variant}
        icon={icon}
        onClick={() => {}}
      />
    ),
  }
);
