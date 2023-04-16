import { useEffect } from 'react';

type UseScriptOptions = {
  src?: string;
  body?: string;
}

export default function useScript({ src, body }: UseScriptOptions) {
  useEffect(() => {
    const script = document.createElement('script');

    // Wrap in an IIFE to prevent global variables
    if (body) {
      script.textContent = `
        (function() {
          ${body}
        })();
      `
    } else if (src) {
      script.src = src;
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}
