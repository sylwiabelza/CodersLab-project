import React from "react";

class Footer extends React.Component {
    render (){
        return  <footer>

            <div className="container">

                <div className="row">

                    <div className="col-12">

                        <div className="footer">

                            <ul className='mainFlex footerContent'>
                                <li>Polityka prywatności</li>
                                <li>Mapa serwisu</li>
                                <li>Warunki korzystania</li>
                                <li>Twoja reklama</li>


                            </ul>
                            <div className='copyRight'>
                            <span>Copyright &copy; 1900-2100 W - wszelkie prawa zastrzeżone. Email:
                            <a href='mailto: w.nowacky@gmail.com'> Wojciech Nowacki </a>
                            </span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    }
}

export {Footer}