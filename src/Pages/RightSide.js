import React from "react";

import ContactMe from "../Components/ContactMe";
import Blogs from "../Components/Blogs";
import Projects from "../Components/Projects";
import { Routes, Route } from "react-router-dom";

function RightSide() {
  return (
    <div className="col-sm-5 text-center text-dark rightToLeft d-flex align-items-center vh-100">
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default RightSide;
