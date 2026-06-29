import experienceData from "../data/experience";

const Experience = () => {
  return (
    <section className="h-screen snap-start overflow-hidden">
      <div className="container flex h-full flex-col py-6 md:py-10">
        {/* Header */}
        <div className="mt-10 md:mt-32 flex items-center justify-between border-b border-black pb-4 md:pb-6">
          <h2>Experience</h2>
          <p className="text-lg text-primary md:text-xl">( 02 )</p>
        </div>

        {/* Scrollable Content */}
        <div className="my-6 flex-1 overflow-y-scroll no-scrollbar">
          <div className="space-y-6 md:space-y-8">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative grid grid-cols-1 gap-4 md:grid-cols-[160px_180px_1fr] md:gap-6">
                {/* Year & Title */}
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-black md:text-2xl">{exp.year}</h3>

                  <h4 className="text-lg font-medium">{exp.title}</h4>
                </div>

                {/* Timeline */}
                <div className="relative pl-6">
                  {index < experienceData.length - 1 && (
                    <div className="absolute left-1.5 top-4 bottom-0 w-px bg-softGray" />
                  )}

                  <div
                    className={`absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border bg-white ${
                      index === 0 ? "border-primary" : "border-black"
                    }`}
                  >
                    {index === 0 && <div className="h-1.5 w-1.5 rounded-full bg-primary" />}
                  </div>

                  <span className="block text-base font-medium text-black md:text-lg">{exp.company}</span>

                  <p className="text-sm md:text-base">{exp.type}</p>
                </div>

                {/* Description */}
                <div>
                  <p className="whitespace-pre-line text-sm sm:text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
