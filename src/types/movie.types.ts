export interface Movie {
  id: string;
  title: string;
  image: string;
  synopsis: string;
  rating: string;
  released: string;
  runtime: string;
  largeimage: string;
  unogsdate: string;
}

export enum SearchBy {
  Name = "title",
  Year = "released",
  Rating = "rating",
}
