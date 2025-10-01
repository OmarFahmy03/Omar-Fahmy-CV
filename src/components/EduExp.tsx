import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    title: "Game Developer",
    company: "USA - Indiana",
    period: "2024 – Current",
    highlights: [
      "Currently I’m working with growing company.",
      "We have a great idea to convert streaming platforms like tiktok to completely intractable game.",
      "Using backend and get information from tiktok api and likes and so on."
    ]
  },
  {
    title: "Data Entry",
    company: "El Maadi",
    period: "2023 - 2024",
    highlights: [
      "I Have worked as data typist in covo connect in Egypy-el-maadi.",
      "I have learned so much from such experience as I can reach average 58 WPM.",
    ]
  },
  {
    title: "Game Developer Freelancer",
    company: "Remote Job",
    period: "2022 - Current",
    highlights: [
      "With more than 3 Years experience in this field I have mastered how to use unity",
      "I have worked in many solo projects and as a team with a lot of people all over the world."
    ]
  },
  {
    title: "Mobile App Developer",
    company: "Remote Job",
    period: "2022 - Current",
    highlights: [
      "Developed cross-platform mobile apps using Flutter and Dart.",
      "Implemented responsive UIs, integrated REST APIs and Firebase.",
      "Optimized performance and ensured smooth UX on Android and iOS."
    ]
  }
];

// ✅ New education data array
const education = [
  {
    period: "2021 – 2025",
    degree: "B.Sc. Computer Science",
    institution: "Helwan University – Egypt",
    details: [
      "Bachelor of Science in Computer science & Mathematics",
      "Graduation Project: AI-Powered GANs Super resolution model",
      "Key Courses: Data Structures, DBMS, Software Engineering"
    ]
  },
  {
    period: "2024",
    degree: "App Development (Flutter)",
    institution: "Information Technology Institute (ITI) – Egypt",
    details: [
      "Studied cross-platform mobile app development using Flutter and Dart",
      "Learned Firebase integration, REST APIs, and UI/UX design",
      "Built small apps as practice projects"
    ]
  }
];

const EduExp = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex justify-center space-x-6 mb-10">
        <button
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            activeTab === "education"
              ? "bg-blue-500/80 text-white"
              : "bg-blue-950 text-[#EAEAEA] border border-[#08D9D6]"`
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            activeTab === "experience"
              ? "bg-blue-500/80 text-white"
              : "bg-blue-950 text-[#EAEAEA] border border-[#08D9D6]"`
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "education" && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-10 bg-blue-50/60"></div>
                    <p className="text-lg md:text-xl me-12 text-[#B6B6B6]">{edu.period}</p>
                  </div>
                  <div className="md:ml-10 mt-4 md:mt-0">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-50/90">
                      {edu.degree}
                    </h2>
                    <p className="text-xl font-light text-[#08D9D6]/80">{edu.institution}</p>
                    <ul className="list-disc ml-5 mt-4 text-md text-[#B6B6B6] space-y-1">
                      {edu.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-10 bg-blue-50/60"></div>
                    <p className="text-lg md:text-xl min-w-[10rem] text-[#B6B6B6]">{exp.period}</p>
                  </div>
                  <div className="md:ml-10 mt-4 md:mt-0">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-50/90">
                      {exp.title}
                    </h2>
                    {exp.company && (
                      <p className="text-xl font-light text-[#08D9D6]/80">{exp.company}</p>
                    )}
                    <ul className="list-disc ml-5 mt-4 text-md text-[#B6B6B6] space-y-1">
                      {exp.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default EduExp;
