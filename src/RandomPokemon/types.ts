import { ApolloError } from "@apollo/client"

export type Styles = {
  styleContainer?: React.CSSProperties
  styleLoading?: React.CSSProperties
  styleImageWrapper?: React.CSSProperties
  styleImage?: React.CSSProperties
  styleTitleWrapper?: React.CSSProperties
  styleTitle?: React.CSSProperties
  styleButton?: React.CSSProperties
}

export type Main = { graphQL?: boolean } & Styles

export type Info = {
  name: string
  imageURL: string
}

export type Display = Main & {
  isLoading: boolean
  errorData?: ApolloError
  info?: Info
  generateId: () => void
}
