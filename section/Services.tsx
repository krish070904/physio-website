import Image from "next/image";

const services = [
  {
    title: "Pain Relief & Management",
    description:
      "Personalized physiotherapy to help reduce back, neck, joint and muscle pain and restore comfortable movement.",
    image: "/service1.png",
  },
  {
    title: "Orthopedic Physiotherapy",
    description:
      "Focused care for bone, joint and muscle conditions to improve strength, mobility and everyday function.",
    image: "/service2.png",
  },
  {
    title: "Post-Surgery Rehabilitation",
    description:
      "Guided rehabilitation designed to rebuild strength, mobility and confidence after surgery.",
    image: "/service3.png",
  },
  {
    title: "Sports Injury Rehabilitation",
    description:
      "Progressive rehabilitation to help you recover from activity-related injuries and return to the things you enjoy.",
    image: "/service4.png",
  },
  {
    title: "Knee Rehabilitation",
    description:
      "Targeted exercises and hands-on care to improve knee strength, stability, flexibility and movement.",
    image: "/service5.png",
  },
  {
    title: "Cupping Therapy",
    description:
      "A complementary therapy option used to support relaxation, muscle comfort and recovery as part of an individualized care plan.",
    image: "/service6.png",
  },
];

export default function Services() {
  return (
    <section
      id="treatments"
      className="relative overflow-hidden bg-[#f8f6f1] py-20 sm:py-24 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-28 top-40 h-72 w-72 rounded-full bg-[#e99a72]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#52776d]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-7 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e99a72]" />
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#df8b64]">
                WHAT WE OFFER
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173b36] sm:text-5xl lg:text-6xl">
              Care that helps you{" "}
              <span className="text-[#df8b64]">move forward.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f6865] sm:text-lg">
              From pain relief to rehabilitation, every session is shaped
              around your movement, recovery and everyday goals.
            </p>
          </div>

          <div className="hidden shrink-0 rounded-full border border-[#173b36]/10 bg-white/70 px-5 py-3 text-xs font-semibold tracking-[0.18em] text-[#52776d] shadow-sm lg:block">
            06 CARE PATHWAYS
          </div>
        </div>

        {/* Services grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[28px] border border-[#173b36]/8 bg-white shadow-[0_12px_40px_rgba(23,59,54,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(23,59,54,0.13)]"
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden sm:h-[270px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#173b36]/35 via-transparent to-transparent opacity-70" />
              </div>

              {/* Content */}
              <div className="relative px-6 pb-7 pt-10 sm:px-7">
                <h3 className="max-w-[290px] font-serif text-[25px] leading-tight tracking-[-0.025em] text-[#173b36]">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[78px] text-[14px] leading-6 text-[#68716e]">
                  {service.description}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#df8b64] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 overflow-hidden rounded-[30px] bg-[#173b36] px-7 py-8 text-white sm:px-10 lg:mt-10 lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-9">
          <div>
            <p className="text-[10px] font-bold tracking-[0.28em] text-[#f0b08d]">
              YOUR RECOVERY, YOUR JOURNEY
            </p>
            <h3 className="mt-2 font-serif text-3xl tracking-[-0.02em] sm:text-4xl">
              Let&apos;s get you moving again.
            </h3>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-[#e99a72] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#df8b64] lg:mt-0"
          >
            Book an Appointment
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}