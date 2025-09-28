import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function Hero() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => { }, []);

    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 px-6">
            {/* Particle Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: 3,
                            random: true,
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            opacity: 0.4,
                        },
                    },
                }}
            />

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-10 md:p-16 shadow-xl max-w-3xl w-full">
                    {/* Profile Image */}
                    <div className="mb-6">
                        <img
                            src="IMG_20220602_105830_745.jpg"  // Replace with your image URL
                            alt="Soumay"
                            className="w-32 h-32 rounded-full mx-auto object-cover"
                        />
                    </div>

                    {/* Introduction */}
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Hi, I'm Soumay
                    </h1>
                    <p className="text-lg md:text-xl mb-6 text-white/80">
                        A self-taught web developer passionate about crafting clean, responsive websites using modern technologies like React and Tailwind CSS.
                    </p>

                    {/* Call to Action */}
                    <a
                        href="#projects"
                        className="inline-block px-6 py-3 bg-white/20 border border-white/30 hover:bg-white/30 rounded-lg font-medium backdrop-blur-sm transition-all duration-300"
                    >
                        View My Work
                    </a>
                </div>
            </div>
        </section>
    );
}
