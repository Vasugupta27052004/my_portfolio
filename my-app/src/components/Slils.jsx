// import React, { useState, useEffect } from "react";

// function Skills() {
//   const sk = "My Skills"; // The text to type out
//   const [skillsText, setSkillsText] = useState(""); // Typed text
//   const [showSkils, setShowSkils] = useState(false); // To control display

//   useEffect(() => {
//     let index = 0;
//     const type = () => {
//       if (index < sk.length) {
//         setSkillsText((prev) => prev + sk[index]);
//         index++;
//         setTimeout(type, 100);
//       } else {
//         setShowSkils(true);
//       }
//     };
//     type();
//   }, []);

//   return (
//     <>
//       {showSkils && (
//         <div className="container">
//           <p className="text-2xl text-center mt-6">{skillsText}</p>
//         </div>
//       )}
//     </>
//   );
// }

// export default Skills;
