import { Box, Card, CardContent, Container, Typography, Avatar, IconButton, Button } from "@mui/material";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import smilImg from "../../assets/smil.jpg";
import agnibhaImg from "../../assets/agnibha.jpg";

export default function PeopleSection() {
    return (
        <Box component="section" id="people" sx={{ pb: { xs: 12, md: 24 } }}>
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom color="textPrimary" sx={{ mb: 6, textAlign: "center" }}>
                    The Minds Behind BodhiX
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: 6,
                    }}
                >
                    {/* Smil Raj Thakur */}
                    <Card>
                        <CardContent sx={{ p: { xs: 4, md: 6 }, display: "flex", flexDirection: "column", height: "100%" }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                                <Avatar src={smilImg} sx={{ width: 64, height: 64, mr: 3, bgcolor: "secondary.main" }}>S</Avatar>
                                <Box>
                                    <Typography variant="h5" color="textPrimary" sx={{ fontWeight: 700 }}>
                                        Smil Raj Thakur
                                    </Typography>
                                    <Typography variant="subtitle1" color="secondary" sx={{ fontWeight: 600 }}>
                                        Founder
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, flexGrow: 1, mb: 3 }}>
                                As an experienced Software Engineer with a background in full-stack development, Smil leads the technical and strategic vision of BodhiX. His expertise spans across modern architectures like Angular, .NET, Python, and AI integration (Gemini). He has a proven track record of creating efficient AI-native tools, including the cross-platform productivity assistant 'Clippy' and the SaaS platform 'Socially'. At BodhiX, Smil is dedicated to building the foundational infrastructure that adapts the digital world to the user.
                            </Typography>
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <IconButton href="https://github.com/smil-thakur" target="_blank" color="inherit">
                                    <GitHub />
                                </IconButton>
                                <IconButton href="https://www.linkedin.com/in/smil-raj-thakur-b499471bb/" target="_blank" color="inherit">
                                    <LinkedIn />
                                </IconButton>
                                <IconButton href="https://www.instagram.com/smil_thakur/" target="_blank" color="inherit">
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>

                    {/* Agnibha Sarkar */}
                    <Card>
                        <CardContent sx={{ p: { xs: 4, md: 6 }, display: "flex", flexDirection: "column", height: "100%" }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                                <Avatar src={agnibhaImg} sx={{ width: 64, height: 64, mr: 3, bgcolor: "secondary.main" }}>A</Avatar>
                                <Box>
                                    <Typography variant="h5" color="textPrimary" sx={{ fontWeight: 700 }}>
                                        Agnibha Sarkar
                                    </Typography>
                                    <Typography variant="subtitle1" color="secondary" sx={{ fontWeight: 600 }}>
                                        Co-Founder & AI Division Head
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, flexGrow: 1, mb: 3 }}>
                                Agnibha drives the intelligence behind BodhiX. With deep expertise in Deep Learning, NLP, and Computer Vision, he has engineered cutting-edge machine learning solutions at scaling startups and enterprise platforms like Turing. His research background includes developing scalable Digital Twin systems for smart cities at National Tsing Hua University. Agnibha ensures that BodhiX's automation engines and AI models operate with precision, contextual awareness, and scalability.
                            </Typography>
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <IconButton href="https://github.com/casafurix" target="_blank" color="inherit">
                                    <GitHub />
                                </IconButton>
                                <IconButton href="https://www.linkedin.com/in/agnibha-sarkar-8143161b8/" target="_blank" color="inherit">
                                    <LinkedIn />
                                </IconButton>
                                <IconButton href="https://www.instagram.com/casafurix/" target="_blank" color="inherit">
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

                {/* Personal Contact Section */}
                <Box sx={{ mt: 8, textAlign: 'center', p: { xs: 4, md: 6 }, bgcolor: 'background.default', borderRadius: 4, border: 1, borderColor: 'divider' }}>
                    <Typography variant="h5" color="textPrimary" sx={{ fontWeight: 800, mb: 1 }}>
                        Let's Talk Directly
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto', lineHeight: 1.8 }}>
                        Want to connect? Email the founders personally for a closer connection. We don't use fancy corporate emails yet—we prefer to keep it real and speak with our users directly.
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        href="mailto:smil.raj.thakur@gmail.com"
                        sx={{ fontWeight: 700, borderRadius: 2, px: 4 }}
                    >
                        smil.raj.thakur@gmail.com
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
