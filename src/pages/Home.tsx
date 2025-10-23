import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Vision from "../components/home/Vision";
import Services from "../components/home/Services";
import Appointment from "../components/home/Appointment";
import Location from "../components/home/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Services showCount={4} />
      <Appointment />
      <About />
      <Location />
      <Vision />
    </>
  );
}
