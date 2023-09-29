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
        let startingHeight = 100;               //these are the inputs
        let startingWidth = 100;                //right here
        let startingX = -startingWidth / 2;     //these values are calculated
        let startingY = startingHeight;
        let strokeWidth = startingHeight / 10;
        if (strokeWidth > 10){
            strokeWidth = 10;
        }
        

        p5.setup = () => {
            p5.createCanvas(800,700);
            p5.background(0,0,0);
            p5.slider = p5.createSlider(25,200,100);
            p5.slider.position(100,500)
            p5.slider.style('width', '800px')
            p5.slider.input(p5.valuechanged);
            //p5.valuechanged;
            //p5.noLoop();
            
                        
        }

        p5.valuechanged = () =>{
            console.log(p5.slider.value())
            
            console.log(startingHeight);
            p5.clear();
            p5.redraw();
        }

        p5.draw = () =>{
            //p5.push();
            console.log("drawing");
            startingHeight = p5.slider.value();
            const firstFill = p5.color(100,0,100,250);
            const secondFill = p5.color(0,100,100,250);
            const initialX = startingX;
            const initialY = startingY;
            const triangleHeight = startingHeight; 
            const triangleWidth = startingWidth;
            
            p5.drawTriangle(firstFill, secondFill, initialX, initialY, triangleHeight,triangleWidth);
           
            p5.push();
           
                        
        }

        

        p5.drawTriangle = (firstFill, secondFill, initialX, initialY, triangleHeight, triangleWidth) =>{
            let posHeight = triangleHeight;
            let negHeight = -triangleHeight;
            

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

    const circleChase = c =>{
        
        let 
            rndR = 50,
            rndG = 0, 
            rndB = 55,
            increaseR = true,
            increaseG = false,
            increaseB = false,
            initialMouseMovement = false;


        c.setup = () =>{
            c.createCanvas(c.windowWidth,0.75 * c.windowHeight);
            c.background(21)
            let uiStart = 0.80 * c.windowHeight;
            console.log(uiStart);
            c.rSlider = c.createSlider(0,255,rndR);
            c.rSlider.position(10,uiStart);
            c.rSlider.style('width','250px')
            c.rSlider.input(c.rValueChanged);

            c.gSlider = c.createSlider(0,255,rndG);
            c.gSlider.position(10,uiStart + 40);
            c.gSlider.style('width','250px')
            c.gSlider.input(c.gValueChanged);

            c.bSlider = c.createSlider(0,255,rndB);
            c.bSlider.position(10,uiStart + 80);
            c.bSlider.style('width','250px')
            c.bSlider.input(c.bValueChanged);
            c.textSize(25);
            c.text('word', 100, 1200);

        }

        c.rValueChanged = () =>{
            rndR = c.rSlider.value();
        }

        c.gValueChanged = () => {
            rndG = c.gSlider.value();
        }

        c.bValueChanged = () => {
            rndB = c.bSlider.value();
        }

        c.draw = () => {
            
            c.push();
            c.rect(10,20,50,50);
            c.pop();


            if (c.initialMouseMovement){
                c.fill(rndR,rndG,rndB)
            c.strokeWeight(1)
            let halfWidth = c.width / 2;
            let halfHeight = c.height / 2;
            let xOffset = Math.abs(c.mouseX - halfWidth);
            let yOffset = Math.abs(c.mouseY - halfHeight);
            let radius = yOffset + xOffset / 1000
            if (radius < 10){
                radius = 10;
            }

            c.circle(c.mouseX, c.mouseY, radius);
            }
            
        }

        c.mouseMoved = () => {
            c.initialMouseMovement = true;
            let speed = 5;
            if (increaseR){
                if (rndR < 255){
                    rndR += speed
                } else {
                    rndR = 255
                    increaseR = false;
                } 
            } else {
                if (rndR > 0){
                    rndR -= speed;
                } else {
                    rndR = 0;
                    increaseR = true;
                }
            }

            if (increaseG){
                if (rndG < 255){
                    rndG += speed
                } else {
                    rndG = 255
                    increaseG = false;
                } 
            } else{
                if (rndG > 0){
                    rndG -= speed;
                } else {
                    rndG = 0;
                    increaseG = true;
                }
            }
            if (increaseB){
                if (rndB < 255){
                    rndB += speed
                } else {
                    rndB = 255
                    increaseB = false;
                } 
            } else{
                if (rndB > 0){
                    rndG -= speed;
                } else {
                    rndB = 0;
                    increaseB = true;
                }
            }

        }


    }

    return (
        
            <div className={styles.p5_sketch}>
                
                {/* <NextReactP5Wrapper sketch={circles} />; */}
                {/* <NextReactP5Wrapper sketch={triangles} />; */}
                <NextReactP5Wrapper sketch={circleChase} />;
            </div>
        
        
        
        )
    
}
