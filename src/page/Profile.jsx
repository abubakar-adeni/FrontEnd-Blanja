import React from "react";
import { Link } from "react-router-dom";

import "../style/Profile.css";

import Navbar from "../componen/NavbarPage";

import { HiPencil } from "react-icons/hi";
import { BiMap } from "react-icons/bi";
import { BsFillClipboard2Fill } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";


function Profile() {
  return (
    <div className="" style={{ backgroundColor: "#eeeeee" }}>
      {/* Navbar */}
      <Navbar />
      <div className="container-fluide d-flex">
        {/* control Profile lift */}
        <div className="bg-light" style={{ width: "25%", height: "37rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
          <div className="d-flex ">
            <img src="../images/fotoProfile.png" className="ImgProfileLife ms-5 mt-5" alt="Foto PRofile" />
            <div className="ms-3 mt-5 ">
              <p className="lh-1 mt-2 fw-bold">Nama Profile</p>

              <p className="text-muted lh-1" style={{ cursor: "pointer" }}>
                {" "}
                <HiPencil /> Ubah Profile
              </p>
            </div>
          </div>

          <div className="ms-5 mt-5 d-flex flex-column">
            <Link to="#" className="mt-3 text-dark" style={{ cursor: "pointer", textDecoration: "none" }}>
              <label className="bg-primary rounded-circle text-center mx-3" style={{ width: "29px", height: "29px", cursor: "pointer" }}>
                <VscAccount className=" text-light" />
              </label>
              My account
            </Link>
            <Link to="/ProfileSippingAddress" className="mt-2 text-muted" style={{ cursor: "pointer", textDecoration: "none" }}>
              <label className=" rounded-circle text-center mx-3" style={{ width: "29px", height: "29px", backgroundColor: "#fd7e14", cursor: "pointer" }}>
                <BiMap className=" text-light" />
              </label>
              Shipping Adrress
            </Link>
            <Link to="/ProfileMyOrder" className="mt-2 text-muted" style={{ cursor: "pointer", textDecoration: "none" }}>
              <label className="bg-danger rounded-circle text-center mx-3" style={{ width: "29px", height: "29px", cursor: "pointer" }}>
                <BsFillClipboard2Fill className=" text-light " />
              </label>
              My order
            </Link>
          </div>
        </div>

        {/* Control Profile right */}
        <div className="bg-light m-5" style={{ width: "100%", height: "100%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
          <div className="p-3">
            <h5>My Profile</h5>

            <p className="text-muted">Manage your profile information</p>
            <hr />

            <div className="d-flex justify-content-evenly">
              {/* content right */}
              <div>
                <form>
                  <div class="row mb-3">
                    <label for="name" class="col-sm-2 col-form-label text-muted">
                      Name
                    </label>
                    <div class="col-sm-10">
                      <input type="Name" class="form-control" id="Name" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label text-muted">
                      Email
                    </label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail3" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="PhoneNumber" class="col-sm-2 col-form-label text-muted">
                      Phone Number
                    </label>
                    <div class="col-sm-10">
                      <input type="number" class="form-control" id="PhoneNumber" />
                    </div>
                  </div>
                  <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0 text-muted">Gender</legend>
                    <div class="col-sm-10">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Laki-laki" />
                        <label class="form-check-label text-muted" for="inlineRadio1">
                          Laki-laki
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Perempuan" />
                        <label class="form-check-label text-muted" for="inlineRadio2">
                          Perempuan
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <div class="row mb-3">
                    <label for="Date" class="col-sm-2 col-form-label text-muted">
                      Date
                    </label>
                    <div class="col-sm-10">
                      <input type="date" id="date" name="date" className="text-muted rounded " />
                    </div>
                  </div>

                  <button type="submit" class="btn btn-danger" style={{ borderRadius: "10px", width: "38%" }}>
                    Save
                  </button>
                </form>
              </div>

              {/* list center */}
              <div className="garisHorizontal boder-muted"></div>

              {/* content Right */}
              <div className="d-flex flex-column ">
                <img src="../images/fotoProfile.png" className="ImgProfileRight mb-3" alt="Foto Profile" />
                <button type="button" class="btn btn-outline-secondary">
                  Select image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
