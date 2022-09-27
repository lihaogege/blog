import React from 'react';
import classes from "./Logo.module.less"
import { FormattedMessage } from 'react-intl';
const Logo = () => {
    return (
        <div className={classes.logo}>
            <FormattedMessage id={"global.home"} defaultMessage={"Home"}/>
        </div>
    );
};

export default Logo;