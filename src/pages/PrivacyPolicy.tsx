import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Privacy <span className="gradient-text">Policy</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">Last updated: November 30, 2025</p>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to DeepWrite AI ("we," "our," or "us"). We are committed to protecting your
                privacy and ensuring you have a positive experience using our service. This Privacy Policy
                explains how we collect, use, and protect your information.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>Local Storage:</strong> We use your browser's local storage to save:
                </p>
                <ul className="space-y-2">
                  <li>• Your theme preference (dark/light mode)</li>
                  <li>• Authentication state (if you choose to create an account)</li>
                  <li>• Recent generation history (stored only in your browser)</li>
                </ul>
                <p>
                  <strong>No Server Storage:</strong> We do NOT store any of your generated content,
                  prompts, or personal information on our servers.
                </p>
              </div>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                Your prompts are sent directly to Google's Gemini API for content generation. Google
                processes your requests according to their own privacy policy. We recommend reviewing
                Google's privacy practices at{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">4. Third-Party Services</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>Google Gemini API:</strong> All content generation requests are processed by
                  Google's AI services. Your prompts and generated content are subject to Google's data
                  processing and privacy policies.
                </p>
                <p>
                  We do not share your information with any other third-party services or advertisers.
                </p>
              </div>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">5. Data Security</h2>
              <p className="text-muted-foreground">
                Since we operate entirely on the frontend and don't maintain a backend database, your data
                is as secure as your browser's local storage. We use HTTPS to encrypt all communications
                between your browser and Google's servers.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">6. Your Rights</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="space-y-2">
                  <li>• Clear your local storage at any time</li>
                  <li>• Delete your account and all associated data from your browser</li>
                  <li>• Stop using our service at any time</li>
                </ul>
              </div>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">7. Cookies</h2>
              <p className="text-muted-foreground">
                We do not use cookies. All preferences are stored in your browser's local storage.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our service is not directed to children under 13. We do not knowingly collect information
                from children under 13. If you believe we have collected information from a child under 13,
                please contact us.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">9. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by
                updating the "Last updated" date at the top of this policy.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">10. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us through our contact
                page.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
