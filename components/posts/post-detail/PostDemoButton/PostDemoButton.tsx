import React from 'react';
import styles from "./styles.module.less"
import Link from "next/link"
type PropsTypes = {
    codeDemoUrl:string | ""
}
const PostDemoButton = ({codeDemoUrl}:PropsTypes) => {
    return (
        <>
            <div className={styles.button}>
                <Link href={codeDemoUrl}>
                    <a>
                        <button>
                            查看代码演示
                        </button>
                    </a>
                </Link>
            </div>
        </>
    );
};

export default PostDemoButton;