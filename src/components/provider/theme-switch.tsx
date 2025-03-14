import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/provider/theme-provider";
import { Label } from "@/components/ui/label";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <Switch
        id="theme-mode"
        checked={theme === "dark"}
        onCheckedChange={handleThemeChange}
      />
      <Label htmlFor="theme-mode" className="cursor-pointer">
        {theme === "dark" ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Label>
    </div>
  );
}
