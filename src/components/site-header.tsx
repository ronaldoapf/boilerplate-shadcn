import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { BadgeCheck, Bell, CreditCard, LogOut, Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "@/hooks/use-theme"

export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="ml-auto flex items-center gap-4">
          <Button onClick={toggleTheme} variant="ghost">
            {theme === "light" ? <Moon /> : <Sun /> }
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarFallback>RF</AvatarFallback>
                <AvatarImage src="https://github.com/ronaldoapf.png" />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-(-radix-dropdown-menu-trigger-width) min-w-56 rounded-lg">
              <DropdownMenuLabel>
                <div className="flex gap-2">
                   <Avatar className="h-8 w-8">
                    <AvatarFallback>RF</AvatarFallback>
                    <AvatarImage src="https://github.com/ronaldoapf.png" />
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tught">
                    <span className="truncate font-medium">Ronaldo Filho</span>
                    <span className="truncate text-xs text-muted-foreground">ronaldo.alves.1997@gmail.com</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BadgeCheck />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
