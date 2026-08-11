import pmcPortrait from "../assets/phmc.png";
import hcmuteCampus from "../assets/hcmute-campus.png";
import hcmuteLogo from "../assets/hcmute-logo.png";

export type Language = "en" | "vi";

type NavItem = {
  label: string;
  href: string;
};

type SectionTitleCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

type HeroCopy = {
  badge: string;
  name: string;
  role: string;
  level: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  facebook: string;
  youtube: string;
  portrait: string;
  summary: string;
  highlights: string[];
  stats: Array<{ label: string; value: string }>;
  targetRole: string;
  targetRoleLabel: string;
  focus: string;
  focusLabel: string;
  primaryStack: string;
  primaryStackLabel: string;
  experience: string;
  experienceLabel: string;
  viewProjects: string;
  contactMe: string;
  viewCv: string;
  fileName: string;
};

type ProjectCopy = {
  title: string;
  projectType: string;
  duration: string;
  techStack: string[];
  description: string;
  achievements: string[];
  github?: string;
};

type EducationCopy = {
  school: string;
  degree: string;
  duration: string;
  gpa: string;
  location: string;
  summary: string;
  courses: string[];
};

type ContactCopy = {
  title: string;
  subtitle: string;
  overview: string;
  profileSummary: string;
  points: string[];
};

type LanguageContent = {
  navigationItems: NavItem[];
  hero: HeroCopy;
  skillsSection: SectionTitleCopy;
  skills: Array<{
    key:
    | "programming"
    | "frontend"
    | "backend"
    | "database"
    | "engineering"
    | "tools"
    | "core"
    | "frameworks"
    | "uiux"
    | "state"
    | "concepts";
    title: string;
    description: string;
    skills: string[];
  }>;
  projectsSection: SectionTitleCopy;
  projects: ProjectCopy[];
  educationSection: SectionTitleCopy;
  education: EducationCopy;
  contactSection: SectionTitleCopy;
  contact: ContactCopy;
};

