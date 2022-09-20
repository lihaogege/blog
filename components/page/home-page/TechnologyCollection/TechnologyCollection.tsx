import React from 'react';
import styles from "./styles.module.less"
import ViewPager from "../../../animation/ViewPager/ViewPager";
import Trail from "../../../animation/Trail/Trail";
import Card from "../../../animation/Card/Card";
const TechnologyCollection = () => {
    return (
        <>

           <div className={styles.containerr}>
              <div className={styles.container}>
                  <ViewPager></ViewPager>
              </div>
           </div>
        </>
    );
};

export default TechnologyCollection;