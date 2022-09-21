import React from 'react';
import styles from "./styles.module.less"

const FooterDataListSet = [
    {name:"作者信息"},
    {name:"友情链接"},
    {name:"宣语-6"},

]
const MainFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles["footer-content"]}>
                <section className={styles["footer-content-for-us"]}>
                    <ul className={styles["footer-content-list"]}>
                        {FooterDataListSet.map(item=><li key={item.name}>{item.name}</li>)}
                    </ul>
                </section>
            </div>
        </footer>
    );
};

export default MainFooter;