export const cvContent: Record<Language, LanguageContent> = {
  en: {
    navigationItems: [
      { label: "Home", href: "#home" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      badge: "CV Portfolio 2026",
      name: "PHAM HAN MINH CHUONG",
      role: "Software Engineer",
      level: "Intern / Fresher",
      email: "chuongminh3225@gmail.com",
      phone: "+84 977 692 690",
      location: "Ho Chi Minh City",
      linkedin: "https://www.linkedin.com/in/pham-han-minh-chuong-43b95830b/",
      github: "https://github.com/minhchuong32",
      facebook: "https://www.facebook.com/chuong.minh.580786/",
      youtube: "https://www.youtube.com/@chuwongpahm",
      portrait: pmcPortrait,
      summary:
        "Software Engineer with a solid foundation in JavaScript, TypeScript, ReactJS, Node.js, Java, and Spring Boot. Skilled in developing responsive web applications, designing RESTful APIs, managing state, and implementing role-based access control.",
      highlights: [
        "Software Engineer",
        "ReactJS",
        "Node.js",
        "Spring Boot",
        "Java",
        "TypeScript",
        "RESTful API",
        "Docker",
      ],
      stats: [
        { label: "Featured Projects", value: "4" },
        { label: "Education", value: "HCMUTE" },
        { label: "Role", value: "Software Engineer" },
      ],
      targetRole: "Software Engineer",
      targetRoleLabel: "Target Role",
      focus: "Full-Stack Web Development",
      focusLabel: "Focus",
      primaryStack: "ReactJS, Node.js, Spring Boot, SQL/MongoDB",
      primaryStackLabel: "Primary Stack",
      experience: "FlashLearn, Inventory, ClothesShop, UTEShop",
      experienceLabel: "Experience",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      viewCv: "View CV",
      fileName: "Pham_Han_Minh_Chuong_CV_EN.html",
    },
    skillsSection: {
      eyebrow: "Technical Skills",
      title: "What I work with",
      subtitle:
        "A versatile software engineering stack covering core languages, modern frontend, backend services, databases, engineering practices, and tools.",
    },
    skills: [
      {
        key: "programming",
        title: "Programming",
        description: "Core programming and markup languages.",
        skills: [
          "JavaScript (ES6+)",
          "TypeScript (Basic)",
          "Java",
          "HTML5",
          "CSS3",
        ],
      },
      {
        key: "frontend",
        title: "Frontend",
        description: "Modern web frameworks, UI libraries, and styling.",
        skills: [
          "ReactJS",
          "Vite",
          "React Router",
          "Redux Toolkit",
          "Context API",
          "Tailwind CSS",
          "Bootstrap",
        ],
      },
      {
        key: "backend",
        title: "Backend",
        description: "Server-side web development, API engineering, and authentication.",
        skills: [
          "Node.js",
          "Express.js",
          "Java Servlet",
          "RESTful API",
          "JWT Authentication & Authorization",
        ],
      },
      {
        key: "database",
        title: "Database",
        description: "Relational, NoSQL databases, and ORM specifications.",
        skills: ["MongoDB", "SQL Server", "PostgreSQL", "JPA"],
      },
      {
        key: "engineering",
        title: "Software Engineering",
        description:
          "Design patterns, architecture, state flow, and security.",
        skills: [
          "MVC",
          "RBAC",
          "REST API Integration",
          "State Management",
          "Design Patterns",
          "Responsive Design",
        ],
      },
      {
        key: "tools",
        title: "Tools",
        description:
          "Daily workflow for version control, containerization, API testing, and UI prototyping.",
        skills: ["Git/GitHub", "Postman", "Docker", "Figma"],
      },
    ],
    projectsSection: {
      eyebrow: "Projects",
      title: "Selected work",
      subtitle:
        "Key projects demonstrating full-stack engineering, team collaboration, and problem-solving skills.",
    },
    projects: [
      {
        title: "FlashLearn – English Learning Platform",
        projectType: "Team · 4 members",
        duration: "05/2026 – 07/2026",
        github: "https://github.com/TDQuecHi227/LearningEnglishFullStack",
        techStack: [
          "React",
          "Vite",
          "Redux Toolkit",
          "React Router",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
        ],
        description:
          "A web-based English learning platform that helps users learn vocabulary through flashcards, quizzes, and personalized learning progress.",
        achievements: [
          "Designed UI/UX prototypes in Figma and developed responsive React interfaces using reusable components.",
          "Structured frontend state management with Redux Toolkit and integrated RESTful APIs using Axios.",
          "Implemented interactive learning features including flashcards, quizzes, and learning progress tracking.",
          "Integrated and contributed to the VNPay payment API for online payment functionality.",
          "Collaborated with team members using Git/GitHub throughout the development process.",
        ],
      },
      {
        title: "Inventory – Management System",
        projectType: "Team · 4 members",
        duration: "03/2026 – 04/2026",
        github: "https://github.com/minhchuong32/inventory-system",
        techStack: [
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
          "Thymeleaf",
          "PostgreSQL (SQL Server)",
          "Docker",
        ],
        description:
          "A web-based inventory management system for small and medium-sized businesses, supporting warehouse operations, inventory tracking, and role-based access control.",
        achievements: [
          "Developed responsive web interfaces using Thymeleaf, Bootstrap, HTML, and CSS for inventory management workflows.",
          "Implemented Import Order and Export Order modules, including transaction creation, inventory validation, stock updates, and order status management.",
          "Applied the Observer Design Pattern to handle inventory-related events such as stock movement updates and low-stock notifications.",
          "Worked with Spring Data JPA and SQL Server to manage inventory and transaction data.",
          "Applied Spring Security for authentication and role-based authorization.",
        ],
      },
      {
        title: "ClothesShop – Full-stack E-commerce",
        projectType: "Personal",
        duration: "06/2025 – 08/2025",
        github: "https://github.com/minhchuong32/clothes-shop",
        techStack: [
          "React (Vite)",
          "Tailwind CSS",
          "Context API",
          "Node.js",
          "Express",
          "MongoDB",
          "JWT",
          "Stripe",
          "Cloudinary",
        ],
        description:
          "Full-stack e-commerce web application featuring product discovery, shopping cart, online payment, and order tracking.",
        achievements: [
          "Developed the complete e-commerce workflow including product listing, shopping cart, checkout, payment, and order tracking.",
          "Built RESTful API integration between React frontend and Node.js/Express backend.",
          "Implemented authentication and user session management using JWT.",
          "Used Context API for global cart and authentication state management.",
          "Integrated Cloudinary for product image storage.",
        ],
      },
      {
        title: "UTEShop – E-commerce Web Application",
        projectType: "Team · 3 members",
        duration: "08/2025 – 10/2025",
        github: "https://github.com/minhchuong32/uteshop-E-commerce-website",
        techStack: [
          "Java Servlet",
          "JSP",
          "JPA",
          "SQL Server",
          "JWT",
          "Bootstrap",
        ],
        description:
          "A full-stack e-commerce platform supporting multiple roles (Guest, User, Vendor, Admin, Shipper) with online payments and order management.",
        achievements: [
          "Designed frontend architecture and developed reusable UI components using JSP, JSTL, and Bootstrap.",
          "Implemented authentication, authorization, and role-based Admin interfaces.",
          "Contributed to backend APIs and business logic for Admin functionality.",
          "Worked with JPA and SQL Server for data persistence and business operations.",
          "Collaborated with team members to develop and integrate application features.",
        ],
      },
    ],
    educationSection: {
      eyebrow: "Education",
      title: "Academic background",
      subtitle:
        "Degree, coursework, and university environment shaping my software engineering foundation.",
    },
    education: {
      school: "HCMC University of Technology and Engineering (HCMUTE)",
      degree: "B.Eng. Information Technology",
      duration: "2023 – 2027",
      gpa: "3.2 / 4.0",
      location: "Ho Chi Minh City",
      summary:
        "Relevant Coursework: Data Structures & Algorithms, Web Development, Database Management, Computer Networks, Software Engineering.",
      courses: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management",
        "Computer Networks",
        "Software Engineering",
      ],
    },
    contactSection: {
      eyebrow: "Contact",
      title: "Let's connect",
      subtitle:
        "Open to Software Engineer Intern or Fresher opportunities. Feel free to reach out.",
    },
    contact: {
      title: "Quick contact",
      subtitle: "Fastest ways to reach me",
      overview:
        "I am open to Software Engineer opportunities where I can contribute to web application development, RESTful API integration, and clean code solutions.",
      profileSummary: "Software Engineer · Intern / Fresher",
      points: [
        "Proficient in JavaScript, TypeScript, ReactJS, Node.js, Spring Boot, Java, SQL, MongoDB, and Docker",
        "Hands-on experience across FlashLearn, Inventory System, ClothesShop, and UTEShop",
        "Available in Ho Chi Minh City for Software Engineer intern or fresher roles",
      ],
    },
  },
  vi: {
    navigationItems: [
      { label: "Trang chủ", href: "#home" },
      { label: "Kỹ năng", href: "#skills" },
      { label: "Dự án", href: "#projects" },
      { label: "Học vấn", href: "#education" },
      { label: "Liên hệ", href: "#contact" },
    ],
    hero: {
      badge: "Hồ sơ CV 2026",
      name: "PHAM HAN MINH CHUONG",
      role: "Software Engineer",
      level: "Intern / Fresher",
      email: "chuongminh3225@gmail.com",
      phone: "+84 977 692 690",
      location: "Ho Chi Minh City",
      linkedin: "https://www.linkedin.com/in/pham-han-minh-chuong-43b95830b/",
      github: "https://github.com/minhchuong32",
      facebook: "https://www.facebook.com/chuong.minh.580786/",
      youtube: "https://www.youtube.com/@chuwongpahm",
      portrait: pmcPortrait,
      summary:
        "Kỹ sư phần mềm với nền tảng vững chắc về JavaScript, TypeScript, ReactJS, Node.js, Java và Spring Boot. Có kinh nghiệm phát triển ứng dụng web responsive, thiết kế RESTful API, quản lý state và phân quyền người dùng dựa trên vai trò (RBAC).",
      highlights: [
        "Software Engineer",
        "ReactJS",
        "Node.js",
        "Spring Boot",
        "Java",
        "TypeScript",
        "RESTful API",
        "Docker",
      ],
      stats: [
        { label: "Dự án nổi bật", value: "4" },
        { label: "Học vấn", value: "HCMUTE" },
        { label: "Định hướng", value: "Software Engineer" },
      ],
      targetRole: "Software Engineer",
      targetRoleLabel: "Vai trò mục tiêu",
      focus: "Phát triển Web Full-Stack & API",
      focusLabel: "Tập trung",
      primaryStack: "ReactJS, Node.js, Spring Boot, SQL/MongoDB",
      primaryStackLabel: "Stack chính",
      experience: "FlashLearn, Inventory, ClothesShop, UTEShop",
      experienceLabel: "Kinh nghiệm",
      viewProjects: "Xem dự án",
      contactMe: "Liên hệ",
      viewCv: "Xem CV",
      fileName: "Pham_Han_Minh_Chuong_CV_VI.html",
    },
    skillsSection: {
      eyebrow: "Kỹ năng kỹ thuật",
      title: "Bộ kỹ năng chuyên môn",
      subtitle:
        "Bộ kỹ năng kỹ nghệ phần mềm bao quát ngôn ngữ lập trình, frontend, backend, cơ sở dữ liệu, mô hình thiết kế và công cụ phát triển.",
    },
    skills: [
      {
        key: "programming",
        title: "Ngôn ngữ lập trình",
        description: "Các ngôn ngữ lập trình và đánh dấu cốt lõi.",
        skills: [
          "JavaScript (ES6+)",
          "TypeScript (Basic)",
          "Java",
          "HTML5",
          "CSS3",
        ],
      },
      {
        key: "frontend",
        title: "Frontend",
        description: "Framework, thư viện frontend hiện đại và styling.",
        skills: [
          "ReactJS",
          "Vite",
          "React Router",
          "Redux Toolkit",
          "Context API",
          "Tailwind CSS",
          "Bootstrap",
        ],
      },
      {
        key: "backend",
        title: "Backend",
        description: "Công nghệ server-side, thiết kế API và phân quyền xác thực.",
        skills: [
          "Node.js",
          "Express.js",
          "Java Servlet",
          "RESTful API",
          "JWT Authentication & Authorization",
        ],
      },
      {
        key: "database",
        title: "Cơ sở dữ liệu",
        description: "Cơ sở dữ liệu quan hệ, NoSQL và ORM.",
        skills: ["MongoDB", "SQL Server", "PostgreSQL", "JPA"],
      },
      {
        key: "engineering",
        title: "Kỹ nghệ phần mềm",
        description:
          "Mô hình kiến trúc, quy chuẩn thiết kế, quản lý state và bảo mật.",
        skills: [
          "MVC",
          "RBAC",
          "REST API Integration",
          "State Management",
          "Design Patterns",
          "Responsive Design",
        ],
      },
      {
        key: "tools",
        title: "Công cụ phát triển",
        description:
          "Công cụ hằng ngày cho quản lý phiên bản, container, kiểm thử API và thiết kế UI.",
        skills: ["Git/GitHub", "Postman", "Docker", "Figma"],
      },
    ],
    projectsSection: {
      eyebrow: "Dự án",
      title: "Các dự án tiêu biểu",
      subtitle:
        "Những dự án dưới đây phản ánh đúng kinh nghiệm và công nghệ từ CV mới nhất.",
    },
    projects: [
      {
        title: "FlashLearn – English Learning Platform",
        projectType: "Nhóm · 4 thành viên",
        duration: "05/2026 – 07/2026",
        github: "https://github.com/TDQuecHi227/LearningEnglishFullStack",
        techStack: [
          "React",
          "Vite",
          "Redux Toolkit",
          "React Router",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
        ],
        description:
          "Nền tảng học tiếng Anh trực tuyến hỗ trợ người dùng học từ vựng qua flashcard, bài kiểm tra và tiến trình học tập cá nhân hóa.",
        achievements: [
          "Thiết kế prototype UI/UX trên Figma và phát triển giao diện React responsive bằng các component tái sử dụng.",
          "Cấu trúc quản lý state frontend với Redux Toolkit và tích hợp RESTful API bằng Axios.",
          "Triển khai các tính năng học tập tương tác bao gồm flashcard, bài kiểm tra (quizzes) và theo dõi tiến trình học tập.",
          "Tích hợp và đóng góp phát triển API thanh toán VNPay phục vụ tính năng thanh toán trực tuyến.",
          "Phối hợp làm việc nhóm hiệu quả bằng Git/GitHub trong suốt quá trình phát triển dự án.",
        ],
      },
      {
        title: "Inventory – Management System",
        projectType: "Nhóm · 4 thành viên",
        duration: "03/2026 – 04/2026",
        github: "https://github.com/minhchuong32/inventory-system",
        techStack: [
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
          "Thymeleaf",
          "PostgreSQL (SQL Server)",
          "Docker",
        ],
        description:
          "Hệ thống quản lý kho hàng trực tuyến cho doanh nghiệp vừa và nhỏ, hỗ trợ vận hành kho, theo dõi tồn kho và phân quyền truy cập (RBAC).",
        achievements: [
          "Phát triển giao diện web responsive bằng Thymeleaf, Bootstrap, HTML và CSS cho các luồng quy trình quản lý kho.",
          "Triển khai module Đơn nhập hàng (Import Order) và Đơn xuất hàng (Export Order), bao gồm tạo giao dịch, xác thực tồn kho, cập nhật số lượng tồn kho và quản lý trạng thái đơn hàng.",
          "Áp dụng Observer Design Pattern để tự động xử lý các sự kiện kho hàng như cập nhật biến động kho và phát thông báo sắp hết hàng.",
          "Làm việc với Spring Data JPA và SQL Server để quản lý dữ liệu tồn kho và lịch sử giao dịch.",
          "Áp dụng Spring Security cho xác thực người dùng và phân quyền dựa trên vai trò (RBAC).",
        ],
      },
      {
        title: "ClothesShop – Full-stack E-commerce",
        projectType: "Cá nhân",
        duration: "06/2025 – 08/2025",
        github: "https://github.com/minhchuong32/clothes-shop",
        techStack: [
          "React (Vite)",
          "Tailwind CSS",
          "Context API",
          "Node.js",
          "Express",
          "MongoDB",
          "JWT",
          "Stripe",
          "Cloudinary",
        ],
        description:
          "Ứng dụng web thương mại điện tử full-stack hỗ trợ tìm kiếm sản phẩm, giỏ hàng, thanh toán trực tuyến và theo dõi đơn hàng.",
        achievements: [
          "Phát triển hoàn chỉnh quy trình thương mại điện tử bao gồm danh mục sản phẩm, giỏ hàng, checkout, thanh toán trực tuyến (Stripe) và theo dõi đơn hàng.",
          "Xây dựng và tích hợp RESTful API giữa frontend React và backend Node.js/Express.",
          "Triển khai tính năng xác thực và quản lý phiên làm việc của người dùng bằng JWT.",
          "Sử dụng Context API để quản lý state toàn cục cho giỏ hàng và trạng thái xác thực.",
          "Tích hợp Cloudinary phục vụ lưu trữ và quản lý hình ảnh sản phẩm.",
        ],
      },
      {
        title: "UTEShop – E-commerce Web Application",
        projectType: "Nhóm · 3 thành viên",
        duration: "08/2025 – 10/2025",
        github: "https://github.com/minhchuong32/uteshop-E-commerce-website",
        techStack: [
          "Java Servlet",
          "JSP",
          "JPA",
          "SQL Server",
          "JWT",
          "Bootstrap",
        ],
        description:
          "Nền tảng thương mại điện tử full-stack hỗ trợ đa vai trò (Guest, User, Vendor, Admin, Shipper) với thanh toán trực tuyến và quản lý đơn hàng.",
        achievements: [
          "Thiết kế kiến trúc frontend và phát triển các component UI tái sử dụng bằng JSP, JSTL và Bootstrap.",
          "Triển khai hệ thống xác thực, phân quyền và các giao diện quản trị Admin theo vai trò.",
          "Đóng góp xây dựng API backend và logic nghiệp vụ cho các tính năng Admin.",
          "Sử dụng JPA và SQL Server cho lưu trữ dữ liệu và xử lý các thao tác nghiệp vụ.",
          "Phối hợp cùng các thành viên trong nhóm để xây dựng và tích hợp tính năng ứng dụng.",
        ],
      },
    ],
    educationSection: {
      eyebrow: "Học vấn",
      title: "Nền tảng học thuật",
      subtitle:
        "Bằng cấp, học phần liên quan và môi trường đại học đã định hình nền tảng kỹ nghệ phần mềm của mình.",
    },
    education: {
      school: "HCMC University of Technology and Engineering (HCMUTE)",
      degree: "B.Eng. Information Technology",
      duration: "2023 – 2027",
      gpa: "3.2 / 4.0",
      location: "Ho Chi Minh City",
      summary:
        "Môn học liên quan: Cấu trúc dữ liệu & Giải thuật, Phát triển web, Quản lý cơ sở dữ liệu, Mạng máy tính, Kỹ nghệ phần mềm.",
      courses: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management",
        "Computer Networks",
        "Software Engineering",
      ],
    },
    contactSection: {
      eyebrow: "Liên hệ",
      title: "Kết nối với mình",
      subtitle:
        "Mình đang tìm cơ hội thực tập và fresher Software Engineer. Thông tin liên hệ ở bên dưới.",
    },
    contact: {
      title: "Liên hệ nhanh",
      subtitle: "Cách nhanh nhất để gặp mình",
      overview:
        "Mình sẵn sàng tham gia các dự án phát triển phần mềm, ứng dụng web full-stack, tích hợp RESTful API và thiết kế hệ thống.",
      profileSummary: "Software Engineer · Intern / Fresher",
      points: [
        "Thành thạo JavaScript, TypeScript, ReactJS, Node.js, Spring Boot, Java, SQL, MongoDB và Docker",
        "Kinh nghiệm thực chiến qua các dự án FlashLearn, Hệ thống quản lý kho, ClothesShop và UTEShop",
        "Sống tại TP. Hồ Chí Minh, sẵn sàng nhận vị trí thực tập hoặc fresher Software Engineer",
      ],
    },
  },
};

