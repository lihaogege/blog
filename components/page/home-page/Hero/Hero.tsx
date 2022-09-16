import React from 'react';
import classes from "./Hero.module.less"
import Image from "next/image";
import {NextPage} from "next";
const Hero:NextPage = () => {
    return (
      <section className={classes.hero}>
          <div className={classes.image}>
              <Image src="/images/site/max.png" alt="An image showing Max" width={300} height={300}/>
          </div>
          <h1>Hi, Im Rick</h1>
          <p>
              I blog about web development - especially frontend frameworks like
              Angular or React.
          </p>
      </section>
    );
};

export default Hero;