import { useEffect, useState } from "react"

import randomIntFromInterval from "../utils/randomIntFromInterval"
import Display from "./Display"
import { Styles, Info } from "./types"

export default function REST({
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
  const [errorData, setErrorData] = useState()

  const generateId = () => {
    const id = randomIntFromInterval()
    setId(id)
  }

  useEffect(() => {
    const getData = async () => {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setInfo({
            name: data.name,
            imageURL: data.sprites.other.dream_world.front_default,
          }),
            setIsLoading(false)
        })
        .catch((error) => {
          console.error(error)
          setErrorData(error)
        })
    }

    if (id) {
      setIsLoading(true)
      getData()
    }
  }, [id])

  useEffect(() => {
    generateId()
  }, [])

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
