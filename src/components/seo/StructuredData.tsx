import { Helmet } from 'react-helmet-async'
export function OrgJsonLd() {
    const json = {
        "@context": "https://schema.org", "@type": "Organization",
        name: "Alkebuleum Foundation",
        url: "https://alkebuleum.org/",
        logo: "https://alkebuleum.org/logo.png",
        sameAs: ["https://twitter.com/alkebuleum", "https://t.me/alkebuleum"]
    }
    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(json)}</script>
        </Helmet>
    )
}
