import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'

import styles from './styles.module.less'

const Trail: React.FC<{ open: boolean , children:any }> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}

// @ts-ignore
export default function App({children}) {
    const [open, set] = useState(true)
    return (
        // <div className={styles.container} onClick={() => set(state => !state)}>
        //     <Trail open={open}>
        //         {children}
        //     </Trail>
        // </div>
        <div className={styles.container}>
            <Trail open={open}>
                {children}
            </Trail>
        </div>
    )
}