export const heroProfile = cvContent.en.hero;
export const navigationItems = cvContent.en.navigationItems;
export const cvUrl =
  "https://drive.google.com/file/d/1PZEVQvKvSHFEhu8Efo2dT7zydBnT3H6p/view?usp=sharing";
export const educationMedia = {
  portrait: hcmuteCampus,
  logo: hcmuteLogo,
};
export const contactLinks = {
  email: heroProfile.email,
  phone: heroProfile.phone,
  location: heroProfile.location,
  linkedin: heroProfile.linkedin,
  github: heroProfile.github,
  facebook: heroProfile.facebook,
  youtube: heroProfile.youtube,
};

export function getCvContent(language: Language) {
  return cvContent[language];
}

export function downloadResume(language: Language) {
  const content = getCvContent(language);
  const languageTag = language === "en" ? "EN" : "VI";
  const html = `<!doctype html>
<html lang="${language}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${content.hero.name} - CV ${languageTag}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 40px; color: #0f172a; background: #f8fafc; }
    .page { max-width: 900px; margin: 0 auto; background: #fff; padding: 40px; border-radius: 24px; box-shadow: 0 24px 80px rgba(15,23,42,.08); }
    h1, h2, h3 { margin: 0 0 12px; }
    h1 { font-size: 34px; }
    h2 { font-size: 20px; margin-top: 28px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
    p { line-height: 1.7; margin: 0 0 10px; }
    .muted { color: #475569; }
    .pill { display: inline-block; margin: 6px 8px 0 0; padding: 8px 12px; border-radius: 999px; background: #eff6ff; color: #1d4ed8; font-size: 13px; }
    ul { padding-left: 18px; margin: 10px 0 0; }
    li { margin-bottom: 8px; }
    .top { display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
    .meta { color: #334155; font-size: 14px; }
  </style>
</head>
<body>
  <div class="page">
    <div class="top">
      <div>
        <h1>${content.hero.name}</h1>
        <p class="muted">${content.hero.role} · ${content.hero.level}</p>
      </div>
      <div class="meta">
        <p>${content.contactSection.title}: ${cvContent[language].contact.profileSummary}</p>
        <p>${content.hero.email}</p>
        <p>${content.hero.phone}</p>
        <p>${content.hero.location}</p>
      </div>
    </div>

    <h2>${content.skillsSection.title}</h2>
    ${content.skills
      .map(
        (category) => `
          <h3>${category.title}</h3>
          <p class="muted">${category.description}</p>
          <div>${category.skills.map((skill) => `<span class="pill">${skill}</span>`).join("")}</div>
        `,
      )
      .join("")}

    <h2>${content.projectsSection.title}</h2>
    ${content.projects
      .map(
        (project) => `
          <h3>${project.title}</h3>
          <p class="muted">${project.projectType} · ${project.duration}</p>
          <p>${project.description}</p>
          <ul>${project.achievements.map((item) => `<li>${item}</li>`).join("")}</ul>
        `,
      )
      .join("")}

    <h2>${content.educationSection.title}</h2>
    <p><strong>${content.education.school}</strong></p>
    <p class="muted">${content.education.degree} · ${content.education.duration} · GPA ${content.education.gpa}</p>
    <p>${content.education.summary}</p>

    <h2>${content.contactSection.title}</h2>
    <p>${content.contact.overview}</p>
    <ul>${content.contact.points.map((item) => `<li>${item}</li>`).join("")}</ul>
  </div>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = content.hero.fileName;
  anchor.click();
  URL.revokeObjectURL(objectUrl);
}
