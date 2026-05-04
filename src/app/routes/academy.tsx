import { Link } from 'react-router-dom'
import { Clock, Users, CheckCircle, ArrowRight, BookOpen, Code2, Server, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'

const courses = [
  {
    title: 'React Masterclass: From Zero to Production',
    description: 'Engineer scalable, production-grade web applications using React, TypeScript, and modern frontend architecture. Covers everything from core fundamentals to deployment and performance optimization.',
    duration: '12 weeks',
    students: 15,
    level: 'Beginner',
    icon: Code2,
    price: '₦150,000',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
    topics: [
      'Advanced React Hooks',
      'BrowserRouter',
      'Server & Client Components',
      'API Integration Patterns',
      'Authentication & Authorization',
      'Performance Optimization',
      'AI workflow'
    ],
    featured: true,
  },
  {
    title: 'Next JS Web Framework',
    description: 'Engineer scalable, production-grade web applications using React, TypeScript, and modern frontend architecture. Covers everything from core fundamentals to deployment and performance optimization.',
    duration: '12 weeks',
    students: 15,
    level: 'Intermediate',
    icon: Code2,
    price: '₦200,000',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
    topics: [
      'Advanced React Hooks',
      'Next.js App Router',
      'Server & Client Components',
      'API Integration Patterns',
      'Authentication & Authorization',
      'Performance Optimization',
      'Deployment & CI/CD',
      'AI workflow'
    ],
    featured: true,
  },
  {
    title: 'Backend Engineering with Node.js',
    description: 'Design and implement scalable backend systems using Node.js. Focus on API architecture, database design, and production-ready infrastructure.',
    duration: '10 weeks',
    students: 12,
    level: 'Intermediate',
    icon: Server,
    price: '₦200,000',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    topics: [
      'REST & API Architecture',
      'Database Design (SQL & NoSQL)',
      'Authentication & Security',
      'File Handling & Storage',
      'WebSockets & Realtime Systems',
      'Docker & Deployment',
      'AI workflow'
    ],
    featured: true,
  },
  {
    title: 'Python for Software Engineering',
    description: 'Build a strong foundation in Python for backend development, automation, and system design. Designed for developers transitioning into backend engineering.',
    duration: '8 weeks',
    students: 10,
    level: 'Beginner',
    icon: Code2,
    price: '₦100,000',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    topics: [
      'Python Fundamentals',
      'Object-Oriented Programming',
      'File Handling & Automation',
      'Working with APIs',
      'Error Handling & Testing',
      'Intro to Backend Development',
      'AI workflow'
    ],
    featured: false,
  },
  {
    title: 'Django Web Development',
    description: 'Develop robust, scalable web applications using Django and Django REST Framework. Focus on backend systems, APIs, and real-world application architecture.',
    duration: '10 weeks',
    students: 100,
    level: 'Intermediate',
    icon: Code2,
    price: '₦200,000',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    topics: [
      'Django Fundamentals',
      'Django REST Framework',
      'Authentication Systems',
      'Database Modeling',
      'API Development',
      'Deployment & Scaling',
      'AI workflow'
    ],
    featured: false,
  },
  {
    title: 'Mobile App Development with Flutter',
    description: 'Develop robust, scalable web applications using Django and Django REST Framework. Focus on backend systems, APIs, and real-world application architecture.',
    duration: '12 weeks',
    students: 10,
    level: 'Intermediate',
    icon: Code2,
    price: '₦250,000',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    topics: [
      'Dart Fundamentals',
      'Flutter Framework',
      'Authentication Systems',
      'Database Modeling',
      'API Development',
      'Deployment & Scaling',
      'AI workflow'
    ],
    featured: false,
  },
  {
    title: 'SaaS Business Blueprint',
    description: 'A technical and strategic guide to building, launching, and scaling a SaaS product. Combines engineering decisions with business execution.',
    duration: '6 weeks',
    students: 20,
    level: 'All Levels',
    icon: BookOpen,
    price: '₦100,000',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
    topics: [
      'Idea Validation & Market Fit',
      'MVP Architecture & Development',
      'Pricing & Monetization Models',
      'Go-To-Market Strategy',
      'Scaling Infrastructure',
      'Growth & Fundraising',
      'AI workflow'
    ],
    featured: false,
  },
]

const testimonials = [
  {
    name: 'Oluwatobi Adeyemi',
    role: 'Frontend Developer at Paystack',
    text: 'The React course transformed my career. Within 2 months of completing, I landed a role at a fintech company.',
    rating: 5,
  },
  {
    name: 'Fatima Ibrahim',
    role: 'Full Stack Engineer',
    text: 'The backend course gave me the confidence to build production systems. The curriculum is practical and up-to-date.',
    rating: 5,
  },
  {
    name: 'David Okonkwo',
    role: 'Product Designer',
    text: 'I went from zero design knowledge to creating professional UI designs in 8 weeks. Highly recommend!',
    rating: 5,
  },
]

const benefits = [
  { icon: CheckCircle, text: 'Hands-on projects and real-world assignments' },
  { icon: CheckCircle, text: 'Live sessions with industry mentors' },
  { icon: CheckCircle, text: 'Access to private community of developers' },
  { icon: CheckCircle, text: 'Certificate upon completion' },
  { icon: CheckCircle, text: 'Career support and job referrals' },
  { icon: CheckCircle, text: 'Lifetime access to course materials' },
]

export function AcademyPage() {
  return (
    <>
      <SEO title="Academy" description="Learn React, Node.js, Python, Django, and SaaS from industry experts." />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=600&fit=crop"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-primary mb-4">Architech Academy</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Learn from engineers<br />
            <span className="text-primary">who build for a living</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical courses on React, Node.js, and SaaS architecture. Taught by senior engineers
            who've shipped production systems processing millions in transactions.
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>7+ students trained</span>
            <span>•</span>
            <span>6 courses</span>
            <span>•</span>
            <span>85% completion rate</span>
            <span>•</span>
            <span>1+ hiring partners</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={`${import.meta.env.VITE_ACADEMY_URL}`}>
              <Button size="xl" className="group">
                Browse Courses
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="xl">
                Talk to an Instructor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: '7+', label: 'Students Trained' },
              { value: '6', label: 'Courses' },
              { value: '85%', label: 'Completion Rate' },
              { value: '20+', label: 'Companies Hiring' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our courses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div className="group relative p-8 rounded-2xl border border-border/50 bg-background transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                {course.featured && (
                  <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full z-10">
                    Popular
                  </span>
                )}

                {/* Course Image */}
                <div className="h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-2xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" />{course.students} students</span>
                  <span className="bg-secondary px-2 py-0.5 rounded-full">{course.level}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  <Link to={`/academy/${course.title.toLowerCase().replace(/[\s&]+/g, '-').replace(/\./g, '')}`}>{course.title}</Link></h3>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.topics.map((topic) => (
                    <span key={topic} className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <p className="text-lg font-bold text-primary">{course.price}</p>
                  <Link to={`${import.meta.env.VITE_ACADEMY_URL}`}>
                    <Button size="sm" className="group">
                      Enroll <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What you get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.text} className="flex items-center gap-3 p-4">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What our students say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-xl border border-border/50 bg-background">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">"{t.text}"</p>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to level up?</h2>
          <p className="text-muted-foreground mb-8">Join 550+ students who have transformed their careers.</p>
          <Link to={`${import.meta.env.VITE_ACADEMY_URL}`}>
            <Button size="lg" className="group">
              Start Learning Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}