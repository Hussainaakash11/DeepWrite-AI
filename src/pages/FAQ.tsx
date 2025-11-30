import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is my data saved or stored anywhere?",
    answer:
      "No. DeepWrite AI operates entirely on the frontend. Your prompts are sent directly to Google's Gemini API for processing, and we don't store any of your content or prompts on our servers. Only your theme preference and authentication state (if you're logged in) are saved in your browser's local storage.",
  },
  {
    question: "Is DeepWrite AI free to use?",
    answer:
      "Yes! DeepWrite AI is completely free to use. We use the Gemini API which has generous free tier limits. If you're generating a large volume of content, you may occasionally hit rate limits, but for typical usage, the service is free.",
  },
  {
    question: "Can I use the generated content commercially?",
    answer:
      "Yes, you can use the generated content for any purpose, including commercial use. However, we recommend always reviewing and editing the content to ensure it meets your specific needs and standards. The AI-generated content should be treated as a starting point or draft rather than final copy.",
  },
  {
    question: "What types of content can DeepWrite AI generate?",
    answer:
      "DeepWrite AI can generate four main types of content: Blog posts, Scripts (for videos or presentations), Song lyrics, and Essays. Each content type can be customized with different tones (Professional, Casual, Inspirational, Humorous) and lengths (Short, Medium, Long).",
  },
  {
    question: "How accurate and high-quality is the generated content?",
    answer:
      "The quality of generated content depends on several factors, including the specificity of your prompt and the settings you choose. Google's Gemini model is highly advanced and produces coherent, contextually appropriate content. However, it's always recommended to review and edit the output to ensure it meets your exact needs.",
  },
  {
    question: "Do I need to create an account to use DeepWrite AI?",
    answer:
      "No, you don't need an account to use the basic content generation features. However, creating an account (which is free and stored only in your browser) allows you to save your generation history and access it later.",
  },
  {
    question: "Can I regenerate content if I don't like the first result?",
    answer:
      "Absolutely! You can generate as many versions as you like. Simply click the Generate button again with the same or modified prompt to get a fresh piece of content. Your previous generations are saved in the history section for easy reference.",
  },
  {
    question: "What languages does DeepWrite AI support?",
    answer:
      "Currently, DeepWrite AI primarily supports English content generation. The Gemini API does support multiple languages, but our interface and prompts are optimized for English content creation.",
  },
  {
    question: "How long does it take to generate content?",
    answer:
      "Content generation typically takes between 3-10 seconds, depending on the length you've selected and current API response times. Short content generates faster, while longer pieces may take a bit more time.",
  },
  {
    question: "What should I do if I encounter an error?",
    answer:
      "If you encounter an error, first check your internet connection. If the problem persists, try refreshing the page or clearing your browser cache. Most errors are temporary and related to API rate limits or network connectivity.",
  },
  {
    question: "Can I customize the AI's writing style further?",
    answer:
      "While the app provides preset tones and styles, you can influence the output by being more specific in your prompt. For example, instead of just 'Write about coffee,' try 'Write a witty, conversational blog post about the history of coffee in Italy.' The more context you provide, the more tailored the result.",
  },
  {
    question: "Is there a limit to how much content I can generate?",
    answer:
      "There's no hard limit set by our application. However, the Gemini API has rate limits based on usage. For typical use cases, you're unlikely to hit these limits. If you're planning to generate very large volumes of content, you may occasionally need to wait a moment before making additional requests.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about DeepWrite AI
            </p>
          </div>

          <div className="glass-panel p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="glass-panel p-6 text-center space-y-4">
            <h2 className="text-2xl font-semibold">Still have questions?</h2>
            <p className="text-muted-foreground">
              Can't find the answer you're looking for? Feel free to reach out to us on our contact page.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
