import React from 'react';
import '../scss/main.scss';
import Showlist from './Showlist';
import ShowDetail from './ShowDetail';
import { Switch, Route } from 'react-router-dom';
import Filter from './Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      isRunning: false,
      value: ''
    }
    this.getDataFromApi = this.getDataFromApi.bind(this);
    this.renderShowDetail = this.renderShowDetail.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  componentDidMount () {
    this.getDataFromApi ();
  }

  getDataFromApi() {
    // hacemos la llamada al servidor
    fetch(`http://api.tvmaze.com/search/shows?q=girs`)
      .then(response => response.json())
      .then(responseData => {
        // y cuando responde el servidor guardamos los datos en el estado
        this.setState({ shows: responseData });
      });
  }

  handleInputValue(event){
    this.setState({ value: event.target.value})
  }

  submitSearch(event){
    event.preventDefault();
  }

  handleCheckbox() {
    this.setState(prevState => {
      return {
        isRunning: !prevState.isRunning
      }
    })
  }

  renderShowDetail(props){
    const urlId = props.match.params.id;
    const showsData = this.state.shows;
      for(let showObj of showsData) {
      if(showObj.show.id === parseInt(urlId)) {
        return <ShowDetail showItem={showObj} />
    }
  }
  }
  

  render() {
    const {shows, isRunning, value} = this.state;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1 className="main-title"> tv show finder </h1>
            <Filter handleInputValue={this.handleInputValue}
                    submitSearch={this.submitSearch}
                    value={value}
                    handleCheckbox={this.handleCheckbox} 
                    isRunning={isRunning}
            />
            <Showlist dataList={shows} 
                      isRunning={isRunning} 
                      value={value}
            />
          </Route>
          <Route path="/show/:id" 
                 render={this.renderShowDetail}
          />
        </Switch>
      </div>
    );
  }
}

export default App;


