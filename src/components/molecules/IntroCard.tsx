import { Icon, Link } from "../atoms";
import Image from "next/image";
import { useTrans } from "@/lib";

interface IntroCard {
  className?: string;
}

const IntroCard = ({}: IntroCard) => {
  const trans = useTrans();

  return (
    <div
      data-fade="0"
      className="relative text-center min-h-screen md:py-24 text-black dark:text-white"
    >
      <div className="max-w-[500px] mx-auto">
        <Image
          src={trans.home.intro.image}
          width={500}
          height={500}
          className="w-full"
          alt=""
        />
      </div>
      <div className="mb-0">
        <div
          className="relative block px-6 py-12 bg-transparent"
        >
          <h2 className="text-xl md:text-3xl font-bold mb-4 display-5">
            { trans.home.intro.header }
          </h2>
          <p className="mb-5">
            { trans.home.intro.description }
          </p>
          <div className="justify-center mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8">
            {trans.home.intro.links.map((item: any, i: number) => 
              <Link
                href={item.link}
                target="_blank"
                className="flex items-center"
                key={i}
              >
                <Icon icon={item.icon} className="mr-1"/>
                {item.title}
              </Link>
            )}
          </div>
        </div>
      </div>
      <a
        href="#featured-post"
        className="inline-block mx-auto cursor-pointer rounded-md transition-colors hover:text-primary-300 focus-visible:text-primary-300"
      >
        <Icon icon="AiOutlineArrowDown" className="h-8 w-8 animate-bounce md:h-10 md:w-10" />
      </a>
    </div>
  );
};

export default IntroCard;
