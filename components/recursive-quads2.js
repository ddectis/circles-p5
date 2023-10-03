import styles from '../styles/recursive-quads.module.css';
import React from "react";

import { NextReactP5Wrapper } from "@p5-wrapper/next";


export default function RecursiveQuads2(props) {

    
    const recursive = r =>{
        
        let level = 50; //define the target  level of recurision
        let colorModifier = 255 / level; //the idea here is to make the max generated color figure in the recursion bit fit within the 0-255 color scale
        let opacity = 500 / level;
        let xMovement = r.windowWidth / level; //based on the level of recursion and the size of the window, determine the step size to move each recursive rect
        let yMovement = r.windowHeight / level;
        
        //put coordinates at the corners of the window
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
            r.background(25);
            r.slider = r.createSlider(0,255,100,1);
            const sliderParent =  r.select('#control-panel');
            r.slider.parent(sliderParent);
            r.noLoop();
        }

        r.draw = () =>{
            r.drawQuad(x1,y1,x2,y2,x3,y3,x4,y4,level)
            
        }
        
        r.drawQuad = (x1,y1,x2,y2,x3,y3,x4,y4,level) => {
            const color = level * colorModifier;
            console.log(color);
            r.fill(0,170,color,opacity);
            r.quad(x1,y1,x2,y2,x3,y3,x4,y4)
            if (level > 1){
                level -= 1;
                let nextX1 = x1;
                let nextY1 = y1 - yMovement;
                let nextX2 = x2 + xMovement;
                let nextY2 = y2;
                let nextX3 = x3;
                let nextY3 = y3 + yMovement;
                let nextX4 = x4 - xMovement;
                let nextY4 = y4;
                r.drawQuad(nextX1,nextY1,nextX2,nextY2,nextX3,nextY3,nextX4,nextY4,level);
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
