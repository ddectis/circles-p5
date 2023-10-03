import styles from '../styles/circles.module.css';
import React, {useEffect} from "react";

import { NextReactP5Wrapper } from "@p5-wrapper/next";

export default function RecursiveTriangles(props) {

    const recursive = r =>{
        
        let level = 7;
        
        let x1 = 0
        let y1 = r.windowHeight
        let x2 = 0.5 * r.windowWidth;
        let y2 = 0;
        let x3 = r.windowWidth
        let y3 = r.windowHeight;

        r.setup = () => {
            r.createCanvas(r.windowHeight, r.windowWidth)
            r.background(21);
            r.noLoop();
        }

        r.draw = () =>{
            r.drawTriangle(x1,y1,x2,y2,x3,y3, level)
            
        }
        
        r.drawTriangle = (x1,y1,x2,y2,x3,y3, level) => {
            const tt = (56 * level) / 3;
            r.fill(tt,0,200);
            r.triangle(x1,y1,x2,y2,x3,y3)
            if (level > 1){
                level -= 1;
                let midX1 = (x1 + x2) / 2;
                let midY1 = (y1 + y2) / 2;
                let midX2 = (x2 + x3) / 2;
                let midY2 = (y2 + y3) / 2;
                let midX3 = (x1 + x3) / 2;
                let midY3 = (y1 + y3) / 2;
                r.drawTriangle(midX1,midY1,midX2,midY2,midX3,midY3,level);
            }
        }

        
    };

    return (
        
            <div className={styles.p5_sketch}>
                <NextReactP5Wrapper sketch={recursive}/>
                
            </div>        
        )
    
}
