import React from "react"
import { Link } from "react-router-dom"

function ContentCategory(props) {
  const {
    title,
    price,
    storename,
    stock,
    description,
    category,
    productpictures,
    id,
  } = props
  return (
    <>
      <Link
        className="card mb-3 me-3 ItemCategory text-decoration-none"
        style={{ width: "15rem", cursor: "pointer" }}
        to={`/Detail-Produk/${id}`}
      >
        <img
          src={`${productpictures}`}
          className="card-img-top img-fluid imgItem"
          alt="item"
          style={{ height: "15rem", width: "15rem" }}
        />
        <div className="card-body" />
        <h5 className="card-title text-start ms-3">{title}</h5>
        <p className="card-text text-danger text-start ms-3">{price}</p>
        <p className="text-muted text-start ms-3">{storename}</p>
      </Link>
    </>
  )
}

export default ContentCategory
