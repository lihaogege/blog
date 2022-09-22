import React from 'react';
import styles from "./styles.module.less"
const HeaderBg = () => {

    return (
        <>
            <div className={styles["header-container"]}>
                <div className={styles["header-container-center-content"]}>
                    <h1>Article</h1>
                </div>
            </div>
        </>
    );
};

export default HeaderBg;