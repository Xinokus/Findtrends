import classes from './sectionFive.module.css'
import { useState } from 'react'

import Arrow from './img/arrow.png'
import SectFivePro from './sectFivePro/sectFivePro'

export default function SectionFive(){
    const [planState, setPlanState] = useState(false)

    return(
        <>
            <section className={classes.sect_five}>
                <div className={classes.sect_five_con}>
                    <div className={classes.sect_five_title}>
                        <p>Get your best deal</p>
                    </div>
                    <div 
                    className={planState ? `${classes.sect_five_switch} ${classes.active}` : classes.sect_five_switch}>
                        <p>Monthly</p>
                        <div onClick={planState ? ()=>setPlanState(false) : ()=>setPlanState(true)}>
                            <div>

                            </div>
                        </div>
                        <p>Yearly</p>
                        <img src={Arrow} alt="" />
                    </div>
                    <div className={classes.sect_five_plans}>
                        <div className={classes.sect_five_plans_plan}>
                            <div className={classes.sect_five_plans_plan_con}>
                                <div className={classes.sect_five_plans_plan_title}>
                                    <p>Personal</p>
                                    <p>Special first packet for all</p>
                                </div>
                                <div className={classes.sect_five_plans_plan_line}>

                                </div>
                                <div className={classes.sect_five_plans_plan_price}>
                                    <p>{planState ? '$80' : '$8'}<span>{planState ? '/Year' : '/Month'}</span></p>
                                </div>
                                <div className={classes.sect_five_plans_plan_pros}>
                                    <div className={classes.sect_five_plans_plan_pros_con}>
                                        <SectFivePro props={"Up to 5 page each group"}></SectFivePro>
                                        <SectFivePro props={"Up to 10 group page"}></SectFivePro>
                                        <SectFivePro props={"5 Days group page saved"}></SectFivePro>
                                    </div>
                                </div>
                                <div className={classes.sect_five_plans_plan_button}>
                                    <button type="button">Start Free Trial</button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.sect_five_plans_plan}>
                            <div className={classes.sect_five_plans_plan_con}>
                                <div className={classes.sect_five_plans_plan_title}>
                                    <p>Regular</p>
                                    <p>Recommended for personal pro</p>
                                </div>
                                <div className={classes.sect_five_plans_plan_line}>

                                </div>
                                <div className={classes.sect_five_plans_plan_price}>
                                    <p>{planState ? '$200' : '$20'}<span>{planState ? '/Year' : '/Month'}</span></p>
                                </div>
                                <div className={classes.sect_five_plans_plan_pros}>
                                    <div className={classes.sect_five_plans_plan_pros_con}>
                                        <SectFivePro props={"Up to 15 page each group"}></SectFivePro>
                                        <SectFivePro props={"Download page up to 20 page"}></SectFivePro>
                                        <SectFivePro props={"Up to 10 group page"}></SectFivePro>
                                        <SectFivePro props={"15 Days group page saved"}></SectFivePro>
                                    </div>
                                </div>
                                <div className={classes.sect_five_plans_plan_button}>
                                    <button type="button">Start Free Trial</button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.sect_five_plans_plan}>
                            <div className={classes.sect_five_plans_plan_con}>
                                <div className={classes.sect_five_plans_plan_title}>
                                    <p>Premium</p>
                                    <p>Packet for Startup & Company</p>
                                </div>
                                <div className={classes.sect_five_plans_plan_line}>

                                </div>
                                <div className={classes.sect_five_plans_plan_price}>
                                    <p>{planState ? '$480' : '$48'}<span>{planState ? '/Year' : '/Month'}</span></p>
                                </div>
                                <div className={classes.sect_five_plans_plan_pros}>
                                    <div className={classes.sect_five_plans_plan_pros_con}>
                                        <SectFivePro props={"Unlimited group pages"}></SectFivePro>
                                        <SectFivePro props={"Unlimited download page"}></SectFivePro>
                                        <SectFivePro props={"Unlimited page each group"}></SectFivePro>
                                        <SectFivePro props={"Customize sorting group pages"}></SectFivePro>
                                        <SectFivePro props={"Customize group page name"}></SectFivePro>
                                        <SectFivePro props={"30 Days group page saved"}></SectFivePro>
                                    </div>
                                </div>
                                <div className={classes.sect_five_plans_plan_button}>
                                    <button type="button">Start Free Trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}