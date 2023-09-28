import Layout from '../components/layout';
import styles from '../styles/lesson-template.module.css';
import React from "react";

import { NextReactP5Wrapper } from "@p5-wrapper/next";

export default function Template(props) {

    const circles = p5 => {
        
        p5.setup = () => {
            p5.createCanvas(720, 150);
            p5.noStroke();
            p5.noLoop();
        } 
    
        p5.draw = () => {
            p5.drawCircle(p5.width / 2, 350, 6);

        };

        p5.drawCircle = (x, radius, level) => {
            const tt = (126 * level) / 4;
            p5.fill(tt, 0, 200);
            p5.ellipse(x, p5.height / 2, radius * 2, radius * 2);
            if (level > 1){
                level -= 1;
                p5.drawCircle(x - radius / 2, radius / 2, level);
                p5.drawCircle(x + radius / 2, radius / 2, level);
            }
        }
    };

    const triangles = p5 =>{
        
        let firstStyle = true;
        let firstPointLow = true; //used when the triangle is pointed upwards i.e the first point of the triangle is lower than the 2nd point
        let column = 0;
        let maxColumns = 30
        let row = 0;
        let maxRows = 40;
        let startingHeight = 200;
        let startingWidth = 200;
        let startingX = -startingWidth / 2;
        let startingY = startingHeight;
        let strokeWidth = startingHeight / 10;
        if (strokeWidth > 10){
            strokeWidth = 10;
        }

        p5.setup = () => {
            p5.createCanvas(800,720);
            p5.background(0,0,0);
            
        }

        p5.draw = () =>{
            //p5.push();
            const firstFill = p5.color(100,0,100,200);
            const secondFill = p5.color(0,100,100,200);
            const initialX = startingX;
            const initialY = startingY;
            const triangleHeight = startingHeight; 
            const triangleWidth = startingWidth;
            p5.drawTriangle(firstFill, secondFill, initialX, initialY, triangleHeight,triangleWidth);
            
                        
        }

        p5.drawTriangle = (firstFill, secondFill, initialX, initialY, triangleHeight, triangleWidth) =>{
            let posHeight = triangleHeight;
            let negHeight = -triangleHeight;
            console.log(posHeight)

            if (column <= maxColumns){
                if (firstStyle){
                    p5.fill(firstFill);
                } else {
                    p5.fill(secondFill);
                }
                if (firstPointLow){
                    triangleHeight = negHeight
                } else {
                    triangleHeight = posHeight;
                }
                p5.strokeWeight(strokeWidth);
                
                let secondPointX = initialX + 0.5 * triangleWidth;
                let secondPointY = initialY + triangleHeight;
                let thirdPointX = initialX + triangleWidth;
                let thirdPointY = initialY;
                p5.triangle(initialX,initialY,secondPointX,secondPointY,thirdPointX,thirdPointY)
                let nextInitialX = secondPointX;
                let nextInitialY = secondPointY;
                
                column++;
                firstStyle = !firstStyle;
                
                p5.drawTriangle(firstFill,secondFill,nextInitialX,nextInitialY,triangleHeight,triangleWidth)

            } else {
                if (row < maxRows){
                    let nextInitialX = startingX;
                    let nextInitialY = initialY
                    if (firstPointLow){
                        nextInitialY += startingHeight
                    } else {
                        nextInitialY += startingHeight;
                    }
                    row++;
                    column = 0
                    
                    firstPointLow != firstPointLow;
                    p5.drawTriangle(firstFill,secondFill,nextInitialX,nextInitialY,triangleHeight,triangleWidth)
                }
            }
        }
    }

    return (
        <Layout>
            <div className={styles.p5_sketch}>
                
                <NextReactP5Wrapper sketch={circles} />;
                <NextReactP5Wrapper sketch={triangles} />;
            </div>
        </Layout>
        
        
        )
    
}
