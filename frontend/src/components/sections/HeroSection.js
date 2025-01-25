import {
  Award,
  GraduationCap,
  BookOpen,
  Globe,
  UserCheck,
  Book,
} from "lucide-react";
import Image from "next/image";
import data from "@/assests/data";

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {/* Title */}
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-primary xl:inline">
                  Himdev Educational
                </span>
                <span className="block text-secondary">Foundation Trust</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Transforming Education in India for Everyone
              </p>

              {/* CTA Button */}
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10 shadow-lg"
                >
                  Scholarship Program
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-medium rounded-md bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 shadow-lg"
                >
                  Explore Courses
                </a>
              </div>

              {/* Services */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-primary h-10 w-10" />
                  <span className="text-gray-700 font-medium text-lg">
                    100% Tuition Fee Waiver
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-primary h-10 w-10" />
                  <span className="text-gray-700 font-medium text-lg">
                    Pay Only Reg. & Exam Fee
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="text-primary h-10 w-10" />
                  <span className="text-gray-700 font-medium text-lg">
                    Empowering Education
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-primary h-10 w-10" />
                  <span className="text-gray-700 font-medium text-lg">
                    Global Learning Opportunities
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <UserCheck className="text-primary h-10 w-10" />
                  <span className="text-gray-700 font-medium text-lg">
                    Personalized Career Guidance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Book className="text-primary h-10 w-10" />
                  <span className="text-gray-700 font-medium text-lg">
                    Access to Advanced Resources
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-56 sm:h-72 md:h-96 lg:h-full">
          <Image
            className="absolute inset-0 h-full w-full object-cover rounded-xl shadow-lg"
            src={data.homePage}
            alt="Himdev Educational Foundation"
            width={1000}
            height={600}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
