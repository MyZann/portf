const config = {
  title: "Hirzan Al Hafiz | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Hirzan, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Hirzan, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Hirzan",
    "Hirzan Al Hafiz",
    "Hirzan SMANTI",
    "Hirzan Cilacap",
    "Cilacap",
    "Programmer Cilacap",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Hirzan Al Hafiz",
  email: "jaydenvanjoe@gmail.com",
  site: "https://hirzan.my.id/",

  // for github stars button
  githubUsername: "JaydenVanjoe",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/znnnalfz",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/JaydenVanjoe",
  },
};
export { config };
