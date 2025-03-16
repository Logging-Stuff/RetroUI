export default function TextareaStyleDefault() {
  return (
    <textarea
      rows={4}
      placeholder="type something..."
      className="px-4 py-2 w-full border-2 border-black shadow-md transition focus:outline-hidden focus:shadow-xs"
    />
  );
}
