import React from 'react';
import axios from 'axios';
import MovieContainer from './Movie';
import './App.css';


class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
      movie: null
    };
  }

  componentDidMount() {
    this.refs.title.focus();
  }

  reset = () => {
    this.refs.title.value = '';
    this.refs.title.focus();
  }

  onMovie = (title) => {
    return axios.get('http://www.omdbapi.com/?t=' + title.split(' ').join('+') + '&y=&plot=full&r=json');
  }

  onSubmit = (e) => {
    e.preventDefault();
    const self = this;
    const title = self.refs.title.value;
    self.setState({ loading: true });
    self.onMovie(title).then(({data}) => {
      self.setState({
        loading: false,
        movie: data
      });
    });
    self.reset();
  }

  render() {
    const {movie} = this.state;
    return (
      <div className="App-Container">
        <h1 className="App-Title">Movie Browser</h1>
        <form
          className="App-Form"
          onSubmit={this.onSubmit}>
          <input
            id="title"
            className="App-Form-Input"
            ref="title"
            name="title"
            placeholder="Enter movie title" />
        </form>
        {movie ? <MovieContainer movie={movie} /> : null}
      </div>
    )
  }
}

export default App;
