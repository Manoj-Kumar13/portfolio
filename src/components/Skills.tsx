import Image from "next/image";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";

const skillsData = [
  {
    title: "Coding Proficiencies",
    image: design,
    languages: ["Photoshop", "Illustrator", "Figma", "Indesign"],
  },
  {
    title: "Frameworks and Libraries",
    image: code,
    languages: ["Photoshop", "Illustrator", "Figma", "Indesign"],
  },
  {
    title: "Tools and Platforms",
    image: consulting,
    languages: ["Photoshop", "Illustrator", "Figma", "Indesign"],
  },
];

function Skills() {
  return (
    <section className="px-10 mb-10 pb-10">
      <div>
        <h3 className="text-3xl py-1 text-center dark:text-white font-burtons">
          Enchanting Talents at Your Disposal
        </h3>
        <p className="text-md py-2 px-16 leading-8 text-[#afafbf] font-mono text-xl ">
          Step into a world where a diverse tapestry of enchanting talents
          stands poised at your service, each thread meticulously woven to craft
          exceptional experiences and weave the extraordinary
        </p>
      </div>
      <div className="lg:flex gap-10">
        {skillsData.map((skill) => {
          return (
            <div className="text-center shadow-lg py-10 rounded-xl my-10 bg-gradient-to-r  from-gray-900 to-[#6cdbeb1a] flex-1">
              <Image alt="design" className="mx-auto" src={skill.image} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                {skill.title}
              </h3>
              <p className="py-2 ">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Languages</h4>
              {skill.languages.map((language) => {
                return <p className=" font-mono py-1">{language}</p>;
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
