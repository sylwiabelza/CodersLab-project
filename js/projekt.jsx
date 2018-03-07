import React from 'react';

import ReactDOM from 'react-dom';
import '../scss/main.scss';
import {Router,Route,Link,IndexLink,IndexRoute,hashHistory} from 'react-router';
import {Main, MainBialka, MainKorbielow, MainWisla, MainKrynica, MainCzarna, testNames} from './towns.jsx'
import {SectionLeft, SectionRight} from "./sections.jsx";
import {Header} from "./header.jsx";
import {Footer} from "./footer.jsx";


class Section extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            page : -1,
        }
    }


    clickHandle = (recivedElem) => {
        this.setState({
            page: recivedElem
        })
    }
    render (){
            return <section className="container">
                <div className="row">
                    <SectionLeft click={this.clickHandle} arrayleft={this.props.arrayleft}/>
                    <SectionRight state={this.state.page}/>
                </div>
            </section>

    }
}


class App extends React.Component {
    render (){
        return <div>
            <Header/>
            <Section arrayleft={testNames}/>
            <Footer/>
        </div>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});