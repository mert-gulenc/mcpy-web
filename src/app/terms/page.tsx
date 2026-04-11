import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — MCPy",
  description: "MCPy Terms of Service",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white dark:bg-black px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <a
          href="/"
          className="text-sm text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
        >
          ← MCPy
        </a>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-black dark:text-white">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
          Effective date: April 8, 2026
        </p>

        <div className="mt-10 space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <Section title="1. Acceptance of Terms">
            <p>
              By downloading, installing, or using MCPy (&quot;the App&quot;),
              you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree, do not use the App.
            </p>
            <p className="mt-3">
              These Terms apply to all users of MCPy, including free and
              premium subscribers. We may update these Terms from time to time;
              continued use after changes constitutes acceptance.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              MCPy is an AI chat application that allows you to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Send messages to multiple AI models (Claude, ChatGPT, Gemini,
                and others) via the OpenRouter API
              </li>
              <li>
                Connect third-party services such as Gmail, Google Drive,
                Google Calendar, Slack, Notion, GitHub, and others through
                Model Context Protocol (MCP) servers
              </li>
              <li>Store and manage your conversation history</li>
              <li>Upload images and files to use as context in chats</li>
            </ul>
            <p className="mt-3">
              Features and availability may change. We reserve the right to
              modify, suspend, or discontinue any part of the service at any
              time with reasonable notice.
            </p>
          </Section>

          <Section title="3. Accounts">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                You must create an account to use MCPy. You are responsible
                for maintaining the security of your account credentials
              </li>
              <li>
                You must be at least 13 years old to use the App. By creating
                an account you represent that you meet this requirement
              </li>
              <li>
                You are responsible for all activity that occurs under your
                account
              </li>
              <li>
                You must provide accurate information when registering and
                keep it up to date
              </li>
            </ul>
          </Section>

          <Section title="4. Subscriptions & Billing">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                MCPy offers free and premium subscription tiers. Premium
                features are available as an auto-renewing subscription
                purchased through the Apple App Store
              </li>
              <li>
                Billing is managed by Apple and RevenueCat. Your subscription
                will renew automatically unless cancelled at least 24 hours
                before the end of the current billing period
              </li>
              <li>
                Subscription management and cancellation can be done in your
                Apple ID account settings. We are not able to issue refunds
                for partial billing periods; refund requests must be directed
                to Apple
              </li>
              <li>
                AI model usage costs (tokens) are tracked and may affect your
                plan limits. Costs are displayed within the app in real time
              </li>
            </ul>
          </Section>

          <Section title="5. Acceptable Use">
            <p>You agree not to use MCPy to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Generate, distribute, or store content that is illegal,
                harmful, threatening, abusive, defamatory, obscene, or
                violates the rights of others
              </li>
              <li>
                Attempt to circumvent usage limits, gain unauthorized access
                to our systems or other users&apos; data, or reverse engineer
                the App
              </li>
              <li>
                Interfere with or disrupt the service, servers, or networks
                connected to the service
              </li>
              <li>
                Use the service to generate spam, phishing content, or
                malicious code
              </li>
              <li>
                Violate the terms of service of any third-party AI provider
                or connected service
              </li>
              <li>
                Use the service in any manner that violates applicable local,
                national, or international law
              </li>
            </ul>
            <p className="mt-3">
              Violation of these rules may result in immediate suspension or
              termination of your account.
            </p>
          </Section>

          <Section title="6. Third-Party Services & AI Providers">
            <p>
              MCPy routes your messages to third-party AI providers
              (including but not limited to Anthropic, OpenAI, Google, and
              Meta) via OpenRouter. Your use of these providers is subject to
              their respective terms of service and usage policies.
            </p>
            <p className="mt-3">
              When you connect third-party services (Google, Slack, Notion,
              GitHub, etc.), you authorize MCPy to act on your behalf within
              those services. You are responsible for ensuring your use of
              connected services complies with their terms.
            </p>
            <p className="mt-3">
              We are not responsible for the content, accuracy, or actions of
              any third-party AI model or connected service.
            </p>
          </Section>

          <Section title="7. AI-Generated Content">
            <p>
              Responses generated by AI models within MCPy may be inaccurate,
              incomplete, or misleading. You should not rely on AI-generated
              content for legal, medical, financial, or other professional
              advice. Always verify important information from authoritative
              sources.
            </p>
            <p className="mt-3">
              You retain ownership of the content you input. You are
              responsible for how you use AI-generated outputs.
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>
              MCPy, its logo, design, and underlying software are owned by
              Mert Adem Gülenç and protected by copyright and other
              intellectual property laws. You may not copy, modify, distribute,
              or create derivative works from the App without our written
              permission.
            </p>
          </Section>

          <Section title="9. Disclaimer of Warranties">
            <p>
              MCPy is provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind, express or implied, including
              but not limited to warranties of merchantability, fitness for a
              particular purpose, and non-infringement. We do not warrant that
              the service will be uninterrupted, error-free, or free of
              harmful components.
            </p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, MCPy and its developer
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of data, loss of profits, or harm resulting from your use
              of the App or any AI-generated content.
            </p>
            <p className="mt-3">
              Our total liability for any claim arising from your use of MCPy
              shall not exceed the amount you paid for the service in the
              12 months preceding the claim.
            </p>
          </Section>

          <Section title="11. Termination">
            <p>
              You may stop using the App at any time and delete your account
              by contacting us. We may suspend or terminate your access if
              you violate these Terms, without prior notice.
            </p>
            <p className="mt-3">
              Upon termination, your right to use the App ceases immediately.
              Provisions that by their nature should survive termination will
              do so, including sections on intellectual property, disclaimers,
              and limitation of liability.
            </p>
          </Section>

          <Section title="12. Governing Law">
            <p>
              These Terms are governed by the laws of Turkey, without regard
              to conflict of law principles. Any disputes shall be subject to
              the exclusive jurisdiction of the courts of Istanbul, Turkey.
            </p>
          </Section>

          <Section title="13. Contact">
            <p>
              For any questions about these Terms, please contact:
            </p>
            <p className="mt-2">
              <strong className="text-black dark:text-white">
                Mert Adem Gülenç
              </strong>
              <br />
              <a
                href="mailto:support@usemcpy.com"
                className="text-gray-500 hover:text-black dark:hover:text-white transition-colors underline underline-offset-2"
              >
                support@usemcpy.com
              </a>
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-black dark:text-white mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
