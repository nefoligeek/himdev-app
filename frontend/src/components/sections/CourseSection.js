import React, { useState } from "react";
import {
  Stethoscope,
  HeartPulse,
  Pill,
  Laptop,
  Building2,
  GraduationCap,
  CodeXml,
  Network,
} from "lucide-react";

const courseData = [
  {
    id: 1,
    title: "Paramedical Sciences",
    icon: Stethoscope,
    description:
      "Comprehensive programs preparing students for critical healthcare support roles, focusing on technical skills and patient care.",
    keyHighlights: [
      "Multiple specialized tracks",
      "Hands-on clinical training",
      "Industry-recognized certifications",
    ],
    duration: "2-3 Years",
  },
  {
    id: 2,
    title: "Nursing",
    icon: HeartPulse,
    description:
      "Advanced nursing education preparing compassionate and skilled healthcare professionals for diverse medical environments.",
    keyHighlights: [
      "Clinical rotation programs",
      "Comprehensive theoretical training",
      "Ethical patient care approaches",
    ],
    duration: "3-4 Years",
  },
  {
    id: 3,
    title: "Pharmacy",
    icon: Pill,
    description:
      "Rigorous pharmaceutical education covering drug formulation, medical research, and healthcare management.",
    keyHighlights: [
      "Laboratory research opportunities",
      "Pharmaceutical technology focus",
      "Industry internship programs",
    ],
    duration: "4 Years",
  },
  {
    id: 4,
    title: "Engineering",
    icon: Laptop,
    description:
      "Cutting-edge technical education preparing innovative engineers across multiple disciplines and emerging technologies.",
    keyHighlights: [
      "Multiple engineering streams",
      "Industry-aligned curriculum",
      "Advanced research opportunities",
    ],
    duration: "4 Years",
  },
  {
    id: 5,
    title: "Management",
    icon: Building2,
    description:
      "Strategic management programs developing leadership skills and business acumen for future corporate professionals.",
    keyHighlights: [
      "Corporate internship programs",
      "Case study methodologies",
      "Leadership development",
    ],
    duration: "2-3 Years",
  },
  {
    id: 6,
    title: "Polytechnic",
    icon: Network,
    description:
      "Practical, skill-oriented technical education focusing on hands-on learning and industry-ready competencies.",
    keyHighlights: [
      "Vocational skill training",
      "Technical workshop exposure",
      "Industry certification programs",
    ],
    duration: "3 Years",
  },
  {
    id: 7,
    title: "BCA",
    icon: CodeXml,
    description:
      "Comprehensive computer application program covering software development, web technologies, and computational thinking.",
    keyHighlights: [
      "Programming language mastery",
      "Software development projects",
      "Modern computational techniques",
    ],
    duration: "3 Years",
  },
  {
    id: 8,
    title: "MCA",
    icon: GraduationCap,
    description:
      "Advanced computer application studies focusing on sophisticated software engineering and advanced computational strategies.",
    keyHighlights: [
      "Advanced software engineering",
      "Research-oriented curriculum",
      "Enterprise computing techniques",
    ],
    duration: "2 Years",
  },
];

const CoursesSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="container mx-auto px-4 py-16" id="program">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Our Academic Programs
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering futures through diverse, comprehensive, and
          industry-aligned educational programs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courseData.map((course) => (
          <div
            key={course.id}
            onMouseEnter={() => setActiveCard(course.id)}
            onMouseLeave={() => setActiveCard(null)}
            className={`
              relative overflow-hidden rounded-2xl p-6 
              transition-all duration-500 
              ${
                activeCard === course.id
                  ? "bg-gradient-to-br from-primary to-secondary text-white scale-105 shadow-2xl"
                  : "bg-gray-100 hover:bg-primary/10"
              }
            `}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <course.icon
                size={48}
                className={`
                  ${activeCard === course.id ? "text-white" : "text-primary"}
                `}
              />
              <h3 className="text-xl font-bold">{course.title}</h3>

              {activeCard === course.id && (
                <div className="space-y-4 mt-4">
                  <p className="text-base leading-relaxed">
                    {" "}
                    {/* Increased from text-sm to text-base */}
                    {course.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Key Highlights:</h4>{" "}
                    {/* Increased from font-semibold to text-lg */}
                    <ul className="text-sm list-disc list-inside space-y-1">
                      {" "}
                      {/* Adjusted text size and added spacing */}
                      {course.keyHighlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      Duration: {course.duration}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
