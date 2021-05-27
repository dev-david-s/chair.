import { Html } from "drei";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";

import React from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import HTMLContent from "./components/htmlcontent";

export default function App() {

  return (
    <>
      <Header />
      {/* R3F Canvas */}
      <Canvas

        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}>
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </>
  );
}