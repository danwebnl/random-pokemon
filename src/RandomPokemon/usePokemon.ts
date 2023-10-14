import { gql, useQuery } from "@apollo/client"

const GET_POKEMON = gql`
  query samplePokeAPIquery($id: Int!) {
    spritesAggregate: pokemon_v2_pokemonsprites_aggregate(
      where: { id: { _eq: $id } }
    ) {
      nodes {
        pokemon: pokemon_v2_pokemon {
          name
          pokemon_v2_pokemonsprites {
            sprites
          }
        }
      }
    }
  }
`

const usePokemon = ({ id }: { id: number }) => {
  const { data, error, loading } = useQuery(GET_POKEMON, {
    variables: { id },
  })

  return { data, error, loading }
}

export default usePokemon
