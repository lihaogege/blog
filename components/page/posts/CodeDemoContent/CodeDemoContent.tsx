import React from 'react';
import styles from "./styles.module.less"
const CodeDemoContent = () => {
    return (
        <section className={styles.container}>
            <section className={styles["container-left"]}>
                <h1>源代码:</h1>
                <div className={styles["container-content"]}>
                    {'  .container-left{\n' +
                    '    display: block;\n' +
                    '    height: 85vh;\n' +
                    '    max-height: 95vh;\n' +
                    '    padding: 1rem;\n' +
                    '    background-color: rgba(0, 0, 0, 0.6);\n' +
                    '    border-radius: 8px;\n' +
                    '    h1{\n' +
                    '      color: white;\n' +
                    '      font-size: 20px;\n' +
                    '    }\n' +
                    '    .container-content{\n' +
                    '      width: 100%;\n' +
                    '      height: calc(100% - 3rem);\n' +
                    '      overflow: auto;\n' +
                    '    }\n' +
                    '  }'}
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
111
                </div>
            </section>
        </section>
    );
};

export default CodeDemoContent;