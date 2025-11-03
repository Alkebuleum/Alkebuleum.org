import { Helmet } from "react-helmet-async";

type JsonLdProps = { data: Record<string, any> };
export function JsonLd({ data }: JsonLdProps) {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(data)}
            </script>
        </Helmet>
    );
}

export function OrgJsonLd() {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Alkebuleum",
                url: "https://alkebuleum.org",
                logo: "https://alkebuleum.org/logo.png",
                sameAs: [
                    "https://twitter.com/alkebuleum",
                    "https://t.me/alkebuleum"
                ]
            }}
        />
    );
}
