import React from 'react';

export function LiveChart() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">XAUUSD Live Chart</h2>
      <div className="aspect-video">
        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_cf6f3&symbol=OANDA%3AXAUUSD&interval=D&hidesidetoolbar=0&hidetrading=1&theme=light&save_image=false&toolbarbg=f1f3f6&studies=[]&hideideas=1&widgetType=chart&referral_id=27777"
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="fullscreen"
          loading="lazy"
          title="XAUUSD Live Chart"
        ></iframe>
      </div>
    </div>
  );
}