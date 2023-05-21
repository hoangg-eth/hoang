import { Icon, Link } from "../atoms";
import Image from "next/image";
import { useTrans } from "@/lib";
import Link3Icon from "../atoms/Link3Icon";

interface IntroCard {
  className?: string;
}

const IntroCard = ({}: IntroCard) => {
  const trans = useTrans();

  return (
    <div
      data-fade="0"
      className="relative text-center min-h-screen md:py-4 text-black dark:text-white"
    >
      <div className="max-w-[600px] mx-auto">
        <Image
          src={trans.home.intro.image}
          width={1200}
          height={1200}
          className="w-full"
          alt=""
        />
      </div>
      <div className="mb-0">
        <div className="relative block px-6 py-12 bg-transparent">
          <h2 className="text-xl md:text-3xl font-bold mb-4 display-5">
            {trans.home.intro.header}
          </h2>
          <h3 className="mb-5 text-xl">{trans.home.intro.description}</h3>
          <div className="justify-center mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8">
            {trans.home.intro.links.map((item: any, i: number) => (
              <Link
                href={item.link}
                target="_blank"
                className="flex items-center text-lg text-black"
                key={i}
              >
                <Link3Icon />
                <span className="inline-block mr-2" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#featured-post"
        className="inline-block mx-auto cursor-pointer rounded-md transition-colors hover:text-primary-300 focus-visible:text-primary-300"
      >
        <Icon
          icon="AiOutlineArrowDown"
          className="h-8 w-8 animate-bounce md:h-10 md:w-10"
        />
      </a>
    </div>
  );
};

export default IntroCard;
