import "./style.css"
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter"
import { Display as DisplayType } from "./types"

export default function Display({
  isLoading,
  errorData,
  info,
  generateId,
  styleContainer,
  styleLoading,
  styleImageWrapper,
  styleImage,
  styleTitleWrapper,
  styleTitle,
  styleButton,
}: DisplayType) {
  return (
    <div className="container" style={styleContainer}>
      {isLoading ? (
        <div className="loading" style={styleLoading}>
          Loading a Random Pokemon...
        </div>
      ) : null}
      {errorData ? (
        <div className="loading" style={styleLoading}>
          There is an error... [work in progress]
        </div>
      ) : null}
      {info && !isLoading ? (
        <>
          <div className="image-wrapper" style={styleImageWrapper}>
            <img
              src={info.imageURL}
              className="image"
              style={styleImage}
              data-testid="the-image"
            />
          </div>
          <div className="title-wrapper" style={styleTitleWrapper}>
            <span className="title" style={styleTitle} data-testid="the-title">
              {capitalizeFirstLetter(info.name)}
            </span>
          </div>
          <button className="button" onClick={generateId} style={styleButton}>
            Show another Random Pokemon
          </button>
        </>
      ) : null}
    </div>
  )
}
