import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import classes from './header.module.scss';

const textAnimationdown = {
    hidden: {
    y: -30,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 1, duration: 1.2}, 
    }),
  }

const Header = () => {
    return (
        <>
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true}}
      custom={2} variants={textAnimationdown}
      className={classes.header}>
      <Link viewport={{ amount: 0.1, once: true}}
      className={classes.header__nav} to="/"> LOGO</Link>
      <ul className={classes.container__nav}>
        <Link className={classes.nav__link} to="/work">Work</Link>
        <Link className={classes.nav__link} to="/services">Services</Link>
        <Link className={classes.nav__link} to="/agency">Agency</Link>
        <Link className={classes.nav__link} to="/blog">Blog</Link>
      </ul>
      <div class="">
        <button type="button" class="">Get In Touch</button>
      </div>
    </motion.header>
    </>
    )
}

export { Header }