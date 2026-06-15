import type { Metadata } from "next";
import { FaqPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about AI deployment, self-hosted infrastructure, and working with TANGISON.",
  alternates: { canonical: "/faq" },
  openGraph: { url: "https://tangison.com/faq" },
};

const faqItems = [
  {
    question: "What is applied AI?",
    answer:
      "Applied AI is the practice of taking AI research and technology and deploying it to solve specific, real-world problems. Unlike pure AI research, which focuses on advancing the state of the art, applied AI is measured by whether the system works reliably for the people using it. It involves the full lifecycle: understanding the problem, selecting or building the right approach, deploying it in production, and iterating based on real performance data.",
  },
  {
    question: "Why self-host AI infrastructure?",
    answer:
      "Self-hosting AI infrastructure gives you control over your data, your costs, and your uptime. When you send data to cloud AI services, you are trusting a third party to handle it according to your policies and local regulations. Self-hosted infrastructure keeps your data on your servers, under your direct control. It also eliminates variable cloud pricing, works when internet connectivity is unreliable, and avoids vendor lock-in.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across industries where AI can create measurable operational value. This includes financial services, mining, agriculture, logistics, healthcare, and the public sector. Our focus is on organizations operating in African markets, where infrastructure constraints and data sovereignty requirements make the standard cloud-first approach to AI less effective.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation timelines depend on the complexity of the problem and the readiness of your existing infrastructure. A focused first project — solving a specific, well-defined problem — can be delivered in 4 to 8 weeks. More complex deployments that involve infrastructure setup, data preparation, and organizational change management can take 3 to 6 months. We provide honest timelines based on your actual constraints, not industry averages.",
  },
  {
    question: "What is offline-first AI?",
    answer:
      "Offline-first AI is an architecture pattern where AI systems are designed to remain functional when internet connectivity is unavailable. Instead of assuming a persistent connection to a cloud API, offline-first systems run models locally, store data on-device or on local servers, and synchronize with central systems when connectivity returns. This approach is essential for organizations operating in environments where internet access is intermittent or unreliable.",
  },
  {
    question: "Do you work with organizations outside Namibia?",
    answer:
      "Yes. While we are based in Namibia and have deep expertise in the Southern African market, we work with organizations across the continent and beyond. The challenges we specialize in — unreliable connectivity, data sovereignty requirements, constrained infrastructure — are common across many African and developing markets. We deliver remotely and can deploy on-site when needed.",
  },
  {
    question: "What does an AI project cost?",
    answer:
      "Costs vary significantly based on scope, but we believe in transparency. A focused proof-of-concept project typically starts in the range of NAD 150,000 to 300,000. Production deployments depend on infrastructure requirements, data preparation needs, and ongoing support. We provide detailed estimates after understanding your specific requirements, and we structure engagements so you can make informed decisions at each phase.",
  },
  {
    question: "How do you handle data privacy and security?",
    answer:
      "Data privacy and security are foundational to how we build systems. We design for data minimization, encrypt data in transit and at rest, and follow the principle of least privilege for access control. When we self-host infrastructure, your data stays on your servers under your control. We comply with Namibia's data protection framework and can accommodate the regulatory requirements of other jurisdictions.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={generateBreadcrumb("/faq")} />
      <FaqPage items={faqItems} />
    </>
  );
}
