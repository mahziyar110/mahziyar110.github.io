import workData from "../data/work";

const Projects = () => {
  return (
    <section className="h-dvh snap-start overflow-hidden bg-softGray">
      <div className="container flex h-full flex-col py-6 md:py-10">
        {/* Header */}
        <div className="mt-10 md:mt-32 flex items-center justify-between border-b border-black pb-4 md:pb-6">
          <h2>Latest Works</h2>
          <p className="text-lg text-primary md:text-xl">( 04 )</p>
        </div>

        {/* Gallery */}
        <div className="gallery my-6 min-h-0 flex-1 overflow-y-auto snap-y snap-proximity no-scrollbar">
          <div
            className="
              grid
              grid-cols-1
              xs:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-4
              md:gap-6
            "
          >
            {workData?.map((work, index) => (
              <div
                key={index}
                className="gallery-grid-item group snap-start flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm"
              >
                {/* Image */}
                <div className="relative aspect-video shrink-0 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-fill transition-transform duration-300 group-hover:scale-105"
                  />

                  <a
                    href={work.link}
                    target="_blank"
                    className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 backdrop-blur-sm transition-opacity duration-300 cursor-pointer group-hover:opacity-100"
                  >
                    <div className="rounded-full bg-primary p-3">
                      <svg width="28" height="28" viewBox="0 0 65 64" fill="none">
                        <rect width="64" height="64" rx="32" fill="#FE4300" />
                        <path
                          d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between p-2 sm:p-4">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h5 className="line-clamp-1">{work.title}</h5>

                      <img src="/images/icon/right-arrow-icon.svg" alt="arrow" className="h-5 w-5 shrink-0" />
                    </div>

                    <p className="mt-2 text-sm md:text-base">{work.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
