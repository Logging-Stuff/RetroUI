import {
  Accordion,
  Avatar,
  Badge,
  BasicCard,
  Button,
  H1,
  H2,
  H3,
  H4,
  Input,
  ProductCard,
  Textarea,
} from "@/packages/ui";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-36">
      <section className="container max-w-6xl mx-auto mt-36 px-4 text-center text-gray-900">
        <H1>Make your projects</H1>
        <H1 className="text-outlined">stand out!</H1>

        <p className="text-lg text-gray-600 mb-8 mt-4 max-w-2xl mx-auto">
          Retro styled component library for modern web apps. Comes with 20+
          free UI components that you can just copy paste into your projects.{" "}
          {/* <br /> Now available for both HTML and React! */}
        </p>

        <div className="max-w-96 grid gap-4 mx-auto grid-cols-2">
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
              Github
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container max-w-6xl mx-auto ">
        <div className="grid grid-cols-2 gap-6 items-center">
          <div>
            <H3>Why Use RetroUI?</H3>
            <H2 className="text-9xl mt-4">Coz We C0000l!! </H2>
          </div>

          <img
            alt="orange cool cat"
            src="/images/orange_boos.png"
            className="h-full w-full"
          />
        </div>
      </section>

      {/* Component Previews Section */}
      <section className="container max-w-6xl mx-auto ">
        <H2 className="mb-16">
          Our components look both old school and modern! ✨
        </H2>

        <div className="grid gap-4 grid-cols-4 mb-8">
          <div className="space-y-4">
            <H4>Button</H4>
            <Button>Click Me</Button>
          </div>
          <div className="space-y-4">
            <H4>Badge</H4>
            <div className="space-x-2">
              <Badge>Default Badge</Badge>
              <Badge variant="error">Error Badge</Badge>
            </div>
          </div>
          <div className="space-y-4">
            <H4>Avatar</H4>
            <Avatar />
          </div>
          <div className="space-y-4">
            <H4>Input</H4>
            <Input />
          </div>
        </div>
        <div className="grid gap-8 grid-cols-3">
          <div className="space-y-4">
            <H4>Textarea</H4>
            <Textarea />
          </div>
          <div className="space-y-4">
            <H4>Basic Card</H4>
            <BasicCard />
          </div>
          <div className="space-y-4">
            <H4>Accordion</H4>
            <Accordion />
          </div>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto ">
        <H2 className="mb-16">
          And NO! We didn't just copy Gumroad!
          <br />
          Inspired, if you will... 💅
        </H2>

        <div className="grid grid-cols-3 items-center">
          <img
            src="/images/our_product_card.png"
            alt="our product card"
            className="w-80"
          />
          <div className="space-y-4">
            <H3>👈 RetroUI Card</H3>
            <H3>Gumroad's Card 👉</H3>
          </div>
          <img
            src="/images/gumroad_product_card.png"
            alt="our product card"
            className="w-80"
          />
        </div>
      </section>

      <footer className="bg-black py-8">
        <div className="container max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-gray-300 text-sm">
            Built by <a className="text-primary-500">Arif Hossain</a>.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://twitter.com/ariflogs"
              className="text-primary-500 mx-2"
            >
              Twitter
            </a>
            <a
              href="https://github.com/ariflogs/retroui"
              className="text-primary-500 mx-2"
            >
              GitHub
            </a>
            <a href="/docs" className="text-primary-500 mx-2">
              Documentation
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
