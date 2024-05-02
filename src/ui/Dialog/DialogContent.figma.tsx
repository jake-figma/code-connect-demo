import { DialogContent } from "./DialogContent";
import figma from "@figma/code-connect";

figma.connect(
  DialogContent,
  "https://www.figma.com/file/SS2xN8AagXT0ofpo8PNIp9?node-id=9215-9333",
  {
    props: {
      headline: figma.string("Headline"),
      content: figma.string("Content"),
    },
    example: ({ headline, content }) => (
      <DialogContent
        headline={<h2>{headline}</h2>}
        content={<p>{content}</p>}
      />
    ),
  }
);
