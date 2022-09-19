import React from 'react';
import {CSSTransition,SwitchTransition } from 'react-transition-group'
import { useSpring, animated } from 'react-spring'

const Index = () => {
    const styles = useSpring({
        loop: true,
        from: { rotateZ: 0 },
        to: { rotateZ: 180 },
    })

    const [inProp, setInProp] = React.useState(false);
    const nodeRef = React.useRef(null);
    return (
        <div className={"body"}>
            <animated.div
                style={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#46e891',
                    borderRadius: 16,
                    ...styles,
                }}
            />
            {"状态"+inProp}
            <CSSTransition unmountOnExit={false} nodeRef={nodeRef} in={inProp} timeout={3000} classNames="fade">
                <div ref={nodeRef} className="tips">
                    {"I'll receive my-node-* classes"}
                </div>
            </CSSTransition>

            <SwitchTransition mode="in-out">
                <CSSTransition  key={inProp ? 'on' : 'off'} unmountOnExit={false} nodeRef={nodeRef} in={inProp}  classNames="btn" timeout={1000}>
                    <button onClick={() => setInProp(!inProp)}>{inProp ? 'on' : 'off'}</button>
                </CSSTransition>
            </SwitchTransition>

            {/*<button type="button" onClick={() => setInProp(!inProp)}>*/}
            {/*    Click to Enter*/}
            {/*</button>*/}
        </div>
    );
};

export default Index;