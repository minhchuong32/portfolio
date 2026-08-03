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
    key: "core" | "frameworks" | "uiux" | "state" | "backend" | "tools" | "concepts";
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
      role: "Frontend Developer (ReactJS)",
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
        "Frontend developer focused on ReactJS, Vite, and TailwindCSS. Experienced in designing UI/UX prototypes, building reusable component architectures, and integrating RESTful APIs across e-commerce, LMS, inventory management, and learning platforms.",
      highlights: ["ReactJS", "Vite", "Redux Toolkit", "Context API", "TailwindCSS", "Axios", "RESTful API"],
      stats: [
        { label: "Featured Projects", value: "5" },
        { label: "Education", value: "HCMUTE" },
        { label: "Focus", value: "Frontend" },
      ],
      targetRole: "Frontend Developer (ReactJS)",
      targetRoleLabel: "Target Role",
      focus: "Responsive UI & API Integration",
      focusLabel: "Focus",
      primaryStack: "ReactJS, Vite, TailwindCSS, Context API",
      primaryStackLabel: "Primary Stack",
      experience: "FlashLearn, Inventory, EduLMS, E-commerce",
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
        "A frontend-first toolkit shaped around clean UI, state management, API integration, and practical delivery.",
    },
    skills: [
      {
        key: "core",
        title: "Core",
        description:
          "Foundations I use to build solid interfaces and maintainable code.",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript (basic)"],
      },
      {
        key: "frameworks",
        title: "Frameworks & Libraries",
        description: "My main UI stack for modern frontend applications.",
        skills: ["ReactJS", "Vite", "TailwindCSS", "Bootstrap"],
      },
      {
        key: "uiux",
        title: "UI / UX",
        description: "Prototyping, wireframing, and responsive web design.",
        skills: ["Figma", "Wireframing", "Responsive Design"],
      },
      {
        key: "state",
        title: "State & Data",
        description:
          "Patterns for state flow, API integration, and authentication.",
        skills: ["Context API", "Axios", "RESTful API", "JWT"],
      },
      {
        key: "backend",
        title: "Backend (Basic)",
        description:
          "Basic backend knowledge to coordinate frontend and API work.",
        skills: ["Node.js", "Express", "MongoDB", "SQL Server"],
      },
      {
        key: "tools",
        title: "Tools",
        description:
          "Daily tooling for design handoff, debugging, and delivery.",
        skills: ["Git/GitHub", "Figma", "Postman"],
      },
    ],
    projectsSection: {
      eyebrow: "Projects",
      title: "Selected work",
      subtitle:
        "The projects below reflect the updated experience and technologies from my CV.",
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
          "Designed UI/UX prototypes in Figma and developed responsive React interfaces.",
          "Built the frontend architecture with reusable components and Redux Toolkit.",
          "Integrated RESTful APIs and contributed to the VNPay payment API.",
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
          "Designed and developed responsive web interfaces using Thymeleaf, Bootstrap, and HTML/CSS, focusing on usability and inventory management workflows.",
          "Implemented Import Order and Export Order modules, including creating transactions, validating inventory quantities, updating stock levels, and managing order status.",
          "Applied the Observer Design Pattern to automatically handle inventory-related events, such as stock movement updates and low-stock notifications, improving system maintainability.",
        ],
      },
      {
        title: "EduLMS – Learning Management System",
        projectType: "Personal",
        duration: "02/2026 – 03/2026",
        github: "https://github.com/minhchuong32/EduLMS",
        techStack: [
          "React",    
          "Tailwind CSS",
          "Context API",
          "Node.js",
          "Express",
          "SQL Server",
          "JWT",
          "Axios",
        ],
        description:
          "A web-based multi-role Learning Management System UI supporting Admin, Teacher, and Student workflows.",
        achievements: [
          "Designed multi-role UI (Admin / Teacher / Student): dashboard, course management, lesson viewer, assignments.",
          "Implemented JWT-based role rendering, Context API state management, and Axios API integration.",
          "Built interactive features: quiz interface, assignment submission, comments, and notifications.",
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
          "Full-stack e-commerce web application featuring product discovery, cart, online payment, and order tracking.",
        achievements: [
          "Built full e-commerce flow: product listing, cart, checkout, online payment (Stripe), and order tracking.",
          "Implemented Context API state management for cart and user session; integrated Cloudinary for media upload.",
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
          "Designed the frontend architecture and reusable UI structure.",
          "Developed authentication, authorization, and Admin interfaces using JSP, JSTL, and Bootstrap.",
          "Contributed to Admin backend APIs and business logic.",
        ],
      },
    ],
    educationSection: {
      eyebrow: "Education",
      title: "Academic background",
      subtitle:
        "My degree, coursework, and the university environment that shaped my web development foundation.",
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
        "Open to Frontend Developer (ReactJS) Intern or Fresher opportunities. I am available through the channels below.",
    },
    contact: {
      title: "Quick contact",
      subtitle: "Fastest ways to reach me",
      overview:
        "I am open to frontend opportunities where I can contribute to clean UI, smooth interaction flows, and reliable API integration.",
      profileSummary: "Frontend Developer (ReactJS) · Intern / Fresher",
      points: [
        "ReactJS, Vite, Redux Toolkit, Context API, Axios, and JWT-focused frontend delivery",
        "Experience across FlashLearn (English platform), Inventory System, LMS, and E-commerce applications",
        "Available in Ho Chi Minh City for internship or fresher roles",
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
      role: "Frontend Developer (ReactJS)",
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
        "Lập trình viên Frontend chuyên về ReactJS, Vite và TailwindCSS. Có kinh nghiệm thiết kế prototype UI/UX, xây dựng kiến trúc component tái sử dụng và tích hợp RESTful API cho ứng dụng thương mại điện tử, LMS, quản lý kho hàng và nền tảng học tiếng Anh.",
      highlights: ["ReactJS", "Vite", "Redux Toolkit", "Context API", "TailwindCSS", "Axios", "RESTful API"],
      stats: [
        { label: "Dự án nổi bật", value: "5" },
        { label: "Học vấn", value: "HCMUTE" },
        { label: "Định hướng", value: "Frontend" },
      ],
      targetRole: "Frontend Developer (ReactJS)",
      targetRoleLabel: "Vai trò mục tiêu",
      focus: "Giao diện Responsive & API Integration",
      focusLabel: "Tập trung",
      primaryStack: "ReactJS, Vite, TailwindCSS, Context API",
      primaryStackLabel: "Stack chính",
      experience: "FlashLearn, Inventory, EduLMS, E-commerce",
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
        "Bộ công cụ ưu tiên frontend, xoay quanh UI sạch, quản lý state, tích hợp API và triển khai thực tế.",
    },
    skills: [
      {
        key: "core",
        title: "Cốt lõi",
        description:
          "Nền tảng mình dùng để xây giao diện chắc chắn và dễ bảo trì.",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript (basic)"],
      },
      {
        key: "frameworks",
        title: "Framework & Thư viện",
        description: "Stack UI chính cho ứng dụng frontend hiện đại.",
        skills: ["ReactJS", "Vite", "TailwindCSS", "Bootstrap"],
      },
      {
        key: "uiux",
        title: "UI / UX",
        description: "Thiết kế prototype, wireframe và bố cục responsive web.",
        skills: ["Figma", "Wireframing", "Responsive Design"],
      },
      {
        key: "state",
        title: "State & Dữ liệu",
        description: "Cách mình quản lý state, tích hợp API và xác thực.",
        skills: ["Context API", "Axios", "RESTful API", "JWT"],
      },
      {
        key: "backend",
        title: "Backend (Cơ bản)",
        description: "Đủ để phối hợp frontend với API và dữ liệu.",
        skills: ["Node.js", "Express", "MongoDB", "SQL Server"],
      },
      {
        key: "tools",
        title: "Công cụ",
        description: "Công cụ hằng ngày cho thiết kế, debug và bàn giao.",
        skills: ["Git/GitHub", "Figma", "Postman"],
      },
    ],
    projectsSection: {
      eyebrow: "Dự án",
      title: "Các dự án tiêu biểu",
      subtitle:
        "Những dự án dưới đây phản ánh đúng kinh nghiệm và công nghệ trong CV mới nhất.",
    },
    projects: [
      {
        title: "FlashLearn – English Learning Platform",
        projectType: "Nhóm · 4 thành viên",
        duration: "05/2026 – 07/2026",
        github: "https://github.com/minhchuong32",
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
          "Thiết kế prototype UI/UX trên Figma và phát triển giao diện React responsive.",
          "Xây dựng kiến trúc frontend với các component tái sử dụng và Redux Toolkit.",
          "Tích hợp RESTful API và đóng góp tích hợp API thanh toán VNPay.",
        ],
      },
      {
        title: "Inventory – Management System",
        projectType: "Nhóm · 4 thành viên",
        duration: "03/2026 – 04/2026",
        github: "https://github.com/minhchuong32",
        techStack: [
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
          "Thymeleaf",
          "PostgreSQL (SQL Server)",
          "Docker",
        ],
        description:
          "Hệ thống quản lý kho hàng trực tuyến cho doanh nghiệp vừa và nhỏ, hỗ trợ vận hành kho, theo dõi tồn kho và phân quyền truy cập.",
        achievements: [
          "Thiết kế và phát triển giao diện web responsive bằng Thymeleaf, Bootstrap và HTML/CSS, tập trung vào trải nghiệm người dùng và luồng quản lý kho.",
          "Triển khai các module Đơn nhập hàng (Import Order) và Đơn xuất hàng (Export Order), bao gồm tạo giao dịch, xác thực số lượng tồn kho, cập nhật tồn kho và quản lý trạng thái đơn hàng.",
          "Áp dụng Observer Design Pattern để tự động xử lý các sự kiện kho hàng như cập nhật biến động kho và thông báo sắp hết hàng, nâng cao tính bảo trì của hệ thống.",
        ],
      },
      {
        title: "EduLMS – Learning Management System",
        projectType: "Cá nhân",
        duration: "02/2026 – 03/2026",
        github: "https://github.com/minhchuong32/EduLMS",
        techStack: [
          "React",
          "Tailwind CSS",
          "Context API",
          "Node.js",
          "Express",
          "SQL Server",
          "JWT",
          "Axios",
        ],
        description:
          "Thiết kế giao diện LMS đa vai trò cho Admin, Teacher và Student với màn hình theo quyền và luồng làm việc kết nối API.",
        achievements: [
          "Thiết kế giao diện đa vai trò (Admin / Teacher / Student): dashboard, course management, lesson viewer, assignments.",
          "Triển khai JWT-based role rendering, Context API state management, và Axios API integration.",
          "Xây dựng các tính năng tương tác: quiz interface, assignment submission, comments, và notifications.",
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
          "Xây dựng luồng thương mại điện tử đầy đủ với tìm kiếm sản phẩm, giỏ hàng, thanh toán và theo dõi đơn hàng.",
        achievements: [
          "Xây dựng quy trình thương mại điện tử hoàn chỉnh: danh sách sản phẩm, giỏ hàng, checkout, thanh toán trực tuyến (Stripe) và theo dõi đơn hàng.",
          "Triển khai quản lý state bằng Context API cho giỏ hàng và phiên làm việc; tích hợp Cloudinary để tải lên tệp truyền thông.",
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
          "Thiết kế và phát triển giao diện e-commerce đa vai trò cho Guest, User, Vendor, Admin và Shipper.",
        achievements: [
          "Thiết kế kiến trúc frontend và cấu trúc UI tái sử dụng.",
          "Phát triển giao diện xác thực, phân quyền và giao diện Admin bằng JSP, JSTL và Bootstrap.",
          "Đóng góp xây dựng API backend và logic nghiệp vụ cho Admin.",
        ],
      },
    ],
    educationSection: {
      eyebrow: "Học vấn",
      title: "Nền tảng học thuật",
      subtitle:
        "Bằng cấp, học phần liên quan và môi trường đại học đã định hình nền tảng phát triển web của mình.",
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
        "Mình đang tìm cơ hội thực tập và fresher Frontend Developer (ReactJS). Thông tin liên hệ ở bên dưới.",
    },
    contact: {
      title: "Liên hệ nhanh",
      subtitle: "Cách nhanh nhất để gặp mình",
      overview:
        "Mình sẵn sàng tham gia các dự án frontend cần UI sạch, luồng tương tác mượt và tích hợp API ổn định.",
      profileSummary: "Frontend Developer (ReactJS) · Intern / Fresher",
      points: [
        "Ưu tiên frontend với ReactJS, Vite, Redux Toolkit, Context API, Axios và JWT",
        "Kinh nghiệm qua các dự án FlashLearn (Học tiếng Anh), Inventory (Quản lý kho), LMS và E-commerce",
        "Làm việc tại TP. Hồ Chí Minh cho vị trí thực tập hoặc fresher",
      ],
    },
  },
};

export const heroProfile = cvContent.en.hero;
export const navigationItems = cvContent.en.navigationItems;
export const cvUrl =
  "https://drive.google.com/file/d/1nIGM7ZrmVAmwW8ZLN6CLFo720FCJoySg/view?usp=sharing";
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
