# **DeepWrite AI Studio ✨**

*AI-powered Content Generation Studio using Gemini 1.5 Flash*

DeepWrite AI Studio is a modern, lightweight, and efficient web application that enables users to generate high-quality content using Google’s **Gemini 2.5 Flash** model.
Built with **React + TypeScript + Vite**, and styled using **TailwindCSS**, the system offers a clean UI and rapid performance aimed at students, writers, and developers.

---

## **🚀 Features**

### **1. Multi-Type Content Generation**

Generate content across formats:

* Blog
* Script
* Song
* Essay

### **2. Customizable Writing Style**

Choose tone:

* Professional
* Casual
* Inspirational
* Humorous

Choose length:

* Short (300 words)
* Medium (600 words)
* Long (1000+ words)

### **3. Fast & Lightweight UI**

* Built on **Vite** for instant hot reloads
* Fully type-safe with **TypeScript**
* Clean component architecture

### **4. Google Gemini 1.5 Flash Integration**

* Uses the official `@google/generative-ai` SDK
* API key support via `.env`
* Modular `gemini.ts` wrapper for API calls

---

## **🗂 Folder Structure**

```
src/
 ├── components/
 │    └── ContentGenerator.tsx
 ├── contexts/
 ├── hooks/
 ├── lib/
 │    ├── gemini.ts
 │    └── utils.ts
 ├── pages/
 │    ├── Home.tsx
 │    └── App.tsx
 ├── App.tsx
 ├── main.tsx
 ├── index.css
 └── vite-env.d.ts
```

---

## **⚙️ Tech Stack**

| Layer              | Technology                                     |
| ------------------ | ---------------------------------------------- |
| Frontend Framework | React + TypeScript                             |
| Build Tool         | Vite                                           |
| UI Styling         | Tailwind CSS                                   |
| AI Model           | Gemini 1.5 Flash                               |
| SDK                | @google/generative-ai                          |
| Deployment         | Any static hosting (Vercel, Netlify, Firebase) |

---

## **🔑 Environment Setup**

Create a `.env` file in the project root:

```
VITE_GEMINI_API_KEY=your_api_key_here
```

> **Important:**
> Vite only exposes variables prefixed with `VITE_` and they must be accessed using `import.meta.env`.

---

## **📦 Installation & Setup**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## **🧠 How the AI Generation Works**

### `lib/gemini.ts`

* Loads the API key from `import.meta.env.VITE_GEMINI_API_KEY`
* Initializes the Gemini client
* Defines a helper `generateContent()` function
* Handles errors gracefully with detailed logs

### `components/ContentGenerator.tsx`

* UI for selecting:

  * Content Type
  * Tone
  * Length
* Sends the request to Gemini and displays the generated output

---

## **⚠️ Common Errors & Fixes**

### **404 – Model Not Found / API Failure**

Check:

1. `.env` variable name **must** be:
   `VITE_GEMINI_API_KEY`
2. Use in code:
   `import.meta.env.VITE_GEMINI_API_KEY`
3. Restart dev server after editing env:
   `npm run dev`

### **Undefined API Key**

Happens when using `process.env` in a frontend project.
Use only `import.meta.env`.

---

## **🛠️ Future Enhancements (Suggested Roadmap)**

* Add PDF export of generated content
* Add speech-to-text input
* Add user authentication
* Add saved history / drafts
* Add multiple AI models (Gemini Pro, Gemini Vision)

---

## **📝 License**

This project is open-source and free for educational and personal use.

---

## **🙌 Acknowledgements**

* Google Generative AI (Gemini)
* Vite + React Community
* TailwindCSS# DeepWrite-AI
# DeepWrite-AI
