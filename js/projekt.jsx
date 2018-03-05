import React from 'react';

import ReactDOM from 'react-dom';
import '../scss/main.scss';
import {Router,Route,Link,IndexLink,IndexRoute,hashHistory} from 'react-router';
import {Main, MainBialka, MainKorbielow, MainWisla, MainKrynica, MainCzarna, testNames} from './towns.jsx'





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

class SectionLeft extends React.Component {

    handleClick = (givenItem)=>{
        if(typeof this.props.click === "function"){
            this.props.click(givenItem)
        }
    }
    render (){
        // console.log(this.props.arrayleft)
        return <div className="col-3">
            <div className="row">
                <div>
                    <div className="col-12">
                        {this.props.arrayleft.map((elem,i)=>{
                            return <div className='left-side' key={i} onClick={()=>{
                                this.handleClick(elem.id)
                            }}> {elem.title} </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
    }
}

class SectionRight extends React.Component {

    render (){
        let contents = ""
        if (this.props.state == -1) {
            contents = <Main/>
Main    }else if(this.props.state == 0){
            contents = <MainBialka/>
        }else if(this.props.state == 1){
            contents = <MainKrynica/>
        }else if(this.props.state == 2){
            contents = <MainCzarna/>
        }else if(this.props.state == 3){
            contents = <MainWisla/>
        }else if(this.props.state == 4){
            contents = <MainKorbielow/>
        }else{
            contents = <h1>Nie ma takiej podstrony</h1>
        }


        return <div style={{minHeight: '450px'}} className="col-6">

            <div className="main">
                {contents}
            </div>

        </div>;
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