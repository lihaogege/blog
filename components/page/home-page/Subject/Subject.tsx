import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Hero from "../Hero/Hero";
import TechnologyCollection from "../TechnologyCollection/TechnologyCollection";
import DraggableList from "../../../animation/DraggableList/DraggableList";
import Chain from "../../../animation/Chain/Chain";
import {Image} from "antd";
// Little helpers ...
const url = (name: string, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
    console.log(url('stars',true))
    const parallax = useRef<IParallax>(null!)
    return (
        <div style={{ width: '100%', height: '100%', background: '#253237' }}>
            <Parallax ref={parallax} pages={3}>
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <ParallaxLayer offset={0.7} speed={2} style={{ opacity: 0.1 }}>
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '30%', marginLeft: '70%' }} />
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage:"url(svg/stars.svg)",
                        backgroundSize: 'cover',
                    }}
                />

                <ParallaxLayer offset={1.6} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img src="svg/satellite4.svg" style={{ width: '15%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '15%', marginLeft: '70%' }} />
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '18%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '18%', marginLeft: '60%' }} />
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src="svg/cloud.svg" style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}>
                    <img src="svg/earth.svg" style={{ width: '60%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: "url(svg/clients.svg)",
                    }}
                />

                <ParallaxLayer
                    offset={0}
                    speed={1}
                    onClick={() => parallax.current.scrollTo(1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Hero/>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <DraggableList></DraggableList>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(3)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <TechnologyCollection></TechnologyCollection>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
