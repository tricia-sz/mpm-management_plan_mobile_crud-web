import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

export function Footer() {
  return (
    <section className="bg-blue-950 text-white relative overflow-hidden">
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex justify-center items-center mx-auto">
            <ul className="justify-between mx-auto ">
                  <div className="flex gap-2 px-4 py-4 ">
                    <IoLogoWhatsapp size={24} />
                    <li className="text-white">Telefone: 
                      <span> +55 11 3500-3088</span>
                    </li>
                  </div>
                  <div className="flex gap-2 px-4 py-4">
                  <IoIosMailOpen size={24} />
                  <li className="text-white"> 
                    <span> contato@mobitsolucoes.com</span>
                  </li>
                </div>
                <div className="flex gap-2 px-4 py-4">
                  <FaLocationDot size={24} />
                  <li className="text-white"> 
                    <span>Av. Marquês de São Vicente, 182
                    5º andar Sala 53 Barra Funda - São Paulo / SP</span>
                  </li>
                </div>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}