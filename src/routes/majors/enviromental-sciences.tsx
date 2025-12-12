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
  TreeDeciduous,
  AtSign,
} from "lucide-react";

export const Route = createFileRoute("/majors/enviromental-sciences")({
  component: RouteComponent,
});

const keyCourses = [
  "Hydrology",
  "Introduction to Probability and Statistics for the Life Sciences",
  "Physical Geology",
  "Principles of Ecology",
];

const careerPaths = [
  {
    title: "Enviromental Scientist",
    description:
      "Conduct research or investigations to protect the enviroment or human health.",
  },
  {
    title: "Enviromental Engineer",
    description:
      "Work on projects to create systems and buildings that address enviromental concerns.",
  },
  {
    title: "Wildlife Biologist",
    description:
      "Study animals and their behavior, as well as the role each plays in its natural habitat.",
  },
];

const skills = [
  "Analytical Skills",
  "Critical-thinking Skills",
  "Interpersonal Skills",
  "Problem Solving Skills",
  "Writing Skills",
];

const jobs = ["LinkedIn", "HandShake", "Indeed"];

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
            <TreeDeciduous className="size-10 text-primary" />
          </div>
          <div>
            <h1 className="mb-2 font-bold">Enviromental Sciences</h1>
            <p className="text-muted-foreground">
              Bachelor of Science • 4 Years • Full-time
            </p>
          </div>
        </div>
        <p className="max-w-4xl">
          The Environmental Science BS is a four-year program in which you’ll
          acquire a well-rounded background in the sciences. Designed to build a
          broad view of environmental issues and factors, the curriculum
          incorporates biology, chemistry, economics, geography, geology and
          mathematics courses.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Employment Rate</CardTitle>
            <div className="mt-2">98%</div>
            <CardDescription>within 6 months of graduation</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Salary</CardTitle>
            <div className="mt-2">$82,222</div>
            <CardDescription>starting salary for graduates</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="size-6 text-primary" />
          <h2 className="font-bold">Key Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
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
        <p className="">{skills.map((skill) => skill).join(", ")}</p>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <AtSign className="size-6 text-primary" />
          <h2 className="font-bold">Where To Look For a Job</h2>
        </div>
        <p className="">{jobs.map((job) => job).join(", ")}</p>
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
