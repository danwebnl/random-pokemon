import { Main } from "./types"
import GQL from "./GQL"
import REST from "./REST"

export default function Index({ graphQL, ...props }: Main) {
  if (graphQL) {
    return <GQL {...props} />
  }
  return <REST {...props} />
}
