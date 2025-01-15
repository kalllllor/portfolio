import styles from '../styles/components/About.module.scss';

const About = () => {
    return (
        <div className={styles.wrapper} id="about">
            <div className={styles.content}>
                <h2>About</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique malesuada placerat. Donec consequat velit sed lorem
                    condimentum, ut interdum nulla elementum. Curabitur massa quam, gravida euismod aliquet vitae, accumsan a mi. Nunc mattis blandit
                    elit pretium vehicula. Sed ac diam et urna ornare cursus. Praesent consequat commodo lorem. Nulla eu nisl ligula.
                </p>
                <p>
                    Integer eu nisl erat. Pellentesque non malesuada ex. Pellentesque placerat sapien ut massa iaculis, id feugiat nisl porta. Sed
                    viverra aliquam lacinia. Donec ut sodales ligula. Donec sit amet finibus purus. Mauris vel mattis ligula. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus bibendum lacus odio, eget tristique neque mollis et.
                    Morbi justo purus, tristique ut ultrices at, commodo non elit. Cras pretium, nisl nec gravida venenatis, orci leo bibendum risus,
                    non sollicitudin lorem felis sit amet elit. Vestibulum blandit imperdiet lacus ac venenatis.
                </p>
            </div>
        </div>
    );
};

export default About;
