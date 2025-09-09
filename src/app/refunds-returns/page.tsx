// src/app/refunds-returns/page.tsx
export default function RefundReturnsPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Refund and Returns Policy</h1>
      <p className="mb-4">Effective Date: 8/21/2025<br />Last Updated: 8/21/2025</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Return Eligibility</h2>
        <p>
          We want you to be completely satisfied with your purchase from Pack Lite. Our return policy allows for returns and exchanges within 30 days of receipt of your items, provided they meet the following conditions:
        </p>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Items must be unused, unworn, and in their original condition</li>
          <li>All original tags and packaging must be intact</li>
          <li>Proof of purchase is required</li>
          <li>Certain items may be excluded from returns (see section 1.1)</li>
        </ul>
        
        <h3 className="font-semibold mt-4">1.1 Non-Returnable Items</h3>
        <p>The following items cannot be returned or exchanged:</p>
        <ul className="list-disc list-inside ml-6">
          <li>Items marked as “final sale” or “non-returnable”</li>
          <li>Personalized or custom-made products</li>
          <li>Gift cards</li>
          <li>Intimate apparel and swimwear for hygiene reasons</li>
          <li>Opened software, electronics, or other items where the seal has been broken</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Return Process</h2>
        <p>To initiate a return, please follow these steps:</p>
        <ol className="list-decimal list-inside ml-6 mt-2">
          <li>Contact our customer service team at <a href="mailto:wgreaney0405@gmail.com" className="text-blue-600 underline">wgreaney0405@gmail.com</a> within 30 days of receiving your order to request a Return Authorization (RA) number.</li>
          <li>Once you receive your RA number, securely package the item(s) with all original packaging and tags attached.</li>
          <li>Include a copy of your order confirmation or receipt inside the package.</li>
          <li>Ship the package to the address provided with your RA number. We recommend using a trackable shipping service as you are responsible for the return shipping costs.</li>
        </ol>
        
        <p className="mt-4">
          Returns without an RA number will not be accepted. Please allow 5-7 business days for us to process your return once it is received at our facility.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Refunds</h2>
        <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
        
        <h3 className="font-semibold mt-4">3.1 Approved Refunds</h3>
        <p>If your return is approved, your refund will be processed within 7-10 business days. A credit will automatically be applied to your original method of payment, with the following considerations:</p>
        <ul className="list-disc list-inside ml-6">
          <li>Original shipping charges are non-refundable</li>
          <li>Return shipping costs are the responsibility of the customer</li>
          <li>Sale items are refunded at the sale price</li>
          <li>Depending on your financial institution, it may take additional time for the refund to appear on your statement</li>
        </ul>
        
        <h3 className="font-semibold mt-4">3.2 Late or Missing Refunds</h3>
        <p>{' If you haven’t received your refund within the expected timeframe, please:'}</p>
        <ol className="list-decimal list-inside ml-6">
          <li>Check your bank account again</li>
          <li>Contact your credit card company as it may take some time to process the refund</li>
          <li>Contact your bank as there may be a processing delay</li>
          <li>  
            {'If you’ve done all of this and still have not received your refund, please contact us at'}
            <a href="mailto:wgreaney0405@gmail.com" className="text-blue-600 underline">
              wgreaney0405@gmail.com
            </a>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Exchanges</h2>
        <p>We are happy to exchange items for a different size or color, subject to availability. To process an exchange:</p>
        <ol className="list-decimal list-inside ml-6">
          <li>Follow the return process outlined in Section 2</li>
          <li>Clearly indicate in your email that you would like an exchange and specify the preferred size/color</li>
          <li>If the exchanged item is of higher value, you will be responsible for paying the difference</li>
          <li>If the exchanged item is of lower value, we will refund the difference to your original payment method</li>
        </ol>
        
        <p className="mt-4">
          If the item you wish to exchange is out of stock, we will process a refund instead and notify you of the situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Damaged or Defective Items</h2>
        <p>If you receive a damaged or defective item, please contact us immediately at <a href="mailto:wgreaney0405@gmail.com" className="text-blue-600 underline">wgreaney0405@gmail.com</a> with the following information:</p>
        <ul className="list-disc list-inside ml-6">
          <li>Your order number</li>
          <li>Photos of the damaged or defective item</li>
          <li>Photos of the packaging (if applicable)</li>
          <li>A detailed description of the issue</li>
        </ul>
        
        <p className="mt-4">
          We will evaluate the situation and typically offer one of the following solutions:
        </p>
        <ul className="list-disc list-inside ml-6">
          <li>Send a replacement item at no additional cost</li>
          <li>Issue a full refund including shipping costs</li>
          <li>Provide a partial refund if you choose to keep the item</li>
        </ul>
        
        <p className="mt-4">
          For damaged or defective items, we will provide a prepaid shipping label for the return.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. International Returns</h2>
        <p>For international orders, the return process may vary:</p>
        <ul className="list-disc list-inside ml-6">
          <li>Customers are responsible for any customs duties, taxes, or additional fees associated with the return</li>
          <li>We recommend marking the return package as “Returned Goods” to avoid additional customs charges</li>
          <li>{'Refunds will be issued in the original currency of purchase, and any currency conversion differences or bank fees are the customer’s responsibility'}</li>
          <li>International returns may take longer to process due to customs and longer transit times</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Gift Returns</h2>
        <p>{'If you haven’t received your refund within the expected timeframe, please:'}</p>
        <ul className="list-disc list-inside ml-6">
          <li>We can issue store credit for the current value of the item</li>
          <li>Proof of purchase is required (order number or gift receipt)</li>
          <li>Without proof of purchase, we may offer store credit at our discretion based on the current selling price</li>
          <li>Original shipping charges are not refunded for gift returns</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Contact Information</h2>
        <p>
          For questions about our Refund and Returns Policy, or to initiate a return, please contact us:<br />
          <strong>Pack Lite Customer Service</strong><br />
          Email: <a href="mailto:wgreaney0405@gmail.com" className="text-blue-600 underline">wgreaney0405@gmail.com</a><br />
          Phone: +1 (708) 310-0802<br />
          Hours: Monday-Friday, 9:00 AM - 5:00 PM CST
        </p>
        
        <p className="mt-4">
          We aim to respond to all return inquiries within 24-48 business hours.
        </p>
      </section>

      <section className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
        <p>
          This refund and returns policy is subject to change without notice. The policy in effect at the time of your purchase will apply to your order.
        </p>
      </section>
    </main>
  );
}