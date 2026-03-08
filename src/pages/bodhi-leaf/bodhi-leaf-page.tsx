import { Box, Container, Typography, Button, Paper, Stack, Chip, Grid, useTheme } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { useNavigate } from "react-router-dom";
import ThemeToggler from "../../theme/theme-toggler";

import mainImg from "../../assets/bodhi-leaf-ui/main.png";
import accessibilityImg from "../../assets/bodhi-leaf-ui/accessibility.png";
import profileImg from "../../assets/bodhi-leaf-ui/profile-side-panel.png";
import insightsImg from "../../assets/bodhi-leaf-ui/side-panel insigh.png";
import zenImg from "../../assets/bodhi-leaf-ui/with zen mode.png";
import zenGraphImg from "../../assets/bodhi-leaf-ui/zen mode graph.png";

export default function BodhiLeafPage() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const steps = [
        {
            title: "Download & Unzip",
            description: "Download the ZIP and extract it. Inside, you will see a 'dist' folder.",
            icon: <DownloadIcon sx={{ fontSize: 24 }} />,
            step: "01"
        },
        {
            title: "Developer Mode",
            description: "Go to chrome://extensions and toggle 'Developer mode' ON.",
            icon: <SettingsIcon sx={{ fontSize: 24 }} />,
            cmd: "chrome://extensions",
            step: "02"
        },
        {
            title: "Load Unpacked",
            description: "Click 'Load unpacked' and select the 'dist' folder from the unzipped files.",
            icon: <FolderOpenIcon sx={{ fontSize: 24 }} />,
            step: "03"
        },
        {
            title: "Start Using",
            description: "Click the Bodhi Leaf icon on any Amazon product page.",
            icon: <PlayArrowIcon sx={{ fontSize: 24 }} />,
            step: "04"
        }
    ];

    const features = [
        { title: "🔍 Product Details", desc: "Title, brand, price, savings, delivery, specs, reviews extracted instantly." },
        { title: "🤖 AI Insights", desc: "Deal score, pros/cons, verdict, star breakdown, and seller analysis." },
        { title: "🧘 Zen Mode", desc: "Interactive overlay with TTS, AI verdict, and product quiz." },
        { title: "🌐 Multilingual TTS", desc: "Voice guidance via Amazon Polly in 9 Indian languages." },
        { title: "💬 AI Chat", desc: "Ask product-specific questions and get instant answers." },
        { title: "📖 Layman Specs", desc: "Technical specs translated into plain English for everyone." }
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: 'background.default',
                color: 'text.primary',
                pb: 10,
                transition: 'background-color 0.3s ease'
            }}
        >
            {/* Minimal Header */}
            <Box
                sx={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    backdropFilter: 'blur(20px)',
                    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                    bgcolor: isDark ? 'rgba(10, 10, 10, 0.8)' : 'rgba(250, 250, 250, 0.8)',
                    px: { xs: 2, md: 4 },
                    py: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={() => navigate('/')}
                        sx={{
                            color: 'text.secondary',
                            textTransform: 'none',
                            fontWeight: 500,
                            '&:hover': { color: 'text.primary' }
                        }}
                    >
                        Back
                    </Button>
                    <ThemeToggler />
                </Stack>

                <Button
                    variant="contained"
                    size="small"
                    startIcon={<DownloadIcon />}
                    href="/bodhiLeaf.zip"
                    download
                    sx={{
                        bgcolor: '#FF4400',
                        color: '#fff',
                        fontWeight: 700,
                        '&:hover': { bgcolor: '#e63d00' }
                    }}
                >
                    Download ZIP
                </Button>
            </Box>

            <Container maxWidth="lg" sx={{ mt: 8 }}>
                {/* Hero Section */}
                <Box sx={{ mb: 12, textAlign: 'center' }}>
                    <Chip
                        label="CHROME EXTENSION"
                        sx={{
                            mb: 3,
                            fontWeight: 800,
                            bgcolor: 'rgba(255, 68, 0, 0.1)',
                            color: '#FF4400',
                            border: '1px solid rgba(255, 68, 0, 0.2)'
                        }}
                    />
                    <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '4rem' } }}>
                        Bodhi Leaf
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary', maxWidth: 700, mx: 'auto', fontWeight: 400 }}>
                        Your AI-powered shopping companion. Transform Amazon browsing into an intelligent commerce experience.
                    </Typography>

                    <Box sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
                        <Paper sx={{ p: 2, bgcolor: isDark ? 'rgba(255, 68, 0, 0.05)' : 'rgba(255, 68, 0, 0.02)', border: '1px solid rgba(255, 68, 0, 0.2)', borderRadius: 2 }}>
                            <Typography variant="body2" sx={{ color: '#FF4400', fontWeight: 600, mb: 1 }}>
                                🛠️ Prototyping Phase Notice
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                Manual download is required during this prototyping phase as the extension is currently under review by Google. Direct installation from the Chrome Web Store will be available soon!
                            </Typography>
                        </Paper>
                        <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary', opacity: 0.7, fontStyle: 'italic' }}>
                            "Really thanks for taking out time and using our product, we are really happy!"
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        size="large"
                        href="/bodhiLeaf.zip"
                        download
                        sx={{
                            px: 5,
                            py: 1.5,
                            bgcolor: '#FF4400',
                            color: '#fff',
                            fontWeight: 800,
                            borderRadius: 2,
                            boxShadow: '0 8px 24px rgba(255, 68, 0, 0.3)',
                            '&:hover': { bgcolor: '#e63d00', boxShadow: '0 12px 32px rgba(255, 68, 0, 0.4)' }
                        }}
                    >
                        Download Extension
                    </Button>
                </Box>

                {/* Installation Steps */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
                        Installation Guide
                    </Typography>
                    <Grid container spacing={2}>
                        {steps.map((step, index) => (
                            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                                <Paper
                                    sx={{
                                        p: 2.5,
                                        height: '100%',
                                        bgcolor: 'background.paper',
                                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                                        borderRadius: 3,
                                        transition: '0.3s',
                                        '&:hover': { borderColor: '#FF4400', transform: 'translateY(-4px)' }
                                    }}
                                >
                                    <Box sx={{ color: '#FF4400', mb: 1.5 }}>{step.icon}</Box>
                                    <Typography variant="h6" sx={{ mb: 0.5, fontSize: '0.95rem', fontWeight: 700 }}>
                                        {step.step}. {step.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5, fontSize: '0.85rem' }}>
                                        {step.description}
                                    </Typography>
                                    {step.cmd && (
                                        <Box sx={{ p: 0.8, bgcolor: isDark ? '#000' : '#f0f0f0', borderRadius: 1, border: `1px solid ${isDark ? '#333' : '#ddd'}` }}>
                                            <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#FF4400', fontSize: '0.7rem' }}>
                                                {step.cmd}
                                            </Typography>
                                        </Box>
                                    )}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Feature Gallery */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
                        Features in Detail
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper sx={{ overflow: 'hidden', borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
                                <Box component="img" src={mainImg} sx={{ width: '100%', height: 'auto', display: 'block' }} />
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Smart Interface</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Seamlessly integrates with Amazon product pages.</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper sx={{ overflow: 'hidden', borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
                                <Box component="img" src={insightsImg} sx={{ width: '100%', height: 'auto', display: 'block' }} />
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>AI Insights</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Deep deal analysis & smart star breakdown.</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Paper sx={{ overflow: 'hidden', borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
                                <Box component="img" src={zenImg} sx={{ width: '100%', height: 'auto', display: 'block' }} />
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Zen Mode</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Distraction-free browsing with TTS support.</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Paper sx={{ overflow: 'hidden', borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
                                <Box component="img" src={profileImg} sx={{ width: '100%', height: 'auto', display: 'block' }} />
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Shopper Profile</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Unified preference tracking.</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Paper sx={{ overflow: 'hidden', borderRadius: 3, bgcolor: 'background.paper', border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
                                <Box component="img" src={zenGraphImg} sx={{ width: '100%', height: 'auto', display: 'block' }} />
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Visual Graphs</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Visualize complex technical specs.</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/* Accessibility Showcase */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
                        Inclusive Design
                    </Typography>
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper sx={{ overflow: 'hidden', borderRadius: 4, border: '1px solid rgba(255, 68, 0, 0.2)' }}>
                                <Box component="img" src={accessibilityImg} sx={{ width: '100%', height: 'auto', display: 'block' }} />
                            </Paper>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={3}>
                                <Box>
                                    <Chip icon={<AccessibleIcon sx={{ color: '#fff !important' }} />} label="Accessibility First" sx={{ mb: 2, bgcolor: '#FF4400', color: '#fff' }} />
                                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>Designed for Everyone</Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Bodhi Leaf includes specialized modes for color blindness, dyslexia-friendly fonts, and high-contrast visuals to ensure smart shopping is accessible to all.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#FF4400' }}>Voice Guided Experience</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Integrated with Amazon Polly to provide natural voice insights in multiple regional languages.
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>

                {/* Capabilities */}
                <Box sx={{ mb: 12 }}>
                    <Typography variant="h4" sx={{ mb: 6, fontWeight: 700, textAlign: 'center' }}>
                        Key Capabilities
                    </Typography>
                    <Grid container spacing={3}>
                        {features.map((feature, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Paper
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        bgcolor: 'background.paper',
                                        border: `1px solid ${isDark ? 'rgba(255, 68, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                                        borderRadius: 3,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 20px rgba(0,0,0,0.05)',
                                            borderColor: '#FF4400'
                                        }
                                    }}
                                >
                                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FF4400', mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                        {feature.desc}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Bottom CTA */}
                <Box
                    sx={{
                        p: { xs: 4, md: 8 },
                        borderRadius: 6,
                        textAlign: 'center',
                        bgcolor: 'background.paper',
                        border: '1px solid rgba(255, 68, 0, 0.2)',
                        boxShadow: isDark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.05)'
                    }}
                >
                    <Typography variant="h3" sx={{ mb: 2, fontWeight: 900 }}>
                        Ready to level up?
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', fontWeight: 400 }}>
                        Join the smart shoppers using Bodhi Leaf today.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        href="/bodhiLeaf.zip"
                        download
                        sx={{
                            px: 6,
                            py: 2,
                            bgcolor: '#FF4400',
                            color: '#fff',
                            fontWeight: 800,
                            borderRadius: 2,
                            '&:hover': { bgcolor: '#e63d00' }
                        }}
                    >
                        Download Now
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
