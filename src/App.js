import React from "react";
import data from "./components/data.json";
import RenderData from "./components/RenderData"

class App extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    list: {},
    loading: true,
  };
}

  componentDidMount() {
    setTimeout(() => {
      this.setState({ list: data, loading: false });
    }, 1000);
  }

  render(){
    return(
    <div className="layout">
    {this.state.loading ? (
      <div className="loading">Loading...</div>
    ) : (
      <>
      <h2 className="title">Elije tu propia aventura:</h2>
      <RenderData data={this.state.list}/>
      </>
    )}
  </div>
    );
  }
}

export default App;
