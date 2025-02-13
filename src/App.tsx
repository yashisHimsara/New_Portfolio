import React, { useState } from 'react';
import { Menu, X, Send, Github, Linkedin, Facebook, ArrowUpRight, ChevronUp, Monitor, Smartphone, Code, Palette, Layout } from 'lucide-react';

function App() {
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

  const assignments = [
    { id: "01", link: "https://github.com/yashisHimsara/Portfolio.git" },
    { id: "02", link: "https://github.com/yashisHimsara/Portfolio.git" },
    { id: "03", link: "https://github.com/yashisHimsara/Assignment_03-CSS.git" },
    { id: "04", link: "https://github.com/yashisHimsara/CSSAssignment04.git" },
    { id: "05", link: "https://github.com/yashisHimsara/Portfolio.git" },
    { id: "06", link: "https://github.com/yashisHimsara/POS-System-Boostrap.git" },
    { id: "07", link: "https://github.com/yashisHimsara/POS-System-Boostrap.git" },
    { id: "08", link: "https://github.com/yashisHimsara/Assignment-08" },
    { id: "09", link: "https://github.com/yashisHimsara/Assignment-09.git" },
    { id: "10", link: "https://github.com/yashisHimsara/Calculator.git" },
    { id: "11", link: "https://github.com/yashisHimsara/POS-System-Boostrap.git" },
    { id: "12", link: "https://github.com/yashisHimsara/POS-System-Boostrap.git" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000625] to-[#200C1A] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
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
              <li><a href="#assignments" className="hover:text-emerald-400 transition-colors">Assignments</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="header" className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-2xl text-emerald-400 mb-4">Hi There, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Yashis Himsara</h1>
              <p className="text-xl text-gray-300">Full Stack Developer</p>
            </div>
            <div className="flex-1">
              <img 
                src="https://github.com/yashisHimsara/Image/blob/master/assets/WhatsApp%20Image%202025-01-11%20at%2023.16.17_128a2b87.jpg?raw=true"
                alt="Developer"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800"
                alt="About Me"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                "I'm 18 years old creative web designer based in Sri Lanka, specializing in User Interface
                Design and Development. I build clean, appealing, and functional interfaces which
                comply with the latest web standards."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
                    View Project <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <div className="text-emerald-400 mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
                  Learn more <ArrowUpRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assignments Section */}
      <section id="assignments" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">My Assignments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {assignments.map((assignment) => (
              <div key={assignment.id} className="group">
                <div className="relative h-48 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden perspective-1000">
                  <div className="absolute inset-0 preserve-3d group-hover:rotate-y-180 transition-transform duration-500">
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden flex items-center justify-center">
                      <h3 className="text-2xl font-bold">Assignment {assignment.id}</h3>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-emerald-500/20 flex flex-col items-center justify-center gap-4">
                      <a 
                        href={assignment.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors inline-flex items-center gap-2"
                      >
                        View Project <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Send className="text-emerald-400" />
                  <a href="mailto:yashissenavirathna@gmail.com" className="text-gray-300 hover:text-white">
                    yashissenavirathna@gmail.com
                  </a>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com" className="hover:text-emerald-400">
                    <Github />
                  </a>
                  <a href="https://linkedin.com" className="hover:text-emerald-400">
                    <Linkedin />
                  </a>
                  <a href="https://facebook.com" className="hover:text-emerald-400">
                    <Facebook />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <input 
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors flex items-center gap-2"
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
        className="fixed bottom-8 right-8 p-4 bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-lg transition-colors"
      >
        <ChevronUp />
      </button>
    </div>
  );
}

export default App;