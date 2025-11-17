import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Laptop,
  Briefcase,
  FlaskConical,
  Palette,
  Stethoscope,
  Scale,
  Building2,
  Users,
  Microscope,
} from "lucide-react";

export const Route = createFileRoute("/majors/")({
  component: RouteComponent,
});

const majors = [
  {
    id: 1,
    title: "Computer Science",
    description: "Software development, AI, and data science",
    icon: Laptop,
    link: "/majors/computer-science",
  },
  {
    id: 2,
    title: "Business Administration",
    description: "Management, finance, and entrepreneurship",
    icon: Briefcase,
    link: "/majors/business",
  },
  {
    id: 3,
    title: "Engineering",
    description: "Mechanical, electrical, and civil engineering",
    icon: FlaskConical,
    link: "/majors/engineering",
  },
  {
    id: 4,
    title: "Fine Arts",
    description: "Visual arts, design, and creative expression",
    icon: Palette,
    link: "/majors/fine-arts",
  },
  {
    id: 5,
    title: "Medicine",
    description: "Healthcare, medical research, and patient care",
    icon: Stethoscope,
    link: "/majors/medicine",
  },
  {
    id: 6,
    title: "Law",
    description: "Legal studies, justice, and advocacy",
    icon: Scale,
    link: "/majors/law",
  },
  {
    id: 7,
    title: "Architecture",
    description: "Building design and urban planning",
    icon: Building2,
    link: "/majors/architecture",
  },
  {
    id: 8,
    title: "Psychology",
    description: "Human behavior and mental health",
    icon: Users,
    link: "/majors/psychology",
  },
  {
    id: 9,
    title: "Biology",
    description: "Life sciences and biological research",
    icon: Microscope,
    link: "/majors/biology",
  },
];

function RouteComponent() {
  return (
    <div>
      <h2 className="mb-8 text-center">Explore Our Majors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {majors.map((major) => {
          const Icon = major.icon;
          return (
            <Link
              key={major.id}
              className="block transition-transform hover:scale-105"
              to={major.link}
            >
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon className="size-8 mb-2 text-primary" />
                  <CardTitle>{major.title}</CardTitle>
                  <CardDescription>{major.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
