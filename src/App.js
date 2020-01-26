import React, {Component} from 'react';
import people from './services/people'
import Header from './components/Header'
import Home from './container/Home'
import { Provider } from "react-redux"
import './App.css';

//store data
import store from "./store";

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <Header />
              <div className="container">
                <Home />
              </div>
          </div>
      </Provider> 
    )
  }
}

export default App;
