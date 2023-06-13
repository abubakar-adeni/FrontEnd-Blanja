import React from "react";
import "../style/CheckOut.css";
import Navbar from "../component/Navbar";
import ItemCheckOut from "../component/ItemCheckOut";

function CheckOut() {
  return (
    <div className="">
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}

      {/* Content */}
      <div className="container d-flex flex-row justify-content-between">
        <div className=" container" style={{ marginTop: "5rem" }}>
          <h1 className="text-start mt-3">Check Out</h1>
          <p className="text-start mt-3">Shipping Adress</p>

          <div className="d-flex flex-row CheckOutHp justify-content-between">
            <div className="">
              <div className="card w-40 mb-3 me-4 ItemCheckOut" style={{ width: "90%" }}>
                <div className="card-body">
                  <h5 className="card-title text-start">Andreas Jane</h5>
                  <p className="card-text text-start">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                  <a href="#" className="btn btn-outline-secondary float-start">
                    Choose another address
                  </a>
                </div>
              </div>

              {/* content buy item */}
              <ItemCheckOut />
            </div>

            <div className="card cardCost">
              <div className="card-body">
                <h6>Shopping summary</h6>
                <div className="d-flex flex-row justify-content-between">
                  <p>Order</p>
                  <p>$40.0</p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <p>Delivery</p>
                  <p>$40.0</p>
                </div>
                <hr />
                <div className="d-flex flex-row justify-content-between">
                  <p>Shopping summary</p>
                  <p className="text-danger">$80.0</p>
                </div>
                <button type="button" class="btn btn-danger BtnCheckOut">
                  Select payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
