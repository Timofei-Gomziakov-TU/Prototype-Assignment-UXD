import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Laptop, TreeDeciduous } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const majors = [
  {
    id: 1,
    title: "Computer Science",
    description: "Software Development, Systems Analysis, and Consulting",
    icon: Laptop,
    link: "/majors/computer-science",
  },
  {
    id: 2,
    title: "Enviromental Sciences",
    description: "Enviromental research, policy & advocacy",
    icon: TreeDeciduous,
    link: "/majors/enviromental-sciences",
  },
];

function Index() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <h2 className="my-8 text-center font-bold">Explore Our Majors</h2>
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
      </div>
    </main>
  );
}
