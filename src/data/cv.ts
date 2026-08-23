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
      role: "Frontend Developer Intern",
      level: "Intern",
      email: "chuongminh3225@gmail.com",
      phone: "+84 977 692 690",
      location: "Ho Chi Minh City",
      linkedin: "https://www.linkedin.com/in/pham-han-minh-chuong-43b95830b/",
      github: "https://github.com/minhchuong32",
      facebook: "https://www.facebook.com/chuong.minh.580786/",
      youtube: "https://www.youtube.com/@chuwongpahm",
      portrait: pmcPortrait,
      summary:
        "Frontend Developer Intern based in Ho Chi Minh City with strong expertise in building responsive, user-friendly web applications using React.js, Vite, Redux Toolkit, Tailwind CSS, and RESTful APIs with Node.js & Express.",
      highlights: [
        "Frontend Developer Intern",
        "React.js",
        "Vite",
        "Redux Toolkit",
        "Tailwind CSS",
        "Node.js & Express",
        "RESTful API",
        "JavaScript (ES6+)",
      ],
      stats: [
        { label: "Featured Projects", value: "2" },
        { label: "Education", value: "HCMUTE" },
        { label: "Role", value: "Frontend Intern" },
      ],
      targetRole: "Frontend Developer Intern",
      targetRoleLabel: "Target Role",
      focus: "React & Modern Frontend",
      focusLabel: "Focus",
      primaryStack: "React.js, Vite, Redux Toolkit, Tailwind CSS, Node.js, Express, MongoDB",
      primaryStackLabel: "Primary Stack",
      experience: "FlashLearn, ClothesShop",
      experienceLabel: "Experience",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      viewCv: "View CV",
      fileName: "Pham_Han_Minh_Chuong_CV_EN.html",
    },
    skillsSection: {
      eyebrow: "Technical Skills",
      title: "Languages, Frontend & Backend Stack",
      subtitle:
        "Technical skills covering core programming languages, modern frontend frameworks, backend API engineering, databases, and development tools.",
    },
    skills: [
      {
        key: "programming",
        title: "Languages",
        description: "Core web development programming and markup languages.",
        skills: ["JavaScript (ES6+)", "HTML5", "CSS3"],
      },
      {
        key: "frontend",
        title: "Frontend",
        description: "Modern web frameworks, UI libraries, state management, and styling.",
        skills: [
          "React.js",
          "Vite",
          "React Router",
          "Redux Toolkit",
          "Tailwind CSS",
        ],
      },
      {
        key: "backend",
        title: "Backend",
        description: "Server-side web development, API engineering, and authentication.",
        skills: [
          "Node.js",
          "Express.js",
          "RESTful API",
          "JWT Authentication & Authorization",
        ],
      },
      {
        key: "database",
        title: "Database",
        description: "NoSQL databases and Object Data Modeling (ODM).",
        skills: ["MongoDB", "Mongoose"],
      },
      {
        key: "tools",
        title: "Tools & Services",
        description:
          "Daily workflow for version control, containerization, API testing, HTTP clients, and cloud media management.",
        skills: [
          "Git/GitHub",
          "Docker",
          "Postman",
          "Axios",
          "Cloudinary",
        ],
      },
    ],
    projectsSection: {
      eyebrow: "Projects",
      title: "Featured Projects",
      subtitle:
        "Key projects demonstrating full-stack development, frontend architecture, state management, and API integration.",
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
          "A full-stack English learning platform that helps users improve vocabulary through flashcards, quizzes, and personalized learning progress.",
        achievements: [
          "Developed responsive and reusable React components using React and Tailwind CSS.",
          "Implemented global state management using Redux Toolkit.",
          "Built and integrated RESTful APIs between the React frontend and Node.js/Express.js backend.",
          "Implemented interactive learning features including flashcards, quizzes, and learning progress tracking.",
          "Integrated VNPay payment API for online payment functionality.",
          "Used MongoDB for storing user, learning, and application data.",
          "Collaborated with team members using Git/GitHub throughout the development process.",
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
          "A full-stack e-commerce application supporting product browsing, shopping cart, checkout, online payment, and order tracking.",
        achievements: [
          "Developed the complete e-commerce workflow including product listing, shopping cart, checkout, payment, and order tracking.",
          "Built RESTful APIs using Node.js and Express.js and integrated them with the React frontend.",
          "Implemented JWT-based authentication and authorization.",
          "Used Context API for global cart and authentication state management.",
          "Integrated Stripe for online payment processing.",
          "Integrated Cloudinary for product image storage and management.",
          "Designed responsive user interfaces using React, Tailwind CSS, and reusable components.",
        ],
      },
    ],
    educationSection: {
      eyebrow: "Education",
      title: "Academic Background",
      subtitle:
        "University degree, coursework, and environment shaping my software engineering foundation.",
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
        "Open to Frontend Developer Intern opportunities. Feel free to reach out.",
    },
    contact: {
      title: "Quick Contact",
      subtitle: "Fastest ways to reach me",
      overview:
        "I am actively seeking Frontend Developer Intern opportunities where I can apply my skills in React.js, modern web design, Redux Toolkit, and RESTful API integration.",
      profileSummary: "Frontend Developer Intern",
      points: [
        "Proficient in JavaScript (ES6+), React.js, Vite, Redux Toolkit, Tailwind CSS, and RESTful APIs",
        "Hands-on experience developing full-stack web applications (FlashLearn & ClothesShop)",
        "Based in Ho Chi Minh City, ready for Frontend Developer Intern positions",
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
      role: "Frontend Developer Intern",
      level: "Intern",
      email: "chuongminh3225@gmail.com",
      phone: "+84 977 692 690",
      location: "Ho Chi Minh City",
      linkedin: "https://www.linkedin.com/in/pham-han-minh-chuong-43b95830b/",
      github: "https://github.com/minhchuong32",
      facebook: "https://www.facebook.com/chuong.minh.580786/",
      youtube: "https://www.youtube.com/@chuwongpahm",
      portrait: pmcPortrait,
      summary:
        "Thực tập sinh Lập trình viên Frontend tại TP. Hồ Chí Minh với nền tảng vững chắc về phát triển ứng dụng web responsive, tối ưu giao diện bằng React.js, Vite, Redux Toolkit, Tailwind CSS và tích hợp RESTful API với Node.js & Express.",
      highlights: [
        "Frontend Developer Intern",
        "React.js",
        "Vite",
        "Redux Toolkit",
        "Tailwind CSS",
        "Node.js & Express",
        "RESTful API",
        "JavaScript (ES6+)",
      ],
      stats: [
        { label: "Dự án nổi bật", value: "2" },
        { label: "Học vấn", value: "HCMUTE" },
        { label: "Định hướng", value: "Frontend Intern" },
      ],
      targetRole: "Frontend Developer Intern",
      targetRoleLabel: "Vai trò mục tiêu",
      focus: "React & Frontend Hiện đại",
      focusLabel: "Tập trung",
      primaryStack: "React.js, Vite, Redux Toolkit, Tailwind CSS, Node.js, Express, MongoDB",
      primaryStackLabel: "Stack chính",
      experience: "FlashLearn, ClothesShop",
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
        "Bộ kỹ năng kỹ thuật bao quát ngôn ngữ lập trình, framework frontend hiện đại, backend API, cơ sở dữ liệu và công cụ phát triển.",
    },
    skills: [
      {
        key: "programming",
        title: "Ngôn ngữ lập trình",
        description: "Các ngôn ngữ lập trình và đánh dấu web cốt lõi.",
        skills: ["JavaScript (ES6+)", "HTML5", "CSS3"],
      },
      {
        key: "frontend",
        title: "Frontend",
        description: "Framework, thư viện frontend hiện đại, quản lý state và styling.",
        skills: [
          "React.js",
          "Vite",
          "React Router",
          "Redux Toolkit",
          "Tailwind CSS",
        ],
      },
      {
        key: "backend",
        title: "Backend",
        description: "Công nghệ server-side, thiết kế API và xác thực phân quyền.",
        skills: [
          "Node.js",
          "Express.js",
          "RESTful API",
          "JWT Authentication & Authorization",
        ],
      },
      {
        key: "database",
        title: "Cơ sở dữ liệu",
        description: "Cơ sở dữ liệu NoSQL và mô hình hóa dữ liệu (ODM).",
        skills: ["MongoDB", "Mongoose"],
      },
      {
        key: "tools",
        title: "Công cụ phát triển",
        description:
          "Công cụ quản lý phiên bản, container, kiểm thử API, HTTP client và lưu trữ hình ảnh.",
        skills: [
          "Git/GitHub",
          "Docker",
          "Postman",
          "Axios",
          "Cloudinary",
        ],
      },
    ],
    projectsSection: {
      eyebrow: "Dự án",
      title: "Các dự án tiêu biểu",
      subtitle:
        "Những dự án dưới đây phản ánh chính xác kinh nghiệm và công nghệ từ CV mới nhất.",
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
          "Nền tảng học tiếng Anh trực tuyến full-stack giúp người dùng cải thiện từ vựng qua flashcard, bài kiểm tra và tiến trình học tập cá nhân hóa.",
        achievements: [
          "Phát triển giao diện React responsive và component tái sử dụng bằng React và Tailwind CSS.",
          "Triển khai quản lý state toàn cục bằng Redux Toolkit.",
          "Xây dựng và tích hợp RESTful API giữa frontend React và backend Node.js/Express.js.",
          "Phát triển các tính năng học tập tương tác bao gồm flashcard, bài kiểm tra (quizzes) và theo dõi tiến trình học tập.",
          "Tích hợp cổng thanh toán VNPay phục vụ tính năng thanh toán trực tuyến.",
          "Sử dụng MongoDB để lưu trữ dữ liệu người dùng, tiến trình học tập và ứng dụng.",
          "Phối hợp làm việc nhóm hiệu quả bằng Git/GitHub trong suốt quá trình phát triển dự án.",
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
          "Phát triển hoàn chỉnh quy trình thương mại điện tử bao gồm danh mục sản phẩm, giỏ hàng, checkout, thanh toán (Stripe) và theo dõi đơn hàng.",
          "Xây dựng RESTful API bằng Node.js và Express.js và tích hợp với frontend React.",
          "Triển khai tính năng xác thực và phân quyền người dùng dựa trên JWT.",
          "Sử dụng Context API để quản lý state toàn cục cho giỏ hàng và trạng thái xác thực.",
          "Tích hợp Stripe phục vụ xử lý thanh toán trực tuyến.",
          "Tích hợp Cloudinary phục vụ quản lý và lưu trữ hình ảnh sản phẩm.",
          "Thiết kế giao diện người dùng responsive bằng React, Tailwind CSS và các component tái sử dụng.",
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
        "Các môn học liên quan: Cấu trúc dữ liệu & Giải thuật, Phát triển Web, Quản lý Cơ sở dữ liệu, Mạng máy tính, Kỹ nghệ phần mềm.",
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
        "Mình đang tìm vị trí Thực tập sinh Lập trình viên Frontend. Thông tin liên hệ ở bên dưới.",
    },
    contact: {
      title: "Liên hệ nhanh",
      subtitle: "Cách nhanh nhất để gặp mình",
      overview:
        "Mình đang chủ động tìm kiếm các cơ hội Thực tập sinh Lập trình viên Frontend để ứng dụng kỹ năng về React.js, thiết kế web hiện đại, Redux Toolkit và tích hợp RESTful API.",
      profileSummary: "Frontend Developer Intern",
      points: [
        "Thành thạo JavaScript (ES6+), React.js, Vite, Redux Toolkit, Tailwind CSS và RESTful API",
        "Kinh nghiệm thực chiến phát triển các ứng dụng web full-stack (FlashLearn, ClothesShop)",
        "Đang sinh sống tại TP. Hồ Chí Minh, sẵn sàng nhận vị trí Thực tập sinh Frontend",
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
