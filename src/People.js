import React, { Component } from "react";

class People extends Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://swapi.co/api/people/?format=json";
    const response = await fetch(url);
    const data = await response.json();
    const array = data.results;
    array.sort(function(b, a) {
      return a.mass- b.mass;
    });
    console.log(array);
    this.setState({people: array, loading: false});
  }

  render() {
    return (
      <div>
        <h2>PEOPLE</h2>
        {this.state.loading || !this.state.people ? (
          <div>loading...</div>
        ) : (
          <div>
            <ol>
            {this.state.people.map(person => (
              <div key={person.url}>
                  <li>{person.name}</li>
              </div>
            ))}
            </ol>
          </div>
        )}
      </div>
    );
  }
}

export default People;
