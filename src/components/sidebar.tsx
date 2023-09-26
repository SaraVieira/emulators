import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { consoles } from "../data"
import { Emulator } from "@/App"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "./ui/input"
import { useState } from "react"

export type Console = {
  name?: string
  searchValue?: string
  emulators: Emulator[]
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  activeConsole: Console
  onChange: (c: any) => void
}

export function Sidebar({ className, activeConsole, onChange }: SidebarProps) {
  const [searchedConsoles, setSearchedConsoles] = useState<any>([])
  const [search, setSearch] = useState("")

  const ConsoleButton = ({ console, i }: { console: Console; i: number }) => (
    <div className="m-2">
      <Button
        key={`${console}-${i}`}
        variant="ghost"
        className={cn(
          "w-full justify-start font-normal px-7",
          activeConsole.name === console.name &&
            "bg-accent text-accent-foreground"
        )}
        onClick={() => onChange(console)}
      >
        {console.name}
      </Button>
    </div>
  )

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (!value) {
      setSearchedConsoles([])
    }
    setSearch(value)
    const allConsoles = consoles
      .map((c) =>
        c.consoles.map((b) => ({
          ...b,
          searchValue: `${c.name || ""} ${b.name}`.trimStart(),
        }))
      )
      .flat()
    setSearchedConsoles(
      allConsoles.filter((c) =>
        c.searchValue.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    )
  }

  return (
    <div
      className={cn(
        "pb-12 sm:max-h-screen overflow-auto sm:w-[350px] flex-grow max-h-[30vh]",
        className
      )}
    >
      <div className="space-y-4 py-4">
        <div className="w-full px-7">
          <Input placeholder="Filter consoles..." onChange={onChangeSearch} />
        </div>
        <div className="py-2">
          {search.length ? (
            searchedConsoles.length ? (
              searchedConsoles.map((console: Console, i: number) => (
                <ConsoleButton console={console} i={i} />
              ))
            ) : (
              "no consoles"
            )
          ) : (
            <Accordion type="single" collapsible>
              {consoles.map((brand) =>
                !brand.noHeader && brand.name ? (
                  <AccordionItem value={brand.name} key={brand.name}>
                    <AccordionTrigger className="relative px-7 text-lg font-semibold tracking-tight">
                      {brand.name}
                    </AccordionTrigger>

                    <AccordionContent className="space-y-1 p-2">
                      {brand.consoles?.map((console: any, i: number) => (
                        <ConsoleButton console={console} i={i} />
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  brand.consoles.map((console: any, i: number) => (
                    <ConsoleButton console={console} i={i} />
                  ))
                )
              )}
            </Accordion>
          )}
        </div>
      </div>
    </div>
  )
}
