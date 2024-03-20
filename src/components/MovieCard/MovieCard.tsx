import React, { useState } from "react";
import { Movie } from "../../types/movie.types";
import styles from "./MovieCard.module.scss";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import MovieDialog from "../MovieDialog/MovieDialog";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [shouldOpenMovieDialog, setShouldOpenMovieDialog] =
    useState<boolean>(false);

  return (
    <>
      <div className={styles.container}>
        <img src={movie.image} className={styles.image} alt={movie.title} />
        <span className={styles.movieName}>
          {movie.title} ({movie.released})
        </span>
        {!!movie.rating && (
          <span>
            <StarIcon height={15} width={15} /> {movie.rating}
          </span>
        )}
        <button
          className={styles.button}
          onClick={() => setShouldOpenMovieDialog(true)}
        >
          <span>Read more</span> <ArrowIcon height={20} width={20} />
        </button>
      </div>
      {shouldOpenMovieDialog && (
        <MovieDialog
          isOpen={shouldOpenMovieDialog}
          onClose={() => setShouldOpenMovieDialog(false)}
          movie={movie}
        />
      )}
    </>
  );
};

export default MovieCard;
