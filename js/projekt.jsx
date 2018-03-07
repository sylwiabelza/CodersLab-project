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

                <nav className="col-12 ">
                    <ul className='mainFlex'>
                        <li><div className='logo'></div></li>
                        <li>
                          <div className='dropDown'>
                              <span>Kamery</span>
                              <div className='content'>
                                  <div><a target="_blank" href='http://www.szczyrkowski.pl/resort/kamery/'> Szczyrk</a></div>
                                  <div><a target="_blank" href='https://bialkatatrzanska.pl/multimedia/kamerki'> Białka Tatrzańska</a></div>
                                  <div><a target="_blank" href='https://korbielow.net/kamery_solisko/index.php'> Korbielów</a></div>
                                  <div><a target="_blank" href='http://zima.nowaosada.pl/kamery-on-line/'> Wisła</a></div>
                                  <div><a target="_blank" href='http://www.krynica-zdroj.pl/pl/442/0/kamery-internetowe.html'> Krynica</a></div>
                                  <div><a target="_blank" href='https://www.czarnagora.pl/osrodek-narciarski/wazne-informacje/kamery-pogoda'> Czarna Góra</a></div>


                              </div>
                          </div>
                        </li>
                        <li>Noclegi</li>
                        <li>Sprzęt</li>
                        <li>Galeria</li>

                    </ul>
                </nav>


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
                                <li><div className='logo'></div></li>
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