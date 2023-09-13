import { createContext, useContext } from "react";
import { event as GAEvent } from "nextjs-google-analytics";

type TEventOptions = Record<string, any> & {
  category?: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  userId?: string;
};

class AnalyticsHelper {
  disabled = true;
  debug = false;

  init(options: { disabled: boolean; debug: boolean }) {
    this.disabled = options.disabled || true;
    this.debug = options.debug || false;

    if (this.debug) console.log("GA is running");
  }

  pushEvent(eventName: string, options?: TEventOptions) {
    // TODO: find out why accessing the private variables return undefined
    // if (this.debug) console.log(`Pushing event to Google Analytics ${JSON.stringify(eventName)}`);

    // if (this.disabled) return;
    GAEvent(eventName, options);
  }

  disable(disableAnalytics: boolean) {
    this.disabled = disableAnalytics;
  }
}

const helper = new AnalyticsHelper();

export const AnalyticsContext = createContext(helper);

export const useAnalytics = () => {
  const value = useContext(AnalyticsContext);
  return value;
};

export default helper;
