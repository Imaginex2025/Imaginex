import { InfiniteMovingCards } from "./infinite-moving-cards";

export function Rollingleft() {
  return (
    <div className="rounded-md flex flex-col items-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Patent Gym™ – Patent Harvesting & Seeding",
    title: "Identifying hidden IP in existing solutions and creating new innovations (powered by xBrain™ AI).",
    image: "/impact-icon.svg", // ✅ Replace with actual path or icon
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "xBrain™ – AI-powered Patent Intelligence Engine",
    title: "ImagineX AI-powered Patent Intelligence Engine",
    image: "/ecosystem-icon.svg",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "End-to-End 10-step Patent Framework",
    title: "From discovery to filing and post-grant support.",
    image: "/mission-icon.svg",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Advanced Patent Services",
    title: "Specialized support for patent draft validation, portfolio strategy, global filing, and grant acceleration, etc. ",
    image: "/impact-icon.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Patent Monetization",
    title: "Through the ImagineX Patent Store",
    image: "/ecosystem-icon.svg",
  },
    {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Patent Institute",
    title: "Training and capability-building for innovators, researchers, and CXOs.",
    image: "/mission-icon.svg",
  },
];