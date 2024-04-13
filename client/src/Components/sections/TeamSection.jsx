import React from "react";

const TeamsSection = () => {
  return (
    <section
      id="team"
      className="overflow-hidden pt-28 md:pt-32 px-4 sm:px-10 xl:pt-36 bg-gradient-to-b from-emerald-300 via-white to-white"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-3 leading-[1.2] text-slate-950 text-2xl font-bold tracking-wide sm:text-4xl xl:text-5xl">
                Our Awesome Team
              </h2>
              <p className="font-medium text-gray-800/90">
              Our team is made up of talented and passionate individuals who are dedicated to make a helpful platform for startup growth
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Afeef Uddin"
            profession="FullStack Dev"
            imageSrc="https://i.postimg.cc/vZyv96vr/image.png"
          />
          <TeamCard
            name="Subharthi Hazra"
            profession="FullStack Dev"
            imageSrc="https://i.postimg.cc/xCKtzyzS/image.png"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;

const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 xl:w-1/4">
        <div className="mx-auto mb-10 w-full max-w-[370px]">
          <div className="relative overflow-hidden rounded-lg">
            <img src={imageSrc} alt="" className="w-full" />
            <div className="absolute bottom-5 left-0 w-full text-center">
              <div className="relative mx-5 overflow-hidden rounded-lg bg-gradient-to-b from-amber-200 to-orange-300 px-3 py-5">
                <h3 className="text-lg font-bold text-slate-950">
                  {name}
                </h3>
                <p className="text-xs text-gray-900">
                  {profession}
                </p>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};