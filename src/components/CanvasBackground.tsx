import React, { useRef, useEffect } from 'react';
import styles from '../styles/components/CanvasBackground.module.scss';
import p5 from 'p5';
import { CanvasBackgroundProps } from '../utils/types';

const CanvasBackground: React.FC<CanvasBackgroundProps> = ({ primary, secondary }) => {
    const myRef = useRef<HTMLDivElement>(null);

    const Sketch = (p: p5) => {
        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
            p.angleMode(p.DEGREES);
            p.background(primary);
            p.strokeWeight(5);
            p.noFill();
            p.stroke(secondary);
        };

        p.draw = () => {
            p.background(primary);

            p.orbitControl();

            for (let zAngle = 0; zAngle < 180; zAngle += 30) {
                for (let xAngle = 0; xAngle < 360; xAngle += 30) {
                    p.push();

                    p.rotateZ(zAngle);
                    p.rotateX(xAngle);
                    p.translate(0, 400, 0);
                    p.box();
                    p.pop();
                }
            }
        };

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
            p.background(primary);
            p.stroke(secondary);
        };
    };

    useEffect(() => {
        if (myRef.current) {
            while (myRef.current.firstChild) {
                myRef.current.removeChild(myRef.current.firstChild);
            }
            new p5(Sketch, myRef.current);
        }
    }, [primary, secondary]);

    return <div ref={myRef} className={styles.wrapper}></div>;
};

export default CanvasBackground;
