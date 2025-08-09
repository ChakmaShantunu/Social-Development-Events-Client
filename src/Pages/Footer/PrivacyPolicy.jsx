import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-lg">
          We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p className="text-lg mb-2">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li><strong>Personal Information:</strong> Name, email address, contact details, and other information you provide when registering or using our services.</li>
          <li><strong>Usage Data:</strong> Information on how you interact with our website, such as pages visited, time spent, and device information.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> To enhance your experience and analyze website traffic.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
        <p className="text-lg">
          We use your information to:
        </p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Provide and maintain our services.</li>
          <li>Communicate with you about updates, events, and promotions.</li>
          <li>Improve our platform based on your feedback and usage.</li>
          <li>Ensure security and prevent fraudulent activities.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Data Sharing and Disclosure</h2>
        <p className="text-lg">
          We do not sell or rent your personal information to third parties. We may share your data with trusted service providers to help us operate our platform, comply with legal obligations, or protect our rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
        <p className="text-lg">
          You have the right to access, update, or delete your personal data. You can also opt-out of marketing communications at any time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Security</h2>
        <p className="text-lg">
          We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
        <p className="text-lg">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-lg">
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@example.com" className="text-primary hover:underline">support@example.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
