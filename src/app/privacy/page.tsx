import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — MCPy",
  description: "MCPy Privacy Policy",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
          Effective date: April 8, 2026
        </p>

        <div className="mt-10 space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <Section title="1. Overview">
            <p>
              MCPy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a
              mobile application that lets you chat with multiple AI models and
              connect them to your apps via Model Context Protocol (MCP) servers.
              This Privacy Policy explains what data we collect, how we use it,
              and your rights.
            </p>
            <p className="mt-3">
              By using MCPy, you agree to the practices described in this
              policy. If you do not agree, please do not use the app.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <SubSection title="Account & Authentication">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Email address and user ID from Apple Sign-In or Google
                  Sign-In
                </li>
                <li>Authentication tokens managed by Supabase Auth</li>
              </ul>
            </SubSection>

            <SubSection title="Conversations & Messages">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Chat messages you send and the AI responses you receive
                </li>
                <li>
                  Conversation titles, pinned/archived status, and timestamps
                </li>
                <li>
                  AI model used, token counts (prompt and completion), and
                  cost per message in USD
                </li>
              </ul>
            </SubSection>

            <SubSection title="Files & Attachments">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Images and files you attach to conversations, stored in
                  cloud storage
                </li>
                <li>
                  Text file contents read inline when you attach them to a
                  message
                </li>
              </ul>
            </SubSection>

            <SubSection title="Usage & Billing">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Cumulative token usage and cost per billing cycle linked to
                  your account
                </li>
                <li>
                  Subscription status synced from the App Store via RevenueCat
                </li>
              </ul>
            </SubSection>

            <SubSection title="Google Account Data (Optional)">
              <p>
                If you choose to connect Google services (Gmail, Google Drive,
                Google Calendar), we store OAuth access tokens, refresh tokens,
                permission scopes, and expiry timestamps. This connection is
                entirely optional and can be revoked at any time from your
                Google Account settings or within the app.
              </p>
            </SubSection>

            <SubSection title="MCP Server Credentials (Optional)">
              <p>
                If you connect third-party MCP servers (e.g., Slack, Notion,
                GitHub), we store the server URL, authentication header, and
                OAuth tokens you provide. These are used solely to forward
                requests to the servers on your behalf.
              </p>
            </SubSection>

            <SubSection title="Device & Local Data">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  App preferences (theme, selected model) stored locally on
                  your device via AsyncStorage
                </li>
                <li>
                  We do not collect device identifiers, advertising IDs, or
                  location data
                </li>
              </ul>
            </SubSection>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Providing the service:</strong> Routing your messages
                to AI models, storing your conversation history, and syncing
                data across your devices
              </li>
              <li>
                <strong>Billing:</strong> Tracking your token usage and costs
                to enforce plan limits and display usage statistics
              </li>
              <li>
                <strong>Google integrations:</strong> Reading and writing to
                Gmail, Google Drive, and Google Calendar only when you
                explicitly request an action through the AI
              </li>
              <li>
                <strong>MCP actions:</strong> Forwarding tool calls to
                third-party servers you have connected, only when you initiate
                or approve the action
              </li>
              <li>
                <strong>Security:</strong> Detecting and preventing abuse,
                unauthorized access, and policy violations
              </li>
            </ul>
            <p className="mt-4">
              We do not use your conversation data to train AI models. We do
              not sell your data to third parties.
            </p>
          </Section>

          <Section title="4. Google API Services — Limited Use Disclosure">
            <p>
              MCPy&apos;s use of information received from Google APIs adheres
              to the{" "}
              <strong>
                Google API Services User Data Policy
              </strong>
              , including the Limited Use requirements.
            </p>
            <p className="mt-3">Specifically:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                We only request Google OAuth scopes that are necessary to
                perform the specific action you ask the AI to take (Gmail,
                Drive, or Calendar)
              </li>
              <li>
                Google user data is not transferred to third parties except
                when necessary to provide the feature you requested (e.g.,
                forwarding a Gmail action to the AI model you are using)
              </li>
              <li>
                We do not use Google user data for advertising purposes
              </li>
              <li>
                We do not allow humans to read your Google data unless you
                have explicitly consented, it is necessary for security
                purposes, or it is required by law
              </li>
            </ul>
          </Section>

          <Section title="5. Third-Party Services">
            <table className="w-full text-sm border-collapse mt-2">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2 pr-4 font-semibold text-black dark:text-white">
                    Service
                  </th>
                  <th className="text-left py-2 font-semibold text-black dark:text-white">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  ["Supabase", "Database, authentication, and file storage"],
                  [
                    "OpenRouter",
                    "Proxies your messages to AI providers (Claude, GPT, Gemini, etc.)",
                  ],
                  ["RevenueCat", "In-app subscription management (iOS)"],
                  [
                    "Apple Sign-In / Google Sign-In",
                    "Authentication",
                  ],
                  [
                    "Google APIs",
                    "Gmail, Drive, Calendar access (only if you connect them)",
                  ],
                ].map(([service, purpose]) => (
                  <tr
                    key={service}
                    className="border-b border-gray-100 dark:border-gray-800"
                  >
                    <td className="py-2 pr-4 font-medium text-black dark:text-white whitespace-nowrap">
                      {service}
                    </td>
                    <td className="py-2">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4">
              When you send a message, its content is forwarded to OpenRouter
              and then to the AI provider you selected. Please review each
              provider&apos;s privacy policy for how they handle prompts.
            </p>
          </Section>

          <Section title="6. Data Retention & Deletion">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Conversations and messages are retained as long as your account
                is active
              </li>
              <li>
                You can delete individual conversations at any time within the
                app
              </li>
              <li>
                To delete your account and all associated data, contact us at
                the address below. We will process deletion requests within
                30 days
              </li>
              <li>
                Google OAuth tokens are deleted from our systems when you
                disconnect the integration or delete your account
              </li>
            </ul>
          </Section>

          <Section title="7. Data Security">
            <p>
              All data is transmitted over HTTPS. OAuth tokens and credentials
              are stored encrypted at rest in our database. We use
              row-level security to ensure your data is accessible only to
              your account. No system is perfectly secure, and we cannot
              guarantee absolute security.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              MCPy is not directed to children under the age of 13. We do not
              knowingly collect personal information from children. If you
              believe we have inadvertently collected such information, please
              contact us and we will delete it promptly.
            </p>
          </Section>

          <Section title="9. Your Rights">
            <p>
              Depending on your jurisdiction, you may have the right to access,
              correct, or delete your personal data; to withdraw consent; and
              to data portability. To exercise any of these rights, contact us
              at the address below.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this policy from time to time. We will notify you
              of significant changes by updating the effective date at the top
              of this page. Continued use of MCPy after changes constitutes
              acceptance of the updated policy.
            </p>
          </Section>

          <Section title="11. Contact">
            <p>
              For any privacy-related questions or requests, please contact:
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

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4">
      <h3 className="font-medium text-black dark:text-white mb-1">{title}</h3>
      {children}
    </div>
  );
}
