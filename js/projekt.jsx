import React from 'react';

import ReactDOM from 'react-dom';
import '../scss/main.scss';
import {Router,Route,Link,IndexLink,IndexRoute,hashHistory} from 'react-router';
import {Main, MainBialka, MainKorbielow, MainWisla, MainKrynica, MainCzarna, testNames} from './towns.jsx'
import {SectionLeft, SectionRight} from "./sections.jsx";


class Header extends React.Component {
    render (){
        return <header className="container">

            <div className="row ">

                <div className="col-12 ">
                    <ul className='mainFlex'>
                        <li>LOGO</li>
                        <li>Kamery</li>
                        <li>Noclegi</li>
                        <li>Sprzęt</li>
                        <li>Galeria</li>

                    </ul>
                </div>


            </div>

        </header>
    }
}



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

class Footer extends React.Component {
    render (){
        return  <footer>

            <div className="container">

                <div className="row">

                    <div className="col-12">

                        <div className="footer">

                            <ul className='mainFlex'>
                                <li>LOGO</li>
                                <li>TM</li>
                                <li>Polecane</li>
                                <li>Kontakt</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
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