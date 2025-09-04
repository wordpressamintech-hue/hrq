import { motion } from "motion/react";

export function TermsOfServicePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl">
              Please read these terms carefully before using our services.
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

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using Human Resource Quantum (HRQ) services, you accept and agree to 
                be bound by the terms and provision of this agreement. If you do not agree to abide by 
                the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-6">
                HRQ provides comprehensive HR outsourcing, consulting, recruitment, and related services 
                to businesses globally. Our services include but are not limited to HR transformation, 
                compliance management, talent acquisition, and strategic HR consulting.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Obligations</h2>
              <p className="text-gray-700 mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Provide accurate and complete information when using our services</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not interfere with or disrupt our services or servers</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Availability</h2>
              <p className="text-gray-700 mb-6">
                We strive to provide continuous service availability but do not guarantee that our 
                services will be uninterrupted or error-free. We reserve the right to modify, suspend, 
                or discontinue any part of our services at any time with or without notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                All content, trademarks, and intellectual property on our website and in our services 
                are owned by HRQ or our licensors. You may not use, reproduce, or distribute any content 
                without our express written permission.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
              <p className="text-gray-700 mb-6">
                We maintain strict confidentiality standards for all client information and data. 
                Both parties agree to maintain confidentiality of sensitive information shared during 
                the course of our business relationship.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Terms</h2>
              <p className="text-gray-700 mb-6">
                Payment terms will be specified in individual service agreements. Unless otherwise 
                agreed, payments are due within 30 days of invoice date. Late payments may incur 
                additional charges as specified in the service agreement.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                HRQ shall not be liable for any indirect, incidental, special, or consequential damages 
                arising from the use of our services. Our total liability shall not exceed the amount 
                paid for the specific service giving rise to the claim.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-700 mb-6">
                You agree to indemnify and hold harmless HRQ from any claims, damages, or expenses 
                arising from your use of our services or violation of these terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These terms shall be governed by and construed in accordance with the laws of Pakistan. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction 
                of the courts of Karachi, Pakistan.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-700 mb-6">
                Either party may terminate services with appropriate notice as specified in individual 
                service agreements. Upon termination, all rights and obligations shall cease except 
                those that by their nature should survive termination.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our services constitutes 
                acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions regarding these Terms of Service, please contact us:
              </p>
              <div className="text-gray-700">
                <p><strong>Email:</strong> legal@hr-q.com</p>
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