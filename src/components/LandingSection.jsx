import contactData from "../data/contact";

const LandingSection = () => {
  const handleDownloadPDF = () => {
    window.open(
      "https://drive.google.com/file/d/1mmBvMSserUXAzxOmc_OFfgFsx91XcNwn/view",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="flex h-screen snap-start flex-col overflow-hidden">
      {/*Header*/}
      <header className="navbar w-full">
        <div className="container">
          <nav className="py-3 md:py-7">
            <div className="flex items-center gap-4 md:gap-8">
              <div>
                <a href="/">
                  <img src="/images/logo/logo.svg" alt="logo" className="w-10 h-10 md:w-20 md:h-20" />
                </a>
              </div>

              <button
                onClick={handleDownloadPDF}
                className="group relative w-fit cursor-pointer overflow-hidden rounded-full border border-primary px-2 xs:px-4 py-2 md:px-7 md:py-5"
              >
                <span className="relative z-10 text-sm md:text-xl font-medium text-black transition-colors duration-300 group-hover:text-white">
                  Download PDF Resume
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/*Main Content*/}
      <div className="flex min-h-0 flex-1">
        <div className="flex h-full w-full items-center overflow-hidden">
          <div className="container flex h-full items-center">
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-6 md:flex-row md:gap-10">
              {/* Left Content */}
              <div className="flex w-full flex-col items-start gap-4 md:flex-1 md:gap-7">
                <div>
                  <div className="flex flex-wrap items-center justify-start gap-2md:gap-4">
                    <h2>Hey</h2>
                    <div className="wave">
                      <img
                        src="/images/home/banner/wave-icon.svg"
                        alt="wave-icon"
                        className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 xl:h-16 xl:w-16"
                      />
                    </div>
                  </div>
                  <h1>I'm {contactData.name}</h1>

                  <h2>{contactData.designation}</h2>
                </div>

                <p className="mx-0 max-w-lg text-sm font-normal text-secondary xs:text-base xl:max-w-xl">
                  {contactData.summary}
                </p>
              </div>

              {/* Desktop Image */}
              <div className="hidden flex-1 justify-end lg:flex">
                <img
                  src="/images/home/banner/banner.png"
                  alt="banner-img"
                  className="max-h-full w-auto object-contain"
                />
              </div>

              {/* Mobile Image */}
              <img
                src="/images/home/banner/banner.png"
                alt="banner-img"
                className="block w-[50%] max-w-75 mx-auto lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {/*Contact Bar*/}
      <div className="pt-4">
        <div className="border-t border-softGray">
          <div className="container">
            <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row md:py-7">
              {/* Contact Items */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 md:justify-start md:gap-5 lg:gap-11">
                {contactData?.contactItems?.map((item, index) => (
                  <a key={index} href={item.link} className="flex items-center gap-2 text-sm lg:gap-4 md:text-base">
                    <img src={item.icon} alt={item.type} width={24} height={24} className="min-h-6 min-w-6" />

                    <h6 className="text-sm hover:text-primary md:text-base xl:text-xl">{item.label}</h6>
                  </a>
                ))}
              </div>

              {/* Social Items */}
              <div className="flex items-center justify-center gap-4 md:justify-end md:gap-2.5">
                {contactData?.socialItems?.map((item, index) => (
                  <a key={index} href={item.link} target="_blank">
                    <img
                      src={item.icon}
                      alt={item.platform}
                      width={30}
                      height={30}
                      className="hover:opacity-80 hover:scale-120 transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
