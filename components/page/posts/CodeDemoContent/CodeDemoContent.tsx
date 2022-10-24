import React from 'react';
import styles from "./styles.module.less"

interface CodeDemoTypes{
    code:any,
    response:any
}
const CodeDemoContent:React.FC<CodeDemoTypes> = ({code,response}) => {
    return (
        <section className={styles.container}>
            <section className={styles["container-left"]}>
                <h1>源代码:</h1>
                <div className={styles["container-content"]}>
                    {code}
                </div>
            </section>
            <section className={styles["container-button"]}>
                <button onClick={()=> alert("敬请期待")}>
                    运行
                </button>
            </section>
            <section className={styles["container-right"]}>
                <h1>运行结果:</h1>
                <div className={styles["container-content"]}>
                    {response}
                </div>
            </section>
        </section>
    );
};

export default CodeDemoContent;