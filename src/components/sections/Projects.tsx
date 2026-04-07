import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'EduLMS – Learning Management System',
      subtitle: 'Personal Project (Full-stack)',
      duration: 'Feb 2026 – Mar 2026',
      description:
        'A comprehensive learning platform supporting Admin, Teacher, and Student roles with Role-Based Access Control (RBAC).',
      techStack: 'React, Node.js (Express), SQL Server, JWT, TailwindCSS',
      achievements: [
        'Developed a high-performance Single Page Application (SPA) using React and TailwindCSS.',
        'Implemented secure authentication with JWT (Access & Refresh Token flow).',
        'Designed a complex relational database to track course progress, assignments, and submissions.',
        'Integrated real-time interactions, including comments and notification systems.',
      ],
    },
    {
      title: 'UTEshop – E-commerce Web Application',
      subtitle: 'Team Project',
      duration: 'Aug 2025 – Oct 2025',
      teamSize: '3 members',
      description: 'A multi-role e-commerce system (User, Vendor, Admin, Shipper).',
      techStack: 'Java Servlet, JSP, JPA, SQL Server, JWT, Bootstrap',
      achievements: [
        'UI/UX Design: Designed the system architecture and user interface (Figma to Code) for Admin dashboards and core user layouts.',
        'Core Logic: Built the authentication system (Login/Register/OAuth) and the Admin module for shop/user management.',
        'Integrations: Successfully integrated VNPAY payment gateway (Sandbox) and WebSockets for real-time communication.',
        'Optimization: Optimized database schemas and queries to ensure system stability under multi-role data flows.',
      ],
    },
    {
      title: 'Human Resource Management System (HRM)',
      subtitle: 'Team Project',
      duration: 'May 2025 – Jun 2025',
      teamSize: '3 members',
      description: 'An internal management system built with a 3-tier architecture.',
      techStack: 'C# (.NET Framework), WinForms (Guna.UI2), SQL Server, Entity Framework',
      achievements: [
        'Developed the User Module (Frontend & Backend) for profile management and salary tracking.',
        'Built a robust Attendance System featuring automated check-in/out logic and data processing.',
        'Implemented leave management workflows, allowing employees to submit and track requests.',
        'Optimized data operations using Stored Procedures and Entity Framework.',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Project Experience"
          subtitle="Real-world applications I've built and contributed to"
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
