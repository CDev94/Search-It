import React from 'react'

 const ImagesList = (props) => {
  // mapping through image data
  const images = props.images.map( ({description, urls, id}) => {
    return <img className="b-border" key={id} src={urls.regular} alt={description} />
  })

  return (
    <div className="img-list">
      {images}
    </div>
  )
}

export default ImagesList;