export type TopicIcon =
  | "archive"
  | "check-circle"
  | "cloud"
  | "gauge"
  | "layers"
  | "server"
  | "shield"
  | "spark"
  | "terminal";

export type TopicHub = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  summary: string;
  thesis: string;
  body: readonly string[];
  icon: TopicIcon;
  principles: readonly {
    title: string;
    body: string;
    icon: TopicIcon;
  }[];
  articleSlugs: readonly string[];
  projectSlugs: readonly string[];
};

export const topicHubs = [
  {
    slug: "ai-systems",
    name: "AI Systems and Agent Protocols",
    shortName: "AI systems",
    description:
      "Engineering guidance on MCP, agent loops, local models, verification, and the governance boundaries required for production AI systems.",
    summary:
      "MCP, agent loops, local models, and the evidence boundaries that make AI systems inspectable after the demo.",
    thesis:
      "Useful AI systems are controlled by evidence, capability boundaries, and explicit failure handling.",
    body: [
      "The difficult part of AI engineering is not producing one convincing answer. It is making the surrounding system explain which context it selected, which tools it could call, who authorized the action, how the output was checked, and why the loop stopped or retried.",
      "This work connects protocol design to operational control. MCP makes integrations legible, local runtimes change privacy and latency tradeoffs, and flight records make agent behavior reviewable. The common standard is simple: autonomy earns trust through inspectable evidence.",
    ],
    icon: "spark",
    principles: [
      {
        title: "Declare capabilities",
        body: "Tools need explicit schemas, ownership, authorization, and target boundaries before an agent is allowed to call them.",
        icon: "layers",
      },
      {
        title: "Record the loop",
        body: "Context selection, drafts, checks, verifier decisions, retries, and refusals should survive long enough to replay and audit.",
        icon: "archive",
      },
      {
        title: "Separate policy",
        body: "The model can propose an action. Access rules, quotas, approval requirements, and abuse controls belong to code you own.",
        icon: "shield",
      },
    ],
    articleSlugs: [
      "loop-engineering-needs-a-flight-recorder",
      "demos-are-cheap-production-mcp-is-expensive",
      "simulate-customer-outcomes-before-shipping-ai-agents",
      "mcp-the-usb-c-of-ai-integrations",
      "why-local-llms-matter-in-2025",
    ],
    projectSlugs: ["loopwright", "mcp-gateway-core", "mcp-zap-server"],
  },
  {
    slug: "backend-performance",
    name: "Backend Performance and JVM Engineering",
    shortName: "Backend performance",
    description:
      "Benchmarks, JVM architecture, runtime tradeoffs, and reusable service contracts for backend systems operating under production load.",
    summary:
      "JVM, Kotlin, Quarkus, and cross-runtime decisions tested against workloads, fairness controls, and operating constraints.",
    thesis:
      "A benchmark is an argument about a workload, not a universal language ranking.",
    body: [
      "Runtime choices become meaningful only after the workload is defined. Latency budgets, startup behavior, memory pressure, messaging guarantees, concurrency, and deployment topology all change what a throughput number means.",
      "The work here compares runtimes inside inspectable harnesses and pairs code with the operational context needed to challenge a claim. It also treats JVM modernization as an architectural decision, not an excuse for rewrite theater: platform defaults, interoperability, and repeatable service contracts matter as much as the headline result.",
    ],
    icon: "gauge",
    principles: [
      {
        title: "Define the workload",
        body: "Name the request path, bottleneck, success condition, latency target, and excluded work before publishing a number.",
        icon: "terminal",
      },
      {
        title: "Control comparison",
        body: "Warmup, concurrency, runtime flags, payloads, hardware, and downstream dependencies must be comparable enough to inspect.",
        icon: "gauge",
      },
      {
        title: "Ship the context",
        body: "Load automation, metrics, deployment assets, and service defaults turn a benchmark from a screenshot into reusable evidence.",
        icon: "server",
      },
    ],
    articleSlugs: [
      "what-microservice-benchmarks-actually-measure-in-2026",
      "java-strikes-back-benchmarking-quarkus-native-vs-go-for-high-throughput-adtech",
    ],
    projectSlugs: ["rtb-ingress-benchmark", "spring-boot-playground", "mcp-gateway-core"],
  },
  {
    slug: "cloud-delivery",
    name: "Cloud Delivery and Platform Engineering",
    shortName: "Cloud delivery",
    description:
      "Practical cloud delivery guidance covering Kubernetes, release paths, observability, security gates, and maintainable platform defaults.",
    summary:
      "Kubernetes paths, release controls, observability, and platform defaults that keep systems operable after launch day.",
    thesis:
      "Architecture is incomplete until the delivery, observation, and recovery paths are visible.",
    body: [
      "Cloud delivery is not a pile of YAML attached after the application is finished. A credible service contract includes how the artifact is built, released, configured, observed, secured, rolled back, and maintained when dependencies or production assumptions change.",
      "The projects collected here expose those paths through Helm assets, CI gates, security workflows, metrics, runbooks, and explicit platform boundaries. Older tactical tutorials remain part of the archive, but this hub deliberately centers current systems that show an operating model rather than a one-time setup command.",
    ],
    icon: "cloud",
    principles: [
      {
        title: "Make delivery part of design",
        body: "Build, release, deployment, configuration, and rollback decisions should be visible alongside the application architecture.",
        icon: "cloud",
      },
      {
        title: "Keep gates enforceable",
        body: "Security and compatibility checks matter when they can fail, remain enabled through remediation, and leave public evidence.",
        icon: "check-circle",
      },
      {
        title: "Design for operators",
        body: "Metrics, audit events, quotas, runbooks, and failure boundaries are product surfaces for the people keeping a system alive.",
        icon: "server",
      },
    ],
    articleSlugs: [
      "demos-are-cheap-production-mcp-is-expensive",
      "what-microservice-benchmarks-actually-measure-in-2026",
    ],
    projectSlugs: ["mcp-zap-server", "rtb-ingress-benchmark", "spring-boot-playground"],
  },
] as const satisfies readonly TopicHub[];

export function topicUrl(slug: string) {
  return `/topics/${slug}/`;
}
