import classes from './sectionSix.module.css'

export default function SectionSix(){
    return(
        <>
            <section className={classes.sect_six}>
                <div className={classes.sect_six_con}>
                    <div className={classes.sect_six_title}>
                        <p>Join us on email for <span>more trending topics</span></p>
                    </div>
                    <div className={classes.sect_six_button}>
                        <button type="button">Join Now </button>
                    </div>
                </div>

            </section>
        </>
    )
}