import React from 'react';
import styles from "./styles.module.less"
import {useSpring,animated} from "react-spring";

type propsType = {
    children:any
}
const Flicker:React.FC<propsType> = ({children}) => {

/*
    0 % { transform: scale(1); }
    25 % { transform: scale(.97); }
    35 % { transform: scale(.9); }
    45 % { transform: scale(1.1); }
    55 % { transform: scale(.9); }
    65 % { transform: scale(1.1); }
    75 % { transform: scale(1.03); }
    100 % { transform: scale(1); }
`*/

    const [state, toggle] = React.useState(true)
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 },
    })
    return (
        <React.Fragment>
            <animated.div
                onClick={() => toggle(!state)}
                className={styles["flicker-container"]}
                style={{
                    opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
                    scale: x.to({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                    }),
                }}>
                {children}
            </animated.div>
        </React.Fragment>
    );
};

export default Flicker;