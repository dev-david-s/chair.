import { useGLTFLoader } from "drei";

function Model({ url }) {
    const gltf = useGLTFLoader("/armchairYellow.gltf", true);
    return <primitive object={gltf.scene} dispose={null} />;
}

export default Model
