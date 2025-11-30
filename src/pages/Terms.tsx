import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Terms of <span className="gradient-text">Service</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">Last updated: November 30, 2025</p>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using DeepWrite AI, you accept and agree to be bound by the terms and
                provisions of this agreement. If you do not agree to these terms, please do not use our
                service.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">2. Use of Service</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>You agree to use DeepWrite AI only for lawful purposes. You must not:</p>
                <ul className="space-y-2">
                  <li>• Use the service to generate harmful, illegal, or offensive content</li>
                  <li>• Attempt to reverse engineer or tamper with the service</li>
                  <li>• Use the service in any way that could damage or overburden our infrastructure</li>
                  <li>
                    • Violate any applicable laws or regulations in your jurisdiction or Google's terms of
                    service
                  </li>
                  <li>• Impersonate others or provide false information</li>
                </ul>
              </div>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">3. Content Ownership and Rights</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>Generated Content:</strong> You retain all rights to the content you generate
                  using DeepWrite AI. However, you acknowledge that AI-generated content may not be
                  entirely unique and similar content could be generated for other users.
                </p>
                <p>
                  <strong>Your Responsibility:</strong> You are solely responsible for reviewing, editing,
                  and verifying any content generated through our service before using it publicly or
                  commercially.
                </p>
              </div>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">4. Account Terms</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>If you create an account with DeepWrite AI:</p>
                <ul className="space-y-2">
                  <li>• You are responsible for maintaining the security of your account</li>
                  <li>• You must provide accurate and complete information</li>
                  <li>• You are responsible for all activities under your account</li>
                  <li>• You must notify us immediately of any unauthorized use</li>
                </ul>
              </div>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">5. Service Availability</h2>
              <p className="text-muted-foreground">
                We strive to provide reliable service, but we cannot guarantee uninterrupted access.
                DeepWrite AI is provided "as is" without warranties of any kind. We reserve the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Modify or discontinue the service at any time</li>
                <li>• Implement usage limits or restrictions</li>
                <li>• Refuse service to anyone for any reason</li>
              </ul>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">6. Third-Party Services</h2>
              <p className="text-muted-foreground">
                Our service relies on Google's Gemini API. Your use of our service is also subject to
                Google's terms of service and privacy policy. We are not responsible for any issues arising
                from Google's services.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                DeepWrite AI and its creators shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use or inability to use the service.
                You use the service at your own risk.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">8. Content Disclaimer</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  AI-generated content should be treated as a draft or starting point. We do not guarantee:
                </p>
                <ul className="space-y-2">
                  <li>• Accuracy or factual correctness of generated content</li>
                  <li>• Originality or uniqueness of the content</li>
                  <li>• Suitability for any particular purpose</li>
                  <li>• Compliance with specific style guides or standards</li>
                </ul>
                <p>Always review and verify content before using it publicly or professionally.</p>
              </div>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">9. Intellectual Property</h2>
              <p className="text-muted-foreground">
                The DeepWrite AI interface, design, and branding are protected by intellectual property
                laws. You may not copy, modify, or distribute our interface or branding without permission.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">10. Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to terminate or suspend access to our service immediately, without
                prior notice, for conduct that we believe violates these terms or is harmful to other users
                or our service.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">11. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of any
                material changes by updating the "Last updated" date. Continued use of the service after
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">12. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms shall be governed by and construed in accordance with applicable laws, without
                regard to conflict of law provisions.
              </p>
            </section>

            <section className="glass-panel p-6 space-y-4">
              <h2 className="text-2xl font-semibold">13. Contact</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us through our
                contact page.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
