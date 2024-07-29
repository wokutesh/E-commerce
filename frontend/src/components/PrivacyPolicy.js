import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p>Effective Date: January 1, 2024</p>
      
      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p>
          Welcome to E-Commerce. We value your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
          <li><strong>Payment Information:</strong> Data necessary to process your payment if you make purchases, such as your payment instrument number (e.g., a credit card number), and the security code associated with your payment instrument.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Use of Your Information</h2>
        <p>We use the information we collect in the following ways:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>To process and manage your orders and purchases.</li>
          <li>To manage your account and provide you with customer support.</li>
          <li>To personalize your experience and to improve our website and services.</li>
          <li>To send you promotional information, such as newsletters and special offers.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Disclosure of Your Information</h2>
        <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
          <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information.
          While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Policy for Children</h2>
        <p>
          We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. If you believe we might have any information from or about a child under 13, please contact us.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <address className="mt-2">
          <strong>E-Commerce</strong><br />
          1234 Market Street<br />
          Anytown, USA 12345<br />
          Email: <a href="mailto:support@ecommerce.com" className="text-blue-500">support@ecommerce.com</a><br />
          Phone: (123) 456-7890
        </address>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
