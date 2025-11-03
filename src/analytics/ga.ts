// src/analytics/ga.ts
declare global {
    interface Window {
        dataLayer: any[];
        gtag?: (...args: any[]) => void;
        _gaLoaded?: boolean;
    }
}

export function initGA(id: string) {
    if (!id || window._gaLoaded) return;
    window._gaLoaded = true;

    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    const gtag = (...args: any[]) => window.dataLayer.push(args);
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', id, { anonymize_ip: true });
}

export function pageview(id: string, path: string) {
    if (!window.gtag) return;
    window.gtag('config', id, { page_path: path });
}

export function event(name: string, params: Record<string, any> = {}) {
    if (!window.gtag) return;
    window.gtag('event', name, params);
}
