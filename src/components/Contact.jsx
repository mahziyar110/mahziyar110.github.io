import { useState } from "react";
import contactData from "../data/contact";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/mahziyar110@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error("Failed to send message.");
      }

      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          number: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="no-print h-dvh snap-start overflow-hidden">
      <div className="container flex h-full flex-col py-6 md:py-10">
        {/* Header */}
        <div className="mt-10 lg:mt-32 flex items-center justify-between border-b border-black pb-4 md:pb-6">
          <h2>Contact Me</h2>

          <p className="text-lg text-primary md:text-xl">( 05 )</p>
        </div>

        {/* Content */}
        <div className="my-6 min-h-0 flex-1 overflow-y-auto no-scrollbar">
          <div className="flex flex-col justify-between min-h-full gap-4 sm:gap-10">
            {/* Form */}
            {!submitted && (
              <form onSubmit={handleSubmit} className="flex flex-col justify-center">
                <fieldset disabled={isSubmitting} className="space-y-3 sm:space-y-6">
                  <div className="grid grid-cols-1 gap-2 xs:gap-6 sm:grid-cols-2">
                    <div>
                      <label className="label">Name *</label>

                      <input className="input" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div>
                      <label className="label">Phone *</label>

                      <input
                        className="input"
                        type="tel"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Email *</label>

                    <input
                      className="input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="label">Message *</label>

                    <textarea
                      className="input h-16 md:h-24 resize-none"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-fit overflow-hidden rounded-full border border-primary px-5 py-3 md:px-7 md:py-4 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 text-base font-medium text-primary transition-colors group-hover:text-white md:text-lg">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                </fieldset>
              </form>
            )}

            {submitted && (
              <div className="flex items-center gap-3 rounded-lg bg-green-50 p-3">
                <img src="/images/icon/success-icon.svg" alt="success" className="h-6 w-6" />

                <p className="text-sm">Message sent successfully.</p>
              </div>
            )}

            {/* Contact Details */}
            <div className="flex justify-between gap-10">
              <div>
                <h5 className="mb-5">Social</h5>

                <div className="flex flex-wrap gap-4">
                  {contactData?.socialItems?.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      onClick={(e) => e.preventDefault()}
                      className="text-base text-secondary transition-colors hover:text-primary"
                    >
                      {item.platform}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="mb-5">Contact</h5>

                <div className="flex flex-wrap gap-4">
                  {contactData?.contactItems?.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      className="w-fit border-b border-black pb-1 transition-colors hover:border-primary hover:text-primary"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
