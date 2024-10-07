export default function AccordionStyleDefault() {
  return (
    <div className="space-y-4 mx-auto">
      <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
        <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
          Accordion Item 1
        </summary>
        <div className="px-4 py-2 font-body bg-white text-gray-700">
          This is the content of the first accordion item. It is styled with
          Tailwind CSS.
        </div>
      </details>

      <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
        <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
          Accordion Item 2
        </summary>
        <div className="px-4 py-2 font-body bg-white text-gray-700">
          This is the content of the second accordion item. It has a similar
          style to maintain consistency.
        </div>
      </details>

      <details className="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
        <summary className="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
          Accordion Item 3
        </summary>
        <div className="px-4 py-2 font-body bg-white text-gray-700">
          This is the content of the third accordion item. The details element
          handles the toggle behavior.
        </div>
      </details>
    </div>
  );
}