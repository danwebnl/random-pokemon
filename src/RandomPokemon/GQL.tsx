import { useEffect, useState } from "react"
import {
  ApolloError,
  gql,
  useLazyQuery,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"

import randomIntFromInterval from "../utils/randomIntFromInterval"
import Display from "./Display"
import { Styles, Info } from "./types"

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
})

function GQL({
  styleContainer,
  styleLoading,
  styleImageWrapper,
  styleImage,
  styleTitleWrapper,
  styleTitle,
  styleButton,
}: Styles) {
  const [id, setId] = useState<number>()
  const [info, setInfo] = useState<Info>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorData, setErrorData] = useState<ApolloError>()

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
  const [loadPokemon, { data, error, loading }] = useLazyQuery(GET_POKEMON, {
    variables: { id },
  })

  const generateId = () => {
    const id = randomIntFromInterval()
    setId(id)
  }

  useEffect(() => {
    generateId()
  }, [])

  useEffect(() => {
    loadPokemon()
  }, [id, loadPokemon])

  useEffect(() => {
    const setData = async () => {
      const sprites =
        data.spritesAggregate.nodes[0].pokemon.pokemon_v2_pokemonsprites[0]
          .sprites

      const spritesJSON = await JSON.parse(sprites)
      let imageURL = spritesJSON.front_default.split("/").splice(2).join("/")
      imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/${imageURL}`

      setInfo({
        name: data.spritesAggregate.nodes[0].pokemon.name,
        imageURL,
      })
    }

    if (data) {
      setData()
    }
  }, [data])

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  useEffect(() => {
    if (error) {
      console.error("errorData", error)
      setErrorData(error)
    }
  }, [error])

  return (
    <Display
      isLoading={isLoading}
      errorData={errorData}
      info={info}
      generateId={generateId}
      styleContainer={styleContainer}
      styleLoading={styleLoading}
      styleImageWrapper={styleImageWrapper}
      styleImage={styleImage}
      styleTitleWrapper={styleTitleWrapper}
      styleTitle={styleTitle}
      styleButton={styleButton}
    />
  )
}

const GQLWrapper = (props: Styles) => {
  return (
    <ApolloProvider client={client}>
      <GQL {...props} />
    </ApolloProvider>
  )
}

export default GQLWrapper
