import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Database, Globe, Menu, X, ChevronDown, Award, BookOpen, Briefcase, Calendar, Download } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="max-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-2xl font-bold text-blue-600">JD</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-600'
                  } hover:text-blue-500 transition-colors`}
                >
                  {item}
                </button>
              ))}
              <a
                href="/resume.pdf"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {['home', 'about', 'experience', 'skills', 'projects', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
                href="/resume.pdf"
                className="block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="max-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16">
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-400">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Hi, I'm <span className="text-blue-400">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I'm a passionate full-stack developer with 5 years of experience building web applications.
                  I specialize in React, Node.js, and cloud technologies, focusing on creating scalable and
                  user-friendly solutions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  My journey in tech began during college where I discovered my love for coding. Since then,
                  I've worked with various startups and enterprises, helping them build robust applications.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Location</h4>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-gray-600">john@example.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Experience</h4>
                    <p className="text-gray-600">5+ Years</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Availability</h4>
                    <p className="text-gray-600">Open to Opportunities</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Award className="w-6 h-6 mr-2 text-blue-500" />
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Bachelor in Computer Science</h4>
                      <p className="text-gray-600">Stanford University • 2015-2019</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Web Development Certification</h4>
                      <p className="text-gray-600">freeCodeCamp • 2020</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
                    Languages
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">English</span>
                      <span className="text-gray-600">Native</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Spanish</span>
                      <span className="text-gray-600">Intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  title: 'Senior Full Stack Developer',
                  company: 'Tech Corp',
                  period: '2021 - Present',
                  description: 'Led development of enterprise applications, mentored junior developers, and implemented CI/CD pipelines.',
                },
                {
                  title: 'Full Stack Developer',
                  company: 'StartUp Inc',
                  period: '2019 - 2021',
                  description: 'Developed and maintained multiple client projects using React and Node.js.',
                },
                {
                  title: 'Junior Developer',
                  company: 'Web Solutions',
                  period: '2017 - 2019',
                  description: 'Assisted in frontend development and learned backend technologies.',
                },
              ].map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <span className="text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-600">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                <Code2 className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">React & Next.js</p>
                  <p className="text-gray-600">JavaScript</p>
                  <p className="text-gray-600">Tailwind CSS</p>
                  <p className="text-gray-600">Redux & Zustand</p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                <Database className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Node.js & Express</p>
                  <p className="text-gray-600">PostgreSQL</p>
                  <p className="text-gray-600">MongoDB</p>
                  <p className="text-gray-600">GraphQL</p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                <Globe className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-4">DevOps</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">AWS & Azure</p>
                  <p className="text-gray-600">Docker</p>
                  <p className="text-gray-600">Kubernetes</p>
                  <p className="text-gray-600">CI/CD Pipelines</p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                <Cpu className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-4">Tools</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Git & GitHub</p>
                  <p className="text-gray-600">VS Code</p>
                  <p className="text-gray-600">Jira & Confluence</p>
                  <p className="text-gray-600">Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60',
                tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
              },
              {
                title: 'Task Management App',
                description: 'Real-time task management application with team collaboration features',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
                tech: ['Next.js', 'JavaScript', 'Prisma', 'PostgreSQL'],
              },
              {
                title: 'AI Content Generator',
                description: 'Content generation tool powered by OpenAI with custom templates',
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
                tech: ['React', 'Python', 'OpenAI', 'FastAPI'],
              },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-500 hover:text-blue-600"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-500 hover:text-blue-600"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Building Scalable React Applications',
                date: 'March 15, 2024',
                category: 'React',
                image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
              },
              {
                title: 'Modern Backend Architecture',
                date: 'March 10, 2024',
                category: 'Backend',
                image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?w=800&auto=format&fit=crop&q=60',
              },
              {
                title: 'DevOps Best Practices',
                date: 'March 5, 2024',
                category: 'DevOps',
                image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=60',
              },
            ].map((post, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 mt-4"
                  >
                    Read More
                    <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-500 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">john@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Briefcase className="w-6 h-6 text-blue-500 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold mb-1">Employment</h4>
                      <p className="text-gray-600">Open to opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-blue-500 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">John Doe</h3>
              <p className="text-gray-400 mb-4">
                Full Stack Developer specializing in modern web technologies and cloud solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Projects', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to my newsletter for the latest updates and articles.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;