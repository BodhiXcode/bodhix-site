import { Box, Container, Typography, TextField, Button, Alert, CircularProgress, Card, CardContent } from "@mui/material";
import { useState, type SyntheticEvent } from "react";
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';

export default function WaitlistSection() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const WEB3FORMS_ACCESS_KEY = "90b28bce-4333-4beb-bbff-8d6b7a34d920";

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        if (!email) return;

        setStatus("loading");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    email: email,
                    subject: "New BodhiX Waitlist Signup!",
                    from_name: "BodhiX Waitlist Form",
                    message: `A new user has joined the waitlist: ${email}`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
                setErrorMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus("error");
            setErrorMessage("Network error. Please try again later.");
        }
    };

    return (
        <Box component="section" sx={{ py: { xs: 8, md: 16 }, bgcolor: "background.paper" }}>
            <Container maxWidth="md">
                <Card elevation={6} sx={{ borderRadius: 4, overflow: 'visible', position: 'relative' }}>

                    {/* Floating Pro Badge */}
                    <Box sx={{
                        position: 'absolute',
                        top: -20,
                        right: { xs: 20, md: -20 },
                        bgcolor: 'secondary.main',
                        color: 'secondary.contrastText',
                        px: 3,
                        py: 1,
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        boxShadow: 3,
                        transform: 'rotate(2deg)',
                        zIndex: 10
                    }}>
                        <StarIcon fontSize="small" />
                        <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                            1-Month Pro FREE
                        </Typography>
                    </Box>

                    <CardContent sx={{ p: { xs: 4, md: 8 }, textAlign: 'center' }}>
                        <Typography variant="h3" gutterBottom color="textPrimary" sx={{ fontWeight: 800 }}>
                            Join the Waitlist
                        </Typography>
                        <Typography variant="h6" color="textSecondary" sx={{ mb: 4, px: { xs: 0, md: 4 } }}>
                            Be the first to experience the BodhiX Automation Engine. Early access members lock in a free month of our premium tier.
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: 2,
                                justifyContent: 'center',
                                maxWidth: 500,
                                mx: 'auto'
                            }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Enter your email address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={status === "loading" || status === "success"}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                        }
                                    }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    disabled={status === "loading" || status === "success"}
                                    endIcon={status === "loading" ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                                    sx={{ px: 4, borderRadius: 2, fontWeight: 700, flexShrink: 0 }}
                                >
                                    {status === "loading" ? "Joining..." : "Get Access"}
                                </Button>
                            </Box>
                        </form>

                        {/* Status Messages */}
                        <Box sx={{ mt: 3, minHeight: 48, display: 'flex', justifyContent: 'center' }}>
                            {status === "success" && (
                                <Alert severity="success" sx={{ width: 'fit-content' }}>
                                    Success! You're on the list. We'll be in touch soon.
                                </Alert>
                            )}
                            {status === "error" && (
                                <Alert severity="error" sx={{ width: 'fit-content' }}>
                                    {errorMessage}
                                </Alert>
                            )}
                            {status === "idle" && <Box sx={{ display: 'none' }} />}
                        </Box>

                        <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mt: 2 }}>
                            We respect your privacy. No spam, ever.
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}
