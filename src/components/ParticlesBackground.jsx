import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    console.log("✅ particlesInit fired!");
    await loadFull(engine);
  };

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 50 },
            color: { value: '#999' },
            links: {
              enable: true,
              color: '#aaa',
              distance: 150,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              outMode: 'bounce',
            },
            size: { value: 2 },
          },
        }}
      />
    </div>
  );
}
