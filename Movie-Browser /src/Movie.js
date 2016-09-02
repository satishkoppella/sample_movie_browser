import React from 'react';
import './Movie.css'

function Movie({movie}) {
  const {Title, Plot, Poster, Actors, Director, Writer, Genre, Year, Language, imdbRating, imdbVotes} = movie;
  return (
    <div className="Movie">
      <MovieImage poster={Poster} title={Title} />
      <MovieDescription
        title={Title}
        plot={Plot}
        actors={Actors}
        director={Director}
        writer={Writer}
        genre={Genre}
        lang={Language}
        rating={imdbRating}
        votes={imdbVotes}
        year={Year} />
    </div>
  );
}


function MovieNotFound({movie}) {
  return (
    <div className="Movie-Error">
      <h2>{movie.Error}</h2>
      <p>Please enter a valid movie name.</p>
    </div>
  );
}

function MovieImage(props) {
  return (
    <div className="Movie-Image">
      <img src={props.poster} alt={props.title}/>
    </div>
  );
}

function MovieDescription(props) {
  return (
    <div className="Movie-Description">
      <div className="Movie-Header">
        <h2 className="Movie-Title">{props.title} - ({props.year})</h2>
        <h4>Genre - {props.genre}</h4>
        <p><span className="Movie-Stats-Icon-Star Movie-Stats-Icon fa fa-star"></span><strong> Rating: </strong> {props.rating} <span className="Movie-Stats-Divider">|</span> <span className="Movie-Stats-Icon-Heart Movie-Stats-Icon fa fa-heart"></span><strong> Votes: </strong> {props.votes}</p>
      </div>
      <div className="Movie-Synopsis">
        <h4 className="text-underline">Synopsis</h4>
        <p>{props.plot}</p>
      </div>
      <div className="Movie-Crew">
        <h4 className="text-underline">Cast &amp; Crew</h4>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td><strong>Director</strong></td>
              <td>{props.director}</td>
            </tr>
            <tr>
              <td><strong>Writer</strong></td>
              <td>{props.writer}</td>
            </tr>
            <tr>
              <td><strong>Actors</strong></td>
              <td>{props.actors}</td>
            </tr>
            <tr>
              <td><strong>Language</strong></td>
              <td>{props.lang}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

class MovieContainer extends React.Component {
  render() {
    const {movie} = this.props;
    console.log(movie);
    const Found = (movie.Response === "True") ? true : false;
    return (
      <div className="Movie-Container">
        {Found ? <Movie movie={movie} /> : <MovieNotFound movie={movie} />}
      </div>
    )
  }
}

export default MovieContainer;