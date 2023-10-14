import { rest, graphql } from "msw"

const stringifiedVal = JSON.stringify({
  front_default: "/media/sprites/pokemon/1.png",
})

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon/*", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "ThePokemonTitle",
        sprites: {
          other: {
            dream_world: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            },
          },
        },
      })
    )
  }),

  graphql.query("samplePokeAPIquery", (_, res, ctx) => {
    return res(
      ctx.data({
        spritesAggregate: {
          nodes: [
            {
              pokemon: {
                name: "ThePokemonTitle",
                pokemon_v2_pokemonsprites: [
                  {
                    sprites: stringifiedVal,
                  },
                ],
              },
            },
          ],
        },
      })
    )
  }),
]
