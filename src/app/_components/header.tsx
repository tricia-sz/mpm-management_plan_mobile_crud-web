import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import MobItLogo from "../../../public/mobitlogo.png"


export function Header() {
  return (
    <section className="bg-blue-950 text-white relative overflow-hidden">
      <div>
      <Image 
              alt="Logo MobIt" 
              src={MobItLogo}
              className="object-cover opacity-60 lg:hidden"
              fill
              sizes="100vw"
              quality={100}
              priority
            />
      <div className="absolute inset-0 bg-black opacity-50 md:hidden"></div>

      </div>
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xlfont-bold leading-10">
              Gerenciador de Planos Móveis
            </h1>
            <p className="lg:text-lg">
              Oferecemos os melhores serviços para garantir que você permaneça sempre conectado.
            </p>

            <a
               href=""
               className="bg-green-500 p-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"

              >
                <FaWhatsapp className="w-5 h-5"/>
                 Adquira já!
              </a>
            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-sky-500 rounded-sm text-white px-2 py-1">150 GB</b> gratis no primeiro mês de assinatura
              </p>
            </div>
          </div>
          <div className="hidden md:block h-full relative">
            <Image 
              alt="Logo MobIt" 
              src={MobItLogo}
              className="object-contain"
              fill
              sizes="(max-width> 768px) 0vw, 50vvw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  )
}