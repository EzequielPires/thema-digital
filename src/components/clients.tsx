import Image from "next/image";
import Link from "next/link";

export function Clients() {
  return (
    <div className="bg-background-dark py-10 lg:py-20 flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
        <span className="uppercase block mb-2">../Nossos clientes</span>
        <h2 className="text-3xl lg:text-5xl title mb-6 lg:mb-16 max-w-4xl">Parceiros que fazem o nosso trabalho acontecer</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 border-r border-b">
            <Link href={'/'} className="flex">
              <Image src={'/brands/logo_01.svg'} alt="" width={100} height={40} className="transition-all" />
            </Link>
          </div>
          <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 lg:border-r border-b">
            <Link href={'/'} className="flex">
              <Image src={'/brands/logo_02.svg'} alt="" width={100} height={40} className="transition-all"  />
            </Link>
          </div>
          <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 border-r border-b">
            <Link href={'/'} className="flex">
              <Image src={'/brands/logo_03.svg'} alt="" width={100} height={40} className="transition-all"  />
            </Link>
          </div>
          <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 border-b">
            <Link href={'/'} className="flex">
              <Image src={'/brands/logo_04.svg'} alt="" width={100} height={40} className="transition-all"  />
            </Link>
          </div>
          <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 border-b lg:border-b-0 border-r" >
            <Link href={'/'} className="flex">
              <Image src={'/brands/logo_05.svg'} alt="" width={100} height={40} className="transition-all" />
            </Link>
          </div>
          <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 border-b lg:border-b-0 lg:border-r" >
            <Link href={'/'} className="flex">
              <Image src={'/brands/logo_06.svg'} alt="" width={100} height={40} className="transition-all"  />
            </Link>
          </div>
          <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10 border-r">
            <Link href={'/'} className="flex">
              <Image src={'/brands/logo_07.svg'} alt="" width={100} height={40} className="transition-all"  />
            </Link>
          </div>
          <div className="h-32 lg:h-52 flex items-center justify-center group border-white/10">
            <Link href={'/'} className="flex">
              <Image src={'/brands/logo_08.svg'} alt="" width={100} height={40} className="transition-all"  />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}