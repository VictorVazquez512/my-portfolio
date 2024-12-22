"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of Experience",
    showPlus: true,
  },
  {
    num: 4,
    text: "Projects Completed",
    showPlus: true,
  },
  {
    num: 22,
    text: "Technologies",
    showPlus: false,
  },
];

function Stats() {
  return (
    <section className="pt-4 pb-12 lg:pt-0 xl:pb-0">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex flex-wrap gap-4 xl:gap-36 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center lg:justify-start"
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  suffix={stat.showPlus ? "+" : ""}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className="max-w-[150p] leading-snug text-secondary/80">
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
