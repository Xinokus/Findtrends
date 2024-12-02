import classes from './sectionOne.module.css'

import ImgLeft from './img/imgLeft.png'
import Findtrends from './img/Findtrends.png'
import ImgRight from './img/imgRight.png'

export default function SectionOne(){
    return(
        <>
            <section className={classes.sect_one}>
                <div className={classes.sect_one_con}>
                    <div className={classes.sect_one_title}>
                        <p>Open new tabs is sh*t </p>
                    </div>
                    <div className={classes.sect_one_main}>
                        <img src={ImgLeft} alt="" />
                        <div>
                            <img src={Findtrends} alt="" />
                        </div>
                        <img src={ImgRight} alt="" />
                    </div>
                    <div className={classes.sect_one_desc}>
                        <p>A solution for your browser tabs and don’t make your device get slower over time. Get ease and faster to discover a trend with just one tab.</p>
                    </div>
                </div>
            </section>
        </>
    )
}