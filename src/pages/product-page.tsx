import { Tabs, Tab, Box, Typography, Card, CardContent } from "@mui/material";
import { useState } from "react";

const tabData = [
  {
    label: "Browser",
    content: (
      <Card elevation={3} sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            AI-Native Adaptive Browser
          </Typography>
          <Typography variant="body1" paragraph>
            We are building an <strong>AI-native adaptive browser</strong> that
            transforms any website into a personalized, understandable, and
            accessible interface based on each user’s needs. Instead of users
            adapting to complex websites, our browser adapts the web to the
            user—simplifying technical terms, restructuring layouts, providing
            voice guidance, and standardizing interfaces across e-commerce,
            banking, documentation, and other platforms.
          </Typography>
          <Typography variant="body1" paragraph>
            Beyond passive adaptation, our browser also acts as an{" "}
            <strong>autonomous web agent</strong>, capable of completing real
            tasks for the user. It can automatically navigate websites, fill
            forms, compare products, complete purchases, apply filters, submit
            applications, or assist with workflows like booking services or
            filing taxes. This turns browsing from a manual process into an
            intelligent, goal-driven experience where users can simply describe
            what they want, and the browser executes it safely and
            transparently.
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>TinyFish Web Agent</strong> is a core infrastructure layer
            that enables this capability. We use the TinyFish API to allow our
            AI agents to autonomously open websites, navigate dynamic
            interfaces, interact with authenticated systems, and extract
            structured data such as product specifications, pricing, policies,
            or form fields. Its natural language control allows our system to
            issue high-level goals like “find the best laptop under ₹1 lakh and
            explain the differences,” or “fill this form using my saved
            profile,” without relying on fragile selectors. TinyFish’s stealth
            browsing, proxy support, and real-time streaming ensure reliable
            automation across modern, protected websites.
          </Typography>
          <Typography variant="body2" paragraph>
            The extracted structured data is then processed by our AI layer to
            generate simplified explanations, adaptive layouts, and contextual
            guidance tailored to the user’s profile. Combined with autonomous
            task execution, this creates a fundamentally new browsing
            paradigm—where the browser not only explains and personalizes the
            web, but also actively helps users accomplish tasks efficiently,
            safely, and intelligently.
          </Typography>
        </CardContent>
      </Card>
    ),
  },
  {
    label: "Extension",
    content: (
      <Card elevation={3} sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            AI Shopping Guide Extension
          </Typography>
          <Typography variant="body1" paragraph>
            We are building a Chrome extension powered by AI that helps users
            actually understand what they are buying on e-commerce websites.
            Today, product pages contain a lot of technical terms—like Ultra 7,
            TGP, RTX, EMI, return policies—which are clearly written but not
            easy for normal users to understand. This creates confusion,
            hesitation, and often wrong buying decisions.
          </Typography>
          <Typography variant="body1" paragraph>
            Our extension sits on top of any retail website (like Amazon or
            Flipkart) and adapts the page in real time. It automatically
            identifies important product information such as price, specs,
            delivery, and return policy, sends only this relevant data to an AI
            backend, and gets back simple explanations in plain language. These
            explanations are shown directly on the page and can also be read out
            using voice, so users feel guided instead of overwhelmed.
          </Typography>
          <Typography variant="body2" paragraph>
            The goal is not to change the website itself, but to act as an AI
            shopping guide that explains what things actually mean and why they
            matter, helping users make confident decisions. At the same time,
            the system can generate insights about where users get confused,
            which is valuable for retailers to improve conversions and reduce
            returns.
          </Typography>
        </CardContent>
      </Card>
    ),
  },
  {
    label: "Timeline",
    content: (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Product Development Timeline
        </Typography>
        <ul>
          <li>
            <strong>Q1 2026:</strong> Core architecture design, AI orchestration
            model experiments, TinyFish API integration.
          </li>
          <li>
            <strong>Q2 2026:</strong> Browser MVP with adaptive UI, extension
            prototype for e-commerce guidance.
          </li>
          <li>
            <strong>Q3 2026:</strong> Autonomous agent features, voice guidance,
            real-world task automation, closed beta launch.
          </li>
          <li>
            <strong>Q4 2026:</strong> Public beta, feedback-driven improvements,
            retailer partnerships, analytics dashboard.
          </li>
          <li>
            <strong>2027+:</strong> Expansion to banking, documentation,
            productivity, and enterprise workflows. Advanced agentic automation
            and infrastructure scaling.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    label: "Potential",
    content: (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Market Potential & Impact
        </Typography>
        <Typography variant="body1" paragraph>
          BodhiX products address a massive market need for intelligent,
          user-centric automation in web browsing and e-commerce. The adaptive
          browser and extension can:
        </Typography>
        <ul>
          <li>Reduce cognitive load and confusion for millions of users.</li>
          <li>Increase conversion rates and reduce returns for retailers.</li>
          <li>
            Enable accessibility for non-technical users and those with
            disabilities.
          </li>
          <li>
            Set a new standard for AI-driven web interaction and automation.
          </li>
          <li>
            Expand into enterprise, productivity, and documentation domains.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    label: "Why & How",
    content: (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Why BodhiX? How Does It Work?
        </Typography>
        <Typography variant="body1" paragraph>
          BodhiX is built to solve the real pain points of digital complexity
          and user confusion. Our approach combines:
        </Typography>
        <ul>
          <li>AI-powered extraction and simplification of web content.</li>
          <li>Autonomous agents for task execution and workflow automation.</li>
          <li>Adaptive UI and voice guidance for accessibility.</li>
          <li>
            Privacy-first architecture: only relevant data sent to backend, no
            tracking.
          </li>
          <li>
            Continuous feedback loop to improve explanations and user
            experience.
          </li>
        </ul>
        <Typography variant="body2" paragraph>
          By blending AI, automation, and user-centric design, BodhiX is
          redefining how people interact with the web—making it simpler,
          smarter, and more empowering for everyone.
        </Typography>
      </Box>
    ),
  },
];

export default function ProductPage() {
  const [tab, setTab] = useState(0);
  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Products
      </Typography>
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        centered
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3 }}
      >
        {tabData.map((t) => (
          <Tab label={t.label} key={t.label} />
        ))}
      </Tabs>
      <Box>{tabData[tab].content}</Box>
    </Box>
  );
}
