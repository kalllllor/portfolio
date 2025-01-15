import React, { useRef, useEffect } from 'react';
import styles from '../styles/components/CanvasBackground.module.scss';
import p5 from 'p5';

const CanvasBackground: React.FC = () => {
    const myRef = useRef<HTMLDivElement>(null);
    let pg;
    const Sketch = (p: p5) => {
        const firstColor = getComputedStyle(document.documentElement).getPropertyValue('--first-color');
        const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');

        p.setup = () => {
            pg = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
            p.angleMode(p.DEGREES);
            p.background(firstColor);
            p.strokeWeight(5);
            p.noFill();
            p.stroke(secondaryColor);
        };

        p.draw = () => {
            p.background(firstColor);

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
            p.background(firstColor);
        };
    };

    useEffect(() => {
        if (myRef.current) {
            new p5(Sketch, myRef.current);
        }
    }, []);

    return <div ref={myRef} className={styles.wrapper}></div>;
};

export default CanvasBackground;
