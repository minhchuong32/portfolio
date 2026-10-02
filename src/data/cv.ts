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
      | "uiux"
      | "core"
      | "frameworks"
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
        "Information Technology student and aspiring Software Engineer with hands-on experience in building full-stack web applications using ReactJS, Node.js, Express, and MongoDB. Strong foundation in frontend development, RESTful APIs, authentication, database integration, and software architecture. Seeking a Software Engineer Intern/Fresher position to strengthen full-stack development skills, contribute to real-world projects, and grow toward a professional Software Engineer role.",
      highlights: [
        "Software Engineer Intern / Fresher",
        "ReactJS & Node.js",
        "Express & MongoDB",
        "Java & Servlet / JPA",
        "RESTful API & JWT",
        "SQL Server & PostgreSQL",
        "JavaScript (ES6+) & TypeScript",
        "Docker & Git",
      ],
      stats: [
        { label: "Featured Projects", value: "3" },
        { label: "Education", value: "HCMUTE" },
        { label: "Role", value: "Intern / Fresher" },
      ],
      targetRole: "Software Engineer",
      targetRoleLabel: "Target Role",
      focus: "Full-stack & Frontend Architecture",
      focusLabel: "Focus",
      primaryStack:
        "ReactJS, Node.js, Express, MongoDB, Java, SQL Server",
      primaryStackLabel: "Primary Stack",
      experience: "FlashLearn, UTEShop, ClothesShop",
      experienceLabel: "Experience",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      viewCv: "View CV",
      fileName: "Pham_Han_Minh_Chuong_CV_EN.html",
    },
    skillsSection: {
      eyebrow: "Technical Skills",
      title: "Languages, Engineering & Tech Stack",
      subtitle:
        "Technical skills covering programming languages, modern frontend frameworks, backend API development, database systems, software engineering principles, DevOps tools, and UI/UX design.",
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
        description: "Modern web frameworks, state management, and responsive UI.",
        skills: [
          "ReactJS",
          "Vite",
          "React Router",
          "Redux Toolkit",
          "Context API",
          "TailwindCSS",
          "Bootstrap",
          "Responsive Design",
        ],
      },
      {
        key: "backend",
        title: "Backend",
        description: "Server-side architecture, REST APIs, and authentication.",
        skills: [
          "Node.js",
          "Express.js",
          "Java Servlet",
          "RESTful API",
          "JWT",
          "Authentication & Authorization",
        ],
      },
      {
        key: "database",
        title: "Database",
        description: "Relational and NoSQL database management systems and ORM/ODM.",
        skills: [
          "MongoDB",
          "SQL Server",
          "PostgreSQL",
          "Mongoose",
          "JPA",
        ],
      },
      {
        key: "engineering",
        title: "Software Engineering",
        description: "Core architectural concepts, design patterns, and algorithms.",
        skills: [
          "OOP",
          "MVC",
          "RBAC",
          "Data Structures & Algorithms",
          "Software Architecture",
          "Design Patterns (Basic)",
        ],
      },
      {
        key: "tools",
        title: "DevOps & Tools",
        description: "Version control, containerization, API testing, and cloud infrastructure.",
        skills: [
          "Git/GitHub",
          "Docker",
          "Postman",
          "AWS",
          "CI/CD (Basic)",
        ],
      },
      {
        key: "uiux",
        title: "UI/UX",
        description: "User experience wireframing, prototyping, and layout design.",
        skills: ["Figma", "Wireframing", "Responsive Design"],
      },
    ],
    projectsSection: {
      eyebrow: "Projects",
      title: "Featured Projects",
      subtitle:
        "Key projects demonstrating full-stack engineering, frontend architecture, backend RESTful APIs, database integration, and payment processing.",
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
        title: "UTEShop – E-commerce Web Application",
        projectType: "Team · 3 members",
        duration: "08/2025 – 10/2025",
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
          "Full-stack e-commerce application with complete shopping workflow, secure online payments, and cloud media management.",
        achievements: [
          "Built full e-commerce flow: product listing, cart, checkout, online payment (Stripe), and order tracking.",
          "Implemented Context API state management for cart and user session; integrated Cloudinary for media upload.",
        ],
      },
    ],
    educationSection: {
      eyebrow: "Education",
      title: "Academic Background",
      subtitle:
        "University degree, GPA, and coursework shaping my computer science and software engineering foundation.",
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
      title: "Get in Touch",
      subtitle:
        "Open to Software Engineer Intern / Fresher opportunities. Feel free to reach out.",
    },
    contact: {
      title: "Quick Contact",
      subtitle: "Fastest ways to reach me",
      overview:
        "Information Technology student and aspiring Software Engineer seeking a Software Engineer Intern/Fresher position to strengthen full-stack development skills, contribute to real-world projects, and grow toward a professional Software Engineer role.",
      profileSummary: "Software Engineer · Intern / Fresher",
      points: [
        "Hands-on experience building full-stack web applications with ReactJS, Node.js, Express, MongoDB, Java, and SQL Server",
        "Strong foundation in frontend development, RESTful APIs, authentication, database integration, and software architecture",
        "Featured projects: FlashLearn (English Learning Platform), UTEShop (Java E-commerce), and ClothesShop (MERN E-commerce)",
        "Based in Ho Chi Minh City, ready for Software Engineer Intern/Fresher roles",
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
      name: "PHẠM HÀN MINH CHƯƠNG",
      role: "Software Engineer",
      level: "Thực tập sinh / Fresher",
      email: "chuongminh3225@gmail.com",
      phone: "+84 977 692 690",
      location: "TP. Hồ Chí Minh",
      linkedin: "https://www.linkedin.com/in/pham-han-minh-chuong-43b95830b/",
      github: "https://github.com/minhchuong32",
      facebook: "https://www.facebook.com/chuong.minh.580786/",
      youtube: "https://www.youtube.com/@chuwongpahm",
      portrait: pmcPortrait,
      summary:
        "Sinh viên Công nghệ Thông tin với định hướng trở thành Software Engineer, có kinh nghiệm thực tế xây dựng các ứng dụng web full-stack bằng ReactJS, Node.js, Express và MongoDB. Nắm vững nền tảng về phát triển frontend, RESTful API, xác thực, tích hợp cơ sở dữ liệu và kiến trúc phần mềm. Mong muốn ứng tuyển vị trí Software Engineer Intern/Fresher để nâng cao kỹ năng phát triển full-stack, đóng góp vào các dự án thực tế và phát triển lên vị trí Software Engineer chuyên nghiệp.",
      highlights: [
        "Software Engineer Intern / Fresher",
        "ReactJS & Node.js",
        "Express & MongoDB",
        "Java & Servlet / JPA",
        "RESTful API & JWT",
        "SQL Server & PostgreSQL",
        "JavaScript (ES6+) & TypeScript",
        "Docker & Git",
      ],
      stats: [
        { label: "Dự án nổi bật", value: "3" },
        { label: "Học vấn", value: "HCMUTE" },
        { label: "Định hướng", value: "Intern / Fresher" },
      ],
      targetRole: "Software Engineer",
      targetRoleLabel: "Vai trò mục tiêu",
      focus: "Full-stack & Kiến trúc Frontend",
      focusLabel: "Tập trung",
      primaryStack:
        "ReactJS, Node.js, Express, MongoDB, Java, SQL Server",
      primaryStackLabel: "Stack chính",
      experience: "FlashLearn, UTEShop, ClothesShop",
      experienceLabel: "Kinh nghiệm",
      viewProjects: "Xem dự án",
      contactMe: "Liên hệ",
      viewCv: "Xem CV",
      fileName: "Pham_Han_Minh_Chuong_CV_VI.html",
    },
    skillsSection: {
      eyebrow: "Kỹ năng chuyên môn",
      title: "Bộ kỹ năng kỹ thuật & Lập trình",
      subtitle:
        "Bộ kỹ năng kỹ thuật bao quát các ngôn ngữ lập trình, framework frontend hiện đại, backend API, cơ sở dữ liệu, kỹ thuật phần mềm, công cụ DevOps và thiết kế UI/UX.",
    },
    skills: [
      {
        key: "programming",
        title: "Lập trình",
        description: "Các ngôn ngữ lập trình và đánh dấu cốt lõi.",
        skills: [
          "JavaScript (ES6+)",
          "TypeScript (cơ bản)",
          "Java",
          "HTML5",
          "CSS3",
        ],
      },
      {
        key: "frontend",
        title: "Frontend",
        description: "Framework web hiện đại, quản lý state và giao diện responsive.",
        skills: [
          "ReactJS",
          "Vite",
          "React Router",
          "Redux Toolkit",
          "Context API",
          "TailwindCSS",
          "Bootstrap",
          "Responsive Design",
        ],
      },
      {
        key: "backend",
        title: "Backend",
        description: "Kiến trúc phía server, RESTful API và cơ chế xác thực.",
        skills: [
          "Node.js",
          "Express.js",
          "Java Servlet",
          "RESTful API",
          "JWT",
          "Authentication & Authorization",
        ],
      },
      {
        key: "database",
        title: "Cơ sở dữ liệu",
        description: "Hệ quản trị cơ sở dữ liệu quan hệ, NoSQL và ORM/ODM.",
        skills: [
          "MongoDB",
          "SQL Server",
          "PostgreSQL",
          "Mongoose",
          "JPA",
        ],
      },
      {
        key: "engineering",
        title: "Kỹ thuật phần mềm",
        description: "Các khái niệm kiến trúc cốt lõi, mô hình thiết kế và giải thuật.",
        skills: [
          "OOP",
          "MVC",
          "RBAC",
          "Cấu trúc dữ liệu & Giải thuật",
          "Kiến trúc phần mềm",
          "Design Patterns (cơ bản)",
        ],
      },
      {
        key: "tools",
        title: "DevOps & Công cụ",
        description: "Quản lý phiên bản, container, kiểm thử API và đám mây.",
        skills: [
          "Git/GitHub",
          "Docker",
          "Postman",
          "AWS",
          "CI/CD (cơ bản)",
        ],
      },
      {
        key: "uiux",
        title: "UI/UX",
        description: "Xây dựng prototype, wireframing và thiết kế giao diện.",
        skills: ["Figma", "Wireframing", "Responsive Design"],
      },
    ],
    projectsSection: {
      eyebrow: "Dự án",
      title: "Các dự án tiêu biểu",
      subtitle:
        "Những dự án thực tế phản ánh chính xác năng lực phát triển full-stack, kiến trúc frontend, backend RESTful API và cơ sở dữ liệu.",
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
          "Nền tảng web giúp người dùng học từ vựng tiếng Anh thông qua flashcard, bài kiểm tra (quiz) và theo dõi tiến độ học tập cá nhân hóa.",
        achievements: [
          "Thiết kế prototype UI/UX trên Figma và phát triển giao diện React responsive.",
          "Xây dựng kiến trúc frontend với các component tái sử dụng và Redux Toolkit.",
          "Tích hợp RESTful API và tham gia tích hợp API thanh toán VNPay.",
        ],
      },
      {
        title: "UTEShop – E-commerce Web Application",
        projectType: "Nhóm · 3 thành viên",
        duration: "08/2025 – 10/2025",
        techStack: [
          "Java Servlet",
          "JSP",
          "JPA",
          "SQL Server",
          "JWT",
          "Bootstrap",
        ],
        description:
          "Nền tảng thương mại điện tử full-stack hỗ trợ nhiều vai trò (Guest, User, Vendor, Admin, Shipper) với thanh toán trực tuyến và quản lý đơn hàng.",
        achievements: [
          "Thiết kế kiến trúc frontend và cấu trúc giao diện có thể tái sử dụng.",
          "Phát triển chức năng xác thực, phân quyền và giao diện Admin bằng JSP, JSTL và Bootstrap.",
          "Tham gia xây dựng API backend cho Admin và xử lý logic nghiệp vụ.",
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
          "Ứng dụng thương mại điện tử full-stack hỗ trợ duyệt sản phẩm, giỏ hàng, checkout, thanh toán trực tuyến và theo dõi đơn hàng.",
        achievements: [
          "Xây dựng toàn bộ luồng thương mại điện tử: danh sách sản phẩm, giỏ hàng, thanh toán, thanh toán trực tuyến (Stripe) và theo dõi đơn hàng.",
          "Triển khai quản lý state bằng Context API cho giỏ hàng và phiên người dùng; tích hợp Cloudinary để tải lên media.",
        ],
      },
    ],
    educationSection: {
      eyebrow: "Học vấn",
      title: "Nền tảng học thuật",
      subtitle:
        "Bằng cấp đại học, GPA và các môn học chuyên ngành shaping nền tảng kỹ nghệ phần mềm.",
    },
    education: {
      school: "Trường Đại học Công nghệ Kỹ thuật TP. Hồ Chí Minh (HCMUTE)",
      degree: "Kỹ sư Công nghệ Thông tin",
      duration: "2023 – 2027",
      gpa: "3.2 / 4.0",
      location: "TP. Hồ Chí Minh",
      summary:
        "Các môn học liên quan: Cấu trúc dữ liệu & Giải thuật, Phát triển Web, Quản trị Cơ sở dữ liệu, Mạng máy tính, Kỹ nghệ phần mềm.",
      courses: [
        "Cấu trúc dữ liệu & Giải thuật",
        "Phát triển Web",
        "Quản trị Cơ sở dữ liệu",
        "Mạng máy tính",
        "Kỹ nghệ phần mềm",
      ],
    },
    contactSection: {
      eyebrow: "Liên hệ",
      title: "Kết nối với mình",
      subtitle:
        "Mình đang tìm kiếm các cơ hội vị trí Software Engineer Intern / Fresher. Thông tin liên hệ ở bên dưới.",
    },
    contact: {
      title: "Liên hệ nhanh",
      subtitle: "Cách nhanh nhất để gặp mình",
      overview:
        "Sinh viên Công nghệ Thông tin với định hướng trở thành Software Engineer, mong muốn ứng tuyển vị trí Software Engineer Intern/Fresher để nâng cao kỹ năng phát triển full-stack, đóng góp vào các dự án thực tế và phát triển lên vị trí Software Engineer chuyên nghiệp.",
      profileSummary: "Software Engineer · Thực tập sinh / Fresher",
      points: [
        "Kinh nghiệm thực tế xây dựng các ứng dụng web full-stack bằng ReactJS, Node.js, Express, MongoDB, Java và SQL Server",
        "Nắm vững nền tảng phát triển frontend, RESTful API, xác thực, tích hợp cơ sở dữ liệu và kiến trúc phần mềm",
        "Dự án tiêu biểu: FlashLearn (Nền tảng học tiếng Anh), UTEShop (Thương mại điện tử Java), và ClothesShop (Thương mại điện tử MERN)",
        "Đang sinh sống tại TP. Hồ Chí Minh, sẵn sàng nhận vị trí Software Engineer Intern/Fresher",
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
