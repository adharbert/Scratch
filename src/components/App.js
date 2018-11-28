import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <h1>My React App</h1>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;
