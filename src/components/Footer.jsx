import contactData from "../data/contact";

const Footer = () => {
  const scrollToTop = () => {
    document.querySelector("main")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="snap-end flex items-center justify-center py-6 sm:py-14">
      <div className="container">
        <div className="flex flex-col items-center gap-2 sm:gap-4 sm:items-start">
          <div className="relative flex w-full items-center">
            <div className="h-px grow bg-softGray" />

            <div className="mx-4">
              <a href="/">
                <img src="/images/logo/logo.svg" alt="logo" className="w-10 h-10 sm:w-20 sm:h-20" />
              </a>
            </div>

            <div className="h-px grow bg-softGray" />
          </div>

          <p className="flex flex-col items-center xs:block text-secondary">
            <span>
              Copyright © {contactData.fullname} ( {new Date().getFullYear()} )
            </span>
            <span className="hidden xs:inline"> • </span>
            <span onClick={() => scrollToTop()} className="text-primary hover:underline cursor-pointer">
              Go to top
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
