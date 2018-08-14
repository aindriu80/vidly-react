
import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import _ from 'lodash';
class Movies extends Component {
    state = {
        movies: getMovies(),
        // movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: 'title', order: 'asc' }
    };

    componentDidMount() {
        const genres = [{ _id: "", name: 'All Genres' }, ...getGenres()]
        this.setState({ movies: getMovies(), genres });
    }

    handleDelete = (movie) => {
        // console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };

    handleLike = (movie) => {
        // console.log('Like Clicked', movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };

    handlePageChange = page => {
        // console.log(page);
        this.setState({ currentPage: page });
    };

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
        // console.log(genre);
    };

    handleSort = path => {
        // console.log(path);
        const sortColumn = { ...this.state.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';

        }
        this.setState({ sortColumn });
        // this.setState({ sortColumn: { path, order: 'asc' } });
    };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies } = this.state;

        if (count === 0)
            return <p> There are no movies in the database.</p>;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies in the database.</p>
                    <MoviesTable
                        movies={movies}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>

            </div >
        );
    }
}

export default Movies;