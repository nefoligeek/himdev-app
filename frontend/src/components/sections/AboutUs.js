import React from "react";
import Image from "next/image";
import { Award, Users, Globe, Quote, Target, Zap } from "lucide-react";
import data from "@/assests/data.js";

const AboutUs = () => {
  const challengeData = [
    {
      icon: Target,
      title: "Limited College Seats",
      content:
        "Only 10 out of 100 young people find a place in college after school, highlighting a critical educational access challenge.",
    },
    {
      icon: Zap,
      title: "Inaccurate Information",
      content:
        "Misleading data about college enrollment creates confusion about actual higher education opportunities.",
    },
    {
      icon: Quote,
      title: "Wasted Potential",
      content:
        "70 out of 100 youths miss out on higher education, representing an enormous untapped talent reservoir.",
    },
  ];
  return (
    <div id="about" className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-primary tracking-tight">
            About Our Institution
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Committed to transforming education and empowering students through
            innovative learning approaches and comprehensive development
            programs.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-3 bg-secondary/10 p-4 rounded-lg shadow-md">
              <Users className="text-secondary w-6 h-6" />
              <span className="font-semibold text-gray-800">
                5000+ Students
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-primary/10 p-4 rounded-lg shadow-md">
              <Globe className="text-primary w-6 h-6" />
              <span className="font-semibold text-gray-800">
                Global Curriculum
              </span>
            </div>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={data.classPhoto}
            alt="College Campus"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-primary/90 to-secondary/90 text-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16">
            {/* Left Column - Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-500">
                <Image
                  src={data.chairman[0].image}
                  alt="Chairman - Mr. Rakesh Kumar"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-all duration-500"></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-4">
                  Our Visionary Leader
                </h2>
                <p className="text-xl font-semibold mb-4 opacity-80">
                  Chairman - Himdev Educational Foundation Trust
                </p>
                <h3 className="text-3xl font-bold text-white/90 mb-6">
                  Mr. Rakesh Kumar
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  In a country as vibrant and full of potential as India, every
                  young dreamer&apos;s hope is to reach the stars. Mr. Kumar
                  believes every hurdle can be turned into a stepping stone
                  towards success.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {challengeData.map((challenge, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-white/20 transform transition-all hover:scale-105 hover:bg-white/20 duration-300"
                    >
                      <challenge.icon
                        className="text-white/80 mb-4"
                        size={40}
                        strokeWidth={1.5}
                      />
                      <h4 className="text-xl font-bold text-white mb-2">
                        {challenge.title}
                      </h4>
                      <p className="text-white/70">{challenge.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="text-center bg-gray-100 rounded-3xl p-10 shadow-md relative overflow-hidden">
        <div className="space-y-6">
          <Globe className="mx-auto text-primary w-16 h-16 animate-bounce" />
          <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To provide world-class education that nurtures critical thinking,
            innovation, and personal growth. Our goal is to create an inclusive
            learning environment that prepares students to excel in a rapidly
            changing global landscape.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-20 pointer-events-none"></div>
      </section>
      {/* Leadership Team Section */}
      <section className="bg-gray-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Our Leadership
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[...data.chairman, ...data.ceoDetails, ...data.treasurerDetails].map(
            (leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
