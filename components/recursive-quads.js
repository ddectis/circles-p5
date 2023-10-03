import styles from '../styles/circles.module.css';
import React, {useEffect} from "react";

import { NextReactP5Wrapper } from "@p5-wrapper/next";

export default function RecursiveQuads(props) {

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
            r.createCanvas(r.windowHeight, r.windowWidth)
            r.background(21);
            r.noLoop();
        }

        r.draw = () =>{
            r.drawQuad(x1,y1,x2,y2,x3,y3,x4,y4,level)
            
        }
        
        r.drawQuad = (x1,y1,x2,y2,x3,y3,x4,y4,level) => {
            const color = (150 * level) / 7;
            console.log(color);
            r.fill(color,color,100);
            r.quad(x1,y1,x2,y2,x3,y3,x4,y4)
            if (level > 1){
                level -= 1;
                let midX1 = (x1 + x2) / 2;
                let midY1 = (y1 + y2) / 2;
                let midX2 = (x2 + x3) / 2;
                let midY2 = (y2 + y3) / 2;
                let midX3 = (x3 + x4) / 2;
                let midY3 = (y3 + y4) / 2;
                let midX4 = (x1 + x4) / 2;
                let midY4 = (y1 + y4) / 2;
                r.drawQuad(midX1,midY1,midX2,midY2,midX3,midY3,midX4,midY4,level);
            }
        }

        
    };

    return (
        
            <div className={styles.p5_sketch}>
                <NextReactP5Wrapper sketch={recursive}/>
                
            </div>        
        )
    
}
