import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, pageview } from "./ga";

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

export default function AnalyticsRouterTracker() {
    const loc = useLocation();

    // load GA once
    useEffect(() => {
        if (GA_ID) initGA(GA_ID);
    }, []);

    // send a pageview on each route change
    useEffect(() => {
        if (GA_ID) pageview(GA_ID, loc.pathname + loc.search);
    }, [loc.pathname, loc.search]);

    return null;
}
