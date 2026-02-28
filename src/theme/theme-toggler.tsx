
import Tooltip from "@mui/material/Tooltip";
import { Sunny, DarkMode, SettingsBrightness } from "@mui/icons-material";
import { useColorScheme } from "@mui/material/styles";
import { Button } from "@mui/material";

type Mode = "light" | "dark" | "system";

const options: { mode: Mode; icon: React.ReactNode; label: string }[] = [
  { mode: "light", icon: <Sunny />, label: "Light" },
  { mode: "dark", icon: <DarkMode />, label: "Dark" },
  { mode: "system", icon: <SettingsBrightness />, label: "System" },
];

export default function ThemeToggler() {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  const currentIndex = options.findIndex((o) => o.mode === mode);
  const current = options[currentIndex];
  const next = options[(currentIndex + 1) % options.length];

  return (
    <Tooltip title={`Switch to ${next.label}`}>
      <Button
        style={{
          width: "90px",
        }}
        variant="contained"
        onClick={() => setMode(next.mode)}
        aria-label={`Switch to ${next.label} mode`}
      >
        {current.icon}
      </Button>
    </Tooltip>
  );
}
