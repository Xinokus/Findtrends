import classes from './sectionThree.module.css'

import {ImageArray} from './sectThreeImageArray'

export default function SectionThree(){
    return(
        <>
            <section className={classes.sect_three}>
                <div className={classes.sect_three_con}>
                    <div className={classes.sect_three_title}>
                        <p>Findtrend make +1000 Startup grow</p>
                    </div>
                    <div className={classes.sect_three_main}>
                        {ImageArray.map((image)=><img key={image.id} src={image.image}></img>)}
                    </div>
                </div>
            </section>
        </>
    )
}