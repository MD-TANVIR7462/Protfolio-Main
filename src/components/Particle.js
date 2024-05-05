import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
  
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            enable: true,
            direction: 'right',
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
// import React from "react";

// import Particles from "react-tsparticles";

// function Particle() {
//   return (
//     <Particles
//       params={{
//         particles: {
//           number: {
//             value: 80,
//             density: {
//               enable: true,
//               value_area: 800,
//             },
//           },
//           color: {
//             value: "#2e88c1", // Set the color to the desired shade
//           },
//           shape: {
//             type: "star", // Change the shape to star
//             stroke: {
//               width: 2,
//               color: "#2e88c1", // Set the color of the particle stroke
//             },
//             polygon: {
//               nb_sides: 5, // Adjust the number of sides of the star shape
//             },
//           },
//           opacity: {
//             value: 0.8, // Set the opacity of the particles
//             random: true,
//             anim: {
//               enable: true,
//               speed: 1,
//               opacity_min: 0.1,
//               sync: false,
//             },
//           },
//           size: {
//             value: 4, // Adjust the size of the particles
//             random: true,
//             anim: {
//               enable: false,
//               speed: 40,
//               size_min: 0.1,
//               sync: false,
//             },
//           },
//           line_linked: {
//             enable: true,
//             distance: 150,
//             color: "#2e88c1", // Set the color of the lines connecting the particles
//             opacity: 0.4,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 2, // Adjust the speed of the particles
//             direction: "none",
//             random: true,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//             attract: {
//               enable: false,
//               rotateX: 600,
//               rotateY: 1200,
//             },
//           },
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: {
//               enable: true,
//               mode: "repulse", // Change the interaction mode on hover
//             },
//             onclick: {
//               enable: true,
//               mode: "push",
//             },
//             resize: true,
//           },
//           modes: {
//             grab: {
//               distance: 200,
//               line_linked: {
//                 opacity: 0.8,
//               },
//             },
//             bubble: {
//               distance: 400,
//               size: 40,
//               duration: 2,
//               opacity: 8,
//               speed: 3,
//             },
//             repulse: {
//               distance: 100, // Adjust the repulsion distance
//               duration: 0.4,
//             },
//             push: {
//               particles_nb: 4, // Adjust the number of particles pushed on click
//             },
//             remove: {
//               particles_nb: 2,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundColor: "#f0f0f0", // Set the background color of the particle container
//       }}
//     />
//   );
// }

// export default Particle;




