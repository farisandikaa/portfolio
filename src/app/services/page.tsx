import Services from "@/components/Services";

export const metadata = {
  title: "services Me – Faris Andika Putra",
  description: "Get in touch with me for collaboration, projects, or freelance work.",
  openGraph: {
    title: "services Me – Faris Andika Putra",
    description: "Get in touch with me for collaboration, projects, or freelance work.",
    url: "https://farisandika.vercel.app/services",
    images: [
      {
        url: "/services-og.png",
        width: 1200,
        height: 630,
        alt: "services Faris Andika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "services Me – Faris Andika Putra",
    description: "Get in touch with me for collaboration, projects, or freelance work.",
    images: ["/services-og.png"],
  },
};

export default function ServicesPage() {
  return <Services />;
}
