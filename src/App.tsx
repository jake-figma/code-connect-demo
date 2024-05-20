import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "ui";

function App() {
  const [text, setText] = useState("Hello world!");
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
      }}
    >
      <Button variant="primary" onClick={() => setText(text + "!")}>{text}</Button>
    </main>
  );
}
export default App;
