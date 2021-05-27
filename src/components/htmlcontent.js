import { Html, useGLTFLoader } from "drei";
import { useRef, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { useInView } from "react-intersection-observer";
import { Section } from "./section";
import React from "react";

function Model({ url }) {
    const gltf = useGLTFLoader(url, true);
    return <primitive object={gltf.scene} dispose={null} />;
}

const HTMLContent = ({
    domContent,
    children,
    bgColor,
    modelPath,
    position,
}) => {
    const ref = useRef();
    useFrame(() => (ref.current.rotation.y += 0.01));
    const [refItem, inView] = useInView({
        threshold: 0,
    });
    useEffect(() => {
        inView && (document.body.style.background = bgColor);
    }, [inView]);
    return (
        <Section factor={1.5} offset={1}>
            <group position={[0, position, 0]}>
                <mesh ref={ref} position={[0, -35, 0]}>
                    <Model url={modelPath} />
                </mesh>
                <Html fullscreen portal={domContent}>
                    <div ref={refItem} className='container'>
                        <h1 className='title'>{children}</h1>
                    </div>
                </Html>
            </group>
        </Section>
    );
};
export default HTMLContent;