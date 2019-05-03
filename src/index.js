import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Searching/Search';
import Map from './Components/Map/Map'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class Routes extends React.Component {
    state ={ places: null}
    getdata=(places)=>{
        this.setState({places})
    }
    render() {

        return (
            <BrowserRouter>
                <div>

                    <Switch>
                        <Route path="/Search" render={ () => <Search places={this.state.places}/>}></Route>
                        <Route path="/Map" component={Map}></Route>
                        <Route path="/" render={() => <App getData={this.getdata}/>}></Route>
                    </Switch>

                </div>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(
    
   <Routes/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
