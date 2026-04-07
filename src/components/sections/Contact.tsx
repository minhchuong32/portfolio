import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full"></div>
        <p className="text-blue-100 text-lg mb-12">
          I'm actively seeking internship and fresher opportunities. Let's connect!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:chuongminh3225@gmail.com"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-200 group"
          >
            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-blue-200 text-sm">chuongminh3225@gmail.com</p>
          </a>

          <a
            href="tel:+84977692690"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-200 group"
          >
            <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <p className="text-blue-200 text-sm">+84 977 692 690</p>
          </a>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-blue-200 text-sm">Ho Chi Minh City</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-blue-600 transition-all duration-200 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:chuongminh3225@gmail.com"
            className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-green-600 transition-all duration-200 hover:scale-110"
          >
            <Send className="w-6 h-6 text-white" />
          </a>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-blue-200">
            © 2026 Pham Han Minh Chuong. Built with React & TailwindCSS
          </p>
        </div>
      </div>
    </section>
  );
}
