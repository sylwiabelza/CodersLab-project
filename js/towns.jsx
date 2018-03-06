import React from "react";
// Collection of the currort cities in Poland




class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            degreeMax: null,
            degreeMin: null,
            wind: null,
            clouds: null,
            humidity: null
        }
    }

    componentDidMount (){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=7532564&APPID=b93830df2f252cbc2dbf045f796c4754')
            .then(data=> data.json())
            .then(data=> {
                this.setState ({
                    degreeMax: data.list[0].main.temp_max,
                    degreeMin: data.list[0].main.temp_min,
                    wind: data.list[0].wind.speed,
                    clouds: data.list[0].clouds.all,
                    humidity: data.list[0].main.humidity
                })
            })
    }
    render (){
        return <div>
            <div style={{height: '450px'}}><img className='size' src='../images/large.jpg'/></div>
            <div>
                <table className='conditions'>
                    <thead>
                    <tr>
                        <th> Temperatura </th>
                        <th> Wiatr </th>
                        <th> Zachmurzenie </th>
                        <th> Wilgotność </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{(this.state.degreeMax - 273.15).toFixed(1)} - {(this.state.degreeMin - 273.15).toFixed(1)}
                        </td>
                        <td>{this.state.wind} m/s</td>
                        <td>{this.state.clouds}%</td>
                        <td>{this.state.humidity}%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}


class MainBialka extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            degreeMax: null,
            degreeMin: null,
            wind: null,
            clouds: null,
            humidity: null
        }
    }

    componentDidMount (){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=776144&APPID=b93830df2f252cbc2dbf045f796c4754')
            .then(data=> data.json())
            .then(data=> {
                this.setState ({
                    degreeMax: data.list[0].main.temp_max,
                    degreeMin: data.list[0].main.temp_min,
                    wind: data.list[0].wind.speed,
                    clouds: data.list[0].clouds.all,
                    humidity: data.list[0].main.humidity

                })
            })
    }
    render (){
        return <div>
            <div style={{height: '450px'}}><img className='size' src='../images/bialka.jpg'/></div>
            <div>
                <table className='conditions'>
                    <thead>
                        <tr>
                            <th> Temperatura </th>
                            <th> Wiatr </th>
                            <th> Zachmurzenie </th>
                            <th> Wilgotność </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{(this.state.degreeMax - 273.15).toFixed(1)} - {(this.state.degreeMin - 273.15).toFixed(1)}
                            </td>
                            <td>{this.state.wind} m/s</td>
                            <td>{this.state.clouds}%</td>
                            <td>{this.state.humidity}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
    }
}


class MainKrynica extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            degreeMax: null,
            degreeMin: null,
            wind: null,
            clouds: null,
            humidity: null        }
    }

    componentDidMount (){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=767374&APPID=b93830df2f252cbc2dbf045f796c4754')
            .then(data=> data.json())
            .then(data=> {
                this.setState ({
                    degreeMax: data.list[0].main.temp_max,
                    degreeMin: data.list[0].main.temp_min,
                    wind: data.list[0].wind.speed,
                    clouds: data.list[0].clouds.all,
                    humidity: data.list[0].main.humidity                })
            })
    }
    render (){
        return <div>
            <div style={{height: '450px'}}><img className='size'  src='../images/krycha.jpg'/></div>
            <div>
                <table className='conditions'>
                    <thead>
                    <tr>
                        <th> Temperatura </th>
                        <th> Wiatr </th>
                        <th> Zachmurzenie </th>
                        <th> Wilgotność </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{(this.state.degreeMax - 273.15).toFixed(1)} - {(this.state.degreeMin - 273.15).toFixed(1)}
                        </td>
                        <td>{this.state.wind} m/s</td>
                        <td>{this.state.clouds}%</td>
                        <td>{this.state.humidity}%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}

class MainCzarna extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            degreeMax: null,
            degreeMin: null,
            wind: null,
            clouds: null,
            humidity: null        }
    }

    componentDidMount (){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=773935&APPID=b93830df2f252cbc2dbf045f796c4754')
            .then(data=> data.json())
            .then(data=> {
                this.setState ({
                    degreeMax: data.list[0].main.temp_max,
                    degreeMin: data.list[0].main.temp_min,
                    wind: data.list[0].wind.speed,
                    clouds: data.list[0].clouds.all,
                    humidity: data.list[0].main.humidity                })
            })
    }
    render (){
        return <div>
            <div style={{height: '450px'}}><img className='size'  src='../images/czar.jpg'/></div>
            <div>
                <table className='conditions'>
                    <thead>
                    <tr>
                        <th> Temperatura </th>
                        <th> Wiatr </th>
                        <th> Zachmurzenie </th>
                        <th> Wilgotność </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{(this.state.degreeMax - 273.15).toFixed(1)} - {(this.state.degreeMin - 273.15).toFixed(1)}
                        </td>
                        <td>{this.state.wind} m/s</td>
                        <td>{this.state.clouds}%</td>
                        <td>{this.state.humidity}%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}
class MainWisla extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            degreeMax: null,
            degreeMin: null,
            wind: null,
            clouds: null,
            humidity: null        }
    }

    componentDidMount (){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=3081874&APPID=b93830df2f252cbc2dbf045f796c4754')
            .then(data=> data.json())
            .then(data=> {
                this.setState ({
                    degreeMax: data.list[0].main.temp_max,
                    degreeMin: data.list[0].main.temp_min,
                    wind: data.list[0].wind.speed,
                    clouds: data.list[0].clouds.all,
                    humidity: data.list[0].main.humidity                })
            })
    }
    render (){
        return <div>
            <div style={{height: '450px'}}><img className='size'  src='../images/wisla.jpg'/></div>
            <div>
                <table className='conditions'>
                    <thead>
                    <tr>
                        <th> Temperatura </th>
                        <th> Wiatr </th>
                        <th> Zachmurzenie </th>
                        <th> Wilgotność </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{(this.state.degreeMax - 273.15).toFixed(1)} - {(this.state.degreeMin - 273.15).toFixed(1)}
                        </td>
                        <td>{this.state.wind} m/s</td>
                        <td>{this.state.clouds}%</td>
                        <td>{this.state.humidity}%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}
class MainKorbielow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            degreeMax: null,
            degreeMin: null,
            wind: null,
            clouds: null,
            humidity: null        }
    }

    componentDidMount (){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=3095209&APPID=b93830df2f252cbc2dbf045f796c4754')
            .then(data=> data.json())
            .then(data=> {
                this.setState ({
                    degreeMax: data.list[0].main.temp_max,
                    degreeMin: data.list[0].main.temp_min,
                    wind: data.list[0].wind.speed,
                    clouds: data.list[0].clouds.all,
                    humidity: data.list[0].main.humidity                })
            })
    }
    render (){
        return <div>
            <div style={{height: '450px'}}><img className='size'  src='../images/korbielow.jpg'/></div>
            <div>
                <table className='conditions'>
                    <thead>
                    <tr>
                        <th> Temperatura </th>
                        <th> Wiatr </th>
                        <th> Zachmurzenie </th>
                        <th> Wilgotność </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{(this.state.degreeMax - 273.15).toFixed(1)} - {(this.state.degreeMin - 273.15).toFixed(1)}
                        </td>
                        <td>{this.state.wind} m/s</td>
                        <td>{this.state.clouds}%</td>
                        <td>{this.state.humidity}%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
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
}]




export {Main, MainBialka, MainCzarna, MainKrynica, MainKorbielow, MainWisla, testNames}