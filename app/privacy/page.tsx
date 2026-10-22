import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
  description:
    "How the SCG Solutions Contracting Group website collects and uses information from visitors and contact form inquiries.",
};

// Update when the policy changes.
const EFFECTIVE_DATE = "October 21, 2026";

const h2 = "text-[19px] font-black text-ink-900 tracking-tight mt-10 mb-3";
const p = "text-[14.5px] text-ink-500 leading-relaxed mb-3";
const ul = "list-disc pl-5 space-y-1.5 text-[14.5px] text-ink-500 leading-relaxed mb-3 marker:text-azure-500";

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-steel-900 steel-grain pt-[100px] border-b border-steel-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-azure-300 uppercase mb-5">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-[14px] text-chrome-400">Effective {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="bg-mist-50 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className={p}>
            SCG Solutions Contracting Group (&ldquo;SCG,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
            operates solutionscontractinggroup.com. This policy explains what information the
            website collects and how it is used.
          </p>

          <h2 className={h2}>Information You Provide</h2>
          <p className={p}>When you submit the contact form, we collect the details you enter:</p>
          <ul className={ul}>
            <li>Your name and company</li>
            <li>Your email address and phone number</li>
            <li>Your facility location, project description and desired schedule</li>
            <li>Any photo or drawing you choose to attach</li>
          </ul>
          <p className={p}>
            This information is sent to us by email and used only to respond to your inquiry and
            discuss your project. We use a third-party email service to deliver these messages.
          </p>

          <h2 className={h2}>Information Collected Automatically</h2>
          <p className={p}>
            The website uses Google Analytics to understand how visitors use the site, such as which
            pages are viewed, how long visitors stay, how they found the site, and general
            information like device type, browser and approximate location (city or region). Google
            Analytics uses cookies to collect this information. It does not identify you by name.
          </p>
          <p className={p}>
            The site also uses Vercel&rsquo;s privacy-friendly analytics and performance monitoring,
            which record page visits and loading speed without using cookies.
          </p>

          <h2 className={h2}>How We Use Information</h2>
          <p className={p}>
            We use this information to respond to inquiries, improve the website, and understand
            which services visitors are interested in.{" "}
            <strong className="text-ink-900">We do not sell, rent or share your personal information</strong>{" "}
            with anyone outside of the service providers that help operate this website.
          </p>

          <h2 className={h2}>Your Choices</h2>
          <ul className={ul}>
            <li>You can block or delete cookies through your browser settings.</li>
            <li>
              You can opt out of Google Analytics using Google&rsquo;s free{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-azure-500 hover:text-azure-600 underline underline-offset-2"
              >
                browser add-on
              </a>
              .
            </li>
            <li>
              To ask us to update or delete information you&rsquo;ve sent through the contact form,
              email us at the address below.
            </li>
          </ul>

          <h2 className={h2}>Third-Party Services</h2>
          <p className={p}>
            This website relies on trusted providers for hosting, email delivery and analytics,
            including Vercel and Google. Their handling of data is governed by their own privacy
            policies.
          </p>

          <h2 className={h2}>Changes to This Policy</h2>
          <p className={p}>
            We may update this policy from time to time. Changes will be posted on this page with a
            new effective date.
          </p>

          <div className="mt-12 pt-8 border-t border-mist-200">
            <h2 className="text-[19px] font-black text-ink-900 tracking-tight mb-3">Contact</h2>
            <p className="text-[14.5px] text-ink-500 leading-relaxed">
              <strong className="text-ink-900">SCG Solutions Contracting Group</strong>
              <br />
              Fort Mill, SC
              <br />
              <a href="mailto:shawn@solutionscontractinggroup.com" className="text-azure-500 hover:text-azure-600">
                shawn@solutionscontractinggroup.com
              </a>
              {" · "}
              <a href="tel:9803390527" className="text-azure-500 hover:text-azure-600">
                (980) 339-0527
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
