import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  Target,
  MessageCircleMore,
  User,
  Laptop,
} from "lucide-react";

export const Route = createFileRoute("/majors/computer-science")({
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
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate({ to: "/" })}
      >
        <ArrowLeft className="mr-2 size-4" />
        Back to Majors
      </Button>

      <div className="mb-12">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Laptop className="size-10 text-primary" />
          </div>
          <div>
            <h1 className="mb-2 font-bold">Computer Science</h1>
            <p className="text-muted-foreground">
              Bachelor of Science • 4 Years • Full-time
            </p>
          </div>
        </div>
        <p className="max-w-4xl">
          The Bachelor of Science in Computer Science provides an in-depth study
          of the science of computing, including mathematical/theoretical
          foundations as well as systems and application software development.
          Students take electives (4-5 courses) in topics such as artificial
          intelligence, machine learning, robotics, computer vision, graphics,
          game programming, bioinformatics, databases, big data, mobile and web
          application development, cloud computing, high performance computing,
          wireless and sensor networks, network and information security, and
          digital forensics. The program is for students with an interest in the
          fundamentals of computing, who want to be able to contribute to
          innovative research and product development.
        </p>
      </div>
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
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="size-6 text-primary" />
          <h2 className="font-bold">Key Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {keyCourses.map((course, index) => (
            <Card key={index}>
              <CardContent className="">
                <p>{course}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="size-6 text-primary" />
          <h2 className="font-bold">Career Paths</h2>
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

      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Target className="size-6 text-primary" />
          <h2 className="font-bold">Skills You'll Learn</h2>
        </div>
        <p className="">{skills.map((skill) => skill + ", ")}</p>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <MessageCircleMore />
          <h1 className="font-bold">Alumni Q&A</h1>
        </div>
        <div className="flex flex-col mt-2">
          <Textarea
            placeholder="Type your question here..."
            className="border-2"
          />
          <Button className="w-20 ml-auto mt-2">Comment</Button>
        </div>
        {/* Comments */}
        <div className="flex">
          <User className="mr-2" />
          <div className="flex flex-col">
            <div>
              <h2 className="font-bold">Alumni</h2>
            </div>
            <div>
              <p>If you want to succeed, here's what you need to do...</p>
            </div>
            <div>
              <p className="hover:underline font-semibold text-sm w-fit">
                Reply
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
