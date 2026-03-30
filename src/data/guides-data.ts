export interface GuideItem {
  slug: string;
  title: string;
  description: string;
  category: string;
  content: string;
  icon: string;
}

export const guidesData: GuideItem[] = [
  {
    slug: "pipeline-design-101",
    title: "Pipeline Design 101",
    category: "CI/CD",
    description: "Learn how to build resilient pipelines that catch errors early.",
    icon: "Code2",
    content: `
# Pipeline Design 101: The Bedrock of Confidence

A deployment pipeline is more than just a sequence of scripts; it is the manifestation of your team's engineering standards. To deploy on Fridays with absolute confidence, your pipeline must be resilient, fast, and transparent.

## 1. Commit Early, Commit Often
The most effective way to reduce deployment risk is to keep changes small. Integrating small code increments frequently ensures that testing and validation are manageable. If an error occurs, the surface area for investigation is tiny.

## 2. Fast Feedback Loops
A pipeline that takes 45 minutes to run is a bottleneck. High-performing teams optimize for feedback in under 10 minutes. Use dependency caching, parallel test execution, and intelligent rebuilds to keep developer velocity high.

## 3. The "Shift Left" Principle
Catch bugs as early as possible. This means moving security checks, linting, and unit tests to the very start of the pipeline. If a commit doesn't meet the standard, it shouldn't even reach the integration stage.

## 4. Environment Parity
Your staging environment must be a mirror of production. Infrastructure as Code (IaC) ensures that your environments are reproducible and free from "configuration drift," the leading cause of "it worked in staging" failures.
    `
  },
  {
    slug: "automation-best-practices",
    title: "Automation Best Practices",
    category: "CI/CD",
    description: "Scale your deployments with industry-standard automation tools.",
    icon: "Terminal",
    content: `
# Automation Best Practices: Scaling Your Ship Cycles

Automation is the engine of the #DeployOnFridays movement. Without it, human error remains your greatest threat.

## 1. Eliminate Manual Interventions
Every manual step in your release process is a point of failure. From database migrations to cache clearing, every action must be scripted and version-controlled.

## 2. Infrastructure as Code (IaC)
Treat your infrastructure the same way you treat your application code. Use tools like Terraform or Pulumi to define your cloud resources. This allows you to peer-review infrastructure changes and roll them back just as easily as a bug fix.

## 3. Automated Quality Gates
Don't rely on "eye-balling" logs. Use automated quality gates that check for regression in performance, security vulnerabilities, and code coverage. If a metric falls below a threshold, the deployment must stop automatically.

## 4. Immutable Build Artifacts
Build once, deploy everywhere. Your pipeline should produce a single immutable artifact (like a Docker image) that moves through staging and into production. Never rebuild code for different environments; this ensures that what you tested is exactly what is running for users.
    `
  },
  {
    slug: "blue-green-strategies",
    title: "Blue/Green Strategies",
    category: "Deployment",
    description: "Master zero-downtime deployments with environment switching.",
    icon: "Globe",
    content: `
# Blue/Green Deployment: The Zero-Downtime Standard

Blue/Green deployment is a technique that reduces risk and downtime by running two identical production environments, referred to as Blue and Green.

## How it Works
1. **Blue** is your current live environment.
2. **Green** is where you deploy the new version of your code.
3. Once Green is fully tested and verified in situ, you switch the router to point all traffic to Green.
4. Blue becomes the idle environment, ready for the next release.

## Key Benefits
- **Zero Downtime**: The cutover happens instantly at the load balancer level.
- **Instant Rollback**: If something goes wrong on the Green environment, you simply point the router back to Blue.
- **Separation of Concerns**: You can conduct final smoke tests on the Green environment without affecting real users.
    `
  },
  {
    slug: "canary-releases",
    title: "Canary Releases",
    category: "Deployment",
    description: "Safely roll out features to a subset of users before full launch.",
    icon: "ShieldCheck",
    content: `
# Canary Releases: Testing in Production

A Canary Release is a technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before making it available to everyone.

## The Strategy
1. **Pilot Phase**: Deploy the new version to 1% or 5% of your traffic.
2. **Monitor**: Watch for increases in error rates, latency, or negative business metrics.
3. **Expand**: If the metrics stay healthy, increase the rollout to 25%, 50%, and finally 100%.
4. **Abort**: If any threshold is crossed, the canary is killed and traffic is instantly diverted back to the stable version.

## When to Use Canaries
- High-traffic applications where even a 1-minute outage is costly.
- Risk-heavy changes like database schema migrations or core algorithm updates.
- When you want to gather real-world performance data before a global launch.
    `
  },
  {
    slug: "observability-at-scale",
    title: "Observability at Scale",
    category: "DevOps",
    description: "Monitor your systems effectively to detect issues instantly.",
    icon: "BarChart3",
    content: `
# Mastering Observability: The Eyes of Production

Monitoring tells you *when* a system is broken. Observability tells you *why*. For teams shipping on Fridays, being able to debug complex systems in real-time is non-negotiable.

## The Three Pillars
1. **Metrics**: Aggregated data points (CPU usage, request count, error rate) that give you the "macro" view of system health.
2. **Logging**: Detailed event records that provide the "micro" context of what happened during a specific execution.
3. **Tracing**: Tracking a single request as it moves through various microservices, essential for identifying bottlenecks in distributed systems.

## Proactive Alerting
Don't alert on everything. Use "Service Level Objectives" (SLOs) to alert your team only when the user experience is at risk. A 5% increase in CPU might be fine, but a 1% increase in checkout errors is a P0 incident.
    `
  },
  {
    slug: "rollback-strategies",
    title: "Rollback Strategies",
    category: "DevOps",
    description: "How to revert production failures in seconds, not hours.",
    icon: "Cpu",
    content: `
# Fail Fast, Recover Faster: Modern Rollbacks

The "Deploy on Friday" philosophy isn't about being perfect; it's about being prepared. A robust rollback strategy is your fundamental safety net.

## 1. One-Click Rollbacks
If a deployment fails, your team shouldn't be scrambling to run complex CLI commands. Your CI/CD platform should have a prominent "Rollback" button that reverts the environment to the last known good state in seconds.

## 2. Forward Fix vs. Rollback
As a rule: **Always rollback first.** Don't try to "fix forward" while production is broken. Get the users back to a stable state, then conduct a post-mortem to find the fix.

## 3. Database Migration Safety
The hardest part of rolling back is data. Always design your database migrations to be additive and backward-compatible. This ensures that if the new code is rolled back, the existing code can still read from the database.

## 4. Automated Health Checks
Don't wait for a human to notice a failure. Implement "Automatic Rollbacks" where the system monitors health metrics for 5 minutes post-deployment. If it detects a spike in errors, it triggers the rollback automatically.
    `
  }
];
