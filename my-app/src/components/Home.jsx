import React, { useState, useEffect } from 'react';
import Skills from "./Skills";


function Home() {
  const fullText = "Weelcome to the tech world !!! ";
  const sk="MMy Skills";
  const [displayedText, setDisplayedText] = useState(" Hello ");
  const[Skils,setSkils]=useState("");
     const [showContent, setShowContent] = useState(false);


  useEffect(() => {
     let index = 0;

    function type() {
      if (index < fullText.length - 1) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
        setTimeout(type, 100);
      } else {
        setShowContent(true);
      }
    }

    type();
    
  }, []);
 
  return (
    <>
      <p className="text-4xl text-center mt-6">{displayedText}</p>

      {showContent && (
        <div className="my-15 flex max-w-4xl mx-auto gap-10">
          {/* Text content with flex grow 3 */}
            <div className="flex-[3] p-10 bg-gray-100 rounded-lg shadow-lg text-left transition-transform duration-300 hover:scale-105">
            Hello! I’m VasuDev, a passionate and dedicated software developer with a strong foundation in web development and programming. I specialize in technologies like React, Node.js, C++,Next.js, and JavaScript, and I enjoy building responsive, user-friendly applications that solve real-world problems.

            Feel free to explore my work and get in touch!
          </div>

          {/* Image with flex grow 1 */}
          <div className="flex-[1] p-5 bg-gray-100 rounded-lg flex justify-center items-center transition-transform duration-300 hover:scale-200">
            <img
              src="/img1.jpeg"
              alt="VasuDev"
              className="max-w-full h-auto rounded"
            />
          </div>
        </div>
      )}
 {showContent && ( <Skills />)}
    </>
  );
  
}
export default Home;
