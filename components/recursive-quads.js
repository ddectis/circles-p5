import styles from '../styles/recursive-quads.module.css';
import React, {useEffect} from "react";

import { NextReactP5Wrapper } from "@p5-wrapper/next";

function recursiveSketch(r){
    
}

export default function RecursiveQuads(props) {

    useEffect(() =>{
        
    })
    
    const recursive = r =>{
        
        let level = 12;
        
        let x1 = 0
        let y1 = r.windowHeight
        let x2 = 0;
        let y2 = 0;
        let x3 = r.windowWidth
        let y3 = 0;
        let x4 = r.windowWidth;
        let y4 = r.windowHeight;

        r.setup = () => {
            r.createCanvas(r.windowWidth, r.windowHeight)
            r.background(21);
            r.slider = r.createSlider(0,255,100,1);
            const sliderParent =  r.select('#control-panel');
            r.slider.parent(sliderParent);
            r.noLoop();
        }

        r.draw = () =>{
            r.drawQuad(x1,y1,x2,y2,x3,y3,x4,y4,level)
            
        }
        
        r.drawQuad = (x1,y1,x2,y2,x3,y3,x4,y4,level) => {
            const color = (150 * level) / 7;
            console.log(color);
            r.fill(50,color,color);
            r.quad(x1,y1,x2,y2,x3,y3,x4,y4)
            if (level > 1){
                level -= 1;
                let factor = 2;
                let midX1 = (x1 + x2) / factor;
                let midY1 = (y1 + y2) / factor;
                let midX2 = (x2 + x3) / factor;
                let midY2 = (y2 + y3) / factor;
                let midX3 = (x3 + x4) / factor;
                let midY3 = (y3 + y4) / factor;
                let midX4 = (x1 + x4) / factor;
                let midY4 = (y1 + y4) / factor;
                r.drawQuad(midX1,midY1,midX2,midY2,midX3,midY3,midX4,midY4,level);
            }
        }

        
    };

    return (
        
            <div className={styles.p5_sketch}>
                <NextReactP5Wrapper sketch={recursive}/>
                <div className={styles.control_panel} id='control-panel'>
                    Put controls here
                </div>
            </div>        
        )
    
}
