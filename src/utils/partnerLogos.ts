export type PartnerLogo = {
  name: string
  src: string
  width: number
  height: number
  className: string
}

export const partnerLogos: PartnerLogo[] = [
  {
    name: 'Snowflake',
    src: '/images/Logo  snowaflake.svg',
    width: 165,
    height: 34,
    className: 'h-[1.28rem] w-auto sm:h-[1.5rem]',
  },
  {
    name: 'Umbrella',
    src: '/images/umbrellalogo.svg',
    width: 178,
    height: 64,
    className: 'h-[2.6rem] w-auto sm:h-[3rem]',
  },
  {
    name: 'Luminous',
    src: '/images/luminouslogo.svg',
    width: 164,
    height: 64,
    className: 'h-[2.6rem] w-auto sm:h-[3rem]',
  },
  {
    name: 'Nextmove',
    src: '/images/Nextmovelogo.svg',
    width: 174,
    height: 48,
    className: 'h-[2.09rem] w-auto sm:h-[2.42rem]',
  },
  {
    name: 'Sitemark',
    src: '/images/sitemark.svg',
    width: 188,
    height: 80,
    className: 'h-[2.5rem] w-auto sm:h-[2.9rem]',
  },
]
