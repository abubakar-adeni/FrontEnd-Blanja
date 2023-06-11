import React from "react";

function ContentCategory() {
  return (
    <>
      <div className="card mb-3 me-3" style={{ width: "15rem", cursor: "pointer" }}>
        <img src="../images/jas.jpg" className="card-img-top img-flued" alt="item" style={{ height: "15rem", width: "15rem" }} />
        <div className="card-body" />
        <h5 className="card-title text-start ms-3">Men's foraml suit - Black & White</h5>
        <p className="card-text text-danger text-start ms-3">$ 40.0</p>
        <p className="text-muted text-start ms-3">Zalora Cloth</p>
      </div>
    </>
  );
}

export default ContentCategory;
