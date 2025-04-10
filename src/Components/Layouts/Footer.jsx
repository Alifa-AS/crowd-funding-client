import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-7">
        <ul>
          <h6 className="footer-title">Services</h6>
          <li>
            <NavLink
              to="/addNewCampaign"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : ""
              }
            >
              AddCampaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myCampaign"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : ""
              }
            >
              MyCampaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myDonations"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : ""
              }
            >
              MyDonations
            </NavLink>
          </li>
        </ul>
        <ul>
          <h6 className="footer-title">Pages</h6>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allCampaign"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : ""
              }
            >
              AllCampaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : ""
              }
            >
              All Users
            </NavLink>
          </li>
        </ul>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-2">
        <aside className="grid-flow-col items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            Crowd Cube
            <br />
            Providing services since 2021
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/login/">
              <FaFacebook className="text-blue-600 text-2xl" />
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube className="text-red-600 text-2xl" />
            </a>
            <a>
              <FaInstagram className="text-purple-500 text-2xl"></FaInstagram>
            </a>
            <a>
              <FaXTwitter className="text-black text-2xl" />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
