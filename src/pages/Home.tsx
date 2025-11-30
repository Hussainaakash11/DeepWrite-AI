import { motion } from "framer-motion";
import ContentGenerator from "@/components/ContentGenerator";

const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            DeepWrite <span className="gradient-text">AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Input your blog title. The AI handles the rest.
          </p>
        </motion.div>

        <ContentGenerator />
      </div>
    </div>
  );
};

export default Home;
