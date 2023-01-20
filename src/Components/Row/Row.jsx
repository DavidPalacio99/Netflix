import React, { useEffect, useState, useRef } from "react";
import "./Row.css";
import axios from "../../services/axios";
import flechaIz from "../../assets/izquierda.png";
import flechaDer from "../../assets/derecha.png";
import Modal from "../../pages/Modal/Modal";

const Row = ({
  title,
  fetchUrl,
  fetchUrl2,
  isCategory,
  isLargeRow = false,
}) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const refContainer = useRef(null);
  const [closeModal, setCloseModal] = useState(true);
  console.log(fetchUrl2, "holaa");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    async function fetchData2() {
      const request = await axios.get(fetchUrl2);
      setMovies((prev) => {
        return [...prev, ...request.data.results];
      });
      return request;
    }

    fetchData();
    if (fetchUrl2) {
      fetchData2();
    }
  }, [fetchUrl, fetchUrl2]);

  const modal = (id) => {
    console.log(id);
    setCloseModal(false);
    const peli = movies.filter((movie) => {
      return movie.id === id;
    });
    setMovie(...peli);
  };

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <Modal
        setCloseModal={setCloseModal}
        closeModal={closeModal}
        movie={movie}
      />
      <div
        className={`${isCategory ? "isCategory" : "row__posters"}`}
        ref={refContainer}
      >
        <img
          src={flechaIz}
          className={`controlPrev izq ${isCategory && "category"}`}
          alt=""
          onClick={() => {
            refContainer.current.scrollLeft -= 300;
          }}
        />
        {movies.map((movie) => {
          return (
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => {
                  modal(movie.id);
                }}
              />
            )
          );
        })}
        <img
          src={flechaDer}
          className={`controlPrev der ${isCategory && "category"}`}
          alt=""
          onClick={() => {
            refContainer.current.scrollLeft += 300;
          }}
        />
      </div>
    </div>
  );
};

export default Row;
