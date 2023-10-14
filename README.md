NOTES

- the project has been initiated with React + TypeScript + Vite
- component `RandomPokemon` displays a random Pokémon
- this component can be viewed by running this app with the command: `npm install && npm run dev`. The RandomPokemon component is being used in file `App.tsx` as an example
- this component can be accessed also as a module from another application. You can do this by following these steps:

* run the build command: `npm run build`
* link the package: run command `npm link` and then go to the directory of another app and run `npm link random-pokemon`
* you can run now the second app and in a JSX component of your choice you can import the RandomPokemon module (`import RandomPokemon from 'random-pokemon'`) and use it (`<RandomPokemon />`)

- the RandomPokemon component can receive the following optional props:

* `graphql` - if specified the component will use a graphQL connection to retrieve the data. Otherwise it will use a RESTful API connection
* `styleContainer` - inline styling for the component container
* `styleImageWrapper` - inline styling for the image wrapper
* `styleImage` - inline styling for the image
* `styleTitleWrapper` - inline styling for the title wrapper
* `styleTitle` - inline styling for the title
* `styleButton` - inline styling for the button
* `styleLoading` - inline styling for the loader text

- the app can be tested by running the command: `npm run test`
  The tests are done with React Testing Library and Vitest. I took the liberty to use Vitest instead of Jest because it is faster and does the same thing as Jest
  In order to mock the REST API and GraphQL responses I used a library called MSW (https://mswjs.io/)

- if you have any notes/questions I am happy to discuss them
