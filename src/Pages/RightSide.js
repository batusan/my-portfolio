import React from "react";

import ContactMe from "../Components/ContactMe";
import Blogs from "../Components/Blogs";
import Projects from "../Components/Projects";
import { Routes, Route } from "react-router-dom";
import NotFound from "../Components/NotFound";

function RightSide() {
  return (
    <div
      className="col-sm-5 text-center text-dark rightToLeft d-flex align-items-center vh-100"
      id="rightSide"
    >
      <Routes>
        <Route path="/" element={<Projects hideRigthSide={false} />} />
        <Route path="/project" element={<Projects hideRigthSide={false} />} />
        <Route path="/blog" element={<Blogs hideRigthSide={false} />} />
        <Route path="/contact" element={<ContactMe hideRigthSide={false} />} />
        <Route path="*" redire element={<NotFound hideRigthSide={true} />} />
      </Routes>
    </div>
  );
}

export default RightSide;
