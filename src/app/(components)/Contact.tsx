import Heading from "@/components/Heading";
import TeamCard from "@/components/TeamCard";
import { team } from "@/lib/data";

const Contact = () => {

  return (
    <section id="contact" className="container mx-auto px-4 py-10 md:px-10 md:py-16 dots">
      <div className="mx-auto flex items-center flex-col gap-2">
        <Heading heading="Contact Us" subline="We'd love to hear from you! Send us a message and we'll get back to you as soon as possible." />

        <div className="mx-auto mt-6">
          {team.map((teamMember) => (
            <TeamCard key={teamMember.name} teamMember={teamMember} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;