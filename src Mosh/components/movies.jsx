import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "../components/common/like";
import Pagination from "./common/pagination";
import { paginate } from "../components/utils/paginate";
import ListGroup from "./common/listGroup";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4, // number of movies in each page
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    // console.log(movie); -> just to see if it works.
    const movies = this.state.movies.filter((m) => m._id !== movie._id);

    // this.setState({ movies: movies }); ->  it overrides the movies in state_if prop and value are the same, we can write only one of them.
    this.setState({ movies });
  };

  handleLike = (movie) => {
    // console.log("liked!", movie) -> to check the console and make sure it works correctly for each movie.
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page }); // we set the currentPage to page
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    if (count === 0)
      return (
        <p className="text-xl text-slate-400">
          There are no movies in the database.
        </p>
      );

    const filterd =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filterd, currentPage, pageSize);

    return (
      <div className="container grid grid-cols-12 gap-x-4">
        <div className="col-span-2">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col-span-10">
          <p className="container mb-10 pl-6 text-xl text-slate-400">
            Showing {filterd.length} movies in the database.
          </p>
          <table className="container mb-10 w-full table-auto border-collapse text-xl">
            <thead>
              <tr>
                <th className="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                  Title
                </th>
                <th className="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                  Genre
                </th>
                <th className="border-b p-4 pr-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                  Stock
                </th>
                <th className="border-b p-4 pr-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                  Rate
                </th>
                <th className="border-b p-4 pr-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200"></th>
                <th className="border-b p-4 pr-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200"></th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
              {movies.map((movie) => {
                //* we set key for the element which repeating!
                return (
                  <tr key={movie._id}>
                    <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      {movie.title}
                    </td>
                    <td className="border-b border-slate-100 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      {movie.genre.name}
                    </td>
                    <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      {movie.numberInStock}
                    </td>
                    <td className="border-b border-slate-100 p-4 pl-6 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      {movie.dailyRentalRate}
                    </td>
                    <td className="border-b border-slate-100 p-4 pr-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      <Like
                        onClick={() => this.handleLike(movie)}
                        liked={movie.liked}
                      />
                    </td>
                    <td className="border-b border-slate-100 p-4 pl-6 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="rounded bg-red-600 px-3 py-1 text-white active:bg-red-700 "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            itemsCount={filterd.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
