import { Button, Dialog, DialogActions, DialogContent } from "ui";

function App() {
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
      }}
    >
      <Dialog>
        <DialogContent
          headline={<h2>Here is a livestream you should wa</h2>}
          content={
            <p>
              Here is some content. Here is some content. Here is some content.
              Here is some content. Here is some content. Here is some content.
              Here is some content. Here is some content.
            </p>
          }
        />
        <DialogActions>
          <Button onClick={() => {}} variant="inverse" size="small">
            Cancel
          </Button>
          <Button onClick={() => {}} variant="secondary">
            Action
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
export default App;
