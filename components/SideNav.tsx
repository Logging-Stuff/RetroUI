import Link from "next/link";

const navItems = [
  { title: "Getting Started", route: "/components" },
  { title: "Accordions", route: "/components/accordions" },
  { title: "Avatars", route: "/components/avatars" },
  // { title: "Badges", route: "/components/badges" },
  { title: "Buttons", route: "/components/buttons" },
  { title: "Cards", route: "/components/cards" },
  { title: "Inputs", route: "/components/inputs" },
  { title: "Textareas", route: "/components/textareas" },
  { title: "Typography", route: "/components/typography" },
];

export default function SideNav() {
  return (
    <div
      className={`fixed top-16 left-0 border-r-2 border-black h-full transition-transform transform md:translate-x-0 w-64 bg-white z-50`}
    >
      <nav className="flex flex-col items-start p-6 space-y-2">
        {navItems.map((item) => (
          <Link key={item.route} href={item.route}>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
