import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout/layout'
import { HomePage } from './routes/home'
import { ServicesPage } from './routes/services'
import { PortfolioPage } from './routes/portfolio'
import { PortfolioDetailPage } from './routes/portfolio-detail'
  import { ContactPage } from './routes/contact'
import { AboutPage } from './routes/about'
import { BlogPage } from './routes/blog'
import { BlogPostPage } from './routes/blog-post'
import { StorePage } from './routes/store/index'
import { ProductPage } from './routes/store/product'
import { CartPage } from './routes/store/cart'
import { CheckoutPage } from './routes/store/checkout'
import { AcademyPage } from './routes/academy'
import { AcademyDetailPage } from './routes/academy-detail'
import { PrivacyPage } from './routes/legal/privacy'
import { TermsPage } from './routes/legal/terms'
import { CookiesPage } from './routes/legal/cookies'
import { RefundsPage } from './routes/legal/refunds'
import { NotFoundPage } from './routes/not-found'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'portfolio/:slug', element: <PortfolioDetailPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <BlogPostPage /> },
      { path: 'academy', element: <AcademyPage /> },
      { path: 'academy/:slug', element: <AcademyDetailPage /> },
      { path: 'store', element: <StorePage /> },
      { path: 'store/cart', element: <CartPage /> },
      { path: 'store/checkout', element: <CheckoutPage /> },
      { path: 'store/:id', element: <ProductPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'cookies', element: <CookiesPage /> },
      { path: 'refunds', element: <RefundsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])