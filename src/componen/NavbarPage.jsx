import React from 'react'
import { Link } from 'react-router-dom';

import { HiSearch } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import { BsFunnel } from "react-icons/bs";
import { BsFillHandbagFill } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavbarPage() {
    return (
      <>
        <nav class="navbar navbar-light bg-light container-fluide d-flex justify-content-center">
          <div className="container col d-flex justify-content-evenly">
            <div className="co-2 navbar-light bg-light ">
              <BsFillHandbagFill className="iconNavbarLogo text-danger" />
              <Link class="navbar-brand fw-bold text-danger ms-2 " to="#">
                Belanja
              </Link>
            </div>

            <div className="col-5 d-flex" style={{ marginLeft: "-25px" }}>
              <input class="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
              <BsFunnel className="iconNavbar my-100" style={{ cursor: "pointer" }} />
            </div>

            {/* <div className="col-4 d-flex flex-row-reverse"> */}
              <div className="col-4 d-flex flex-row-reverse MenuIcon">
                <img src="../images/fotoProfile.png" alt="Foto Profile" className="fotoProfile rounded-circle me-4" />
                <CiMail className="me-4 iconNavbar" style={{ cursor: "pointer" }} />
                <AiOutlineBell className="me-4 iconNavbar" style={{ cursor: "pointer" }} />
                <AiOutlineShoppingCart className="me-4 iconNavbar" style={{ cursor: "pointer" }} />
              </div>

              {/* <p className="hideDestop ">
                <button class="btn btn-primary hidePage d-flex flex-row-reverse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  <img src="/images/menu.webp" width="35px" height="35px" />
                </button>
              </p>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <img src="../images/fotoProfile.png" alt="Foto Profile" className="fotoProfile rounded-circle me-4" />
                  <br />
                  <CiMail className="me-4 iconNavbar" style={{ cursor: "pointer" }} />
                  <br />
                  <AiOutlineBell className="me-4 iconNavbar" style={{ cursor: "pointer" }} />
                  <br />
                  <AiOutlineShoppingCart className="me-4 iconNavbar" style={{ cursor: "pointer" }} />
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </nav>
      </>
    );
}

export default NavbarPage
