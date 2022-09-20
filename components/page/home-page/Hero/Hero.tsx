import React from 'react';
import classes from "./Hero.module.less"
import Image from "next/image";
import {NextPage} from "next";
import Trail from "../../../animation/Trail/Trail"
import Card from "../../../animation/Card/Card";
const Hero:NextPage = () => {
    return (
      <section className={classes.hero}>
          <Card>
              <div className={classes["hreo-container"]}>
                  <div className={classes.image}>
                      <Image src="/images/site/max.png" alt="An image showing Max" width={300} height={300}/>
                  </div>
                  <Trail>
                      <h1>Hi, Im Rick</h1>
                      <p className={classes.p}>
                          I blog about web development - especially frontend frameworks like
                          Angular or React.
                      </p>
                  </Trail>
              </div>
          </Card>
      </section>
    );
};

export default Hero;