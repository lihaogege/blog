import React from 'react';
import styles from "./styles.module.less"
import {FormattedMessage} from "react-intl";

const HeaderBg:React.FC<{title:string}> = ({title}) => {

    return (
        <>
            <div className={styles["header-container"]}>
                <div className={styles["header-container-center-content"]}>
                    <FormattedMessage
                        id='global.article'
                        description='Article'
                        defaultMessage='Article'
                        tagName="h1" // DOM元素节点名称
                    />
                </div>
            </div>
        </>
    );
};

export default HeaderBg;