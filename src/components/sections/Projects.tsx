import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      subtitle: "Web Application Project",
      duration: "Mar 2026 – Apr 2026",
      teamSize: "4 members",
      github: "https://github.com/minhchuong32/inventory-system",
      description:
        "A full-stack web application for managing inventory (import, export, stock) with real-time tracking, audit trail, and role-based access control.",
      techStack:
        "Java 17, Spring Boot 3, Spring Data JPA, Spring Security, SQL Server, Thymeleaf, Bootstrap 5, Chart.js",
      achievements: [
        "Designed and implemented a layered architecture (Controller → Service → Repository) following SOLID principles.",
        "Built a complete inventory workflow: import, export, stock tracking with automatic stock updates.",
        "Implemented role-based access control (ADMIN, MANAGER, STAFF) using Spring Security.",
        "Developed audit trail system with created/updated metadata and soft delete across all entities.",
        "Applied OOP principles with BaseEntity and AbstractOrder for code reuse and extensibility.",
        "Implemented stock validation and business rules to prevent insufficient inventory during export.",
        "Built dashboard with KPI statistics and charts using Chart.js.",
        "Optimized database operations using JPA, JOIN FETCH, and computed columns in SQL Server.",
      ],
    },
    {
      title: "EduLMS – Learning Management System",
      subtitle: "Personal Project (Full-stack)",
      duration: "Feb 2026 – Mar 2026",
      github: "https://github.com/minhchuong32/EduLMS",
      description:
        "A comprehensive learning platform supporting Admin, Teacher, and Student roles with Role-Based Access Control (RBAC).",
      techStack: "React, Node.js (Express), SQL Server, JWT, TailwindCSS",
      achievements: [
        "Developed a high-performance Single Page Application (SPA) using React and TailwindCSS.",
        "Implemented secure authentication with JWT (Access & Refresh Token flow).",
        "Designed a complex relational database to track course progress, assignments, and submissions.",
        "Integrated real-time interactions, including comments and notification systems.",
      ],
    },
    {
      title: "UTEshop – E-commerce Web Application",
      subtitle: "Team Project",
      duration: "Aug 2025 – Oct 2025",
      teamSize: "3 members",
      github: "https://github.com/minhchuong32/uteshop-E-commerce-website",
      description:
        "A multi-role e-commerce system (User, Vendor, Admin, Shipper).",
      techStack: "Java Servlet, JSP, JPA, SQL Server, JWT, Bootstrap",
      achievements: [
        "UI/UX Design: Designed the system architecture and user interface (Figma to Code) for Admin dashboards and core user layouts.",
        "Core Logic: Built the authentication system (Login/Register/OAuth) and the Admin module for shop/user management.",
        "Integrations: Successfully integrated VNPAY payment gateway (Sandbox) and WebSockets for real-time communication.",
        "Optimization: Optimized database schemas and queries to ensure system stability under multi-role data flows.",
      ],
    },
    {
      title: "Xuan Hai E-Commerce",
      subtitle: "Full-Stack Web Application",
      duration: "Jun 2025 – Aug 2025",
      teamSize: "Personal Project",
      github: "https://github.com/minhchuong32/clothes-shop",
      description:
        "A full-stack e-commerce platform with user and admin interfaces, supporting product management, cart, orders, and online payments via Stripe.",
      techStack:
        "React 19, Vite, Tailwind CSS, Node.js, Express, MongoDB, JWT, Cloudinary, Stripe",
      achievements: [
        "Developed a full-stack e-commerce system with separate frontend, admin panel, and backend API.",
        "Implemented secure authentication and authorization using JWT and role-based access (admin/user).",
        "Built complete shopping flow: product browsing, cart management, checkout, and order tracking.",
        "Integrated Stripe payment gateway with automatic payment verification.",
        "Implemented product image upload and management using Cloudinary.",
        "Managed global state using React Context API for cart and user data.",
        "Designed responsive UI with Tailwind CSS for both user and admin interfaces.",
        "Built RESTful APIs with Express and MongoDB (Mongoose) for scalable backend architecture.",
      ],
    },
    {
      title: "Human Resource Management System (HRM)",
      subtitle: "Team Project",
      duration: "May 2025 – Jun 2025",
      teamSize: "3 members",
      github:
        "https://github.com/minhchuong32/company-human-resource-management",
      description:
        "An internal management system built with a 3-tier architecture.",
      techStack:
        "C# (.NET Framework), WinForms (Guna.UI2), SQL Server, Entity Framework",
      achievements: [
        "Developed the User Module (Frontend & Backend) for profile management and salary tracking.",
        "Built a robust Attendance System featuring automated check-in/out logic and data processing.",
        "Implemented leave management workflows, allowing employees to submit and track requests.",
        "Optimized data operations using Stored Procedures and Entity Framework.",
      ],
    },
    {
      title: "Grocery Mart - E-commerce UI",
      subtitle: "Frontend UI Project",
      duration: "Jul 2024 – Aug 2024",
      teamSize: "Personal Project",
      github: "https://github.com/minhchuong32/grocery_mart",
      description:
        "A modern e-commerce frontend UI for an online grocery/coffee store built without frameworks.",
      techStack:
        "HTML5, SCSS (7-1 Architecture), Vanilla JavaScript, Fetch API, LocalStorage",
      achievements: [
        "Designed and built a fully responsive multi-page e-commerce UI (home, product, checkout, profile, auth).",
        "Implemented dark/light mode toggle with persistent state using LocalStorage.",
        "Developed a dynamic template loading system (header & footer) using Fetch API with caching.",
        "Created interactive UI components: product filters, tabs, dropdown navigation, and favourite toggles.",
        "Structured scalable styling using SCSS 7-1 architecture for maintainability.",
        "Built complete shopping flow: cart → checkout → shipping → payment pages.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 px-4"
    >
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
