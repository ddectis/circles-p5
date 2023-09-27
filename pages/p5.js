import Layout from '../components/layout';
import styles from '../styles/lesson-template.module.css';
import React from "react";

import { NextReactP5Wrapper } from "@p5-wrapper/next";

export default function Template(props) {
    let pg;
    let mouseX;
    let slider;
    

    const sketch = p5 => {
        p5.setup = () => {
            p5.createCanvas(710, 400, p5.WEBGL);
            pg = p5.createGraphics(400,250);
            slider = p5.createSlider(0,255,127);
        } 
    
        p5.draw = () => {
            // p5.background(25);
            // p5.normalMaterial();
            // p5.push();
            // p5.rotateZ(p5.frameCount * 0.001);
            // p5.rotateX(p5.frameCount * 0.01);
            // p5.rotateY(p5.frameCount * 0.01);
            // p5.torus(10);
            // p5.box(15);
            mouseX = p5.mouseX;
            // p5.pop();

            

            // p5.translate(240, 0, 0);
            // p5.push();
            // p5.rotateZ(p5.frameCount * 0.01);
            // p5.rotateX(p5.frameCount * 0.01);
            // p5.rotateY(p5.frameCount * 0.01);
            // p5.box(7, 70, 7);
            // p5.pop();
            
            // p5.noStroke();
            // p5.translate(-300,-300,0)
            // for(let i = 0; i < p5.height; i += 50){
            //     p5.fill(12,206,15);
            //     p5.rect(0, i, p5.width, 40);
            //     p5.fill(255);
            //     p5.rect(i, 0, 40, p5.height);
            // }
            p5.mousePressed = () => {
                console.log("yo")
            }

            p5.fill (0, 12)
            p5.rect(0,0,p5.width,p5.height);
            p5.fill(255);
            p5.noStroke();
            p5.ellipse(p5.mouseX, p5.mouseY, 60, 60);



            
            //console.log(mouseX);

        };
    };

    return (
        <Layout>
            <div className={styles.lesson_content}>
                <p>Hello {mouseX}</p>
                <NextReactP5Wrapper sketch={sketch} />;
            </div>
        </Layout>
        
        
        )
    
}
