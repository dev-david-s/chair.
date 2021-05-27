import { Html } from "drei";
import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import Model from "./model";
import { Section } from "./section";


const HTMLContent = () => {

    const ref = useRef();
    useFrame(() => (ref.current.rotation.y += 0.01))

    return (
        <Section factor={1.5} offset={1}>
            <group position={[0, 250, 0]}>
                <mesh ref={ref} position={[0, -35, 0]}>
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