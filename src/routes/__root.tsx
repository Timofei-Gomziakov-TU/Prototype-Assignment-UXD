import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";

const RootLayout = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  return (
    <>
      <nav className="w-full border-b border-border bg-background px-6 py-4">
        <div className="flex items-center justify-between gap-6 overflow-auto">
          <div className="relative flex items-center max-w-full">
            <Button variant="default">
              <Link to={"/"}>Home</Link>
            </Button>
            <div className="relative w-64 px-4">
              <Search className="absolute left-6 top-1/2 overflow-auto -translate-y-1/2 size-4 text-muted-foreground text-ellipsis" />
              <Input type="search" placeholder="Search..." className="pl-9" />
            </div>
            <Button
              variant="ghost"
              className="hover:cursor-not-allowed text-gray-400"
            >
              Careers
            </Button>
          </div>

          <div className="flex gap-1">
            <Button onClick={() => setShowSignIn((prev) => !prev)}>
              Sign In
            </Button>
          </div>
        </div>
      </nav>
      <Dialog open={showSignIn} onOpenChange={setShowSignIn}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign In</DialogTitle>
            <DialogDescription>
              Enter your credentials to access your account
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Forgot password?
              </button>
            </div>
            <Button className="w-full" onClick={() => setShowSignIn(false)}>
              Sign In
            </Button>
            <div className="text-center text-muted-foreground">
              Don't have an account?{" "}
              <button className="text-primary hover:underline">Sign up</button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
