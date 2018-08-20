// import Counters from './components/counters';
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginForm from './components/loginForm';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import NavBar from './components/navBar';
import Customers from './components/customers';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import './App.css';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // constructor() {
  //   super();
  //   // console.log('App - constructor');
  //   // this.state = this.props.something;
  // };

  componentDidMount() {
    // Ajax Call
    // this.setState({ movies})
    // console.log('App - mounted');

  };

  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  handleDecrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };


  render() {
    // console.log('App - rendered');
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
          {/* <NavBar />
        <Movies /> */}
        </main>
      </React.Fragment>

      // < React.Fragment >
      //   <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      //   <main className="container">
      //     <Counters
      //       counters={this.state.counters}
      //       onReset={this.handleReset}
      //       onIncrement={this.handleIncrement}
      //       onDecrement={this.handleDecrement}
      //       onDelete={this.handleDelete}
      //     />
      //   </main>
      // </React.Fragment >

    );
  }
}

export default App;
