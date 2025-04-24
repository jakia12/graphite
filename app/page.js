import Ecosyestem from "./components/Ecosyestem";
import ExclusiveFeatures from "./components/ExclusiveFeatures";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NewApproach from "./components/NewApproach";
import { Roadmap } from "./components/Roadmap";
import Ultimate from "./components/Ultimate";

export default function Home() {
  return (
    <>
      <Hero />

      <Ultimate />
      <Features />
      <Ecosyestem />
      <Roadmap />
      <ExclusiveFeatures />
      <NewApproach />
    </>
  );
}
