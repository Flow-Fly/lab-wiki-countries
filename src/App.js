import { Route } from 'react-router-dom';

import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    countries: null,
  };

  async componentDidMount() {
    try {
      const {data} = await axios.get('https://restcountries.eu/rest/v2/all');
      this.setState({
        countries: data
      })
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (!this.state.countries) return null
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            <Route
              exact
              path="/country/:id"
              render={(toRender) => (
                <CountryDetails
                  countries={this.state.countries}
                  {...toRender}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
