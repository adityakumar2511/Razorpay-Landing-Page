# 🚀 Razorpay Landing Page — Clone (React + Tailwind)

A fully responsive Razorpay-style landing page built using **React**, **Tailwind CSS**, and dynamic reusable components.  
This project replicates UI/UX patterns from Razorpay, including sliders, tab systems, animated sections, sticky chat widget, CTA banners, and dynamic content rendering.

---

## 🛠️ Technologies Used

### **Frontend Stack**
| Technology | Purpose |
|-----------|---------|
| **React.js** | Component-based architecture for reusable UI sections |
| **Vite / CRA** | Fast dev tooling and build system |
| **Tailwind CSS** | Utility-first styling, responsive design |
| **JavaScript (ES6+)** | Logic, dynamic rendering, array mapping |
| **CSS Animations / keyframes** | Infinite slider, transitions, hovers |

---

---

## ✨ Features

### **🔥 1. Dynamic Tabs Section**
- Uses external `tabsData.js`
- Add unlimited tabs — UI updates automatically
- Mobile vs desktop layout switching

### **🔥 2. Industry Section With Hero Image**
- Interactive tabs with dynamic content
- Modern layout inspired by Razorpay Industries Page

### **🔥 3. Infinite Founders Slider**
- Pure CSS infinite marquee animation
- Grayscale → color hover effect
- Smooth pause-on-hover
- Dynamic founder data from `founderData.js`

### **🔥 4. Sticky Chat Support Widget (Ask Ray Clone)**
- Bottom-right floating button  
- Hover/click to expand support menu  
- Animated, accessible, reusable  

### **🔥 5. Supercharge CTA Section**
- Light-blue banner section  
- Dynamic copy from `ctaData.js`  
- Optional alert/warning box  

### **🔥 6. Fully Responsive**
- Mobile-first  
- Optimized for tablets + desktops  
- Tailwind breakpoints handle scaling smoothly  

---

## 📦 Dynamic Content System

All text, titles, links, and card content are stored in `/src/data`.

### Example: `tabsData.js`
```js
{
  id: "education",
  label: "Education",
  title: "Payments for your education business",
  desc: "Collect fees, automate payouts, and manage vendors... ",
  cta: "See Solutions",
  badge: "New"
}
