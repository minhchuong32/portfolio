import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      subtitle: "Web Application Project",
      duration: "03/2026 – 04/2026",
      teamSize: "3 members",
      github: "https://github.com/minhchuong32/inventory-system",
      description:
        "A full-stack web application for managing inventory (import, export, stock) with real-time tracking, audit trail, and role-based access control.",
      techStack:
        "Java 17, Spring Boot 3, Spring Data JPA, Spring Security, SQL Server, Thymeleaf, Bootstrap 5, Chart.js",
      highlightsLabel: "Responsibilities",
      achievements: [
        "Designed wireframes and user flows for inventory management features (dashboard, import/export, reports).",
        "Translated UI/UX designs into responsive web interfaces using Thymeleaf and Bootstrap.",
        "Developed interactive dashboard components with Chart.js (bar, doughnut charts).",
        "Optimized UI for usability, ensuring clear data visualization and smooth user interaction.",
        "Collaborated between UI design and backend integration to deliver end-to-end features.",
      ],
    },
    {
      title: "EduLMS – Learning Management System",
      subtitle: "Personal Project",
      duration: "02/2026 – 03/2026",
      github: "https://github.com/minhchuong32/EduLMS",
      description:
        "A comprehensive learning platform supporting Admin, Teacher, and Student roles with Role-Based Access Control (RBAC).",
      techStack: "React, Node.js (Express), SQL Server, JWT, TailwindCSS",
      highlightsLabel: "Key Achievements",
      achievements: [
        "Designed wireframes, UI layouts, and user flows for multi-role LMS system (Admin, Teacher, Student).",
        "Developed responsive and reusable UI components using React and Tailwind CSS.",
        "Built core interfaces: dashboard, course management, lesson viewer, assignment, and submission pages.",
        "Implemented state management using Context API for user session, courses, and learning progress.",
        "Integrated frontend with backend APIs using Axios for dynamic data rendering.",
        "Developed role-based UI rendering based on JWT authentication (Admin/Teacher/Student).",
        "Built interactive features: quiz interface, assignment submission, comments, and notifications.",
      ],
    },
    {
      title: "UTEshop – E-commerce Web Application",
      subtitle: "Web Application Project",
      duration: "08/2025 – 10/2025",
      teamSize: "3 members",
      github: "https://github.com/minhchuong32/uteshop-E-commerce-website",
      description:
        "A multi-role e-commerce system (User, Vendor, Admin, Shipper).",
      techStack: "Java Servlet, JSP, JPA, SQL Server, JWT, Bootstrap",
      highlightsLabel: "Responsibilities",
      achievements: [
        "Designed wireframes, UI layouts, and user journeys for a multi-role e-commerce system (Guest, User, Vendor, Admin).",
        "Developed responsive and reusable UI components using JSP, JSTL, and Bootstrap.",
        "Applied Sitemesh decorator pattern to maintain consistent layouts across pages.",
        "Developed authentication UI (login/register, OTP verification, Google login integration).",
        "Built admin dashboard interfaces for managing users, products, and orders.",
      ],
    },
    {
      title: "ClothesShop – E-commerce Web Application",
      subtitle: "Fullstack Web Application Project",
      duration: "06/2025 – 08/2025",
      github: "https://github.com/minhchuong32/clothes-shop",
      description:
        "A full-stack e-commerce system with user and admin interfaces, supporting product management, cart, orders, and online payment.",
      techStack:
        "React (Vite), Tailwind CSS, Context API, Node.js, Express, MongoDB, JWT, Stripe, Cloudinary",
      highlightsLabel: "Responsibilities",
      achievements: [
        "Designed wireframes, UI layouts, and user flows for e-commerce features (home, collection, product, cart, checkout, orders).",
        "Developed responsive and reusable UI components using React, Tailwind CSS, and component-based architecture.",
        "Implemented state management using Context API for cart, user session, and global application state.",
        "Built admin dashboard interfaces for product and order management.",
      ],
    },
    {
      title: "Human Resource Management System (HRM)",
      subtitle: "Desktop Application Project",
      duration: "05/2025 – 06/2025",
      teamSize: "3 members",
      github:
        "https://github.com/minhchuong32/company-human-resource-management",
      description:
        "An internal management system built with a 3-tier architecture.",
      techStack: "C# WinForms, Guna.UI2, ADO.NET, Entity Framework, SQL Server",
      highlightsLabel: "Responsibilities",
      achievements: [
        "Developed modern desktop UI using WinForms and Guna.UI2, ensuring consistency and usability.",
        "Implemented backend business logic for the user module including profile management, employee info, salary viewing, attendance tracking, leave requests, and messaging features using BUS/DAL architecture.",
        "Integrated UI with BUS/DAL layers (ADO.NET, Entity Framework) for dynamic data rendering.",
      ],
    },
    {
      title: "Netflix Clone - Movie Streaming UI",
      subtitle: "Frontend Web Application Project",
      duration: "06/2025",
      github: "https://github.com/minhchuong32/netflix",
      description:
        "A modern Netflix-inspired web application that simulates user authentication and movie browsing experience with trailer playback functionality.",
      techStack:
        "React (Vite), React Router DOM, Firebase Authentication, React Toastify",
      highlightsLabel: "Responsibilities",
      achievements: [
        "Developed responsive UI components using React with component-based architecture.",
        "Built Netflix-style homepage with banner and dynamic movie lists.",
        "Implemented routing and navigation using React Router DOM with protected routes.",
        "Integrated Firebase Authentication for user login and registration flow.",
        "Developed video player interface to stream movie trailers based on selected content.",
        "Implemented user feedback system using React Toastify for error handling and notifications.",
      ],
    },
    {
      title: "Grocery Mart - E-commerce UI",
      subtitle: "Frontend Web Application Project",
      duration: "07/2024 – 08/2024",
      github: "https://github.com/minhchuong32/grocery_mart",
      description:
        "A modern e-commerce frontend UI for an online grocery/coffee store built without frameworks.",
      techStack: "HTML5, SCSS, CSS, JavaScript, LocalStorage, Fetch API",
      highlightsLabel: "Responsibilities",
      achievements: [
        "Designed wireframes, UI layouts, and user flows for e-commerce features (home, product, cart, checkout, profile).",
        "Developed responsive and reusable UI components using HTML, SCSS (7-1 pattern), and modular CSS structure.",
        "Built interactive features including product filtering, favourite toggle, tab switching, and dropdown navigation.",
        "Implemented dynamic template loading system (header/footer) using Fetch API with localStorage caching.",
        "Developed dark/light mode system using CSS variables and localStorage persistence.",
        "Created full e-commerce UI flow: product listing, product detail, cart, checkout, payment, and shipping pages.",
        "Optimized UI/UX with responsive design, smooth interactions, and clear visual hierarchy.",
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
          subtitle="Selected projects aligned with my frontend-focused CV"
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
