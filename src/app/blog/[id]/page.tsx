import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const content = "<p>A rota pela BR-050 reserva agora uma not&iacute;cia que afeta diretamente os motoristas: mudan&ccedil;as nas tarifas de ped&aacute;gio. As pra&ccedil;as de Ipameri e Campo Alegre de Goi&aacute;s se destacam, uma vez que as tarifas foram reajustadas, entrando em vigor j&aacute; nesta sexta-feira.</p>\n<p>Para os condutores de autom&oacute;veis, caminhonetes e furg&otilde;es, a pra&ccedil;a de ped&aacute;gio em Ipameri viu a tarifa aumentar de R$ 8,30 para R$ 8,40. Enquanto isso, em Campo Alegre de Goi&aacute;s, a mesma categoria enfrentar&aacute; uma tarifa de R$ 9, ou seja, um aumento de R$ 0,10 comparado ao valor anterior.</p>\n<p>A concession&aacute;ria respons&aacute;vel pela administra&ccedil;&atilde;o da rodovia, a Eco50, afirma que esse reajuste &eacute; uma pr&aacute;tica anual que est&aacute; prevista no contrato. Al&eacute;m disso, os valores s&atilde;o estabelecidos com base em \"par&acirc;metros t&eacute;cnicos do contrato de concess&atilde;o\".</p>\n<p>A Ag&ecirc;ncia Nacional de Transportes Terrestres (ANTT) deu a autoriza&ccedil;&atilde;o para esse aumento por meio da Delibera&ccedil;&atilde;o n&ordm;250. O reajuste &eacute; parte da revis&atilde;o tarif&aacute;ria que ocorre anualmente, em conformidade com o contrato de concess&atilde;o. Os valores e percentuais s&atilde;o determinados considerando fatores como o &Iacute;ndice Nacional de Pre&ccedil;os ao Consumidor Amplo (IPCA) dos &uacute;ltimos 12 meses e os investimentos realizados pela concession&aacute;ria.</p>";

    function createMarkup(content: any) {
        return { __html: content };
    }

    return (
        <main>
            <div className="bg-zinc-900">
                <section className="pt-36 mb-20 w-full max-w-7xl px-4 xl:px-0 mx-auto flex flex-col items-start lg:items-center">
                    <h1 className="text-4xl lg:text-7xl font-semibold">Nome Completo da Matéria</h1>
                    <ul className="flex gap-4 mt-6">
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <span>/</span>
                        <li>
                            <Link href={'/portifolio'}>Blog</Link>
                        </li>
                        <span>/</span>
                        <li>
                            <Link href={'/nome-projeto'}>Nome da materia</Link>
                        </li>
                    </ul>
                    <span className="text-sm font-light text-white/90 flex items-center gap-2 mt-4 mb-8"><Clock size={20} />02 de setembro 2023, by Tema digital</span>
                    <div className="w-full max-w-[500px] h-[300px] relative -mb-16">
                        <Image src={'/images/image_02.jpg'} alt="" fill sizes="100%" />
                    </div>
                </section>
            </div>
            <div className="w-full max-w-5xl px-4 xl:px-0 mx-auto mt-40 mb-20">
                <article className="px-3 lg:px-0 content-notice" dangerouslySetInnerHTML={createMarkup(content)} />
            </div>
            <div className="h-[50vh] lg:h-[80vh] bg-zinc-900">
                <div className="w-full max-w-7xl mx-auto px-4 lg:px-0 flex items-center h-full py-10 gap-10">
                    <div className="flex-1 flex flex-col items-center">
                        <span className="text-sm font-light text-white/90 block mb-4 uppercase">Vamos conversar</span>
                        <h2 className="text-4xl lg:text-7xl text-center font-bold mb-4 stroke-slate-500 stroke-2"><span className="text-with-stroke text-zinc-900">nos conte sobre</span> o seu próximo projeto<span className="text-with-stroke text-zinc-900">.</span></h2>
                        <Link href={'/'} className="w-fit h-12 px-8 flex items-center justify-center border text-sm font-medium mt-8 border-white/30 hover:border-white transition-colors uppercase">Entrar em contato</Link>
                    </div>
                </div>
            </div>

            <div className="py-4 bg-zinc-950">
                <div className="w-full max-w-7xl mx-auto flex flex-wrap h-full items-center justify-center lg:justify-between gap-4">
                    <span className="text-sm">© 2023, Tema Digital - Todos os direitos reservados</span>
                    <Link href={'https://www.linkedin.com/in/ezequiel-pires-e-silva-1aab75190/'} target="_blank" className="text-sm">Desenvolvido por <strong>Ezequiel Pires</strong></Link>
                </div>
            </div>
        </main>
    )
}