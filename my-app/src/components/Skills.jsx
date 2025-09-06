import React, { useState, useEffect } from "react";

function Skills() {
  const sk = "Myy Skills";
  const [skillsText, setSkillsText] = useState("");
  const [showSkills, setShowSkills] = useState(false);

  const skillData = [
    {
      name: "React",
      img: "/react.png", // Replace with your actual image
    },
    {
      name: "Node.js",
      img: "/node.png", // Replace with your actual image
    },
     {
      name: "Html & CSS",
      img: "/html.jpeg", // Replace with your actual image
    },
      {
      name: "C++",
      img: "/cpp.png", // Replace with your actual image
    },
    {
      name:"Python",
      img:"/python.png"
    },
  
    {
      name:"Django",
      img:"/django.png"
    },
  
    {
      name:"Next.js",
      img:"/next.png"
    },
  
  
  ];

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < sk.length-1) {
        setSkillsText((prev) => prev + sk[index]);
        index++;
        setTimeout(type, 100);
      } else {
        setShowSkills(true);
      }
    };
    type();
  }, []);

  return (
    <>
      {showSkills && (
        <>
          <div className="container">
            <p className="text-5xl text-center mt-6 my-8 ">{skillsText}  </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-6 py-6 ">
            {skillData.map((skill, index) => (
              <div
                key={index}
                className="w-1/5 rounded-md shadow-md bg-black text-gray-100 hover:scale-105 transition-transform mb-6"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="object-cover object-center w-full rounded-t-md h-34 bg-gray-500"
                
                />
                <div className="flex flex-col justify-between p-5 space-y-4">
                  <div className="space-y-2">
                    <p className="text-gray-400 text-2xl text-center">
                      {skill.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Skills;
