import SectionTitle from "../ui/SectionTitle";
import { Calendar, BookOpen, FileText } from "lucide-react";
import { motion } from "framer-motion";
import hcmutelogo from "../../assets/hcmute-logo.png";
import hcmutecampus from "../../assets/hcmute-campus.png";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Education" subtitle="My academic background" />

        {/* Animate whole block */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-6 md:p-8 border border-blue-100">
            {/* Layout 2 cột */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Ảnh bên trái */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={hcmutecampus}
                  alt="HCMUTE Campus"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/*  Nội dung bên phải */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={hcmutelogo}
                    alt="HCMUTE Logo"
                    className="w-12 h-12 object-contain bg-white p-1 rounded-lg shadow-sm"
                  />

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                      HCMC University of Technology and Education
                    </h3>
                    <p className="text-sm text-gray-500">(HCMUTE)</p>
                  </div>
                </div>

                <p className="text-gray-700 font-medium mb-4">
                  Bachelor of Engineering in Information Technology
                </p>

                {/* Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-500">Graduation</p>
                      <p className="text-sm font-semibold text-gray-900">
                        June 2027
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                    <BookOpen className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-xs text-gray-500">GPA</p>
                      <p className="text-sm font-semibold text-gray-900">
                        3.2 / 4.0
                      </p>
                    </div>
                  </div>
                </div>

                {/* Courses */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures",
                      "Web Development",
                      "Database Management",
                      "Computer Networks",
                      "Software Engineering",
                    ].map((course, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thesis */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">
                    Expected Thesis
                  </h4>
                  <p className="text-sm text-gray-600">
                    Developing a Full-stack LMS using React & Modern JavaScript
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
            >
              <div className=" rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104819.4862565605!2d106.61947779726565!3d10.850632400000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgS-G7uSB0aHXhuq10IFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e1!3m2!1svi!2sus!4v1775557823134!5m2!1svi!2sus"
                  className="w-full h-[400px] md:h-full-[500px] transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
