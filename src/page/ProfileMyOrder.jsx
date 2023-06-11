import React from 'react'
import { Link } from "react-router-dom";
import "../style/ProfileMyOrder.css";

import Navbar from "../componen/NavbarPage";

import { HiPencil } from "react-icons/hi";
import { BiMap } from "react-icons/bi";
import { BsFillClipboard2Fill } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

function ProfileMyOrder() {
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
                  <HiPencil /> Ubah Profile
                </p>
              </div>
            </div>

            <div className="ms-5 mt-5 d-flex flex-column">
              <Link to="/Profile" className="mt-3 text-muted" style={{ textDecoration: "none" }}>
                <label className="bg-primary rounded-circle  text-center mx-3" style={{ width: "29px", height: "29px", cursor: "pointer" }}>
                  <VscAccount className=" text-light" />
                </label>
                My account
              </Link>
              <Link to="/ProfileSippingAddress" className="mt-2 text-muted " style={{ textDecoration: "none" }}>
                <label className=" rounded-circle text-center mx-3" style={{ width: "29px", height: "29px", backgroundColor: "#fd7e14", cursor: "pointer" }}>
                  <BiMap className=" text-light" />
                </label>
                Shipping Adrress
              </Link>
              <Link to="/ProfileMyOrder" className="mt-2 text-dark" style={{ textDecoration: "none" }}>
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
              <h5>My order</h5>

              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    All item
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#">
                    Not yet paid
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#">
                    Packed
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#">
                    Sent
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-muted" href="#">
                    Completed
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link text-muted" href="#">
                    Ordre cancel
                  </a>
                </li>
              </ul>
              <hr />
              <div style={{marginBottom:"360px"}}></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProfileMyOrder
