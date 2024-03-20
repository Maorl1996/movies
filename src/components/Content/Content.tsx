import React, { useEffect, useState } from "react";
import MovieApi from "../../apis/MovieApi.ts/MovieApi";
import { Movie, SearchBy } from "../../types/movie.types";
import styles from "./Content.module.scss";
import MovieCard from "../MovieCard/MovieCard";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import searchIcon from "../../assets/icons/find.png";
import binIcon from "../../assets/icons/bin.png";

const Content = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const [searchBy, setSearchBy] = useState<SearchBy>(SearchBy.Name);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setSearchBy(event.target.value as SearchBy);
  };

  const getMovies = async () => {
    const movies = await MovieApi.getMovies();

    setMovies(movies);
    setFilteredMovies(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleSearchValue = (event: any) => {
    setSearchValue(event.target.value);
  };

  const filteredMovie = (movie: Movie) => {
    if (searchBy === SearchBy.Rating) {
      return movie[searchBy] === searchValue;
    }

    return movie[searchBy]
      ?.toLocaleLowerCase()
      ?.includes(searchValue?.toLocaleLowerCase());
  };

  const SearchMovie = () => {
    const filteredMovies = movies.filter(filteredMovie);

    setFilteredMovies(filteredMovies);
  };

  const initMovies = () => {
    setFilteredMovies(movies);
    setSearchValue("");
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>
        <span>EXPLORE YOUR NEXT </span> <span> MOVIES AND TV SHOWS</span>
      </span>
      <div className={styles.searchContainer}>
        <FormControl className={styles.searchBy} fullWidth>
          <InputLabel id="demo-simple-select-label">Search by</InputLabel>
          <Select value={searchBy} label="Age" onChange={handleChange}>
            <MenuItem value={SearchBy.Name}>{SearchBy.Name}</MenuItem>
            <MenuItem value={SearchBy.Year}>{SearchBy.Year}</MenuItem>
            <MenuItem value={SearchBy.Rating}>{SearchBy.Rating}</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="filled-basic"
          label="Value"
          variant="filled"
          fullWidth
          value={searchValue}
          onChange={handleSearchValue}
          className={styles.searchValue}
        />

        <button className={styles.button} onClick={SearchMovie}>
          Search
          <img height={15} width={15} src={searchIcon} alt="SearchIcon" />
        </button>

        <button className={styles.button} onClick={initMovies}>
          Clear all
          <img height={15} width={15} src={binIcon} alt="binIcon" />
        </button>
      </div>
      <div className={styles.moviesContainer}>
        {filteredMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Content;
