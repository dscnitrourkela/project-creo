import { Helmet } from 'react-helmet-async'
import { seo } from '../../config/seo'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
}

const SEO = ({
  title = seo.title,
  description = seo.description,
  keywords = seo.keywords,
  image = '/og-image.png',
  url = typeof window !== 'undefined' ? window.location.href : '',
}: SEOProps) => {
  const siteTitle = title === seo.title ? title : `${title} | ${seo.event.name}`

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join(', ')} />
      <meta name='robots' content='index, follow' />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={seo.openGraph.type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={url} />
      <meta property='og:locale' content={seo.openGraph.locale} />
      <meta property='og:site_name' content={seo.title} />

      {/* Twitter */}
      <meta name='twitter:card' content={seo.twitter.card} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      {/* JSON-LD for Event */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: seo.event.name,
          description: seo.description,
          organizer: {
            '@type': 'Organization',
            name: seo.event.organizer,
          },
          // Add other event details if available (startDate, location, etc.)
        })}
      </script>
    </Helmet>
  )
}

export default SEO
