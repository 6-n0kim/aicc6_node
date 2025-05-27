import React from "react";
import Navbar from "../Common/Navbar";
import ItemPanel from "../Common/ItemPanel";

const index = () => {
  return (
    <div className="page_section">
      <Navbar activeIdx={2} />
      <ItemPanel pageTitle="Proceeding Items" />
    </div>
  );
};

export default index;
