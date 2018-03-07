
import React from "react";
import {Main, MainBialka, MainKorbielow, MainWisla, MainKrynica, MainCzarna, testNames} from './towns.jsx'


{/* */}
class SectionLeft extends React.Component {

    handleClick = (givenItem)=>{
        if(typeof this.props.click === "function"){
            this.props.click(givenItem)
        }
    }
    ;
    render (){
        // console.log(this.props.arrayleft)
        return <div className="col-3">
            <div className="row">
                <div>
                    <div className="col-12">
                        {this.props.arrayleft.map((elem,i)=>{

                            return <div style={{borderRadius: '20%'}} className='left-side' key={i} onClick={()=>{
                                this.handleClick(elem.id)
                            }}><p> {elem.title}</p> </div>
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

export { SectionRight, SectionLeft}