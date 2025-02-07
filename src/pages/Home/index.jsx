import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { mauveDark, purple, purpleDark } from "@radix-ui/colors";
import Button from "@mui/material/Button";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import StyledComponents from "./style";
import { useEffect, useState, useCallback } from "react";

const Home = () => {
  const { theme } = useTheme();
  const colorSchemePurple = theme === "light" ? purple : purpleDark;
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genres, setGenres] = useState([]);
  const [activeFilter, setActiveFilter] = useState(false);
  const navigate = useNavigate();

  const getMovies = useCallback((page, genreId) => {
    const params = {
      api_key: "26b0f4e2771ca31141c6fa3060b9b615",
      language: "pt-BR",
      page: page,
      quantity: 10,
    };

    if (genreId) {
      params.with_genres = genreId;
    }

    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: params,
    })
      .then((res) => {
        const { results } = res.data;
        setMovies(results.slice(0, 10));
        setTotalPages(res.data.total_pages);
      })
      .catch((error) => {
        console.error("Erro ao buscar filmes:", error);
      });
  }, []);

  const searchMovies = useCallback((searchTerm, page) => {
    const params = {
      api_key: "26b0f4e2771ca31141c6fa3060b9b615",
      language: "pt-BR",
      page: page,
    };

    if (searchTerm) {
      params.query = searchTerm;
    }

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: params,
      })
      .then((res) => {
        setMovies(res.data.results.slice(0, 10));
        setTotalPages(res.data.total_pages);
      })
      .catch((error) => {
        console.error("Erro ao buscar filmes:", error);
      });
  }, []);

  const filtersMovies = useCallback(() => {
    // Usando useCallback
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/genre/movie/list",
      params: {
        api_key: "26b0f4e2771ca31141c6fa3060b9b615",
        language: "pt-BR",
      },
    })
      .then((res) => {
        setGenres(res.data.genres);
      })
      .catch((error) => {
        console.error("Erro ao buscar gêneros:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const renderPaginationButtons = () => {
    const pageButtons = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let page = startPage; page <= endPage; page++) {
      pageButtons.push(
        <StyledComponents.PaginationButton
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </StyledComponents.PaginationButton>
      );
    }

    return pageButtons;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genreId) => {
    setSelectedGenre(genreId);
    setCurrentPage(1);
  };

  const handleMovieClick = (movieId) => {
    navigate(`/film/${movieId}`);
  };

  const debouncedSearch = useCallback(
    (searchTerm, page) => {
      searchMovies(searchTerm, page);
    },
    [searchMovies]
  );

  useEffect(() => {
    let timeoutId;

    if (searchTerm) {
      timeoutId = setTimeout(() => {
        debouncedSearch(searchTerm, currentPage);
      }, 500); // Atraso de 500ms
    } else {
      getMovies(currentPage);
    }

    return () => clearTimeout(timeoutId);
  }, [searchTerm, currentPage, debouncedSearch, getMovies]);

  useEffect(() => {
    filtersMovies();
  }, [filtersMovies]);

  useEffect(() => {
    if (selectedGenre !== null) {
      getMovies(currentPage, selectedGenre);
    }
  }, [currentPage, selectedGenre, getMovies]);

  return (
    <StyledComponents.StyledBody>
      <StyledComponents.StyledSearchMovies>
        <StyledComponents.StyledTextField
          value={searchTerm}
          variant="outlined"
          onChange={handleSearchChange}
          placeholder="Pesquise por filmes"
        />
        <Button
          variant="outlined"
          style={{
            height: "3.5rem",
            backgroundColor: `${colorSchemePurple.purple5}60`,
            border: "none",
            color: "whitesmoke",
          }}
          onClick={() => setActiveFilter(!activeFilter)}
        >
          <TuneIcon />
        </Button>
      </StyledComponents.StyledSearchMovies>
      {activeFilter && (
        <StyledComponents.StyledFilter>
          {genres.map((genre) => (
            <Button
              variant="outlined"
              key={genre.id}
              onClick={() => handleGenreSelect(genre.id)}
              style={{
                backgroundColor:
                  selectedGenre === genre.id
                    ? ` ${mauveDark.mauve2}80`
                    : `${purpleDark.purple9}80`,
                border: "none",
                color:
                  selectedGenre === genre.id ? "white" : `${mauveDark.mauve1}`,
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              {genre.name}
            </Button>
          ))}
        </StyledComponents.StyledFilter>
      )}
      <StyledComponents.StyledList>
        {movies.map((movie) => (
          <StyledComponents.StyledListItem
            key={movie.id}
            background={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            onClick={() => handleMovieClick(movie.id)}
            style={{ cursor: "pointer" }}
          >
            <span
              style={{
                fontWeight: 600,
                fontSize: "20px",
                paddingLeft: "20px",
                paddingBottom: "20px",
                color: "white",
              }}
            >
              {movie.title.toUpperCase()}
            </span>
          </StyledComponents.StyledListItem>
        ))}
      </StyledComponents.StyledList>
      <StyledComponents.PaginationContainer>
        <StyledComponents.PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowBackIosIcon />
        </StyledComponents.PaginationButton>
        {renderPaginationButtons()}
        <StyledComponents.PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArrowForwardIosIcon />
        </StyledComponents.PaginationButton>
      </StyledComponents.PaginationContainer>
    </StyledComponents.StyledBody>
  );
};

export default Home;
