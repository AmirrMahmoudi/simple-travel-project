import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

interface CapmProps {
  backgroundImage: string;
  subtitle: string;
  title: string;
  peopleJoind: string;
}

const CampSite = ({
  backgroundImage,
  subtitle,
  title,
  peopleJoind,
}: CapmProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="folded" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white"> {title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoind}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="پوتوک تورنو کمپ"
          subtitle="پریگن، پاسوروان"
          peopleJoind="+50 نفر"
        />{" "}
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="کمپ کوهستانی"
          subtitle="جایی در بیابان"
          peopleJoind="+50 نفر"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="xl:max=w=[734px] relative w-full overflow-hidden rounded-3xl bg-green-50 p-8 lg:max-w-[500px] xl:rounded-5xl xl:px-16 xl:py-16">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 text-white">
            <strong>دل تنگی</strong>و راه را بلد نیستی؟
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            با شروع از اضطراب کوهنوردان هنگام بازدید از مکان جدید کوهنوردی،
            احتمال گم شدن بسیار زیاد است. به همین دلیل است که برای کسانی از شما
            که می خواهند ماجراجویی را شروع کنند، اینجا هستیم
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
