import "../style/Kategori.css";
import React from "react";
import axios from "axios";

import Navbar from "../componen/Navbar";
import ContentCategory from "../componen/ContentCategory";

function App() {
const [ContentList, setContentList] = React.useState([]);

 React.useEffect(() => {
   axios
     .get(`https://alert-pink-duckling.cyclic.app/products/category/shirt?sortType=DESC&page=1`)
     .then((response) => setContentList(response?.data?.data))
     .catch((err) => {
       console.log("error :", err);
     });
 }, []);

  return (
    <div className="App">
      {/* start navbar */}
      <Navbar />
      {/* end navbar */}

      {/* start content */}
      <div className="container" style={{ marginTop: "6rem" }}>
        <div className="">
          <p className="mt-5 text-muted text-start">Home / Category / T-Shirt</p>
        </div>

        <h2 className="mt-3 mb-3 text-start">T-shirt</h2>

        <div className="d-flex row">
          <div className="row">
            {ContentList.map((item) => (
              <ContentCategory title={item?.title} price={item?.price} storename={item?.storename} image={item.productpictures} id={item?.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
