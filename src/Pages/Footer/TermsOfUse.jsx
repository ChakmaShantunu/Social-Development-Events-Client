import React from 'react';

const TermsOfUse = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
                <p className="text-lg">
                    By accessing and using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our services.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Use of the Website</h2>
                <p className="text-lg">
                    You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the site.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">User Accounts</h2>
                <p className="text-lg">
                    When you create an account, you are responsible for maintaining the confidentiality of your login information and for all activities that occur under your account.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
                <p className="text-lg">
                    All content on this website, including text, graphics, logos, and software, is the property of the website owner or its licensors and is protected by intellectual property laws.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
                <p className="text-lg">
                    The website and its content are provided “as is” without warranties of any kind. The website owner is not liable for any damages arising from the use or inability to use the site.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
                <p className="text-lg">
                    We reserve the right to modify these Terms of Use at any time. Updates will be posted on this page with the effective date.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                <p className="text-lg">
                    If you have any questions about these Terms of Use, please contact us at <a href="mailto:support@example.com" className="text-primary hover:underline">support@example.com</a>.
                </p>
            </section>
        </div>
    );
};

export default TermsOfUse;
