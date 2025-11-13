import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Me – Faris Andika Putra",
  description: "Get in touch with me for collaboration, projects, or freelance work.",
  openGraph: {
    title: "Contact Me – Faris Andika Putra",
    description: "Get in touch with me for collaboration, projects, or freelance work.",
    url: "https://farisandika.vercel.app/contact",
    images: [
      {
        url: "/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Contact Faris Andika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me – Faris Andika Putra",
    description: "Get in touch with me for collaboration, projects, or freelance work.",
    images: ["/contact-og.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <h3 className="text-2xl font-bold mb-4 mt-12 text-blue-700 text-center">Find Me on Google Maps</h3>
        <div className="w-full h-72 rounded-xl overflow-hidden shadow-lg border bg-gray-100 flex items-center justify-center">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.71011644583623!2d106.81464117149359!3d-6.6018733668957585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5003f5ed42f%3A0x7cac6703174c7cc2!2sKosbaw!5e0!3m2!1sid!2sid!4v1763048546792!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 288 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <noscript>
            <div className="text-center text-gray-500 text-sm p-4">Google Maps could not be loaded. Please check your browser settings or Content Security Policy.</div>
          </noscript>
        </div>
      </div>
    </>
  );
}
