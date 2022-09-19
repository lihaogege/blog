import React from 'react';
import classes from "./styles.module.less";
const Index = () => {
    const showStateTitleHandler = (num:number)=>{
        switch (num){
            case 1:{
               return (
                 <>
                     <p className={classes.info}>8列 auto // 2行 第一行100px 第二行200px</p>
                 </>
               )
            }
            case 2:{
                return (
                    <>
                        <p className={classes.info}>左70% 右30%</p>
                        <hr/>
                        <p>
                         `   `行高auto
                        </p>
                    </>
                )
            }
            case 3:{
                return (
                    <>
                        <p className={classes.info}>9列 每列1fr 最大列宽 2行 第一行100px 第二行200px</p>
                    </>
                )
            }
            case 4:{
                return (
                    <>
                        <p className={classes.info}>
                            grid-row-gap 属性，
                            grid-column-gap 属性，
                            grid-gap 属性
                        </p>
                        <p className={classes.info}>列和列的间隔30  ///   行和行的间隔30</p>
                    </>
                )
            }
            case 5:{
                return (
                    <>
                        <p className={classes.info}>
                            grid-template-areas 给单元格命名
                            grid-auto-flow 单元格排列方式 默认是row
                        </p>
                    </>
                )
            }
        }
    }
    const showUlHandler = ()=>{
        let arrayData = []
        for(let i = 1 ; i < 9 ; i++){
            arrayData.push(
               <React.Fragment key={i}>
                   <p className={classes.title}>第{i}个案例</p>
                   {showStateTitleHandler(i)}
                   <ul className={`${classes[`grid-ul-${i}`]} ${classes["ul"]}`}>
                       <li style={{background:"red"}}>1</li>
                       <li style={{background:"yellow"}}>2</li>
                       <li style={{background:"green"}}>3</li>
                       <li style={{background:"pink"}}>4</li>
                       <li style={{background:"purple"}}>5</li>
                       <li style={{background:"black"}}>6</li>
                       <li style={{background:"blue"}}>7</li>
                       <li style={{background:"orange"}}>8</li>
                       <li style={{background:"green"}}>9</li>
                   </ul>
               </React.Fragment>
            )
        }
        return arrayData
    }
    React.useEffect(()=>{

    },[])
    return (
       <div>
           <section>
               {showUlHandler()}

               <div className={classes.box}>
                   <div className={classes.left}>左侧</div>
                   <div className={classes.right}>右侧</div>
               </div>
           </section>
       </div>
    );
};

export default Index;