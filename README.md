
# RazorPay Landing Page - React (Vite) प्रोजेक्ट

यह प्रोजेक्ट RazorPay के लैंडिंग पेज जैसा एक छोटा सा UI प्रोजेक्ट है, जो React और Vite का उपयोग करता है। नीचे प्रोजेक्ट के बारे में पूरा विवरण, उपयोग की गयी तकनीकें, फोल्डर संरचना, सेटअप और डेवलपमेंट नोट्स हिन्दी में दिए गए हैं।

**Project Brief**: इस रिपॉज़िटरी में एक मॉड्यूलर React लैंडिंग पेज है जिसका UI `src/components` में विभाजित है और डेटा `src/data` में रखा गया है ताकि कंटेंट आसानी से बदला जा सके।

**तकनीकें (Technologies Used)**
- **React**: UI बनाने के लिए (JSX कम्पोनेंट्स `*.jsx`).
- **Vite**: तेज़ डेवलपमेंट सर्वर और बिल्ड टूल (`vite.config.js`).
- **JavaScript (ES6+) / JSX**: प्रोजेक्ट की मुख्य भाषा।
- **CSS**: Styling के लिए साधारण CSS (`App.css`, `index.css`)—कोई टेलविंड/SCSS डिपेंडेंसी नहीं दिख रही।
- **Node.js & npm / pnpm / yarn**: पैकेज मैनेजमेंट और स्क्रिप्ट्स के लिए (स्थापना और सर्वर कमांड)।
- **Static assets**: छवियाँ और फोंट `public/` में रखे गए हैं और `src/assets` में भी कुछ हो सकते हैं।

**Prerequisites**
- **Node.js**: संस्करण `16.x` या ऊपर सुझाया जाता है (कम से कम `14.x` काम कर सकता है)।
- **npm**: Node के साथ आऊट-ऑफ-द-box। आप चाहें तो `yarn` या `pnpm` भी उपयोग कर सकते हैं, पर README में दिए कमांड `npm` के उदाहरण हैं।

**Quick Start (Windows PowerShell)**
- रिपॉज़िटरी क्लोन करें और प्रोजेक्ट root में जाएं:

```
cd "e:\React Project\5. RazorPay Landing Page"
```

- डिपेंडेंसी इंस्टॉल करें:

```
npm install
```

- डेवलपमेंट सर्वर चलाएँ:

```
npm run dev
```

- प्रोडक्शन बिल्ड बनाएँ:

```
npm run build
```

- लोकल बिल्ड प्रीव्यू (यदि `vite` स्क्रिप्ट्स में मौजूद हो):

```
npm run preview
```

नोट: यदि `package.json` में स्क्रिप्ट नाम अलग हैं, तो उसी अनुसार `dev`, `build`, `preview` या `start` का प्रयोग करें।

**प्रोजेक्ट संरचना (Important files & folders)**
- **`index.html`**: एप्लिकेशन का HTML टेम्पलेट।
- **`vite.config.js`**: Vite का कॉन्फ़िगरेशन।
- **`package.json`**: निर्भरता और स्क्रिप्ट्स।
- **`public/`**: स्टैटिक assets जैसे images और लॉगोज़—ये सीधे बिल्ड में कॉपी होते हैं।
- **`src/main.jsx`**: एप्लिकेशन एंट्री।
- **`src/App.jsx`**, **`src/App.css`**: रूट React कम्पोनेंट और ग्लोबल स्टाइल्स।
- **`src/components/`**: सभी UI कम्पोनेंट्स विभाजित रूप में:
	- `Header.jsx`, `Navbar.jsx`, `Footer/index.jsx`, `HeroSection/index.jsx`, और कई nested घटक जैसे `Slider`, `BottomBar` आदि।
	- `CtaData`, `Developer Section`, `FounderData`, `IndustrySection`, `Innovation Data`, `NoCodeSection`, `ProductsTabs`, `TrustedBy` — हर एक सब-फ़ोल्डर में संबंधित डेटा और इम्पोर्टेबल कम्पोनेंट्स हैं।
