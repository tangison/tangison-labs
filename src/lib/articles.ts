export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  pillar: string;
  readTime: string;
  metaDescription: string;
  lede: string;
  sections: ArticleSection[];
  pullQuote?: string;
  tags: string[];
  publishedDate: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "What is an Applied AI Laboratory?",
    slug: "what-is-an-applied-ai-laboratory",
    pillar: "Business",
    readTime: "8 min",
    metaDescription:
      "Why research, building, and deployment belong together. Understanding the laboratory model for AI companies and what makes it different from traditional consulting.",
    lede: "Most AI companies fall into one of two camps: research labs that publish papers, or consultancies that implement other people's tools. An applied AI laboratory does both — and the gap between them is where the actual value lives.",
    sections: [
      {
        heading: "The Problem with Separation",
        body: "When research sits in one organization and implementation in another, context gets lost. A research paper might demonstrate that a model works under controlled conditions, but the conditions African organizations operate in are anything but controlled. Intermittent connectivity, limited compute budgets, and domain-specific data distributions mean that a model's published benchmark numbers tell you almost nothing about how it will perform in the field.\n\nThis separation also creates a feedback gap. Researchers never see the constraints that practitioners face, and practitioners never contribute the edge cases and failure modes back to the research process. The result is a body of AI research that is increasingly disconnected from the conditions under which most of the world's organizations actually operate.",
      },
      {
        heading: "The Laboratory Model",
        body: "An applied AI laboratory brings research, engineering, and deployment into a single workflow. Researchers and engineers work on the same teams, share the same constraints, and evaluate success by the same metrics: does the system work reliably for the people using it?\n\nThis model borrows from how physical sciences have always operated. A chemistry lab doesn't just theorize about molecular interactions — it tests them, refines them, and scales them into processes that produce real materials. Applied AI works the same way: you study a problem, build a system to address it, deploy that system, and measure its performance under real conditions.\n\nThe feedback loop is tight. When a deployed model produces unexpected outputs, the researcher who designed it can examine the inputs and adjust the approach within days rather than quarters. When a new technique emerges from the research community, the engineering team can prototype and test it against real workloads immediately.",
      },
      {
        heading: "Why It Matters for Africa",
        body: "African markets have specific constraints that make the separated model particularly ineffective. Infrastructure is variable. Data availability is different. Regulatory environments are evolving. A consultancy importing a model trained on North American data and deployed on AWS will miss these realities at every step.\n\nAn applied laboratory that builds and deploys in the same context it researches can account for these factors from the start. Self-hosted infrastructure means the system works within actual bandwidth constraints. Local data means the model understands actual user behavior. In-house deployment means the team can respond to actual failure modes.\n\nThis is not about being locally focused for its own sake. It is about building systems that work. And systems that work require the people who design them to be close enough to the people who use them to see what actually happens when the system meets reality.",
      },
    ],
    pullQuote:
      "The gap between research and deployment is where value lives — and where most AI companies fail.",
    tags: ["Applied AI", "AI Strategy", "Laboratory Model"],
    publishedDate: "2025-03-15",
  },
  {
    id: "2",
    title: "Why AI in Africa Starts with Practical Problems",
    slug: "ai-in-africa-starts-with-practical-problems",
    pillar: "AI in Africa",
    readTime: "6 min",
    metaDescription:
      "The case for building AI that solves real problems instead of chasing trends. Why practical problem-solving should drive AI adoption across African organizations.",
    lede: "The most effective AI projects in Africa don't start with a model. They start with a problem that someone has been trying to solve for years and hasn't been able to — usually because the problem requires processing more information than humans can handle manually, or because the existing solutions are too expensive or too rigid.",
    sections: [
      {
        heading: "The Trend-First Trap",
        body: "When organizations decide to \"adopt AI,\" they often start by choosing a technology — large language models, computer vision, predictive analytics — and then go looking for problems to apply it to. This approach works in markets where the infrastructure is reliable, the data is abundant, and the use cases are well-documented. In African markets, it rarely works at all.\n\nThe reason is straightforward: the gap between what a model can do in a benchmark and what it can do in production widens as conditions diverge from the training environment. In most African organizations, that divergence is significant. Data is sparse or inconsistent. Connectivity is unreliable. Users may interact with systems in ways that the original designers did not anticipate.\n\nStarting with the technology means you inherit assumptions that may not hold. Starting with the problem means you can choose — or build — the technology that actually fits.",
      },
      {
        heading: "What Practical Problem-Solving Looks Like",
        body: "A logistics company in Nairobi needs to route delivery vehicles more efficiently. The standard approach would be to implement an off-the-shelf route optimization API. But that API assumes real-time traffic data, which isn't available for most of the city's road network. It assumes consistent address formatting, which doesn't exist. It assumes that drivers have smartphones with constant connectivity, which isn't guaranteed.\n\nA practical approach starts by asking: what information do we actually have? What decisions are dispatchers making today, and what would help them make those decisions faster? The solution might involve a simpler model that runs on feature phones, or a decision-support tool that works offline and syncs when connectivity returns.\n\nThe result may not be as technically sophisticated as a real-time routing API, but it will actually work. And a system that works produces data that can be used to build a better system. A system that doesn't work produces nothing.",
      },
      {
        heading: "Building from the Ground Up",
        body: "Practical problem-solving doesn't mean abandoning ambition. It means earning the right to build complex systems by first proving that simpler ones deliver value. Every successful deployment generates data, builds institutional knowledge, and creates trust — all of which are prerequisites for more ambitious projects.\n\nThe organizations that will lead AI adoption in Africa are not the ones with the biggest technology budgets. They are the ones that identify specific operational bottlenecks, apply targeted solutions, and iterate based on real results. This is a slower path than importing a turnkey platform, but it is a more reliable one.\n\nThe best AI strategy for an African organization today is to find one problem that matters, solve it well, and let that success inform the next one.",
      },
    ],
    pullQuote:
      "A system that works produces data that can be used to build a better system. A system that doesn't work produces nothing.",
    tags: ["AI in Africa", "AI Strategy", "Practical AI"],
    publishedDate: "2025-04-02",
  },
  {
    id: "3",
    title: "How We Built Our AI Assistant",
    slug: "how-we-built-our-ai-assistant",
    pillar: "Technical",
    readTime: "12 min",
    metaDescription:
      "A technical walkthrough of the Tangison AI widget. How we designed, built, and deployed a self-hosted AI assistant with the Hermes Agent framework.",
    lede: "We wanted an AI assistant on our own website that could answer questions about our work, services, and products — without sending visitor data to third-party services. Here is how we built it, what we learned, and what we would change next time.",
    sections: [
      {
        heading: "Requirements and Constraints",
        body: "The assistant needed to do three things well: answer questions about TANGISON's services and products, direct visitors to the right pages, and acknowledge when it doesn't know something. It also needed to run on infrastructure we control, respond within a few seconds, and work on mobile connections with high latency.\n\nWe ruled out embedding a third-party chatbot early. The data flows through external servers, the customization is limited, and the pricing scales poorly when you want to maintain context across conversations. More importantly, we build AI infrastructure for a living — using someone else's hosted chatbot felt inconsistent with the work we do.\n\nThe architecture needed to be simple enough to maintain with a small team, but flexible enough to improve over time as we learn how visitors actually use it.",
      },
      {
        heading: "Architecture Overview",
        body: "The assistant runs on our own infrastructure using the Hermes Agent framework, which we developed internally for building production AI agents. When a visitor sends a message, it flows through three stages: retrieval, reasoning, and response.\n\nIn the retrieval stage, the system pulls relevant context from a knowledge base that contains our service descriptions, product documentation, and published articles. We use semantic search over embeddings stored in a vector database that runs alongside our application server.\n\nThe reasoning stage passes the retrieved context and the conversation history to a language model. We currently use a hosted model through OpenRouter, which gives us access to capable models without maintaining GPU infrastructure ourselves. The system prompt constrains the model to answer based on the retrieved context and to say when it doesn't have sufficient information.\n\nThe response stage formats the output and delivers it to the frontend widget. We render a small amount of markdown for structure, and include links to relevant pages when the context suggests them.\n\nThe entire round-trip — from user message to displayed response — typically completes in 2-4 seconds on a standard connection.",
      },
      {
        heading: "What We Learned",
        body: "The retrieval stage matters more than the model. Early on, we spent time tweaking the system prompt and evaluating different models. But the biggest improvements in answer quality came from improving the knowledge base: adding more specific content, removing redundant entries, and structuring documents so that semantic search returns the right passages.\n\nSaying \"I don't know\" is a feature, not a limitation. We deliberately tuned the assistant to acknowledge uncertainty rather than guess. Visitors trust it more when it admits the limits of its knowledge, and it reduces the risk of providing incorrect information about our services.\n\nMobile latency is the real performance constraint. Server-side response time is important, but on mobile connections in Namibia, the network round-trip adds significant overhead. We mitigated this by keeping the payload sizes small and using streaming responses so the first token appears quickly.\n\nAnalytics drove iteration. We log anonymized conversation topics (not content) to understand what visitors ask about. This data directly informs which knowledge base articles we write or improve next.",
      },
      {
        heading: "What We Would Change",
        body: "We would start with the knowledge base, not the model. Our initial approach was to get a working prototype with a general system prompt and then refine the knowledge base. In retrospect, investing more in the knowledge base upfront would have produced better results faster.\n\nWe would build the analytics layer sooner. Understanding what visitors actually ask — not what we assumed they would ask — changed our priorities. If we had started with basic topic logging, we could have focused the knowledge base on the right content from the beginning.\n\nWe would make the widget more accessible from the start. The initial design worked well on desktop but had interaction issues on smaller screens. A mobile-first design for the widget would have saved a round of revisions.",
      },
    ],
    pullQuote:
      "The retrieval stage matters more than the model. The biggest improvements came from improving the knowledge base, not tweaking the prompt.",
    tags: ["Technical", "AI Assistants", "Hermes Agent", "Self-Hosted"],
    publishedDate: "2025-05-10",
  },
  {
    id: "4",
    title: "Self-Hosted AI: Why Your Infrastructure Should Stay on Your Servers",
    slug: "self-hosted-ai-infrastructure",
    pillar: "Infrastructure",
    readTime: "7 min",
    metaDescription:
      "The case against cloud dependency for AI infrastructure. Data sovereignty, cost control, and reliability considerations for organizations self-hosting AI systems.",
    lede: "Cloud AI services are easy to start using and difficult to leave. The convenience of managed APIs masks long-term costs, data dependencies, and operational risks that become visible only after you are deeply committed to the platform.",
    sections: [
      {
        heading: "The Real Cost of Cloud AI",
        body: "Cloud AI pricing looks straightforward on the surface: pay per API call, scale as needed. But the total cost of cloud AI includes more than the per-request price. There is the cost of data egress when your application needs to move data between the cloud provider and your own systems. There is the cost of vendor lock-in when your application logic becomes tightly coupled to a specific API's behavior and quirks. And there is the cost of compliance when data residency requirements force you to manage where your data is processed and stored.\n\nFor organizations processing large volumes of data — or for whom AI is a core capability rather than an experiment — these ancillary costs often exceed the per-request costs. The pricing model is designed for getting started, not for scaling sustainably.\n\nSelf-hosted infrastructure has higher upfront costs but more predictable long-term costs. You purchase or lease hardware, you pay for power and cooling, and you invest in the engineering talent to maintain it. These costs scale more slowly than cloud costs as usage grows, and they give you control over the total expenditure.",
      },
      {
        heading: "Data Sovereignty",
        body: "When you send data to a cloud AI service, you are trusting that service to handle it according to your policies and your local regulations. For many organizations, this is acceptable for non-sensitive data. But for organizations handling personal data, financial records, health information, or government data, the regulatory requirements around data processing and storage are strict and becoming stricter.\n\nNamibia's data protection framework, like those of many African countries, places requirements on how personal data is processed and where it may be transferred. Using a cloud AI service based in another jurisdiction may require additional legal agreements, impact assessments, and ongoing compliance monitoring.\n\nSelf-hosted AI keeps your data on your infrastructure, under your direct control. You know exactly where it is, who has access to it, and how it is being processed. This simplifies compliance, reduces legal overhead, and gives your clients and stakeholders confidence that their data is handled appropriately.",
      },
      {
        heading: "Reliability on Your Terms",
        body: "Cloud AI services have impressive uptime records — until they don't. When a major cloud provider experiences an outage, every service dependent on it goes down simultaneously. There is nothing you can do except wait. For organizations that need their AI systems to be available during specific business hours or in specific conditions, this lack of control is a meaningful risk.\n\nSelf-hosted infrastructure gives you control over your availability. You decide the redundancy level. You decide the failover strategy. You decide when to apply updates and how to handle maintenance windows. If your internet connection goes down, your internal AI systems can keep running. If a component fails, you can replace it without waiting for a cloud provider's incident response team.\n\nThis does not mean self-hosted infrastructure is inherently more reliable than cloud services. It means you have the ability to design reliability for your specific requirements — which is particularly valuable in environments where connectivity itself is the primary reliability concern.",
      },
    ],
    pullQuote:
      "Cloud AI pricing is designed for getting started, not for scaling sustainably. Self-hosted infrastructure has higher upfront costs but more predictable long-term costs.",
    tags: ["Infrastructure", "Self-Hosted", "Data Sovereignty", "AI Strategy"],
    publishedDate: "2025-05-28",
  },
  {
    id: "5",
    title: "Offline-First AI: Building Systems That Work Without Internet",
    slug: "offline-first-ai-systems",
    pillar: "Technical",
    readTime: "10 min",
    metaDescription:
      "How we design AI systems that stay operational when connectivity drops. Architecture patterns and lessons learned from building offline-first AI for African organizations.",
    lede: "In many parts of Africa, internet connectivity is not a given — it is a condition that comes and goes. AI systems that assume constant connectivity will fail in these environments, and they will fail at the moments when they are needed most.",
    sections: [
      {
        heading: "Why Offline-First Matters",
        body: "The standard architecture for AI applications assumes a persistent connection to a cloud API. The user sends a request, the server processes it with a large model, and the response is returned. This architecture works well in data centers and urban offices with fiber connections. It fails everywhere else.\n\nIn Windhoek, power outages can take down internet infrastructure for hours. In rural areas, connectivity may be limited to intermittent mobile signals. Even in well-connected offices, the cost of bandwidth for continuous API calls can be prohibitive when you are processing large volumes of data.\n\nOffline-first design does not mean building systems that never connect to the internet. It means building systems that remain useful when the connection is unavailable, and that use the connection strategically when it is available. The system should degrade gracefully, not catastrophically.",
      },
      {
        heading: "Architecture Patterns",
        body: "We use three primary patterns for offline-first AI systems: local inference, sync-based architecture, and progressive enhancement.\n\nLocal inference runs smaller models directly on the user's device or on a local server. Modern small language models can handle many common tasks — classification, extraction, summarization — without needing a cloud API. The trade-off is capability: local models are less capable than the largest cloud models, but they are available when you need them.\n\nSync-based architecture stores data locally and synchronizes with a central server when connectivity is available. The AI processing happens on the local data, and the results are synced upstream when possible. This pattern works well for data collection and analysis workflows where real-time cloud processing is not required.\n\nProgressive enhancement starts with a local, simpler capability and adds more sophisticated cloud-based processing when connectivity allows. A document analysis tool might perform basic classification locally and then send the document for more detailed cloud analysis when the connection returns. The user gets an immediate result and a better result later.",
      },
      {
        heading: "Lessons from Deployment",
        body: "The biggest lesson is that offline-first changes how you design every component, not just the network layer. Your database needs to handle local writes and conflict resolution. Your UI needs to communicate sync status clearly. Your testing needs to simulate connectivity interruptions at every stage of a workflow.\n\nModel size constraints are real but manageable. A 3-billion parameter model running on a modern laptop can handle a surprising range of tasks. The key is matching the model to the actual requirements of the task, not to the theoretical capability you might someday need.\n\nUser expectations need to be set carefully. Offline-first AI does not behave the same as cloud AI. Responses may be less sophisticated. Features may be temporarily unavailable. The system needs to communicate its current state clearly so that users understand what they can and cannot do at any given moment.\n\nThe organizations that benefit most from offline-first AI are the ones that have already adapted their workflows to intermittent connectivity. They understand the pattern of working with what you have and syncing when you can. Adding AI to that pattern is a natural extension, not a disruption.",
      },
    ],
    pullQuote:
      "Offline-first design means building systems that remain useful when the connection is unavailable, and that use the connection strategically when it is available.",
    tags: ["Technical", "Offline-First", "AI Architecture", "Africa"],
    publishedDate: "2025-06-14",
  },
  {
    id: "6",
    title: "AI Maturity in African Organizations: Where to Start",
    slug: "ai-maturity-african-organizations",
    pillar: "AI in Africa",
    readTime: "9 min",
    metaDescription:
      "A practical guide to assessing your organization's AI readiness and taking the first meaningful steps. For African organizations beginning their AI journey.",
    lede: "Most AI maturity frameworks were designed for organizations that already have mature data infrastructure, dedicated technology teams, and budgets for experimentation. If you are an African organization that does not have these things, the frameworks tell you what you are missing but not what to do about it.",
    sections: [
      {
        heading: "Assessing Where You Actually Are",
        body: "AI maturity is not a single score. It is a set of capabilities across several dimensions: data availability, technical infrastructure, organizational skills, and process readiness. An organization might be mature in data collection but immature in data management, or skilled in technology but unready to integrate AI into existing workflows.\n\nA more useful assessment asks specific questions: Do you have digital records for the processes you want to improve? Do those records have consistent structure? Does someone in your organization have the skills to work with data in spreadsheets or basic databases? Do you have a clear understanding of what decisions AI would support?\n\nThe answers to these questions determine what kind of AI project makes sense for your current state. An organization with structured data and spreadsheet skills can start with simple automation. An organization with unstructured data and no technical skills needs to start with data organization. Neither starting point is wrong — they just lead to different first projects.",
      },
      {
        heading: "The First Project",
        body: "Your first AI project should be small enough to complete in weeks, specific enough to measure, and important enough that success matters to someone with authority. It should not require new infrastructure, new hires, or new vendors. It should use the data you already have and solve a problem that people are already trying to solve manually.\n\nExamples of good first projects: automatically categorizing incoming support requests by topic, flagging invoices that match known fraud patterns, or generating weekly summary reports from transaction data. These are bounded problems with measurable outcomes, and they can be solved with relatively simple models.\n\nThe purpose of the first project is not to transform the organization. It is to create a reference point: a working system that demonstrates what AI can do in your specific context, with your specific data, under your specific constraints. This reference point becomes the basis for deciding what to do next.",
      },
      {
        heading: "Building from Success",
        body: "A successful first project creates three things that you did not have before: a working AI system, a set of institutional lessons, and organizational confidence.\n\nThe working system produces data about its own performance — accuracy, edge cases, failure modes — that informs the next iteration. The institutional lessons — what worked, what didn't, what took longer than expected — inform the planning of the next project. The organizational confidence — the experience of seeing AI work on a real problem — creates the buy-in needed to invest in more ambitious projects.\n\nThis is why the first project matters so much. If it fails, the organization concludes that AI is not ready for them. If it succeeds, the organization begins to see AI as a tool they can use rather than a technology they must adopt. The difference between these two outcomes is usually not the technology — it is the problem selection and the project scope.\n\nThe path from first project to AI maturity is not linear. Each project builds on the capabilities and confidence established by the previous one. Organizations that try to skip steps — buying an enterprise AI platform before they have clean data, or hiring a data science team before they have problems to solve — tend to spend money without producing results. Organizations that earn each step tend to build durable capabilities.",
      },
    ],
    pullQuote:
      "Your first AI project should be small enough to complete in weeks, specific enough to measure, and important enough that success matters to someone with authority.",
    tags: ["AI in Africa", "AI Strategy", "AI Maturity", "Organizations"],
    publishedDate: "2025-06-25",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}
