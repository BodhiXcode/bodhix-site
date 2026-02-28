import { Box, Container, Typography } from "@mui/material";

export default function VisionSection() {
    return (
        <Box component="section" sx={{ pb: { xs: 16, md: 32 } }}>
            <Container maxWidth="md" sx={{ textAlign: "center" }}>
                <Typography
                    variant="h3"
                    color="textPrimary"
                    gutterBottom
                    sx={{ mb: 6 }}
                >
                    Browser automation is only the beginning.
                </Typography>

                <Typography
                    variant="body1"
                    color="textSecondary"
                    paragraph
                    sx={{ fontSize: "1.25rem", lineHeight: 1.8, mb: 4 }}
                >
                    BodhiX is being built as a suite of AI-powered products designed to
                    automate complex digital interactions across multiple domains —
                    including commerce, documentation, enterprise workflows, productivity
                    systems, and beyond. As we evolve, we plan to expand into broader AI
                    infrastructure tools, automation platforms, and intelligent agents
                    that integrate across ecosystems.
                </Typography>

                <Typography
                    variant="body1"
                    color="textSecondary"
                    paragraph
                    sx={{ fontSize: "1.25rem", lineHeight: 1.8, mb: 8 }}
                >
                    Our long-term vision is to create an AI automation layer that operates
                    seamlessly across the internet — reducing cognitive load, saving time,
                    and making technology truly human-centric. We are currently in the
                    early development phase, refining our architecture, experimenting with
                    AI orchestration models, and building scalable infrastructure to
                    support a growing ecosystem of intelligent automation products.
                </Typography>

                <Typography
                    variant="h4"
                    color="textPrimary"
                    sx={{ fontWeight: 700, lineHeight: 1.5 }}
                >
                    BodhiX is not just building a browser tool. We are building the
                    automation backbone for the intelligent internet.
                </Typography>
            </Container>
        </Box>
    );
}
