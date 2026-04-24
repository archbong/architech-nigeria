import { Link } from 'react-router-dom'
import { GraduationCap, Clock, Users, CheckCircle, ArrowRight, BookOpen, Code2, Server, Palette, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'

const courses = [
  {
    title: 'React & Next.js Mastery',
    description: 'Build production-ready web applications with React, Next.js, and TypeScript. From fundamentals to deployment.',
    duration: '12 weeks',
    students: 150,
    level: 'Intermediate',
    icon: Code2,
    price: '₦150,000',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
    topics: ['React Hooks', 'Next.js App Router', 'Server Components', 'API Routes', 'Authentication', 'Deployment'],
    featured: true,
  },
  {
    title: 'Backend Engineering with Node.js',
    description: 'Design and build scalable APIs, databases, and server infrastructure with Node.js and Express.',
    duration: '10 weeks',
    students: 120,
    level: 'Intermediate',
    icon: Server,
    price: '₦120,000',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    topics: ['REST APIs', 'Database Design', 'Authentication', 'File Upload', 'WebSockets', 'Docker'],
    featured: true,
  },
  {
    title: 'Product Design Fundamentals',
    description: 'Learn UI/UX design principles, Figma, and how to create beautiful, functional interfaces.',
    duration: '8 weeks',
    students: 80,
    level: 'Beginner',
    icon: Palette,
    price: '₦80,000',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    topics: ['Design Thinking', 'Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'Portfolio'],
    featured: false,
  },
  {
    title: 'SaaS Business Blueprint',
    description: 'Learn how to build, launch, and grow a SaaS business from scratch. Technical and business strategies.',
    duration: '6 weeks',
    students: 200,
    level: 'All Levels',
    icon: BookOpen,
    price: '₦100,000',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
    topics: ['Idea Validation', 'MVP Development', 'Pricing Strategy', 'Marketing', 'Scaling', 'Fundraising'],
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
      <SEO title="Academy" description="Learn React, Node.js, Product Design, and SaaS from industry experts." />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-primary">Architech Academy</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Learn to build<br />
              <span className="text-primary">production-ready</span><br />
              applications
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Practical courses designed by engineers who build for a living.
              No fluff, just what you need to land your dream role.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="xl" className="group">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Download Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: '550+', label: 'Students Trained' },
              { value: '4', label: 'Courses' },
              { value: '85%', label: 'Completion Rate' },
              { value: '40+', label: 'Companies Hiring' },
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
                  <Link to="/contact">
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
          <Link to="/contact">
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