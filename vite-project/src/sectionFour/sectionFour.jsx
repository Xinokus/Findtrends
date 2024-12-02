import classes from './sectionFour.module.css'

import Facebook from './img/Facebook.png'
import Twitter from './img/twitter.png'
import Baller from './img/ball.png'
import Pinterest from './img/pint.png'
import Mario from './img/mario.png'
import Reddit from './img/reddit.png'
import VK from './img/vk.png'
import LinkedIn from './img/linkedin.png'

import Tweet1 from './img/tweet 1.png'
import Tweet2 from './img/tweet 2.png'
import Tweet3 from './img/tweet 3.png'

export default function SectionFour(){
    return(
        <>
            <section className={classes.sect_four}>
                <div className={classes.sect_four_con}>
                    <div className={classes.sect_four_title}>
                        <p>All platform connect to Findtrend</p>
                    </div>
                    <div className={classes.sect_four_socials}>
                        <button type="button"><img src={Facebook} alt="" /></button>
                        <button type="button"><img src={Twitter} alt="" /></button>
                        <button type="button"><img src={Baller} alt="" /></button>
                        <button type="button"><img src={Pinterest} alt="" /></button>
                        <button type="button"><img src={Mario} alt="" /></button>
                        <button type="button"><img src={Reddit} alt="" /></button>
                        <button type="button"><img src={VK} alt="" /></button>
                        <button type="button"><img src={LinkedIn} alt="" /></button>
                    </div>  
                    <div className={classes.sect_four_images}>
                        <div className={classes.sect_four_images_twitter}> {/* Твиттер */}
                            <img src={Tweet1} alt="" />
                            <img src={Tweet2} alt="" />
                            <img src={Tweet3} alt="" />
                        </div>
                    </div>
                    <div className={classes.sect_four_button}>
                        <button type="button">View More Trend</button>
                    </div>
                </div>

            </section>
        </>
    )
}