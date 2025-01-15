import styles from '../styles/components/About.module.scss';

const About = () => {
    return (
        <div className={styles.wrapper} id="about">
            <div className={styles.content}>
                <h2>About</h2>
                <p>Karol – artysta intermedialny specjalizujący się w mediach cyfrowych.</p>
                <p>
                    Karol ukończył studia I stopnia na Wydziale Informatyki, Elektroniki i Telekomunikacji Akademii Górniczo-Hutniczej im. Stanisława
                    Staszica w Krakowie. Obecnie kontynuuje edukację na Akademii Sztuk Pięknych w Krakowie, na Wydziale Intermediów.
                </p>
                <p>
                    W swojej twórczości Karol stara się łączyć świat sztuki i nauki, wykorzystując między innymi programowanie kreatywne (creative
                    coding). Tematycznie jego prace balansują na granicy żartu i dramatu, a przedstawione światy są zazwyczaj mroczne, dystopijne, a
                    co najważniejsze - beznadziejne.
                </p>
            </div>
        </div>
    );
};

export default About;
