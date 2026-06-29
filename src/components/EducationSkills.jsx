import educationData from "../data/education";

const EducationSkills = () => {
  return (
    <section className="h-screen snap-start overflow-hidden">
      <div className="container relative flex h-full flex-col py-6 md:py-10">
        {/* Background Decoration */}
        <img
          src="/images/home/education-skill/edu-skill-vector.svg"
          alt=""
          className="no-print absolute left-0 top-0 hidden -translate-y-1/2 opacity-40 lg:block"
        />

        {/* Heading */}
        <div className="mt-10 lg:mt-32 relative z-10 flex items-center justify-between border-b border-black pb-4 md:pb-6">
          <h2>Education & Skills</h2>

          <p className="text-lg text-primary md:text-xl">( 03 )</p>
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10 my-6 flex-1 overflow-y-auto pr-2 no-scrollbar">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-12">
            {/* Education */}
            <div className="w-full lg:max-w-md">
              <div className="space-y-2 sm:space-y-6">
                {educationData?.education?.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-2 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-black bg-white">
                      <div className="h-1.5 w-1.5 rounded-full bg-black" />
                    </div>

                    <div>
                      <h5>{item.title}</h5>

                      <p className="mt-1 whitespace-pre-line">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="flex-1">
              <div className="cards grid grid-cols-3 gap-4 sm:grid-cols-5">
                {educationData?.skills?.map((skill, index) => (
                  <div
                    key={index}
                    className="card flex flex-col items-center rounded-lg border border-softGray p-4 text-center"
                  >
                    <img src={skill.icon} alt={skill.name} className="h-12 w-12 lg:h-16 lg:w-16" />

                    <p className="mt-3 text-black">{skill.name}</p>

                    <div className="mt-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-2 rounded-full ${i < skill.rating ? "bg-primary" : "bg-gray"}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
