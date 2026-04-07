import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-20">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            Pham Han Minh Chuong
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-8">
            Frontend Developer
          </p>
          <p className="text-lg text-gray-600 mb-2">Intern/Fresher Position</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-gray-600">
          <a
            href="tel:+84977692690"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm md:text-base">+84 977 692 690</span>
          </a>
          <a
            href="mailto:chuongminh3225@gmail.com"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm md:text-base">
              chuongminh3225@gmail.com
            </span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="text-sm md:text-base">Ho Chi Minh City</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/pham-han-minh-chuong-43b95830b/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 text-blue-600"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/minhchuong32"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 text-gray-800"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/chuong.minh.580786"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 text-blue-500"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@chuwongpahm"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 text-red-600"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        <div className="mt-12">
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
