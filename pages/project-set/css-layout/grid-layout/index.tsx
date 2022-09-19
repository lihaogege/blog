import React from 'react';
import styles from "./styles.module.less";

const meetingListSet = [
    {id:1,meetingName:"热门会议一"},
    {id:2,meetingName:"热门会议二"},
    {id:3,meetingName:"热门会议三"},
    {id:4,meetingName:"热门会议四"},
    {id:5,meetingName:"热门会议一"},
    {id:6,meetingName:"热门会议二"},
    {id:7,meetingName:"热门会议三"},
    {id:8,meetingName:"热门会议四"},
]
const meetingListSet2 = [
    {id:1,meetingName:"热门会议一"},
    {id:2,meetingName:"热门会议二"},
    {id:3,meetingName:"热门会议三"},
    {id:4,meetingName:"热门会议四"},
]
const GridLayoutIndex = () => {
    return (
        <div className={`${styles.container}`}>
            <section className={styles["left-side-container"]}>
                <section className={styles["hot-meeting-container"]}>
                    <ul className={styles["hot-meeting-grid"]}>
                        {meetingListSet.map((item:any,index)=> (
                            <li key={item.id} className={styles["hot-meeting-item"]}>{item.meetingName}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles["meeting-ad"]}>
                    <ul className={styles["hot-meeting-grid"]}>
                        {meetingListSet2.map((item:any,index)=> (
                            <li key={item.id} className={styles["hot-meeting-item"]}>{item.meetingName}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles["meeting-ad2"]}>
                    <ul className={styles["hot-meeting-grid"]}>
                        {meetingListSet2.map((item:any,index)=> (
                            <li key={item.id} className={styles["hot-meeting-item"]}>{item.meetingName}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles["meeting-ad3"]}>
                    <ul className={styles["hot-meeting-grid"]}>
                        {meetingListSet2.map((item:any,index)=> (
                            <li key={item.id} className={styles["hot-meeting-item"]}>{item.meetingName}</li>
                        ))}
                    </ul>
                </section>
            </section>
            <section className={styles["right-side-container"]}>
                右侧内容
            </section>
        </div>
    );
};

export default GridLayoutIndex;