import React from "react";
import "./HomeScreen.css";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import requests from "../../services/requests";
import Row from "../../Components/Row/Row";
const HomeScreen = () => {
  return (
    <div className="homeScreeen">
      <Navbar />
      <Banner />
      <Row
        title="Netflix originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending movies" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated movies" fetchUrl={requests.fetchTopRated} />
    </div>
  );
};

export default HomeScreen;
