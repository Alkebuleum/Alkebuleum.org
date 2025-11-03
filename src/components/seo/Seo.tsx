import { Helmet } from 'react-helmet-async'

type Props = {
    title: string
    description: string
    url: string
    image?: string
    canonical?: string
}

export default function Seo({ title, description, url, image, canonical }: Props) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    )
}
