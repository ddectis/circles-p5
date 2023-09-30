import styles from '../styles/circles.module.css';
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
            p5.noLoop();
            
                        
        }

        p5.valuechanged = () =>{
            console.log(p5.slider.value())
            
            console.log(startingHeight);
            p5.background(220);
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
            initialMouseMovement = false,
            lockR = false,
            lockG = false,
            lockB = false,
            draw = false; //mouse click


        c.setup = () =>{
            c.createCanvas(c.windowWidth, 0.66 * c.windowHeight);
            c.background(21)
            let redControls = c.select("#red-controls")
            let greenControls = c.select("#green-controls")
            let blueControls = c.select("#blue-controls")
            let uiStart = 0.80 * c.windowHeight;
            let sliderWidth = c.windowWidth * 0.60;
            let margin = 25;

            //console.log(uiStart);
            //create UI sliders
            c.rSlider = c.createSlider(0,255,rndR);
            c.rSlider.parent(redControls)
            
            c.rSlider.input(c.rValueChanged);

            c.gSlider = c.createSlider(0,255,rndG);
            c.gSlider.parent(greenControls)
            
            c.gSlider.input(c.gValueChanged);

            c.bSlider = c.createSlider(0,255,rndB);
            c.bSlider.parent(blueControls)
            
            //c.bSlider.style('height','100px')
            c.bSlider.input(c.bValueChanged);
            
            //put a call to action text
            c.textSize(50);
            c.fill(255)
            let angle = c.radians(-55);
            c.rotate(angle)
            c.text('touch', -205, c.windowHeight * 0.40);
            
            

            //create UI checkboxes
            c.rLockCheck = c.createCheckbox('Lock Red', false);
            c.rLockCheck.parent(redControls);
            c.rLockCheck.changed(c.rLockCheckValueChanged)

            c.gLockCheck = c.createCheckbox('Lock Green', false);
            c.gLockCheck.parent(greenControls);
            c.gLockCheck.changed(c.gLockCheckValueChanged)

            c.bLockCheck = c.createCheckbox('Lock Blue', false);
            c.bLockCheck.parent(blueControls);
            c.bLockCheck.changed(c.bLockCheckValueChanged)

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

        c.rLockCheckValueChanged = () => {
            
            if (c.rLockCheck.checked()){
                lockR = true;
            } else {
                lockR = false;
            }
            console.log(lockR)
        }

        c.gLockCheckValueChanged = () => {
            
            if (c.gLockCheck.checked()){
                lockG = true;
            } else {
                lockG = false;
            }
            console.log(lockG)
        }

        c.bLockCheckValueChanged = () => {
            
            if (c.bLockCheck.checked()){
                lockB = true;
            } else {
                lockB = false;
            }
            console.log(lockB)
        }

        c.draw = () => {
            let mouseAboveBottomOfCanvas = c.height - c.mouseY
            if (draw && mouseAboveBottomOfCanvas > 0){
                c.fill(rndR,rndG,rndB)
                console.log(rndR + " " + rndG + " " + rndB)
                c.strokeWeight(1)
                let halfWidth = c.width / 2;
                let halfHeight = c.height / 2;
                let xOffset = Math.abs(c.mouseX - halfWidth);
                let yOffset = Math.abs(c.mouseY - halfHeight);
                let radius = (yOffset + xOffset / 4) / 2 
                
                if (radius < 10){
                    radius = 10;
                }

                c.circle(c.mouseX, c.mouseY, radius);
            }
            
        }

        c.mousePressed = () => {
            draw = true;
        }

        c.mouseReleased = () =>{
            draw = false;
        }

        c.touchMoved = () => {
            c.mouseMoved();
        }

        c.mouseMoved = () => {
            initialMouseMovement = true;
            let speed = 5;
            if (!lockR){
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
            }
           
            if (!lockG){
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
            }

            if (!lockB){
                if (increaseB){
                    if (rndB < 255){
                        rndB += speed
                    } else {
                        rndB = 255
                        increaseB = false;
                    } 
                } else{
                    if (rndB > 0){
                        rndB -= speed;
                    } else {
                        rndB = 0;
                        increaseB = true;
                    }
                }
            }
        }


    }

    return (
        
            <div className={styles.p5_sketch}>
                
                {/* <NextReactP5Wrapper sketch={circles} />; */}
                {/* <NextReactP5Wrapper sketch={triangles} />; */}
                <NextReactP5Wrapper sketch={circleChase} />
                <div id="control-panel" className={styles.control_container}>
                    <p>
                        As you move the mouse / your finger across the screen, I'll draw circles behind you in colors that change as you move.
                        <br/>
                        Try locking one of the color channels (R,G,B) and see what happens!
                    </p>
                    <div id="red-controls" className={styles.controls}></div>
                    <div id="green-controls" className={styles.controls}></div>
                    <div id="blue-controls" className={styles.controls}></div>
                </div>
                
            </div>
        
        
        
        )
    
}
