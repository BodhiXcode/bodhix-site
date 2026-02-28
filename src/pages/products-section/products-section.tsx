import { Box, Card, CardContent, Container, Typography, Chip, Tabs, Tab } from "@mui/material";
import { useState } from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`product-tabpanel-${index}`}
            aria-labelledby={`product-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 4, pb: 2 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(prefix: string, index: number) {
    return {
        id: `${prefix}-tab-${index}`,
        'aria-controls': `${prefix}-tabpanel-${index}`,
    };
}

export default function ProductsSection() {
    const [browserTab, setBrowserTab] = useState(0);
    const [extTab, setExtTab] = useState(0);

    const handleBrowserChange = (_event: React.SyntheticEvent, newValue: number) => {
        setBrowserTab(newValue);
    };

    const handleExtChange = (_event: React.SyntheticEvent, newValue: number) => {
        setExtTab(newValue);
    };

    return (
        <Box component="section" id="products" sx={{ pb: { xs: 12, md: 24 } }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 8, maxWidth: "800px" }}>
                    <Typography variant="h4" gutterBottom color="textPrimary" sx={{ fontWeight: 800 }}>
                        Products
                    </Typography>
                    <Typography variant="h6" color="textSecondary" sx={{ fontWeight: 400 }}>
                        We are building an ecosystem that transforms browsing from a manual, overwhelming process into an intelligent, goal-driven experience.
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>

                    {/* Bodhi Browser */}
                    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 2, mb: 4 }}>
                                <Typography variant="h5" color="textPrimary" sx={{ fontWeight: 700 }}>
                                    Bodhi Browser
                                </Typography>
                                <Chip label="Core Infrastructure" color="secondary" variant="outlined" />
                            </Box>

                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs
                                    value={browserTab}
                                    onChange={handleBrowserChange}
                                    aria-label="browser tabs"
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                >
                                    <Tab label="The Problem" {...a11yProps('browser', 0)} sx={{ fontWeight: 600 }} />
                                    <Tab label="How It Works" {...a11yProps('browser', 1)} sx={{ fontWeight: 600 }} />
                                    <Tab label="Potential & Impact" {...a11yProps('browser', 2)} sx={{ fontWeight: 600 }} />
                                    <Tab label="Timeline" {...a11yProps('browser', 3)} sx={{ fontWeight: 600 }} />
                                </Tabs>
                            </Box>

                            <CustomTabPanel value={browserTab} index={0}>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                                    The digital world has become unnecessarily complex. Users are forced to adapt to complex websites—dealing with technical jargon, cluttered layouts, fragmented processes, and overwhelming information arrays. Instead of users adapting to these systems, we believe the systems should adapt to the user.
                                </Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                                    We are building an <strong>AI-native adaptive browser</strong> that transforms any website into a personalized, understandable, and accessible interface based on each user’s core needs.
                                </Typography>
                            </CustomTabPanel>

                            <CustomTabPanel value={browserTab} index={1}>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                                    Beyond passive adaptation, our browser acts as an <strong>autonomous web agent</strong> capable of completing real tasks. Powered by the <strong>TinyFish Web Agent</strong> infrastructure layer, it can automatically navigate dynamic interfaces, fill forms, compare products, and complete purchases.
                                </Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                                    TinyFish API allows our AI agents to issue high-level goals like <em>"find the best laptop under ₹1 lakh and explain the differences"</em> or <em>"fill this form using my saved profile"</em> without relying on fragile selectors. It features stealth browsing, proxy support, and real-time streaming, ensuring reliable automation across modern, protected websites.
                                </Typography>
                            </CustomTabPanel>

                            <CustomTabPanel value={browserTab} index={2}>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                                    The extracted structured data is processed by our AI layer to generate simplified explanations, adaptive layouts, and contextual guidance tailored to the user’s profile.
                                </Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                                    Combined with autonomous task execution, this creates a fundamentally new browsing paradigm—where the browser not only explains and personalizes the web, but also actively helps users accomplish tasks efficiently, safely, and intelligently.
                                </Typography>
                            </CustomTabPanel>

                            <CustomTabPanel value={browserTab} index={3}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Chip label="Current Phase" color="secondary" />
                                    <Typography variant="body1" color="textPrimary" sx={{ fontWeight: 600 }}>
                                        In Development
                                    </Typography>
                                </Box>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mt: 2 }}>
                                    We are currently building and testing the early versions of the TinyFish Automation Engine core to ensure resilient, autonomous navigation and data extraction on high-complexity websites.
                                </Typography>
                            </CustomTabPanel>

                        </CardContent>
                    </Card>

                    {/* Bodhi Leaf */}
                    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 2, mb: 4 }}>
                                <Typography variant="h5" color="textPrimary" sx={{ fontWeight: 700 }}>
                                    Bodhi Leaf
                                </Typography>
                                <Chip label="Consumer AI Wrapper" color="secondary" variant="outlined" />
                            </Box>

                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs
                                    value={extTab}
                                    onChange={handleExtChange}
                                    aria-label="extension tabs"
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                >
                                    <Tab label="The Problem" {...a11yProps('ext', 0)} sx={{ fontWeight: 600 }} />
                                    <Tab label="How It Works" {...a11yProps('ext', 1)} sx={{ fontWeight: 600 }} />
                                    <Tab label="Potential & Impact" {...a11yProps('ext', 2)} sx={{ fontWeight: 600 }} />
                                    <Tab label="Timeline" {...a11yProps('ext', 3)} sx={{ fontWeight: 600 }} />
                                </Tabs>
                            </Box>

                            <CustomTabPanel value={extTab} index={0}>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                                    We are building an AI-powered Chrome extension designed to help users actually understand what they are buying on e-commerce websites.
                                </Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                                    Today, product pages contain a lot of technical terms (e.g., Ultra 7, TGP, RTX, EMI, return policies) which are clearly written but not easy for normal users to comprehend. This creates confusion, hesitation, and often wrong buying decisions.
                                </Typography>
                            </CustomTabPanel>

                            <CustomTabPanel value={extTab} index={1}>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                                    Our extension sits on top of any retail website—like Amazon or Flipkart—and adapts the page in real time.
                                </Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                                    It automatically identifies critical product information such as pricing, technical specifications, delivery terms, and return policies. It sends only this relevant data to our AI backend, returning simple explanations in plain language that are shown directly on the page, or read out using voice guidance, helping users feel guided instead of overwhelmed.
                                </Typography>
                            </CustomTabPanel>

                            <CustomTabPanel value={extTab} index={2}>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                                    The goal is not to change the website itself, but to act as a seamless AI shopping guide that explains what things actually mean and why they matter, helping users make confident decisions.
                                </Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                                    Simultaneously, the system can generate insights about where users get confused and what contexts drive confidence, which is an invaluable metric for retailers looking to improve conversions and decisively reduce returns.
                                </Typography>
                            </CustomTabPanel>

                            <CustomTabPanel value={extTab} index={3}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Chip label="Current Phase" color="primary" />
                                    <Typography variant="body1" color="textPrimary" sx={{ fontWeight: 600 }}>
                                        MVP Phase
                                    </Typography>
                                </Box>
                                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mt: 2 }}>
                                    We are structuring the core injection scripts and adapting the initial LLM response parsers to identify and re-explain Amazon/Flipkart technical specifications efficiently.
                                </Typography>
                            </CustomTabPanel>

                        </CardContent>
                    </Card>

                </Box>
            </Container>
        </Box>
    );
}
