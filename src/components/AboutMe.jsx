import aboutMeData from "../data/aboutMe";

const AboutMe = () => {
  return (
    <section className="h-screen snap-start overflow-hidden bg-softGray">
      <div className="relative flex h-full items-center">
        {/* Background */}
        <div className="no-print absolute inset-x-0 top-0 px-5 sm:px-8">
          <img src="/images/home/about-me/resume-bg-img.svg" alt="resume-bg-img" className="w-full opacity-40" />
        </div>

        <div className="relative z-10 container flex h-full flex-col justify-center">
          {/* Heading */}
          <div className="mt-10 lg:mt-32 pb-4 md:pb-7 flex items-center justify-between border-b border-black">
            <h2>About Me</h2>
            <p className="text-lg text-primary md:text-xl">( 01 )</p>
          </div>

          {/* Content */}
          <div className="flex flex-1 items-center my-6 md:my-10 overflow-y-auto no-scrollbar">
            <div className="flex w-full flex-col items-center gap-8 md:flex-row lg:gap-14">
              {/* Image */}
              <div className="no-print hidden md:flex md:w-1/4 lg:w-1/3 justify-center">
                <img
                  src="/images/home/about-me/about-banner-img.svg"
                  alt="about-banner"
                  className="max-h-[55vh] w-auto object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex w-full flex-1 flex-col justify-center gap-4 xs:gap-6 sm:gap-10">
                <p className="text-left text-sm md:text-base whitespace-pre-line">{aboutMeData.summary}</p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 xs:gap-4 border-b border-mistGray py-2 sm:py-8">
                  {aboutMeData.highlights.map((item) => (
                    <div key={item.label} className="text-center lg:text-left">
                      <h4 className="hidden sm:block">{item.label}</h4>
                      <h5 className="sm:hidden">{item.label}</h5>

                      <p className="mt-1 text-sm text-black md:text-lg">{item.data}</p>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                <div className="flex flex-row items-center justify-center gap-4 ">
                  <div className="flex items-center gap-3">
                    <img src="/images/icon/lang-icon.svg" alt="lang-icon" className="h-6 w-6 md:h-8 md:w-8" />

                    <p className="text-base text-black md:text-lg">Languages</p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                    {aboutMeData.languages.map((lang) => (
                      <span key={lang} className="rounded-full bg-white px-4 py-2 text-sm md:px-5 md:text-base">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
