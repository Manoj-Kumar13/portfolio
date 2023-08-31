import Image from 'next/image'
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";


function Skills() {
  return (
    <section >
    <div>
      <h3 className="text-3xl py-1 text-center dark:text-white font-burtons">Enchanting Talents at Your Disposal</h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Since the beginning of my journey as a freelance designer and
        developer, I've done remote work for
        <span className="text-teal-500"> agencies </span>
        consulted for <span className="text-teal-500">startups </span>
        and collaborated with talanted people to create digital products
        for both business and consumer use.
      </p>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        I offer from a wide range of services, including brand design,
        programming and teaching.
      </p>
    </div>
    <div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
        <Image alt="design" src={design} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2  text-black">
          Programming Languages
        </h3>
        <p className="py-2">
          Creating elegant designs suited for your needs following core
          design theory.
        </p>
        <h4 className="py-4 text-teal-600">Languages</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image alt="code" src={code} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2 text-black">
          Frameworks and Libraries
        </h3>
        <p className="py-2">
          Do you have an idea for your next great website? Let's make it a
          reality.
        </p>
        <h4 className="py-4 text-teal-600">Frameworks and libraries</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image alt='consulting' src={consulting} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2 text-black">Tools and Platforms</h3>
        <p className="py-2">
          Are you interested in feedback for your current project? I can
          give you tips and tricks to level it up.
        </p>
        <h4 className="py-4 text-teal-600">Tools</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div>
    </div>
  </section>
  )
}

export default Skills