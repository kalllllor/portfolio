import styles from '../styles/components/Technology.module.scss';

const Technology = () => {
    const technologies = [
        {
            name: 'TouchDesigner',
            link: 'https://derivative.ca/',
            description: 'Język wizualny oparty na węzłach do tworzenia interaktywnej treści multimedialnej w czasie rzeczywistym.',
        },
        { name: 'Blender', link: 'https://www.blender.org/', description: "Open-source'owe oprogramowanie do tworzenia grafiki 3D." },
        {
            name: 'Unreal Engine',
            link: 'https://www.unrealengine.com/',
            description: 'Potężna platforma do tworzenia grafiki 3D w czasie rzeczywistym.',
        },
        { name: 'Three.js', link: 'https://threejs.org/', description: 'Biblioteka JavaScript ułatwiająca tworzenie grafiki 3D w przeglądarce.' },
        {
            name: 'JavaScript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            description: 'Wszechstronny język programowania, głównie używany do tworzenia stron internetowych.',
        },
        { name: 'React', link: 'https://reactjs.org/', description: 'Biblioteka JavaScript do budowania interfejsów użytkownika.' },
        {
            name: 'Python',
            link: 'https://www.python.org/',
            description: 'Wysokopoziomowy język programowania znany ze swojej czytelności i wszechstronności.',
        },
        {
            name: 'Houdini',
            link: 'https://www.sidefx.com/products/houdini/',
            description: 'Oprogramowanie do animacji 3D specjalizujące się w generowaniu proceduralnym, rozwijane przez SideFX.',
        },
        {
            name: 'GLSL',
            link: 'https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language',
            description: 'Język programowania shaderów używany w OpenGL do tworzenia efektów graficznych.',
        },
        {
            name: 'Shaders',
            link: 'https://en.wikipedia.org/wiki/Shader',
            description: 'Programy używane do wykonywania obliczeń na kartach graficznych, często używane do renderowania grafiki 3D.',
        },
    ];

    return (
        <div className={styles.wrapper} id="technology">
            <div className={styles.content}>
                <h2>Technologie</h2>
                <p>Kilka technologii, z których korzystam w swoich pracach:</p>
                <ul>
                    {technologies.map((tech, index) => (
                        <li key={index}>
                            <a href={tech.link} target="_blank" rel="noopener noreferrer">
                                {tech.name}
                            </a>
                            : <p>{tech.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Technology;
