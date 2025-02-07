import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import { useTheme } from "../../context/ThemeContext";

import StyledComponents from "./style";

export default function Film() {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  const { theme } = useTheme();

  const { movieId } = useParams();

  const getFilm = () => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: {
        api_key: "26b0f4e2771ca31141c6fa3060b9b615",
        language: "pt-BR",
      },
    }).then((res) => {
      setMovie(res.data);
    });
  };

  const getTrailer = () => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      params: {
        api_key: "26b0f4e2771ca31141c6fa3060b9b615",
        language: "pt-BR",
      },
    }).then((res) => {
      const trailers = res.data.results.filter(
        (video) => video.type === "Trailer" && video.iso_639_1 === "pt"
      );

      if (trailers.length > 0) {
        const officialTrailer = trailers.find((trailer) => trailer.official);
        if (officialTrailer) {
          setTrailerKey(officialTrailer.key);
        } else {
          setTrailerKey(trailers[0].key);
        }
      }
    });
  };

  useEffect(() => {
    getFilm();
    getTrailer();
  }, []);

  const youtubeURL = trailerKey
    ? `https://www.youtube.com/embed/${trailerKey}`
    : null;

  return (
    <StyledComponents.StyledBody theme={theme}>
      <StyledComponents.StyledInfoFilm
        theme={theme}
        backgroundImage={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
      >
        <StyledComponents.StyledPosterFilm theme={theme}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt=""
          />
        </StyledComponents.StyledPosterFilm>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <StyledComponents.StyledTitle theme={theme}>
                {movie?.title}
              </StyledComponents.StyledTitle>
              <StyledComponents.StyledSubtitle theme={theme}>
                Titulo:{movie?.original_title}
              </StyledComponents.StyledSubtitle>
              <StyledComponents.StyledTagline theme={theme}>
                {movie?.tagline}
              </StyledComponents.StyledTagline>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <StyledComponents.StyledContainerInfo theme={theme}>
                <span>POPULARIDADE</span>
                <span>{movie?.popularity}</span>
              </StyledComponents.StyledContainerInfo>
              <StyledComponents.StyledContainerInfo theme={theme}>
                <span>VOTOS</span>
                <span>{movie?.vote_count}</span>
              </StyledComponents.StyledContainerInfo>
            </div>
          </div>
          <StyledComponents.StyledContainerInfoDad theme={theme}>
            <StyledComponents.StyledContainerSynopsis theme={theme}>
              <span>SINOPSE</span>
              <span>{movie?.overview}</span>
            </StyledComponents.StyledContainerSynopsis>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "start",
                width: "60%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "100%",
                }}
              >
                <div style={{ width: "100%" }}>
                  <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
                    <StyledComponents.StyledContainerInfoFilm theme={theme}>
                      <span>Lançamento</span>
                      <span>{movie?.release_date}</span>
                    </StyledComponents.StyledContainerInfoFilm>
                    <StyledComponents.StyledContainerInfoFilm theme={theme}>
                      <span>Duração</span>
                      <span>{movie?.runtime} minutos</span>
                    </StyledComponents.StyledContainerInfoFilm>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
                  <StyledComponents.StyledContainerInfoFilm theme={theme}>
                    <span>Situação</span>
                    <span>{movie?.status}</span>
                  </StyledComponents.StyledContainerInfoFilm>
                  <StyledComponents.StyledContainerInfoFilm theme={theme}>
                    <span>Idioma</span>
                    <span>{movie?.original_language}</span>
                  </StyledComponents.StyledContainerInfoFilm>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
                <StyledComponents.StyledContainerInfoFilm theme={theme}>
                  <span>Orçamento</span>
                  <span>{movie?.budget}</span>
                </StyledComponents.StyledContainerInfoFilm>
                <StyledComponents.StyledContainerInfoFilm theme={theme}>
                  <span>Receita</span>
                  <span>{movie?.revenue}</span>
                </StyledComponents.StyledContainerInfoFilm>
                <StyledComponents.StyledContainerInfoFilm theme={theme}>
                  <span>Lucro</span>
                  <span>{movie?.revenue - movie?.budget}</span>
                </StyledComponents.StyledContainerInfoFilm>
              </div>
            </div>
          </StyledComponents.StyledContainerInfoDad>
          <div style={{ marginTop: "1rem" }}>
            <StyledComponents.StyledContainerInfo theme={theme}>
              <span>Gêneros</span>
              <div style={{ display: "flex", gap: "1rem" }}>
              {movie?.genres?.map((genre) => (
                <StyledComponents.StyledBoxGenres theme={theme}>
                  <span>{genre.name}</span>
                </StyledComponents.StyledBoxGenres>
              ))}
              </div>
            </StyledComponents.StyledContainerInfo>
          </div>
        </div>
      </StyledComponents.StyledInfoFilm>
      {youtubeURL && (
        <StyledComponents.StyledIframeContainer>
          <iframe
            src={youtubeURL}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </StyledComponents.StyledIframeContainer>
      )}
    </StyledComponents.StyledBody>
  );
}
