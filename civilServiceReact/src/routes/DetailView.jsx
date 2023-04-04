import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import CertDetail from "../components/certDetail";

const DetailView = () => {
    return (
     <div>
        <CertDetail/>
        Hello World
     </div>
    );
  };
  
  export default DetailView;