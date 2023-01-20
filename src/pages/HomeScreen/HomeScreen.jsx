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
      <Row
        title="Trending movies"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row
        title="Action movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Horror movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Romance movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
      {/* <Row
        title="All"
        fetchUrl={requests.fetchAll}
        fetchUrl2={requests.fetchAll2}
        isLargeRow
      /> */}
    </div>
  );
};

export default HomeScreen;
