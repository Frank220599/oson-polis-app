import { useState, useEffect } from "react";

/**
 * Reads URL search params entirely on the client side (window.location.search).
 * Unlike Next.js useSearchParams(), this does NOT force dynamic server-side rendering,
 * allowing pages to be statically pre-rendered and served from Vercel's CDN edge.
 *
 * Returns null until the component mounts on the client (to avoid hydration mismatch).
 */
export function useClientSearchParams(): URLSearchParams | null {
    const [params, setParams] = useState<URLSearchParams | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setParams(new URLSearchParams(window.location.search));
    }, []);

    return params;
}
