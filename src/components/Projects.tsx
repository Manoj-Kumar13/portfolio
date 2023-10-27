import Image from "next/image"
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

function Projects() {
  return (
    <section className="p-10 mb-10">
    <div >
      <h3 className="text-3xl py-1 text-center font-burtons dark:text-white ">Portfolio</h3>
      <p className="text-md py-2 font-mono text-[#afafbf] text-800 text-xl">
        Since the beginning of my journey as a freelance designer and
        developer, I&apos;ve done remote work for
        <span className="text-teal-500"> agencies </span>
        consulted for <span className="text-teal-500">startups </span>
        and collaborated with talanted people to create digital products
        for both business and consumer use.
      </p>
    </div>
  </section>
  )
}

export default Projects