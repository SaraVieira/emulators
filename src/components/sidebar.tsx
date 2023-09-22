import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { consoles } from "../data"
import { Emulator } from "@/App"
import { Fragment } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type Console = {
  name: string
  emulators: Emulator[]
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  activeConsole: Console
  onChange: (c: any) => void
}

export function Sidebar({ className, activeConsole, onChange }: SidebarProps) {
  return (
    <div className={cn("pb-12 min-w-[200px] flex-grow", className)}>
      <div className="space-y-4 py-4">
        <div className="py-2">
          <Accordion type="single" collapsible defaultValue="Nintendo">
            {consoles.map((brand) => (
              <AccordionItem value={brand.name} key={brand.name}>
                <AccordionTrigger className="relative px-7 text-lg font-semibold tracking-tight">
                  {brand.name}
                </AccordionTrigger>

                <AccordionContent className="space-y-1 p-2">
                  {brand.consoles?.map((console, i) => (
                    <Button
                      key={`${console}-${i}`}
                      variant="ghost"
                      className={cn(
                        "w-full justify-start font-normal",
                        activeConsole.name === console.name &&
                          "bg-accent text-accent-foreground"
                      )}
                      onClick={() => onChange(console)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M21 15V6" />
                        <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M12 12H3" />
                        <path d="M16 6H3" />
                        <path d="M12 18H3" />
                      </svg>
                      {console.name}
                    </Button>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
