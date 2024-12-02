import classes from './header.module.css'
import Nav from '../nav/nav'

import HeaderButton from './img/HeaderButton.png'
import Twitter from './img/twitter.png'
import Pinterest from './img/pinterest.png'
import Facebook from './img/facebook.png'
import Baller from './img/ball.png'

export default function Header(){
    return(
        <>
            <header>
                <Nav/>
                <div className={classes.header_con}>
                    <div className={classes.header_con_con}>
                        <div className={classes.header_top}>
                            <div className={classes.header_top_title}>
                                <p>
                                    Minimize your tabs.
                                    Find the trends!
                                </p>
                            </div>
                            <div className={classes.header_top_desc}>
                                <p>
                                    Don’t let your computer memories consumes all of those browser tabs. 
                                    Findtrend  let you gathers all of your favorite website into one place.
                                </p>
                            </div>
                            <div className={classes.header_top_button}>
                                <button type="button">Get Started 🔥</button>
                                <img src={HeaderButton} alt="" />
                            </div>
                        </div>
                        <div className={classes.header_bot}>
                            <img src={Twitter} alt="" />
                            <img src={Pinterest} alt="" />
                            <img src={Facebook} alt="" />
                            <img src={Baller} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}