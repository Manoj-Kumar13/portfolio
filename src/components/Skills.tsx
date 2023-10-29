import { skillsData } from "@/utils/skillsData";
function Skills() {
  return (
    <section className="mb-10 pb-10 px-10">
      <div>
        <h3 className="text-3xl py-1 text-center dark:text-white font-burtons">
          Enchanting Talents at Your Disposal
        </h3>
        <p className="text-md py-2 leading-8 text-[#afafbf] font-mono text-xl ">
          Step into a world where a diverse tapestry of enchanting talents
          stands poised at your service, each thread meticulously woven to craft
          exceptional experiences and weave the extraordinary
        </p>
      </div>
      <div className="lg:flex gap-10 box-border flex-wrap my-10">
        {skillsData.map((skill, index) => {
          return (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front text-center shadow-lg py-10 rounded-xl bg-gradient-to-b from-gray-900 opacity-set">
                  <skill.icon style={{ height: "80px", width: "200px", color: skill.color }} />
                </div>
                <div className="flip-card-back shadow-lg rounded-xl bg-gradient-to-b from-gray-900 opacity-set">
                  <h1 className="text-3xl">{skill.title}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
