import classes from '../sectionFive.module.css'

import Check from '../img/check.png'

export default function SectFivePro({props}){
    return(
        <>
            <div className={classes.sect_five_plans_plan_pros_pro}>
                <img src={Check} alt="" />
                <p>{props}</p>
            </div>
        </>
    )
}