import { motion } from "motion/react";

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00ABF5] to-[#005EF5] py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl">
              Learn about how we use cookies and similar technologies on our website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> January 2025
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit a website. They are widely used to make websites work more efficiently and provide 
                information to website owners about how users interact with their sites.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">We use cookies for several purposes:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function and cannot be switched off. 
                They include cookies that enable you to log into secure areas of our website.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
              <p className="text-gray-700 mb-4">
                We use analytics cookies to understand how visitors interact with our website. 
                This helps us improve our website's performance and user experience.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preference Cookies</h3>
              <p className="text-gray-700 mb-6">
                These cookies remember your preferences and settings to provide a more personalized 
                experience when you return to our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-6">
                We may also use third-party cookies from trusted partners to provide analytics, 
                social media integration, and advertising services. These third parties have their 
                own cookie policies, which we encourage you to review.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                <li>Cookie preference center: Use our cookie management tool when available</li>
                <li>Opt-out tools: Use third-party opt-out tools for advertising cookies</li>
                <li>Mobile settings: Adjust your mobile device settings to limit tracking</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Browser Controls</h2>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings. Here's how 
                to manage cookies in popular browsers:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies</li>
                <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies</li>
                <li><strong>Edge:</strong> Settings &gt; Privacy &gt; Cookies</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-6">
                If you choose to disable cookies, some features of our website may not function 
                properly. Essential cookies are required for the website to work, and disabling 
                them may prevent you from using certain services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookie Retention</h2>
              <p className="text-gray-700 mb-6">
                Cookies are retained for different periods depending on their purpose. Session 
                cookies are deleted when you close your browser, while persistent cookies remain 
                until they expire or you delete them.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Updates to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or applicable laws. We will notify you of any significant changes by 
                posting the updated policy on our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="text-gray-700">
                <p><strong>Email:</strong> privacy@hr-q.com</p>
                <p><strong>Phone:</strong> +92 331 133 4595</p>
                <p><strong>Address:</strong> Karachi, Pakistan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}