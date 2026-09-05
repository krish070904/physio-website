import Image from "next/image";

const gallery = [
  {
    src: "/Gallery/image1.png",
    label: "Manual Therapy",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/Gallery/image2.png",
    label: "Therapeutic Exercise",
    className: "",
  },
  {
    src: "/Gallery/image3.png",
    label: "Gait Rehabilitation",
    className: "",
  },
  {
    src: "/Gallery/image4.png",
    label: "Before & After",
    className: "",
  },
  {
    src: "/Gallery/image5.png",
    label: "Diagnostic Imaging",
    className: "",
  },
  {
    src: "/Gallery/image6.png",
    label: "Pain Management",
    className: "",
  },
  {
    src: "/Gallery/image7.png",
    label: "Functional Rehabilitation",
    className: "",
  },
  {
    src: "/Gallery/image8.png",
    label: "Treatment Progress",
    className: "",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#f8f6f1] py-20 sm:py-24 lg:py-32"
    >
      {/* Soft organic background details */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#dce9e4]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#f1d8ca]/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#df8b64]" />
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#df8b64]">
                OUR GALLERY
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#173b36] sm:text-5xl lg:text-6xl">
              A glimpse into <span className="text-[#df8b64]">Pain Free.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#68716e] sm:text-lg">
              Take a closer look at our clinic, our approach to physiotherapy,
              and the environment where your recovery journey begins.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-[#52776d]">
            <span className="h-2 w-2 rounded-full bg-[#df8b64]" />
            REAL CLINIC · REAL CARE
          </div>
        </div>

        {/* Editorial gallery */}
        <div className="grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[230px] sm:gap-4 md:grid-cols-4 lg:auto-rows-[250px]">
          {gallery.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={`group relative overflow-hidden rounded-[10px] bg-[#e9e5de] text-left shadow-[0_12px_35px_rgba(23,59,54,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(23,59,54,0.15)] ${item.className}`}
              aria-label={`Open ${item.label}`}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                unoptimized
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#173b36]/75 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
\

              {/* Caption */}
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <span className="rounded-full border border-white/30 bg-white/15 px-3 py-2 text-[10px] font-semibold tracking-[0.12em] text-white backdrop-blur-md">
                  {item.label}
                </span>

               
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-5 rounded-[26px] border border-[#173b36]/10 bg-white/70 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#df8b64]">
              COME SEE US
            </p>
            <p className="mt-1 font-serif text-2xl tracking-[-0.02em] text-[#173b36]">
              Your journey to better movement starts here.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=20.2883458,85.858391"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#173b36] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#52776d]"
          >
            Visit Our Clinic
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
