import React from "react";
import "./Categories.css";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import requests from "../../services/requests";
import Row from "../../Components/Row/Row";

const Categories = ({ category, title, fetch2 }) => {
  const fetchUrl = requests[category];
  const fetch22 = requests[fetch2] || false;

  console.log(fetchUrl, "este");

  return (
    <div className="categories">
      <Navbar />
      <Banner />
      <Row
        title={title}
        fetchUrl={fetchUrl}
        isLargeRow
        isCategory
        fetchUrl2={fetch22}
      />
    </div>
  );
};

export default Categories;
