// src/data/ctaData.js
// Central place to edit copy / visibility

const ctaData = {
  alert: {
    show: true,
    tone: "warning", // info | warning | success
    text: "To the fullest extent permitted by law, Razorpay Software Limited (formerly known as Razorpay Software Private Limited), its affiliates, and each of their respective officers, directors, members, employees, and agents (\"Razorpay\") NEVER ask you or any individual to share their personal or financial details for the purpose of any investments, trading, employment or any other related or incidental activity. It has recently come to our attention that some unknown individuals are reaching out to gullible people through WhatsApp, Telegram... Read more",
    cta: { label: "Support →", href: "#" }
  },

  hero: {
    eyebrow: "", // optional eyebrow above heading
    heading: "Supercharge your business\nwith Razorpay",
    sub: "", // optional subtext under heading
    primary: { label: "Sign Up Now", href: "#signup" },
    secondary: null, // { label: "Talk to sales", href: "#sales" } or null
    bg: "bg-slate-50" // background class for the band
  }
};

export default ctaData;
