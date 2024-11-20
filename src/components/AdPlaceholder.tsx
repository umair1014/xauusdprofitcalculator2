import React, { useEffect, useRef } from 'react';

interface AdPlaceholderProps {
  className?: string;
  style?: React.CSSProperties;
}

export function AdPlaceholder({ className = '', style = {} }: AdPlaceholderProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        window.adsbygoogle.push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div ref={adRef} className={`ad-placeholder ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5032001560601334"
        data-ad-slot="YOUR_AD_SLOT_ID"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}