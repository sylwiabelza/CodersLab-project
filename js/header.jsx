import React from "react";

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
                                    {/*           Cameras NAV                          */}
                                    <div><a target="_blank" href='http://www.szczyrkowski.pl/resort/kamery/'> Szczyrk</a></div>
                                    <div><a target="_blank" href='https://bialkatatrzanska.pl/multimedia/kamerki'> Białka Tatrzańska</a></div>
                                    <div><a target="_blank" href='https://korbielow.net/kamery_solisko/index.php'> Korbielów</a></div>
                                    <div><a target="_blank" href='http://zima.nowaosada.pl/kamery-on-line/'> Wisła</a></div>
                                    <div><a target="_blank" href='http://www.krynica-zdroj.pl/pl/442/0/kamery-internetowe.html'> Krynica</a></div>
                                    <div><a target="_blank" href='https://www.czarnagora.pl/osrodek-narciarski/wazne-informacje/kamery-pogoda'> Czarna Góra</a></div>


                                </div>
                            </div>
                        </li>
                        <li> <div className='dropDown'>
                            <span>Noclegi</span>
                            <div className='content'>
                                {/* Accomodation NAV*/}

                                <div><a target="_blank" href='https://www.trivago.pl/?iSemThemeId=2448&iPathId=366421&sem_keyword=szczyrk%20noclegi&sem_creativeid=196776030164&sem_matchtype=e&sem_network=g&sem_device=c&sem_placement=&sem_target=&sem_adposition=1t1&sem_param1=&sem_param2=&sem_campaignid=109844242&sem_adgroupid=17263328002&sem_targetid=kwd-2402588472&sem_location=9067599&cip=4812008011&gclid=Cj0KCQiAuP7UBRDiARIsAFpxiRIxImQxulT8u9jmc20X7O7aptQVUffjpIl6LcxINnImzHd6apZEFTEaAnY5EALw_wcB'> Szczyrk</a></div>
                                <div><a target="_blank" href='https://www.booking.com/accommodation/city/pl/bialka.pl.html?aid=373424;label=bialka-wzbW2nMUjFQaQ1OM7pxroAS139903444534%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t3%3Aneg%3Afi%3Atikwd-7218031793%3Alp9067599%3Ali%3Adec%3Adm;sid=79532d4e9359f57126d1e0961bf8f6e8;keep_landing=1&gclid=Cj0KCQiAuP7UBRDiARIsAFpxiRIOFwdIy2yx-7jL1yU7kuoRFaKVzeVJWl5kSfmuLRfsql4k6c4hmZ8aAuoNEALw_wcB&'> Białka Tatrzańska</a></div>
                                <div><a target="_blank" href='https://www.booking.com/accommodation/city/pl/korbielow.pl.html?aid=373424;label=korbielow-7PHx46%2ArnRnR7Z65pvODtgS101627925162%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t2%3Aneg%3Afi%3Atikwd-17171939097%3Alp9067599%3Ali%3Adec%3Adm;sid=79532d4e9359f57126d1e0961bf8f6e8;keep_landing=1&gclid=Cj0KCQiAuP7UBRDiARIsAFpxiRL_qEnn7J5ugbP2UvpP3Mabsw3d_81moKo5y6_f2PNOkFxKCT-YiBoaApg2EALw_wcB&'> Korbielów</a></div>
                                <div><a target="_blank" href='https://www.trivago.pl/?iSemThemeId=2448&iPathId=114131&sem_keyword=wis%C5%82a%20noclegi&sem_creativeid=196776029702&sem_matchtype=e&sem_network=g&sem_device=c&sem_placement=&sem_target=&sem_adposition=1t1&sem_param1=&sem_param2=&sem_campaignid=109844242&sem_adgroupid=17263325722&sem_targetid=kwd-12733611380&sem_location=9067599&cip=4812008011&gclid=Cj0KCQiAuP7UBRDiARIsAFpxiRIsJ13T4eFYuFDR_a7E85xbvi3rth--esyrReWR7owQoYa4jWjcW4waAkyWEALw_wcB'> Wisła</a></div>
                                <div><a target="_blank" href='https://www.trivago.pl/?iSemThemeId=2448&iPathId=111696&sem_keyword=krynica%20zdr%C3%B3j%20noclegi&sem_creativeid=196776029966&sem_matchtype=e&sem_network=g&sem_device=c&sem_placement=&sem_target=&sem_adposition=1t1&sem_param1=&sem_param2=&sem_campaignid=109844242&sem_adgroupid=7690243522&sem_targetid=kwd-12733561160&sem_location=9067599&cip=4812008011&gclid=Cj0KCQiAuP7UBRDiARIsAFpxiRIR2f5ADbfmDXTL1jVbKqnZmYQEH8mcoytll6S5hrr-IGhPXVaXq5UaAinVEALw_wcB'> Krynica</a></div>
                                <div><a target="_blank" href='https://www.booking.com/accommodation/city/pl/czarna-gora-pl.pl.html?aid=373424;label=czarna-gora-pl-A0sYKv%2Am4Vr23S%2AtY9LpKAS139894770959%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t4%3Aneg%3Afi%3Atikwd-16896850791%3Alp9067599%3Ali%3Adec%3Adm;sid=79532d4e9359f57126d1e0961bf8f6e8;keep_landing=1&gclid=Cj0KCQiAuP7UBRDiARIsAFpxiRJdp2ePfL2XrcUnn4wE8786_Nr2NfEIjIGtmeUtDmtQnitTgddBIOMaAhRNEALw_wcB&'> Czarna Góra</a></div>


                            </div>
                        </div>
                        </li>
                        <li> <div className='dropDown'>
                            <span>Sprzęt</span>
                            <div className='content'>
                                {/* Equipment NAV*/}
                                <div><a target="_blank" href='http://www.szczyrkowski.pl/resort/kamery/'> Szczyrk</a></div>
                                <div><a target="_blank" href='https://bialkatatrzanska.pl/multimedia/kamerki'> Białka Tatrzańska</a></div>
                                <div><a target="_blank" href='https://korbielow.net/kamery_solisko/index.php'> Korbielów</a></div>
                                <div><a target="_blank" href='http://zima.nowaosada.pl/kamery-on-line/'> Wisła</a></div>
                                <div><a target="_blank" href='http://www.krynica-zdroj.pl/pl/442/0/kamery-internetowe.html'> Krynica</a></div>
                                <div><a target="_blank" href='https://www.czarnagora.pl/osrodek-narciarski/wazne-informacje/kamery-pogoda'> Czarna Góra</a></div>


                            </div>
                        </div></li>
                        <li>Kontakt</li>

                    </ul>
                </nav>


            </div>

        </header>
    }
}

export {Header}