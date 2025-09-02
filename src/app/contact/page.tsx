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
  return <Contact />;
}
