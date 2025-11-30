import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">DeepWrite AI</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-6">
            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground">
                DeepWrite AI was created with a simple yet powerful mission: to democratize content creation
                and empower writers, creators, and businesses with AI-powered writing tools. We believe that
                everyone should have access to high-quality content generation, regardless of their writing
                expertise or budget.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <p className="text-muted-foreground">
                DeepWrite AI leverages Google's Gemini AI to generate various types of content:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Blog Posts:</strong> Engaging articles on any topic</li>
                <li>• <strong>Scripts:</strong> Professional scripts for videos and presentations</li>
                <li>• <strong>Song Lyrics:</strong> Creative lyrics with emotion and rhythm</li>
                <li>• <strong>Essays:</strong> Well-structured academic and professional essays</li>
              </ul>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Our Technology</h2>
              <p className="text-muted-foreground">
                Built with cutting-edge web technologies and powered by Google's Gemini API, DeepWrite AI
                combines beautiful design with powerful functionality. Our platform is:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Fast:</strong> Instant content generation</li>
                <li>• <strong>Secure:</strong> All processing happens through Google's secure servers</li>
                <li>• <strong>Privacy-Focused:</strong> No backend storage of your content</li>
                <li>• <strong>User-Friendly:</strong> Intuitive interface designed for everyone</li>
              </ul>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Our Values</h2>
              <p className="text-muted-foreground">
                We're committed to transparency, quality, and continuous improvement. We believe in making
                AI accessible and understandable, helping you create content that resonates with your
                audience while maintaining your unique voice and perspective.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
