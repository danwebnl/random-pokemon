import { describe, it, expect } from "vitest"
import { render, screen, waitFor, fireEvent } from "@testing-library/react"

import RandomPokemon from "./"

describe("Display the title and image for the RESTful connection", () => {
  it("should display the button on the page", async () => {
    render(<RandomPokemon />)
    await waitFor(() => {
      const buttonElement = screen.getByRole("button", {
        name: /Show another Random Pokemon/i,
      })

      expect(buttonElement).toBeInTheDocument()
    })
  })

  it("should display image and title after the button is clicked", async () => {
    render(<RandomPokemon />)
    await waitFor(() => {
      const buttonElement = screen.getByRole("button", {
        name: /Show another Random Pokemon/i,
      })

      fireEvent.click(buttonElement)

      const titleElement = screen.getByTestId("the-title")
      expect(titleElement).toHaveTextContent("ThePokemonTitle")

      const imageElement = screen.getByTestId("the-image")
      expect(imageElement).toHaveAttribute(
        "src",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      )
    })
  })
})

describe("Display the title and image for the GraphQL connection", () => {
  it("should display the button on the page", async () => {
    render(<RandomPokemon graphQL />)
    await waitFor(() => {
      const buttonElement = screen.getByRole("button", {
        name: /Show another Random Pokemon/i,
      })
      expect(buttonElement).toBeInTheDocument()
    })
  })

  it("should display image and title after the button is clicked", async () => {
    render(<RandomPokemon graphQL />)
    await waitFor(() => {
      const buttonElement = screen.getByRole("button", {
        name: /Show another Random Pokemon/i,
      })
      fireEvent.click(buttonElement)
      const titleElement = screen.getByTestId("the-title")
      expect(titleElement).toHaveTextContent("ThePokemonTitle")
      const imageElement = screen.getByTestId("the-image")
      expect(imageElement).toHaveAttribute(
        "src",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      )
    })
  })
})
