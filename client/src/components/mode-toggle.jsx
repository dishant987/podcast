import { useState } from "react"
import { Moon, Sun, Volume2, VolumeX } from "lucide-react"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu.jsx"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [isSoundOn, setIsSoundOn] = useState(true)

  const playSound = (theme) => {
    if (!isSoundOn) return
    let sound
    if (theme === "light") {
      sound = new Audio('/click.wav')
    } else if (theme === "dark") {
      sound = new Audio('/click.wav')
    }
    if (sound) {
      sound.play()
    }
  }

  const handleThemeChange = (theme) => {
    setTheme(theme)
    playSound(theme)
  }

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn)
  }

  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="dark:border-white rounded-full" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 duration-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 duration-100 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleThemeChange("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleThemeChange("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button onClick={toggleSound} variant="outline" className="dark:border-white rounded-full" size="icon">
        {isSoundOn ? <Volume2 className="h-[1.2rem] w-[1.2rem]" /> : <VolumeX className="h-[1.2rem] w-[1.2rem]" />}
        <span className="sr-only">{isSoundOn ? "Sound On" : "Sound Off"}</span>
      </Button>
    </div>
  )
}
