"use server";

import { Button, Text, Input, Textarea, Card, Avatar } from "@/packages/ui";
import AccordionStyleDefault from "@/preview/components/accordion-style-default";
import AlertStyleDefaultIcon from "@/preview/components/alert-style-with-icon";
import AvatarStyleCircle from "@/preview/components/avatar-style-circle-sizes";
import BadgeStyleVariants from "@/preview/components/badge-style-variants";
import { GithubIcon, HeartIcon, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getContributors(): Promise<
  { avatar: string; username: string; url: string }[]
> {
  let request = await fetch(
    `https://api.github.com/repos/Logging-Stuff/RetroUI/contributors`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let contributorsList = await request.json();
  return [
    {
      avatar: "https://avatars.githubusercontent.com/u/58097221?v=4",
      username: "MeherabHossain007",
      url: "https://github.com/MeherabHossain007",
    },
    ...contributorsList.map(
      (c: { avatar_url: string; login: string; html_url: string }) => ({
        avatar: c.avatar_url,
        username: c.login,
        url: c.html_url,
      })
    ),
  ];
}

export default async function Home() {
  const contributors = await getContributors();

  return (
    <main>
      <div className="bg-[url('/images/banner_void_2.svg')] bg-cover bg-no-repeat bg-center flex flex-col items-center h-[1400px]">
        <section className="container max-w-6xl mx-auto px-4 lg:px-0 text-gray-900 flex justify-center items-center lg:gap-28 xl:gap-32 my-28">
          <div className="text-center lg:text-left w-full lg:w-2/3">
            <Text as="h1">Make your projects</Text>
            <Text as="h1" className="text-outlined">
              stand out!
            </Text>

            <p className="text-lg text-muted mb-8 mt-4">
              Retro styled component library for modern web apps. Comes with 20+
              free UI components that you can just copy paste into your
              projects. {/* <br /> Now available for both HTML and React! */}
            </p>

            <div className="max-w-96 grid gap-4 grid-cols-2 mx-auto lg:mx-0">
              <Link href="/docs" passHref>
                <Button
                  className="w-full"
                  aria-label="Get Started with RetroUI"
                >
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
              src="/images/tv_radio.png"
              className="h-full w-full"
            />
          </div>
        </section>
        <section className="container max-w-6xl mx-auto px-4 lg:px-0 my-36">
          {/* <Text as="h2" className="mb-16 text-center">
            Old school with modern twist! ✨
          </Text> */}
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-8">
            <Card className="w-full bg-white shadow-none">
              <Card.Header>
                <Card.Title>Button</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary</Button>
                  <Button variant="outline">Outline</Button>
                </div>
              </Card.Content>
            </Card>
            <Card className="w-full bg-white shadow-none">
              <Card.Header>
                <Card.Title>Badge</Card.Title>
              </Card.Header>
              <Card.Content>
                <BadgeStyleVariants />
              </Card.Content>
            </Card>
            <Card className="w-full bg-white shadow-none">
              <Card.Header>
                <Card.Title>Avatar</Card.Title>
              </Card.Header>
              <Card.Content>
                <AvatarStyleCircle />
              </Card.Content>
            </Card>
            <Card className="w-full bg-white shadow-none">
              <Card.Header>
                <Card.Title>Accordion</Card.Title>
              </Card.Header>
              <Card.Content>
                <AccordionStyleDefault />
              </Card.Content>
            </Card>
            <Card className="w-full bg-white shadow-none">
              <Card.Header>
                <Card.Title>Input & Textarea</Card.Title>
              </Card.Header>
              <Card.Content>
                <Input />
                <div className="h-4"></div>
                <Textarea />
              </Card.Content>
            </Card>

            <Card className="w-full bg-white shadow-none">
              <Card.Header>
                <Card.Title>Alert</Card.Title>
              </Card.Header>
              <Card.Content>
                <AlertStyleDefaultIcon />
              </Card.Content>
            </Card>
          </div>
        </section>
      </div>

      <section className="container max-w-6xl mx-auto px-4 lg:px-0 flex lg:gap-16 lg:grid-cols-2 my-36">
        <div className="w-3/5">
          <Text as="h2">Easily Customize to Your Own Needs! 🛠️</Text>
          <div className="flex flex-col space-y-1 mt-6 mb-8 text-muted">
            <Text className="text-xl">
              Copy-Paste Ready: Components that you can just copy paste.
            </Text>
            <Text className="text-xl">
              Tailwind Based: Customizable with Tailwind CSS.
            </Text>
            <Text className="text-xl">
              Type Safe: Typescript support for all components.
            </Text>
          </div>
          <Link href="/docs/components/button" passHref>
            <Button>See Examples</Button>
          </Link>
        </div>
        <div className="w-2/5">
          <Image
            src="/images/code_show.svg"
            width={600}
            height={400}
            alt="retroui code showcase"
          />
        </div>
      </section>

      <section className="container max-w-6xl mx-auto border-2 bg-primary-400 border-black py-16 px-4 lg:p-16 my-36">
        <Text as="h2" className="text-center mb-2">
          Community Contributors
        </Text>
        <Text className="text-xl text-center text-muted mb-8">
          RetroUI core is free and open-source, and it is made possible by our
          awesome contributors.
        </Text>
        <div className="flex flex-wrap justify-center gap-4">
          {contributors.map((contributor) => (
            <Link
              key={contributor.username}
              href={contributor.url}
              target="_blank"
              passHref
              className="flex flex-col items-center"
            >
              <Avatar className="h-16 w-16">
                <Avatar.Image
                  src={contributor.avatar}
                  alt={contributor.username}
                />
              </Avatar>
            </Link>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-12">
          <Link
            href="https://opencollective.com/retroui"
            target="_blank"
            passHref
          >
            <Button className="flex items-center bg-white" variant="outline">
              <HeartIcon size="16" className="mr-2" />
              Sponsor RetroUI
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
