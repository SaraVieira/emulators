import { atari2600 } from "./consoles/atari/2600"
import { atari5200 } from "./consoles/atari/5200"
import { atari7800 } from "./consoles/atari/7800"
import { gamecube } from "./consoles/nintendo/gamecube"
import { jaguar } from "./consoles/atari/jaguar"
import { laserDiscSystems } from "./consoles/laserdisc-systems"
import { n64 } from "./consoles/nintendo/n64"
import { nes } from "./consoles/nintendo/nes"
import { snes } from "./consoles/nintendo/snes"

import { switchConsole } from "./consoles/nintendo/switch"
import { wii } from "./consoles/nintendo/wii"
import { wiiu } from "./consoles/nintendo/wiiu"
import { ps2 } from "./consoles/sony/ps2"
import { ps3 } from "./consoles/sony/ps3"
import { ps4 } from "./consoles/sony/ps4"
import { ps5 } from "./consoles/sony/ps5"
import { ps1 } from "./consoles/sony/sony-playstation-1"
import { ms } from "./consoles/sega/ms"
import { genesis } from "./consoles/sega/genesis"
import { saturn } from "./consoles/sega/saturn"
import { dreamcast } from "./consoles/sega/dreamcast"
import { vmu } from "./consoles/sega/vmu"
import { xbox } from "./consoles/microsoft/xbox"
import { xbox360 } from "./consoles/microsoft/xbox360"
import { pcEngine } from "./consoles/nec/pc-engine"
import { neogeo } from "./consoles/snk/neogeo"
import { three3do } from "./consoles/three3do"
import { intellivision } from "./consoles/intellivision"
import { cdi } from "./consoles/cdi"
import { ColecoVision } from "./consoles/coleco/colecoVision"
import { gbc } from "./consoles/nintendo/gbc"
import { gba } from "./consoles/nintendo/gba"
import { ds } from "./consoles/nintendo/ds"
import { n3ds } from "./consoles/nintendo/n3ds"
import { gw } from "./consoles/nintendo/gw"
import { pokemini } from "./consoles/nintendo/pokemini"
import { gp32 } from "./consoles/gp32"
import { psp } from "./consoles/sony/psp"
import { pocketstation } from "./consoles/sony/pocketstation"
import { psvita } from "./consoles/sony/psvita"
import { lynx } from "./consoles/atari/lynx"
import { wonderswan } from "./consoles/wonderswan"
import { gg } from "./consoles/sega/gg"
import { ngp } from "./consoles/snk/ngp"
import { supervision } from "./consoles/supervision"
import { ngage } from "./consoles/ngage"
import { dos } from "./computers/dos"
import { acorn } from "./computers/acorn"
import { amstard } from "./computers/amstrad"

export const consoles = [
  {
    name: "Atari",
    consoles: [
      {
        name: "2600",
        emulators: atari2600,
      },
      {
        name: "5200",
        emulators: atari5200,
      },
      {
        name: "7800",
        emulators: atari7800,
      },
      {
        name: "Jaguar",
        emulators: jaguar,
      },
      {
        name: "Lynx",
        emulators: lynx,
      },
    ],
  },

  {
    name: "Sony",
    consoles: [
      {
        name: "Playstation 1",
        emulators: ps1,
      },
      {
        name: "Playstation 2",
        emulators: ps2,
      },
      {
        name: "Playstation 3",
        emulators: ps3,
      },
      {
        name: "Playstation 4",
        emulators: ps4,
      },
      {
        name: "Playstation 5",
        emulators: ps5,
      },
      {
        name: "PSP",
        emulators: psp,
      },
      {
        name: "PocketStation",
        emulators: pocketstation,
      },
      {
        name: "PSVita",
        emulators: psvita,
      },
    ],
  },
  {
    name: "Nintendo",
    consoles: [
      {
        name: "NES",
        emulators: nes,
      },
      {
        name: "SNES",
        emulators: snes,
      },
      {
        name: "N64",
        emulators: n64,
      },
      {
        name: "GameCube",
        emulators: gamecube,
      },
      {
        name: "Wii",
        emulators: wii,
      },
      {
        name: "Wii-U",
        emulators: wiiu,
      },
      {
        name: "Switch",
        emulators: switchConsole,
      },
      {
        name: "Game Boy Color",
        emulators: gbc,
      },
      {
        name: "Game Boy Advance",
        emulators: gba,
      },
      {
        name: "DS",
        emulators: ds,
      },
      {
        name: "3DS",
        emulators: n3ds,
      },
      {
        name: "Game & Watch",
        emulators: gw,
      },
      {
        name: "Pokemon Mini",
        emulators: pokemini,
      },
    ],
  },
  {
    name: "Sega",
    consoles: [
      {
        name: "Master System",
        emulators: ms,
      },
      {
        name: "Genesis",
        emulators: genesis,
      },
      {
        name: "Saturn",
        emulators: saturn,
      },
      {
        name: "Dreamcast",
        emulators: dreamcast,
      },
      {
        name: "Dreamcast VMU",
        emulators: vmu,
      },
      {
        name: "Game Gear",
        emulators: gg,
      },
    ],
  },
  {
    name: "Microsoft",
    consoles: [
      {
        name: "Xbox",
        emulators: xbox,
      },
      {
        name: "Xbox 360",
        emulators: xbox360,
      },
      {
        name: "DOS",
        emulators: dos,
      },
    ],
  },
  {
    name: "NEC",
    consoles: [
      {
        name: "TurboGrafx-16",
        emulators: pcEngine,
      },
    ],
  },
  {
    name: "SNK",
    consoles: [
      {
        name: "Neo Geo",
        emulators: neogeo,
      },
      {
        name: "Neo Geo Pocket",
        emulators: ngp,
      },
    ],
  },
  {
    name: "Arcade",
    consoles: [
      {
        name: "Multiple Arcade Laserdisc",
        emulators: laserDiscSystems,
      },
    ],
  },
  {
    name: "Coleco",
    consoles: [
      {
        name: "ColecoVision",
        emulators: ColecoVision,
      },
    ],
  },
  {
    name: "Other",
    consoles: [
      {
        name: "3DO",
        emulators: three3do,
      },
      {
        name: "Intellivision",
        emulators: intellivision,
      },
      {
        name: "Philips CD-I",
        emulators: cdi,
      },

      {
        name: "GamePark 32",
        emulators: gp32,
      },
      {
        name: "Wondersawn",
        emulators: wonderswan,
      },
      {
        name: "Watara Supervision",
        emulators: supervision,
      },
      {
        name: "Nokia Ngage",
        emulators: ngage,
      },
      {
        name: "Acorn",
        emulators: acorn,
      },
      {
        name: "Amstrad",
        emulators: amstard,
      },
    ],
  },
]
