// src/app/terms/page.tsx
'use client';

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Effective Date: 8/21/2025<br />Last Updated: 8/21/2025</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Agreement to Terms</h2>
        <p>
          <p>
            {'By accessing or using Pack Lite’s website at '}
            <a href="http://pack-lite.local" className="text-blue-600 underline">
              http://pack-lite.local
            </a>
            {` (the &quot;Service&quot;),`}
          </p>
          you agree to be bound by these Terms of Service. If you disagree with any part of the terms, 
          you may not access the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Use License</h2>
        <p>
          {'Permission is granted to temporarily use the materials on Pack Lite’s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:'}
          non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
          and under this license you may not:
        </p>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or public display</li>
          <li>{'Attempt to reverse engineer any software contained on Pack Lite’s website'}</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or “mirror” the materials on any other server</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
        <p>
          When you create an account with us, you must provide accurate and complete information. 
          You are solely responsible for safeguarding your account password and for any activities 
          or actions under your account.
        </p>
        <p className="mt-2">
          We reserve the right to suspend or terminate your account if any information provided 
          during the registration process or thereafter proves to be inaccurate, false, or misleading.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain 
          the exclusive property of Pack Lite and its licensors. The Service is protected by 
          copyright, trademark, and other laws of both the United States and foreign countries.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Links to Other Websites</h2>
        <p>
          Our Service may contain links to third-party websites or services that are not owned or 
          controlled by Pack Lite. We have no control over and assume no responsibility for the 
          content, privacy policies, or practices of any third-party websites or services.
        </p>
        <p className="mt-2">
          You acknowledge and agree that Pack Lite shall not be responsible or liable, directly or 
          indirectly, for any damage or loss caused or alleged to be caused by or in connection 
          with the use of or reliance on any such content, goods, or services available on or 
          through any such websites or services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Termination</h2>
        <p>
          We may terminate or suspend your account and bar access to the Service immediately, 
          without prior notice or liability, under our sole discretion, for any reason whatsoever 
          and without limitation, including but not limited to a breach of the Terms.
        </p>
        <p className="mt-2">
          If you wish to terminate your account, you may simply discontinue using the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Indemnification</h2>
        <p>
          You agree to defend, indemnify and hold harmless Pack Lite and its licensees and licensors, 
          and their employees, contractors, agents, officers and directors, from and against any 
          and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses 
          {'(including but not limited to attorney’s fees), resulting from or arising out of:'}
        </p>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Your use and access of the Service</li>
          <li>A breach of these Terms</li>
          <li>Content posted on the Service</li>
          <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
        <p>
          In no event shall Pack Lite, nor its directors, employees, partners, agents, suppliers, 
          or affiliates, be liable for any indirect, incidental, special, consequential or punitive 
          damages, including without limitation, loss of profits, data, use, goodwill, or other 
          intangible losses, resulting from:
        </p>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Your access to or use of or inability to access or use the Service</li>
          <li>Any conduct or content of any third party on the Service</li>
          <li>Any content obtained from the Service</li>
          <li>Unauthorized access, use or alteration of your transmissions or content</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Disclaimer</h2>
        <p>
          Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE”
          The Service is provided without warranties of any kind, whether express or implied, including, but not limited 
          to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the State of 
          Illinois, United States, without regard to its conflict of law provisions.
        </p>
        <p className="mt-2">
          Our failure to enforce any right or provision of these Terms will not be considered a 
          waiver of those rights. If any provision of these Terms is held to be invalid or 
          unenforceable by a court, the remaining provisions of these Terms will remain in effect.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">11. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
          {'If a revision is material we will provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.'}
          taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        <p className="mt-2">
          By continuing to access or use our Service after any revisions become effective, you agree 
          to be bound by the revised terms. If you do not agree to the new terms, you are no longer 
          authorized to use the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">12. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us:<br />
          <strong>Pack Lite</strong><br />
          Email: <a href="mailto:wgreaney0405@gmail.com" className="text-blue-600 underline">wgreaney0405@gmail.com</a><br />
          Phone: +1 (708) 310-0802
        </p>
      </section>
    </main>
  );
}