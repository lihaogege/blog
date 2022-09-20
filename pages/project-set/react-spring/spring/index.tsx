import React from 'react';
import Flicker from "../../../../components/animation/Flicker/Flicker";
import Card from "../../../../components/animation/Card/Card"
import ViewPager from "../../../../components/animation/ViewPager/ViewPager"
import DraggableList from "../../../../components/animation/DraggableList/DraggableList"
import CardsStack from "../../../../components/animation/CardsStack/CardsStack"
import Trail from "../../../../components/animation/Trail/Trail"
import ParallaxVert from "../../../../components/animation/ParallaxVert/ParallaxVert"
import styles from './styles.module.less'
const Index = () => {
    return (
        <div className={styles.container}>
            <section className={styles["animation-item"]}>
                <h2>闪动</h2>
                <Flicker>
                    <h1>Click</h1>
                </Flicker>
            </section>
            <section className={styles["animation-item"]}>
                <h2>卡片堆栈</h2>
                <CardsStack></CardsStack>
            </section>
            <section className={styles["animation-item"]}>
                <h2>卡片</h2>
                <Card></Card>
            </section>
            <section className={styles["animation-item"]}>
                <h2>轮播</h2>
                <ViewPager></ViewPager>
            </section>
            <section className={styles["animation-item"]}>
                <h2>可移动列表</h2>
                <DraggableList></DraggableList>
            </section>
            <section className={styles["animation-item"]}>
                <h2>字体痕迹</h2>
                <Trail></Trail>
            </section>
            <section className={styles["animation-item"]}>
                <h2>垂直视差</h2>
                <ParallaxVert></ParallaxVert>
            </section>
        </div>
    );
};

export default Index;