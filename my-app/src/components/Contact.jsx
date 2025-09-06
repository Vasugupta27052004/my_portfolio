import React from 'react'
 import { Mail, Linkedin, Github } from "lucide-react";

function Contact() {
  return (
 



    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h1>
        <p className="text-gray-600 mb-8">
          Feel free to reach out via email or connect with me on LinkedIn and GitHub.
        </p>

        <div className="space-y-4">
          {/* Gmail */}
          <a
            href="mailto:vasugupta345@gmail.com"
            className="flex items-center justify-center gap-3 bg-red-500 text-white py-3 px-6 rounded-xl shadow hover:bg-red-600 transition"
          >
            <Mail className="w-5 h-5" />
            vasugupta345@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vasudev00/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-blue-600 text-white py-3 px-6 rounded-xl shadow hover:bg-blue-700 transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn Profile
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Vasugupta27052004" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-800 text-white py-3 px-6 rounded-xl shadow hover:bg-black transition"
          >
            <Github className="w-5 h-5" />
            GitHub Profile
          </a>
        </div>
      </div>
    </div>


  )
}

export default Contact;
