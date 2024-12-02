import classes from './nav.module.css'
import Logo from './img/Logo.png'

export default function Nav(){
    return(
        <>
            <nav>
                <div className={classes.nav_logo}>
                    <img src={Logo} alt="" />
                </div>
                <div className={classes.nav_links}>
                    <a href="">About</a>
                    <a href="">How it work</a>
                    <a href="">Pricing</a>
                    <a href="">Solution</a>
                    <a href="">Features</a>
                </div>
                <div className={classes.nav_buttons}>
                    <button type="button">Login</button>
                    <button type="button">Register</button>
                </div>
            </nav>
        </>
    )
}