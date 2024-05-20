# Code Connect Demo

Barebones React demo of Figma's [Code Connect](https://github.com/figma/code-connect).

## Codebase setup

- `npm i` to install dependencies
- `npm run app:dev` will run server at [localhost:8000](http://localhost:8000) which renders contents of [App.tsx](src/App.tsx).

## Figma file and Code Connect prep

- Duplicate [this file](https://www.figma.com/community/file/1367910052286562243) and get the file key from the duplicated file url.
- In this repository, find all `SS2xN8AagXT0ofpo8PNIp9` and replace with the new file's file key.
- `npx figma connect publish --token <your-token>` to publish the existing docs

### Optional: env tokens

- Create a `.env` file in the root of the project (file is git ignored)
- Put the contents `FIGMA_ACCESS_TOKEN=fig_yourtoken` in the file and save
- You'll no longer need to append `--token <your-token>` to the connect commands.
- The one caveat is that currently you'll always need to run figma connect from the root.
  - Running figma connect from a sub directory (like `./src/ui`) will not find the token.
  - This is a bug and should be fixed soon.
