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
    key: "core" | "frameworks" | "state" | "backend" | "tools" | "concepts";
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
      role: "Frontend Developer",
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
        "Frontend developer focused on responsive, component-driven interfaces with React, TypeScript, and TailwindCSS. I like turning product requirements into clean user flows, role-based screens, and API-driven experiences.",
      highlights: ["React", "TailwindCSS", "Context API", "Axios", "JWT"],
      stats: [
        { label: "Featured Projects", value: "4" },
        { label: "Education", value: "HCMUTE" },
        { label: "Focus", value: "Frontend" },
      ],
      targetRole: "Frontend Developer",
      targetRoleLabel: "Target Role",
      focus: "Responsive UI",
      focusLabel: "Focus",
      primaryStack: "React, TailwindCSS, Context API",
      primaryStackLabel: "Primary Stack",
      experience: "LMS, E-commerce, Mobile-first UI",
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
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
      },
      {
        key: "frameworks",
        title: "Frameworks & Libraries",
        description: "My main UI stack for modern frontend applications.",
        skills: ["ReactJS", "Vite", "TailwindCSS", "Sass", "Bootstrap"],
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
          "Enough backend experience to coordinate frontend and API work.",
        skills: ["Node.js", "Express", "SQL Server", "MongoDB"],
      },
      {
        key: "tools",
        title: "Tools",
        description:
          "Daily tooling for design handoff, debugging, and delivery.",
        skills: ["Git/GitHub", "Figma", "Postman", "VS Code"],
      },
      {
        key: "concepts",
        title: "Concepts",
        description:
          "Software engineering principles behind the interfaces I build.",
        skills: [
          "OOP",
          "MVC",
          "Component-based Architecture",
          "Responsive Design / Mobile-first",
        ],
      },
    ],
    projectsSection: {
      eyebrow: "Projects",
      title: "Selected work",
      subtitle:
        "The projects below reflect the experience and technologies from my CV, with a frontend-first emphasis.",
    },
    projects: [
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
          "Designed a multi-role LMS UI for Admin, Teacher, and Student with role-based screens and API-driven workflows.",
        achievements: [
          "Designed the dashboard, course management, lesson viewer, and assignment flows for three separate roles.",
          "Implemented JWT-based role rendering, Context API state management, and Axios API integration.",
          "Built interactive features including quiz interface, assignment submission, comments, and notifications.",
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
          "Built a full e-commerce flow with product discovery, cart, checkout, online payment, and order tracking.",
        achievements: [
          "Implemented Context API state management for cart and user session.",
          "Integrated Stripe for payment and Cloudinary for media upload.",
          "Delivered product listing, checkout, and order tracking screens with responsive UI.",
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
          "Designed and developed a multi-role e-commerce UI for Guest, User, Vendor, Admin, and Shipper workflows.",
        achievements: [
          "Designed wireframes and user journeys for a multi-role system.",
          "Built reusable JSP/JSTL components with Sitemesh decorator pattern for consistent layouts.",
          "Delivered auth UI for login, register, OTP, Google login, and admin dashboards for users, products, and orders.",
        ],
      },
      {
        title: "Grocery Mart – E-commerce UI",
        projectType: "Personal",
        duration: "07/2024 – 08/2024",
        github: "https://github.com/minhchuong32/grocery_mart",
        techStack: [
          "HTML5",
          "SCSS (7-1 pattern)",
          "Vanilla JavaScript",
          "Fetch API",
          "LocalStorage",
        ],
        description:
          "Built a mobile-first e-commerce UI with template loading, persistent state, and dark/light theme support.",
        achievements: [
          "Created product listing, cart, checkout, and profile screens with a mobile-first responsive layout.",
          "Implemented dark/light mode through CSS variables and localStorage persistence.",
          "Added dynamic template loading with Fetch API and localStorage caching.",
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
        "Relevant coursework includes Data Structures & Algorithms, Web Development, Database Management, Computer Networks, and Software Engineering.",
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
        "Open to frontend internship and fresher opportunities. I am available through the channels below.",
    },
    contact: {
      title: "Quick contact",
      subtitle: "Fastest ways to reach me",
      overview:
        "I am open to frontend opportunities where I can contribute to clean UI, smooth interaction flows, and reliable API integration.",
      profileSummary: "Frontend Developer · Intern / Fresher",
      points: [
        "React, TailwindCSS, Context API, Axios, and JWT-focused frontend delivery",
        "Experience across LMS, e-commerce, and mobile-first product interfaces",
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
      role: "Lập trình viên Frontend",
      level: "Thực tập sinh / Fresher",
      email: "chuongminh3225@gmail.com",
      phone: "+84 977 692 690",
      location: "Ho Chi Minh City",
      linkedin: "https://www.linkedin.com/in/pham-han-minh-chuong-43b95830b/",
      github: "https://github.com/minhchuong32",
      facebook: "https://www.facebook.com/chuong.minh.580786/",
      youtube: "https://www.youtube.com/@chuwongpahm",
      portrait: pmcPortrait,
      summary:
        "Lập trình viên frontend tập trung vào giao diện responsive, hướng component với React, TypeScript và TailwindCSS. Mình thích biến yêu cầu sản phẩm thành luồng sử dụng rõ ràng, màn hình theo vai trò, và trải nghiệm kết nối API mượt.",
      highlights: ["React", "TailwindCSS", "Context API", "Axios", "JWT"],
      stats: [
        { label: "Dự án nổi bật", value: "4" },
        { label: "Học vấn", value: "HCMUTE" },
        { label: "Định hướng", value: "Frontend" },
      ],
      targetRole: "Lập trình viên Frontend",
      targetRoleLabel: "Vai trò mục tiêu",
      focus: "Giao diện responsive",
      focusLabel: "Tập trung",
      primaryStack: "React, TailwindCSS, Context API",
      primaryStackLabel: "Stack chính",
      experience: "LMS, E-commerce, UI mobile-first",
      experienceLabel: "Kinh nghiệm",
      viewProjects: "Xem dự án",
      contactMe: "Liên hệ",
      viewCv: "Xem CV",
      fileName: "Pham_Han_Minh_Chuong_CV_VI.html",
    },
    skillsSection: {
      eyebrow: "Kỹ năng kỹ thuật",
      title: "Mình làm việc với gì",
      subtitle:
        "Bộ công cụ ưu tiên frontend, xoay quanh UI sạch, quản lý state, tích hợp API và triển khai thực tế.",
    },
    skills: [
      {
        key: "core",
        title: "Cốt lõi",
        description:
          "Nền tảng mình dùng để xây giao diện chắc chắn và dễ bảo trì.",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
      },
      {
        key: "frameworks",
        title: "Framework & Thư viện",
        description: "Stack UI chính cho ứng dụng frontend hiện đại.",
        skills: ["ReactJS", "Vite", "TailwindCSS", "Sass", "Bootstrap"],
      },
      {
        key: "state",
        title: "State & Dữ liệu",
        description: "Cách mình quản lý state, tích hợp API và xác thực.",
        skills: ["Context API", "Axios", "RESTful API", "JWT"],
      },
      {
        key: "backend",
        title: "Backend (cơ bản)",
        description: "Đủ để phối hợp frontend với API và dữ liệu.",
        skills: ["Node.js", "Express", "SQL Server", "MongoDB"],
      },
      {
        key: "tools",
        title: "Công cụ",
        description: "Công cụ hằng ngày cho thiết kế, debug và bàn giao.",
        skills: ["Git/GitHub", "Figma", "Postman", "VS Code"],
      },
      {
        key: "concepts",
        title: "Khái niệm",
        description: "Các nguyên tắc mình áp dụng khi xây giao diện và logic.",
        skills: [
          "OOP",
          "MVC",
          "Component-based Architecture",
          "Responsive Design / Mobile-first",
        ],
      },
    ],
    projectsSection: {
      eyebrow: "Dự án",
      title: "Các dự án tiêu biểu",
      subtitle:
        "Những dự án dưới đây phản ánh đúng kinh nghiệm và công nghệ trong CV, với trọng tâm là frontend.",
    },
    projects: [
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
          "Thiết kế dashboard, quản lý khóa học, lesson viewer và assignment cho 3 vai trò riêng.",
          "Triển khai render theo vai trò bằng JWT, quản lý state bằng Context API và tích hợp Axios.",
          "Xây dựng các tính năng tương tác như quiz, nộp bài, comments và notifications.",
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
          "Triển khai quản lý state bằng Context API cho giỏ hàng và phiên người dùng.",
          "Tích hợp Stripe cho thanh toán và Cloudinary cho upload media.",
          "Hoàn thiện giao diện danh sách sản phẩm, checkout và theo dõi đơn hàng theo responsive UI.",
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
          "Thiết kế wireframe và user journey cho hệ thống nhiều vai trò.",
          "Xây dựng component JSP/JSTL tái sử dụng với Sitemesh để giữ layout thống nhất.",
          "Hoàn thiện UI đăng nhập, đăng ký, OTP, Google login và dashboard quản trị cho user, product, order.",
        ],
      },
      {
        title: "Grocery Mart – E-commerce UI",
        projectType: "Cá nhân",
        duration: "07/2024 – 08/2024",
        github: "https://github.com/minhchuong32/grocery_mart",
        techStack: [
          "HTML5",
          "SCSS (7-1 pattern)",
          "Vanilla JavaScript",
          "Fetch API",
          "LocalStorage",
        ],
        description:
          "Xây dựng giao diện e-commerce mobile-first với load template, lưu trạng thái và hỗ trợ dark/light mode.",
        achievements: [
          "Tạo giao diện product listing, cart, checkout và profile theo hướng mobile-first responsive.",
          "Triển khai dark/light mode bằng CSS variables và lưu trạng thái bằng localStorage.",
          "Thêm cơ chế load template động bằng Fetch API kèm caching localStorage.",
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
        "Các học phần liên quan gồm Cấu trúc dữ liệu & Giải thuật, Phát triển web, Quản lý cơ sở dữ liệu, Mạng máy tính và Kỹ nghệ phần mềm.",
      courses: [
        "Cấu trúc dữ liệu & Giải thuật",
        "Phát triển web",
        "Quản lý cơ sở dữ liệu",
        "Mạng máy tính",
        "Kỹ nghệ phần mềm",
      ],
    },
    contactSection: {
      eyebrow: "Liên hệ",
      title: "Kết nối với mình",
      subtitle:
        "Mình đang tìm cơ hội thực tập và fresher frontend. Thông tin liên hệ ở bên dưới.",
    },
    contact: {
      title: "Liên hệ nhanh",
      subtitle: "Cách nhanh nhất để gặp mình",
      overview:
        "Mình sẵn sàng tham gia các dự án frontend cần UI sạch, luồng tương tác mượt và tích hợp API ổn định.",
      profileSummary: "Lập trình viên Frontend · Thực tập sinh / Fresher",
      points: [
        "Ưu tiên frontend với React, TailwindCSS, Context API, Axios và JWT",
        "Đã có kinh nghiệm với LMS, e-commerce và giao diện mobile-first",
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
