"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";
import { AnalyticsContext, useAnalytics } from "..";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const analytics = useAnalytics();

  if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_DISABLED === "false") {
    analytics.init({
      disabled: false,
      debug: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_DEBUG_MODE === "true",
    });
    analytics.disable(false);
  } else {
    analytics.disable(true);
  }

  return (
    <>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId={
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? "G-1ZWNRHDP84"
        }
        debugMode={
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_DEBUG_MODE === "true"
        }
      />
      <AnalyticsContext.Provider value={analytics}>
        {children}
      </AnalyticsContext.Provider>
    </>
  );
};

export default AnalyticsProvider;
