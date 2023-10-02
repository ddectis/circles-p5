import styles from '../styles/circles.module.css';
import React, {useEffect} from "react";

import { NextReactP5Wrapper } from "@p5-wrapper/next";

export default function Triangles(props) {

    let secondPointXFactor = 0.75; //when this is 0.5, the triangles will be even

    useEffect(() =>{
        console.log("effec");
    },[secondPointXFactor])

    

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
            
            p5.noLoop();
            p5.slider = p5.createSlider(0.1,2,0.5, 0.1)
            p5.slider.input(p5.valueChanged)
                           
        }

        p5.updateWithProps = props =>{
            console.log("here");
            secondPointXFactor = props.secondPointXFactor

            if (props.secondPointXFactor){
               
            }
            
        }

        p5.valueChanged = () =>{
            secondPointXFactor = p5.slider.value();
            console.log(secondPointXFactor);
        }


        p5.draw = () =>{
            //p5.push();
            console.log("drawing");
            
            const firstFill = p5.color(100,0,100,250);
            const secondFill = p5.color(0,50,100,250);
            const initialX = startingX;
            const initialY = startingY;
            const triangleHeight = startingHeight; 
            const triangleWidth = startingWidth;
            console.log(secondPointXFactor);
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
                
                let secondPointX = initialX + secondPointXFactor * triangleWidth;
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
                } else {
                    //p5.background(0,0,0);
                    
                }
            }
        }
    }

    
    return (
        
            <div className={styles.p5_sketch}>
                
                {/* <NextReactP5Wrapper sketch={circles} />; */}
                {/* <NextReactP5Wrapper sketch={triangles} />; */}
                <NextReactP5Wrapper sketch={triangles} secondPointXFactor={secondPointXFactor}/>
                
                
            </div>
        
        
        
        )
    
}
