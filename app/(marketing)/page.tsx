import { Button, H1 } from "@/packages/ui";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="max-w-5xl mx-auto mt-36 px-4 text-center">
        <H1>Make your projects</H1>
        <H1 className="text-outlined">stand out!</H1>

        <p className="text-lg text-gray-600 mb-8 mt-4 max-w-2xl mx-auto">
          Retro styled component library for modern web apps. Comes with 20+
          free UI components that you can just copy paste into your projects.{" "}
          <br /> Now available for both HTML and React!
        </p>

        <div className="max-w-md grid gap-4 mx-auto grid-cols-2">
          <Link href="/components" passHref>
            <Button className="w-full" aria-label="Get Started with RetroUI">
              Get Started
            </Button>
          </Link>
          <Link href="/components" passHref>
            <Button
              className="w-full"
              variant="outline"
              aria-label="Get Started with RetroUI"
            >
              Browse Components
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