- **`src/data/`**: साइट-लेवल डेटा (जैसे `siteData.js`, `slidesData.js`, `tabsData.js`) — UI को डेटा से रेंडर करने के लिए।

**कैसे काम करता है यह प्रोजेक्ट (How it’s organized)**
- Component-driven design: UI छोटे, पुन: प्रयोज्य `jsx` कम्पोनेंट्स में टुकड़े गए हैं।
- Data-driven sections: `src/data` और प्रत्येक सेक्शन के अंदर `*.js` फाइलें contain data arrays/objects जो कम्पोनेंट को props के रूप में पास होते हैं। इससे कंटेंट बदलना आसान है।
- Static assets (images) `public/` में रखें और `src` से `import` या absolute path `/` से refer करें (Vite public path behavior का पालन करें)।

**डेवलपमेंट नोट्स / Best Practices**
- नया UI सेक्शन जोड़ते समय:
	- `src/components` में एक नई फ़ोल्डर/फाइल बनाएं (उदा. `MySection/index.jsx`).
	- संबंधित स्टाइल्स `App.css` या नए CSS मॉड्यूल में रखें और कम्पोनेंट में import करें।
	- अगर वह सेक्शन डाटा पर निर्भर है, तो `src/data` में एक नया ऑब्जेक्ट/एरे जोड़ें और कम्पोनेंट में import करके उपयोग करें।
- इमेजेज़ और लोगो `public/` में रखें ताकि बिल्ड के बाद paths स्थिर रहें।
- छोटे reusable components बनाएं (Buttons, Cards, Badges) और बार-बार उपयोग करने के लिए `components/common` में रखें।

**टिप्स (Tips & Troubleshooting)**
- अगर सर्वर शुरू नहीं होता: Node वर्शन चेक करें (`node -v`) और dependencies reinstall करें (`rm -rf node_modules package-lock.json; npm install`)—Windows में `rd /s /q node_modules; del package-lock.json` या PowerShell कमांड का प्रयोग करें।
- Vite specific: यदि asset path issues आ रहे हों, सुनिश्चित करें कि आप `public/` का उपयोग कर रहे हैं या `import` के साथ सही relative path दे रहे हैं।

**Deployment**
- प्रोडक्शन बिल्ड बनाने के लिए `npm run build` चलाएँ। आउटपुट आमतौर पर `dist/` फोल्डर में रहेगा जिसे आप किसी भी स्टैटिक होस्ट (Netlify, Vercel, GitHub Pages, या सादे Nginx/Apache सर्वर) पर डिप्लॉय कर सकते हैं।
- Vercel/Netlify: रीपो कनेक्ट करें और बिल्ड कमांड `npm run build`, प्रोडक्शन डायरेक्टरी `dist` सेट करें।

**Contributing**
- नई फ़ीचर/बग फिक्स के लिए: एक नया branch बनाएं, छोटे commits रखें और PR में बदलाव का संक्षेप लिखें।
- स्टाइल कन्फ़्लिक्ट से बचने के लिए मौजूदा CSS नियमों के पैटर्न का पालन करें।

**Acknowledgements / Credits**
- प्रोजेक्ट के assets और डिज़ाइन प्रेरणा के स्रोत: `public/logos`, `public/founder` आदि में रखे गए फाइल्स।

**License**
- इस रिपॉज़िटरी में लाइसेंस निर्दिष्ट नहीं है — अगर आप इसे पब्लिक करना चाहते हैं तो `LICENSE` फ़ाइल जोड़ें और चाहते हुए license चुनें (MIT, Apache-2.0 आदि)।

यदि आप चाहें तो मैं README में और भी विस्तृत उदाहरण (स्क्रीनशॉट, component usage examples, या contribution guidelines) जोड़ सकता/सकती हूँ — बताइए किस हिस्से को और बढ़ाना है।
