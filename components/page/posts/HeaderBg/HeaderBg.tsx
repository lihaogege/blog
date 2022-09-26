import React from 'react';
import styles from "./styles.module.less"
const HeaderBg:React.FC<{title:string}> = ({title}) => {

    return (
        <>
            <div className={styles["header-container"]}>
                <div className={styles["header-container-center-content"]}>
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    );
};

export default HeaderBg;