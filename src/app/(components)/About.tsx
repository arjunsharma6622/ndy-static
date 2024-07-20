import FeatureCard from "@/components/FeatureCard";
import Heading from "@/components/Heading";
import { features } from "@/lib/data";
import { Activity, Network, ReceiptText, Shirt } from "lucide-react";

const About = () => {
  const iconMapping: { [key: string]: any } = {
    Network: Network,
    Activity: Activity,
    Shirt: Shirt,
    ReceiptText: ReceiptText,
  };

  return (
    <>
      <section id="about" className="container mx-auto px-2 py-10 md:px-10 md:py-16">
        <Heading heading="Building the LinkedIn for Sports" subline="Our app bridges the gap between all sports professionals, creating opportunities for growth, collaboration, and success." />

        <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-8 md:gap-8 md:px-8">
          {features.map((feature) => (
            <FeatureCard feature={feature} iconMapping={iconMapping} key={feature.title} />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
