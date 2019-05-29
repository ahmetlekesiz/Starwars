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
        <p>Imperdiet proin fermentum leo vel orci porta non pulvinar. Eget nunc lobortis mattis aliquam faucibus purus in massa. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Mi quis hendrerit dolor magna eget est lorem ipsum. Scelerisque eu ultrices vitae auctor eu augue. Integer eget aliquet nibh praesent tristique magna sit. Bibendum neque egestas congue quisque egestas diam. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Nunc non blandit massa enim. Amet justo donec enim diam vulputate ut pharetra.</p>
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
