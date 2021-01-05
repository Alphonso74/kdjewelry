import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import MainPage from "./Components/MainPage/MainPage";
import Catalog from './Components/Catalog/Catalog';
import MyOrder from './Components/MyOrder/MyOrder';
import Contact from './Components/Contact/Contact';
import Customs from './Components/Customs/Customs';

class App extends Component {

    state = {

        currentComponent: null
    };

    render(){

        let routes = (

            <Switch>

                {/*<Route path="/auth"  component={}/>*/}
                <Route path="/" exact component={MainPage}/>
                <Route path="/Catalog" exact component={Catalog}/>
                <Route path="/MyOrder" exact component={MyOrder}/>
                <Route path="/Contact" exact component={Contact}/>
                <Route path="/Customs" exact component={Customs}/>





                {/*<Redirect to="/"/>*/}

            </Switch>

        );

        return (
            <div>



                {routes}



            </div>
        );
    }
}

export default withRouter(App);
