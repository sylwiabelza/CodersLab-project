import React from "react";
// Collection of the currort cities in Poland
class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weather: null
        }
    }

    componentDidMount (){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=7532564&APPID=b93830df2f252cbc2dbf045f796c4754')
            .then(data=> data.json())
            .then(data=> {
                this.setState ({
                    weather: data.list[0].main.temp
                })
            })
    }
    render (){
        return <div>{(this.state.weather - 273.15).toFixed(1)}</div>
    }
}


class MainBialka extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weather: null
        }
    }

    componentDidMount (){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=776144&APPID=b93830df2f252cbc2dbf045f796c4754')
            .then(data=> data.json())
            .then(data=> {
                this.setState ({
                    weather: data.list[0].main.temp
                })
            })
    }
    render (){
        return <div>{(this.state.weather - 273.15).toFixed(1)}</div>
    }
}


class MainKrynica extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weather: null
        }
    }

    componentDidMount (){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=767374&APPID=b93830df2f252cbc2dbf045f796c4754')
            .then(data=> data.json())
            .then(data=> {
                this.setState ({
                    weather: data.list[0].main.temp
                })
            })
    }
    render (){
        return <div>{(this.state.weather - 273.15).toFixed(1)}</div>
    }
}

class MainCzarna extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weather: null
        }
    }

    componentDidMount (){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=773935&APPID=b93830df2f252cbc2dbf045f796c4754')
            .then(data=> data.json())
            .then(data=> {
                this.setState ({
                    weather: data.list[0].main.temp
                })
            })
    }
    render (){
        return <div>{(this.state.weather - 273.15).toFixed(1)}</div>
    }
}
class MainWisla extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weather: null
        }
    }

    componentDidMount (){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=3081874&APPID=b93830df2f252cbc2dbf045f796c4754')
            .then(data=> data.json())
            .then(data=> {
                this.setState ({
                    weather: data.list[0].main.temp
                })
            })
    }
    render (){
        return <div>{(this.state.weather - 273.15).toFixed(1)}</div>
    }
}
class MainKorbielow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weather: null
        }
    }

    componentDidMount (){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=3095209&APPID=b93830df2f252cbc2dbf045f796c4754')
            .then(data=> data.json())
            .then(data=> {
                this.setState ({
                    weather: data.list[0].main.temp
                })
            })
    }
    render (){
        return <div>{(this.state.weather - 273.15).toFixed(1)}</div>
    }
}


const testNames = [{
    title: "Szczyrk",
    id: -1,

},{
    title: "Białka Tatrzańska",
    id: 0
},{
    title: "Krynica",
    id: 1
},{
    title: "Czarna Góra",
    id: 2
},{
    title: "Wisla",
    id: 3
},{
    title: "Korbielów",
    id: 4
},{
    title: "Val Thorens",
    id: 11
}]




export {Main, MainBialka, MainCzarna, MainKrynica, MainKorbielow, MainWisla, testNames}