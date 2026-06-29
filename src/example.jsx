export default function Resume() {
  const experiences = [
    {
      year: "2018",
      role: "Junior UX Designer",
      company: "www.startup.com",
      type: "Fulltime",
      description:
        "Suffered alteration in some form by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      year: "2019",
      role: "Senior UX Designer",
      company: "www.googly.com",
      type: "Remote",
      description:
        "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.",
    },
    {
      year: "2020-2022",
      role: "Team Lead Designer",
      company: "www.company.com",
      type: "Fulltime",
      description:
        "Handful of model sentence structures to generate Lorem Ipsum which looks reasonable.",
    },
    {
      year: "2023+",
      role: "Team Lead Designer",
      company: "www.latest.com",
      type: "Fulltime",
      description:
        "Release of Letraset sheets containing Lorem Ipsum passages and desktop publishing software.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <section className="py-20">
        <h1 className="text-5xl font-bold">I'm Sruthi</h1>
        <h2 className="text-3xl mt-2">UI/UX Designer</h2>

        <p className="mt-6 max-w-xl text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </section>

      {/* About */}
      <section className="py-20 border-t">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">About Me</h2>
          <span>(01)</span>
        </div>

        <p className="text-gray-700">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <div>
            <h3 className="text-3xl font-bold">06</h3>
            <p>Years of experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">165+</h3>
            <p>Happy Clients</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">1800+</h3>
            <p>Projects Completed</p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-semibold mb-3">Languages</h3>

          <div className="flex gap-3 flex-wrap">
            {["English", "Hindi", "Malayalam"].map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 rounded-full border"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 border-t">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Experience</h2>
          <span>(02)</span>
        </div>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={`${exp.year}-${exp.company}`}
              className="grid md:grid-cols-3 gap-6"
            >
              <div>
                <h3 className="font-bold">{exp.year}</h3>
                <p>{exp.role}</p>
              </div>

              <div>
                <p className="font-medium">{exp.company}</p>
                <p className="text-gray-500">{exp.type}</p>
              </div>

              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 border-t">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <span>(05)</span>
        </div>

        <form className="space-y-6 max-w-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border p-3 rounded"
            />

            <input
              type="tel"
              placeholder="Phone"
              className="border p-3 rounded"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded w-full"
          />

          <textarea
            rows={4}
            placeholder="Message"
            className="border p-3 rounded w-full"
          />

          <button
            type="submit"
            className="px-6 py-3 border rounded"
          >
            Send Now
          </button>
        </form>
      </section>
    </div>
  );
}