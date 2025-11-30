import { motion } from "framer-motion";
import { PenTool, Settings, Zap, Download } from "lucide-react";

const steps = [
  {
    icon: PenTool,
    title: "1. Enter Your Topic",
    description:
      "Simply type in your blog title, script idea, song theme, or essay topic. Be as specific or broad as you like.",
  },
  {
    icon: Settings,
    title: "2. Customize Settings",
    description:
      "Choose your content type (blog, script, song, or essay), select the desired tone, and pick the length that works for you.",
  },
  {
    icon: Zap,
    title: "3. Generate with AI",
    description:
      "Click the Generate button and watch as our Gemini-powered AI creates high-quality, original content in seconds.",
  },
  {
    icon: Download,
    title: "4. Copy and Use",
    description:
      "Review your generated content, make any edits you need, and copy it to use wherever you need it. All your recent generations are saved in history.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              How <span className="gradient-text">It Works</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create professional content in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel p-6 space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-orange-400 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="glass-panel p-8 space-y-6">
            <h2 className="text-2xl font-semibold">The Technology Behind DeepWrite AI</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                DeepWrite AI uses Google's advanced Gemini 2.5 Flash model, which is specifically designed
                for fast, high-quality text generation. Here's what makes it special:
              </p>
              <ul className="space-y-2">
                <li>
                  • <strong>Neural Language Processing:</strong> Understands context and nuance in your
                  prompts
                </li>
                <li>
                  • <strong>Multi-style Generation:</strong> Adapts to different tones and content types
                </li>
                <li>
                  • <strong>Real-time Processing:</strong> Generates content in seconds, not minutes
                </li>
                <li>
                  • <strong>Contextual Awareness:</strong> Maintains coherence throughout long-form content
                </li>
              </ul>
              <p>
                All content generation happens through secure API calls to Google's servers. Your prompts
                and generated content are not stored on our servers, ensuring your privacy and data
                security.
              </p>
            </div>
          </div>

          <div className="glass-panel p-8 space-y-6">
            <h2 className="text-2xl font-semibold">Tips for Best Results</h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-3">
                <li>
                  • <strong>Be Specific:</strong> The more details you provide in your prompt, the better
                  the results
                </li>
                <li>
                  • <strong>Choose the Right Tone:</strong> Match the tone to your audience and purpose
                </li>
                <li>
                  • <strong>Iterate:</strong> Don't be afraid to generate multiple versions and pick the
                  best one
                </li>
                <li>
                  • <strong>Edit and Personalize:</strong> Use the generated content as a starting point
                  and add your unique touch
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
