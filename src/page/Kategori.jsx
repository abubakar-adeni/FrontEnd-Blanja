import "../style/Kategori.css";

import Navbar from "../componen/Navbar";
import ContentCategory from "../componen/ContentCategory";

function App() {

  return (
    <div className="App">
      {/* start navbar */}
      <Navbar />
      {/* end navbar */}

      {/* start content */}
      <div className="container">
        <div className="">
          <p className="mt-5 text-muted text-start">Home / Category / T-Shirt</p>
        </div>

        <h2 className="mt-3 mb-3 text-start">T-shirt</h2>

        <div className="d-flex row">
          <div className="row">
            {resipesList.map((item) => (
              <ContentCategory title={item?.title} image={item.productpictures} id={item?.id} />
            ))}
          </div>
          <ContentCategory />
          <ContentCategory />
          <ContentCategory />
          <ContentCategory />
          <ContentCategory />
        </div>
      </div>
    </div>
  );
}

export default App;
