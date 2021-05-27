import { Html } from "drei";
import Model from "./model";
import { Section } from "./section";


const HTMLContent = () => {
    return (
        <Section factor={1.5} offset={1}>
            <group position={[0, 250, 0]}>
                <mesh position={[0, -35, 0]}>
                    <Model />
                </mesh>
                <Html fullscreen>
                    <div className='container'>
                        <h1 className='title'>Hello</h1>
                    </div>
                </Html>
            </group>
        </Section>
    );
};

export default HTMLContent;