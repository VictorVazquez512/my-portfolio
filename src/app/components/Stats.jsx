"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Years of Experience",
  },
  {
    num: 12,
    text: "Projects Completed",
  },
  {
    num: 12,
    text: "Technologies",
  },
  {
    num: 12,
    text: "Code Commits",
  },
];

function Stats() {
  return (
    <section className="pt-4 pb-12 lg:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
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
