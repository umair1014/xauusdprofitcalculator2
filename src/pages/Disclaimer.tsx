import React from 'react';

export function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Trading Risk Disclaimer</h2>
            <p className="mb-4">
              Trading foreign exchange and precious metals carries a high level of risk
              and may not be suitable for all investors. Before deciding to trade,
              you should carefully consider your investment objectives, level of
              experience, and risk appetite.
            </p>
            <p className="mb-4">
              The possibility exists that you could sustain a loss of some or all of
              your initial investment and therefore you should not invest money that
              you cannot afford to lose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Calculator Accuracy</h2>
            <p className="mb-4">
              While we strive to ensure the accuracy of our XAUUSD Profit Calculator,
              we make no representations or warranties about the accuracy,
              completeness, or suitability of the information provided.
            </p>
            <p className="mb-4">
              The calculator is provided for educational and informational purposes
              only and should not be considered as financial advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">External Links</h2>
            <p>
              Our website may contain links to external websites. We are not
              responsible for the content or privacy practices of these sites.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}