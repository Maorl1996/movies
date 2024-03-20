import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { Movie } from "../../types/movie.types";
import styles from "./MovieDialog.module.scss";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";

interface MovieDialogProps {
  isOpen: boolean;
  onClose: () => void;
  movie: Movie;
}

const MovieDialog = ({ isOpen, onClose, movie }: MovieDialogProps) => {
  const formattedTimeString = movie.runtime?.replace(/(h)(\d+m)/, "$1 $2");

  return (
    <Dialog fullWidth open={isOpen} onClose={onClose}>
      <div className={styles.content}>
        <img src={movie.largeimage || movie.image} alt={movie.title} />

        <div className={styles.rigthSide}>
          <div className={styles.description}>
            <span className={styles.title}>{movie.title}</span>
            <span>{formattedTimeString}</span>
            {movie.rating && (
              <span>
                <StarIcon height={20} width={20} /> {movie.rating}/10
              </span>
            )}
            <div dangerouslySetInnerHTML={{ __html: movie.synopsis }} />
          </div>
          <div className={styles.button} onClick={onClose}>
            <ArrowIcon className={styles.arrow} height={20} width={20} />{" "}
            <span>Back to list</span>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default MovieDialog;
