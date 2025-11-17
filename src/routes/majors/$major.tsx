import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  createFileRoute,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import {
  ArrowLeft,
  GraduationCap,
  BookOpen,
  Briefcase,
  Target,
  Badge,
} from "lucide-react";

export const Route = createFileRoute("/majors/$major")({
  component: RouteComponent,
});

const keyCourses = [
  "Data Structures & Algorithms",
  "Computer Architecture",
  "Operating Systems",
  "Database Systems",
  "Software Engineering",
  "Artificial Intelligence",
  "Web Development",
  "Computer Networks",
];

const careerPaths = [
  {
    title: "Software Engineer",
    description: "Design and develop software applications and systems",
  },
  {
    title: "Data Scientist",
    description: "Analyze complex data to help companies make better decisions",
  },
  {
    title: "Machine Learning Engineer",
    description: "Build and deploy AI models and intelligent systems",
  },
  {
    title: "Full Stack Developer",
    description: "Create end-to-end web applications and services",
  },
  {
    title: "Cybersecurity Specialist",
    description: "Protect systems and networks from digital threats",
  },
  {
    title: "Cloud Architect",
    description: "Design and manage cloud computing infrastructure",
  },
];

const skills = [
  "Programming",
  "Problem Solving",
  "Algorithm Design",
  "System Design",
  "Team Collaboration",
  "Critical Thinking",
  "Debugging",
  "Version Control",
];

function RouteComponent() {
  let navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Back Button */}
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate({ to: "/" })}
      >
        <ArrowLeft className="mr-2 size-4" />
        Back to Majors
      </Button>

      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <GraduationCap className="size-10 text-primary" />
          </div>
          <div>
            <h1 className="mb-2">Computer Science</h1>
            <p className="text-muted-foreground">
              Bachelor of Science • 4 Years • Full-time
            </p>
          </div>
        </div>
        <p className="max-w-4xl">
          Computer Science is the study of computers and computational systems.
          Unlike electrical and computer engineers, computer scientists deal
          mostly with software and software systems; this includes their theory,
          design, development, and application. Our program prepares students
          for careers in software development, artificial intelligence, data
          science, and more, with a strong foundation in both theoretical and
          practical aspects of computing.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Employment Rate</CardTitle>
            <div className="mt-2">95%</div>
            <CardDescription>within 6 months of graduation</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Salary</CardTitle>
            <div className="mt-2">$85,000</div>
            <CardDescription>starting salary for graduates</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Class Size</CardTitle>
            <div className="mt-2">25 students</div>
            <CardDescription>average class size</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Key Courses */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="size-6 text-primary" />
          <h2>Key Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {keyCourses.map((course, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p>{course}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Career Paths */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="size-6 text-primary" />
          <h2>Career Paths</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((career, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{career.title}</CardTitle>
                <CardDescription>{career.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills You'll Learn */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Target className="size-6 text-primary" />
          <h2>Skills You'll Learn</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} className="px-4 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>Ready to Get Started?</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Join our Computer Science program and start your journey toward a
            rewarding career in technology
          </CardDescription>
          <div className="flex gap-4 pt-4">
            <Button variant="secondary">Apply Now</Button>
            <Button
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              Schedule a Visit
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
