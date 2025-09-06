import React, { useState} from "react";

function Work() {

  const [WorkText, setWorkText] = useState("");
  // const [showWork, setShowWork] = useState(false);

  const skillData = [
    {
      name: "Netflix Clone",
      img: "/netflix.jpeg",
      github: "https://github.com/Vasugupta27052004/Student-Management-System-PHP"
    },
    {
      name: "Student Management System",
      img: "/student.png",
      github: "https://github.com/Vasugupta27052004/Student-Management-System-PHP"
    },
    {
      name: "Expense Tracker",
      img: "/expense.jpeg",
      github: "https://github.com/Vasugupta27052004/ExpenseTracker"
    },
    {
      name: "Anti-counterfet-system",
      img: "/download.jpeg",
      github: "https://github.com/Vasugupta27052004/anti-counterfeit-system-main"
    }
  ];


  return (
    <>
      { (
        <>
          <div className="container">
            <p className="text-5xl text-center mt-6 my-8 ">   MY Work  </p>
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
                  <a
                    href={skill.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Work;
