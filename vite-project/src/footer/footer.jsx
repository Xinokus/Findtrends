import classes from './footer.module.css'

import Logo from './img/logo.png'

export default function Footer(){
    return(
        <>
            <footer>
                <div className={classes.footer_con}>
                    <div className={classes.footer_logo}>
                        <img src={Logo} alt="" />
                    </div>
                    <div className={classes.footer_links}>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms and Conditions</a>
                        <a href="">Contact Us</a>
                        <a href="">Careers</a>
                    </div>
                </div>
            </footer>
        </>
    )
}