export default function PatternBackground() {
  return (
    <div
      className="hidden md:block absolute inset-0 w-full h-full bg-[url('/bg-stripes.png')] bg-repeat opacity-100 pointer-events-none"
      aria-hidden='true'
    ></div>
  );
}
