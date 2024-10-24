import {
  Avatar,
  Badge,
  BasicCard,
  Button,
  Text,
  Input,
  Textarea,
} from "@/packages/ui";
import AccordionStyleDefault from "@/preview/components/accordion-style-default";
import { GithubIcon, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-36">
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 mt-36 text-gray-900 flex justify-center items-center">
        <div className="text-center lg:text-left w-full lg:w-2/3">
          <Text as="h1">Make your projects</Text>
          <Text as="h1" className="text-outlined">
            stand out!
          </Text>

          <p className="text-lg text-muted mb-8 mt-4">
            Retro styled component library for modern web apps. Comes with 20+
            free UI components that you can just copy paste into your projects.{" "}
            {/* <br /> Now available for both HTML and React! */}
          </p>

          <div className="max-w-96 grid gap-4 grid-cols-2 mx-auto lg:mx-0">
            <Link href="/docs" passHref>
              <Button className="w-full" aria-label="Get Started with RetroUI">
                Get Started
              </Button>
            </Link>
            <Link
              href="https://github.com/Logging-Stuff/retroui"
              target="_blank"
              passHref
            >
              <Button
                className="w-full"
                variant="outline"
                aria-label="Get Started with RetroUI"
              >
                Github
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/3">
          <img
            alt="orange cool cat"
            src="/images/orange_boos.png"
            className="h-full w-full"
          />
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-4 lg:px-0">
        <Text as="h2" className="mb-16 text-center">
          Our components look both old school and modern! ✨
        </Text>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="space-y-4">
            <Text as="h4">Button</Text>
            <Button>Click Me</Button>
          </div>
          <div className="space-y-4">
            <Text as="h4">Badge</Text>
            <div className="flex flex-wrap space-y-2 lg:space-y-0 space-x-2">
              <Badge>Default Badge</Badge>
              <Badge variant="error">Error Badge</Badge>
            </div>
          </div>
          <div className="space-y-4">
            <Text as="h4">Avatar</Text>
            <Avatar />
          </div>
          <div className="space-y-4">
            <Text as="h4">Input</Text>
            <Input />
          </div>
        </div>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="space-y-4">
            <Text as="h4">Textarea</Text>
            <Textarea />
          </div>
          <div className="space-y-4">
            <Text as="h4">Basic Card</Text>
            <BasicCard />
          </div>
          <div className="space-y-4">
            <Text as="h4">Accordion</Text>
            <AccordionStyleDefault />
          </div>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-4 lg:px-0">
        <Text as="h2" className="mb-16 text-center">
          And NO! We didn&apos;t just copy Gumroad!
          <br />
          Inspired, if you will... 💅
        </Text>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
          <Image
            src="/images/our_product_card.png"
            alt="our product card"
            width={300}
            height={500}
          />
          <Text as="h3" className="lg:hidden mt-2 mb-12">
            👆 RetroUI Card
          </Text>

          <div className="hidden lg:block space-y-4">
            <Text as="h2" className="text-left">
              👈 RetroUI Card
            </Text>
            <Text as="h2" className="text-right">
              Gumroad&apos;s Card 👉
            </Text>
          </div>
          <Image
            src="/images/gumroad_product_card.png"
            alt="our product card"
            className="mr-auto lg:ml-auto"
            width={300}
            height={600}
          />
          <Text as="h3" className="lg:hidden mt-2">
            👆 Gumroad&apos;s Card
          </Text>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto border-2 bg-primary-400 border-black py-16 px-4 lg:p-16">
        <Text as="h2" className="mb-8 text-center">
          And did I mention it&apos;s Free and Open Source?
        </Text>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
          <Link
            href="https://github.com/Logging-Stuff/retroui"
            target="_blank"
            passHref
          >
            <Button className="flex items-center bg-white" variant="outline">
              <GithubIcon size="16" className="mr-2" />
              Star on GitHub
            </Button>
          </Link>
          <Link href="https://discord.gg/Jum3NJxK6Q" target="_blank" passHref>
            <Button className="flex items-center bg-white" variant="outline">
              <MessageCircle size="16" className="mr-2" />
              Join Community
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-black py-8">
        <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center">
          <div className="flex justify-center space-x-4">
            <a href="https://twitter.com/ariflogs" className="text-primary-500">
              Twitter
            </a>
            <a
              href="https://github.com/Logging-Stuff/retroui"
              className="text-primary-500"
            >
              GitHub
            </a>
            <a href="/docs" className="text-primary-500">
              Documentation
            </a>
          </div>

          <p className="text-gray-300 text-sm">
            Built by{" "}
            <a href="https://twitter.com/ariflogs" className="text-primary-500">
              Arif Hossain
            </a>
            .
          </p>
        </div>
      </footer>
    </main>
  );
}
