import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Users, CheckCircle, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'

const courses: Record<string, any> = {
  'react-masterclass:-from-zero-to-production': {
    title: 'React Masterclass: From Zero to Production',
    price: '₦150,000',
    duration: '12 weeks',
    students: 150,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
    description: 'Master modern web development with React and TypeScript. Build production-ready applications from scratch.',
    outcomes: [
      'Build full-stack applications with React.js',
      'Implement authentication and authorization',
      'Design and optimize function components',
      'Deploy to production',
      'Write clean, maintainable TypeScript code',
    ],
    curriculum: [
      { week: 1, title: 'React Fundamentals', topics: ['Components', 'Props & State', 'Hooks', 'Events'] },
      { week: 2, title: 'TypeScript Deep Dive', topics: ['Types', 'Interfaces', 'Generics', 'Utility Types'] },
      { week: 3, title: 'React.js Browser Router', topics: ['Pages & Layouts', 'Server Components', 'Data Fetching'] },
      { week: 4, title: 'Consuming API on client components', topics: ['Route Handlers', 'Middleware', 'Validation'] },
    ],
    instructor: {
      name: 'Architech Team',
      role: 'Senior Engineers',
    },
    nextCohort: 'May 15, 2026',
  },
}

const handleDownloadCurriculum = () => {
  const link = document.createElement('a')
  link.href = '/architech-academy-curriculum.pdf'
  link.download = 'Architech-Academy-Curriculum.pdf'
  link.click()
}

export function AcademyDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const course = slug ? courses[slug] : null

  if (!course) {
    return (
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Course not found</h1>
        <Link to="/academy"><Button variant="outline">Back to Academy</Button></Link>
      </section>
    )
  }

  return (
    <>
      <SEO title={course.title} description={course.description} />

      <section className="pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/academy" className="inline-flex text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Academy
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="h-64 md:h-96 rounded-2xl overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="h-4 w-4" />{course.students} students</span>
                  <span className="bg-secondary px-2 py-0.5 rounded-full">{course.level}</span>
                </div>
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{course.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.outcomes.map((o: string) => (
                    <div key={o} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{o}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Curriculum</h2>
                <div className="space-y-3">
                  {course.curriculum.map((week: any) => (
                    <div key={week.week} className="p-4 rounded-xl border border-border/50">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                          {week.week}
                        </span>
                        <h3 className="font-semibold">Week {week.week}: {week.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-11">
                        {week.topics.map((topic: string) => (
                          <span key={topic} className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Taught by {course.instructor.name}</p>
                    <p className="text-sm text-muted-foreground">{course.instructor.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border/50 bg-background sticky top-24">
                <p className="text-3xl font-bold text-primary mb-2">{course.price}</p>
                <p className="text-sm text-muted-foreground mb-4">Next cohort: {course.nextCohort}</p>
                <Link to="/contact">
                  <Button className="w-full mb-3">Enroll Now</Button>
                </Link>
                <Button variant="outline" className="w-full" onClick={handleDownloadCurriculum}>
                  Download Syllabus
                </Button>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Students</span>
                    <span className="font-medium">{course.students}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Level</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}