import React from "react";

function Details({ position, company, time, address, work }) {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="h3 capitalize">
          {position}&nbsp;
          <span className="text-blue capitalize">@{company}</span>
        </h3>
        <span className="capitalize font-medium text-secondary">
          {time} | {address}
        </span>
        <p className="text-paragraph">{work}</p>
      </div>
    </li>
  );
}

function ExperienceSection() {
  return (
    <section className="h-full" id="experience">
      <div className="container mx-auto h-full ">
        <div className="lg:pt-8 lg:pb-12">
          <h2 className="h2 font-bold text-secondary-75 mb-6 w-full text-center">
            Experience
          </h2>
          <div className="w-[85%] mx-auto relative">
            {/* Line */}
            <div className="absolute left-8 top-0 w-[4px] h-full bg-secondary origin-top"></div>
            {/* Details */}
            <ul className="w-full flex flex-col items-start justify-between ml-4">
              <Details
                position="Software Engineer"
                company="Google"
                time="2022-Present"
                address="Mountain View, CA"
                work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
              />
              <Details
                position="Software Engineer"
                company="Google"
                time="2022-Present"
                address="Mountain View, CA"
                work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
              />
              <Details
                position="Software Engineer"
                company="Google"
                time="2022-Present"
                address="Mountain View, CA"
                work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
