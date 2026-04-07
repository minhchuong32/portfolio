import SectionTitle from '../ui/SectionTitle';
import { GraduationCap, Calendar, BookOpen, FileText } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Education" subtitle="My academic background" />

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 md:p-10 border border-blue-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 p-4 rounded-xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  HCMC University of Technology and Engineering (HCMUTE)
                </h3>
                <p className="text-lg text-gray-700 font-medium mb-4">
                  Bachelor of Engineering in Information Technology
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expected Graduation</p>
                  <p className="font-semibold text-gray-900">June 2027</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <div className="bg-green-100 p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">GPA</p>
                  <p className="font-semibold text-gray-900">3.2 / 4.0</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'Web Development',
                  'Database Management',
                  'Computer Networks',
                  'Software Engineering',
                ].map((course, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Expected Thesis
              </h4>
              <p className="text-gray-700">
                Developing a Full-stack LMS using React & Modern JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
