import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
}

export function SEO({ 
  title = 'Architech Nigeria',
  description = 'We build digital infrastructure for ambitious businesses. Development, design, education, and merch.',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title === 'Architech Nigeria' ? title : `${title} | Architech Nigeria`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}