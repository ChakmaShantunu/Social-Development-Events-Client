import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What are Cookies?</h2>
        <p className="text-lg">
          Cookies are small text files that are stored on your device by websites you visit. They help improve your browsing experience by remembering your preferences and actions on the site.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How We Use Cookies</h2>
        <p className="text-lg mb-2">
          We use cookies for various purposes, including:
        </p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li><strong>Essential Cookies:</strong> These are necessary for the basic functioning of our website, like maintaining your login session.</li>
          <li><strong>Performance Cookies:</strong> To analyze how visitors use our website and improve performance.</li>
          <li><strong>Functional Cookies:</strong> To remember your preferences, such as language or theme settings.</li>
          <li><strong>Advertising Cookies:</strong> To provide you with relevant ads and measure ad campaign effectiveness.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Managing Cookies</h2>
        <p className="text-lg">
          You can control or delete cookies at any time through your browser settings. Please note that disabling certain cookies may affect your experience and some parts of our website may not function properly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Third-Party Cookies</h2>
        <p className="text-lg">
          We may use third-party services such as Google Analytics to help us understand how our website is used. These services may place their own cookies on your device. We do not control these cookies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Updates to this Policy</h2>
        <p className="text-lg">
          We may update this Cookie Policy from time to time. We encourage you to review this page periodically to stay informed about how we use cookies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-lg">
          If you have any questions about our Cookie Policy, please contact us at <a href="mailto:support@example.com" className="text-primary hover:underline">support@example.com</a>.
        </p>
      </section>
    </div>
  );
};

export default CookiePolicy;
