import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.string()
      .required()
      .label("Number in Stock"),
    rate: Joi.string().required()
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Number in stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
        {/* <button
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Save
        </button> */}
      </div>
    );
  }
}

export default MovieForm;
