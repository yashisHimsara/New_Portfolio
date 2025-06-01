import React, { useState } from 'react';
import { Menu, X, Send, Github, Linkedin, Facebook, ArrowUpRight, ChevronUp, Monitor, Smartphone, Code, Palette, Layout } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and supporting software."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description: "Mobile application development is the process of creating software applications for mobile devices."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Development",
      description: "Web development is the work involved in developing a website for the Internet or an intranet."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "UI/UX design refers to the design of user interfaces for computers, mobile devices, and other electronic devices."
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Web Design",
      description: "Web design refers to the design of websites that are displayed on the internet. It usually refers to user interface design."
    }
  ];

  const journeySteps = [
    {
      year: "2023 - PRESENT",
      title: "Graduate Diploma in Software Engineering",
      institution: "Institute of Software Engineering - IJSE",
      description: "Currently pursuing advanced software engineering concepts and practical development skills.",
      status: "ongoing"
    },
    {
      year: "2023",
      title: "British Way English Academy",
      institution: "British Way English Academy",
      description: "Successfully completed comprehensive English language course to enhance communication skills.",
      status: "completed"
    },
    {
      year: "2022",
      title: "GCE Ordinary Level",
      institution: "Rangiri Dambulla Central College",
      description: "Completed secondary education with strong foundation in mathematics and sciences.",
      status: "completed"
    }
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-[#000625] to-[#200C1A] text-white overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm animate-fade-in">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>

              <ul className={`${
                  isMenuOpen ? 'flex' : 'hidden'
              } md:flex absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto flex-col md:flex-row items-center gap-8 bg-black/90 md:bg-transparent p-6 md:p-0`}>
                <li><a href="#header" className="hover:text-emerald-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a></li>
                <li><a href="#journey" className="hover:text-emerald-400 transition-colors">My Journey</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="header" className="pt-32 pb-20 animate-fade-in">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 animate-fade-in">
                <h2 className="text-2xl text-emerald-400 mb-4">Hi There, I'm</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Yashis Himsara</h1>
                <p className="text-xl text-gray-300">Full Stack Developer</p>
              </div>
              <div className="flex-1 animate-scale-in">
                <img
                    src="https://github.com/yashisHimsara/Image/blob/master/assets/WhatsApp%20Image%202025-01-11%20at%2023.16.17_128a2b87.jpg?raw=true"
                    alt="Developer"
                    className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black/20 animate-fade-in">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 animate-scale-in">
                <img
                    src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800"
                    alt="About Me"
                    className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 animate-fade-in">
                <h2 className="text-4xl font-bold mb-8">About Me</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  "I'm 20 years old creative web designer based in Sri Lanka, specializing in User Interface
                  Design and Development. I build clean, appealing, and functional interfaces which
                  comply with the latest web standards."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 animate-fade-in">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Movie Explorer",
                  description: "A web application to explore, search, and manage favorite movies using real-time data from the TMDb API with features like filtering, trailers, dark mode, and local storage support. TechStack: React, Axios for API requests, TMDb API for movie data",
                  image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioUPyn34M7Hc/v0/-1x-1.webp",
                  link: "https://movie-omega-neon.vercel.app/"
                },
                {
                  title: "Plant Life Project 2.0",
                  description: "Advanced POS system designed for a flower nursery with modern features and improved user experience",
                  image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=800",
                  link: "https://github.com/yashisHimsara/Project_PLANT_LIFE_2.0.git"
                },
                {
                  title: "Chat App",
                  description: "Real-time messaging application with instant updates and modern UI",
                  image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800",
                  link: "https://github.com/yashisHimsara/Chat-app.git"
                },
                {
                  title: "Student Registration",
                  description: "Comprehensive student management system with registration and tracking features",
                  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
                  link: "https://github.com/yashisHimsara/student_registration.git"
                }
              ].map((project, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl animate-scale-in hover:scale-105 transition-all duration-300">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm line-clamp-3">{project.description}</p>
                      <a href={project.link} className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                        View Project <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Journey Section */}
        <section id="journey" className="py-20 bg-black/20 animate-fade-in">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">My Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-emerald-400/30"></div>

                {journeySteps.map((step, index) => (
                    <div key={index} className={`relative flex items-center mb-12 animate-fade-in ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`} style={{ animationDelay: `${index * 0.2}s` }}>
                      {/* Timeline dot */}
                      <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-[#000625] z-10 animate-scale-in"></div>

                      {/* Content */}
                      <div className={`ml-16 md:ml-0 md:w-5/12 ${
                          index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                      }`}>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                              step.status === 'ongoing'
                                  ? 'bg-emerald-500/20 text-emerald-400'
                                  : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {step.year}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-emerald-400 font-medium mb-3">{step.institution}</p>
                          <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 animate-fade-in">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-scale-in hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-emerald-400 mb-6 transition-transform group-hover:scale-110">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                      Learn more <ArrowUpRight size={16} />
                    </a>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-black/20 animate-fade-in">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Get In Touch</h2>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 animate-fade-in">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 hover:scale-105 transition-transform">
                    <Send className="text-emerald-400" />
                    <a href="mailto:yashissenavirathna@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                      yashissenavirathna@gmail.com
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com" className="hover:text-emerald-400 hover:scale-110 transition-all">
                      <Github />
                    </a>
                    <a href="https://linkedin.com" className="hover:text-emerald-400 hover:scale-110 transition-all">
                      <Linkedin />
                    </a>
                    <a href="https://facebook.com" className="hover:text-emerald-400 hover:scale-110 transition-all">
                      <Facebook />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 animate-fade-in">
                <form className="space-y-6">
                  <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all hover:bg-white/15"
                    />
                  </div>
                  <div>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all hover:bg-white/15"
                    />
                  </div>
                  <div>
                  <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all hover:bg-white/15"
                  ></textarea>
                  </div>
                  <button
                      type="submit"
                      className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-all flex items-center gap-2 hover:scale-105"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-lg transition-all hover:scale-110 animate-scale-in"
        >
          <ChevronUp />
        </button>
      </div>
  );
};

export default Index;
