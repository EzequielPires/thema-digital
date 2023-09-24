import { Layout, PenTool, Star, MonitorSmartphone, Instagram, Facebook, Repeat2, ScrollText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Services() {
    return (
        <>
            <div className="bg-background py-20 flex flex-col justify-center">
                <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
                    <span className="uppercase block mb-2" data-aos="fade-up" data-aos-delay="100">Conheça a gente melhor</span>
                    <h2 className="text-3xl lg:text-5xl title mb-6 max-w-4xl" data-aos="fade-up" data-aos-delay="150">Nossos serviços.</h2>
                    <div className="grid lg:grid-cols-4 gap-4">
                        <div className="bg-card hover:bg-card/80 p-4 transition-colors duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="200">
                            <Layout size={40} />
                            <h4 className="text-white text-xl font-semibold my-6 mb-2">Anúncios do Google</h4>
                            <span className="text-sm font-light text-white/80">Desenvolvimento e gerenciamento de campanhas no Google Ads, Google Shopping, Google Maps, Remarketing e Display. Apareça sempre para o seu público.</span>
                        </div>
                        <div className="bg-card hover:bg-card/80 p-4 transition-colors duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="250">
                            <PenTool size={40} />
                            <h4 className="text-white text-xl font-semibold my-6 mb-2">Identidade Visual</h4>
                            <span className="text-sm font-light text-white/80">Elaboração de identidade visual em materiais, redes sociais, site, logotipo, mídia kits, materiais impressos, entre outros elementos gráficos.</span>
                        </div>
                        <div className="bg-card hover:bg-card/80 p-4 transition-colors duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="300">
                            <Facebook size={40} />
                            <h4 className="text-white text-xl font-semibold my-6 mb-2">Gerenciamento de Redes Sociais</h4>
                            <span className="text-sm font-light text-white/80">Estudo de tendências, identidade visual, hashtags e concorrentes.</span>
                        </div>
                        <div className="bg-card hover:bg-card/80 p-4 transition-colors duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="350">
                            <ScrollText size={40} />
                            <h4 className="text-white text-xl font-semibold my-6 mb-2">Blog e Produção de Textos</h4>
                            <span className="text-sm font-light text-white/80">Criação de blog, produção de artigos ou textos para sites, redes sociais, peças publicitárias entre outros.</span>
                        </div>
                        <div className="bg-card hover:bg-card/80 p-4 transition-colors duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="200">
                            <Repeat2 size={40} />
                            <h4 className="text-white text-xl font-semibold my-6 mb-2">Plataforma de Conversão</h4>
                            <span className="text-sm font-light text-white/80">Plataforma desenvolvida para monitorar leads, formulários e telefonemas provenientes das campanhas. </span>
                        </div>
                        <div className="bg-card hover:bg-card/80 p-4 transition-colors duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="250">
                            <Instagram size={40} />
                            <h4 className="text-white text-xl font-semibold my-6 mb-2">Campanhas de Redes Sociais</h4>
                            <span className="text-sm font-light text-white/80">Criação de campanhas de Facebook, Instagram, Linkedin, e outras redes sociais.</span>
                        </div>
                        <div className="bg-card hover:bg-card/80 p-4 transition-colors duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="300">
                            <MonitorSmartphone size={40} />
                            <h4 className="text-white text-xl font-semibold my-6 mb-2">Website, Apps e Sistemas</h4>
                            <span className="text-sm font-light text-white/80">Criação e Redesign de sites institucionais, E-commerces, blogs, portais. Desenvolvimento de sistemas, integrações ou aplicações para diversas aplicações e áreas. Crie as mais complexas soluções de forma simples e rápida.</span>
                        </div>
                        <div className="bg-card hover:bg-card/80 p-4 transition-colors duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="350">
                            <Star size={40} />
                            <h4 className="text-white text-xl font-semibold my-6 mb-2">Lançamento e coprodução</h4>
                            <span className="text-sm font-light text-white/80">Estratégia, copywriting, gestão de tráfego, ferramentas de automação e armazenamento de e-mails, design, hospedagem, criação de grupos de whatsapp, dentre outras ações para lançar o seu infoproduto.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:h-[630px] bg-background-dark pb-20 pt-4 lg:py-20 flex flex-col justify-center relative overflow-hidden">
                <div className="relative lg:absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-10">
                    <div className="flex items-center gap-10 w-full max-w-7xl px-4 lg:px-0 flex-wrap">
                        <div className="h-[400px] lg:h-[450px] w-[400px] relative before:absolute 
                                        before:right-[-16px] before:left-[-16px] before:top-[-16px] before:bottom-[100px]
                                        lg:before:right-[150px] lg:before:left-auto lg:before:top-[-50px] lg:before:bottom-[-50px]
                                        before:bg-card before:w-[1000px]
                        ">
                            <Image src={'/images/escritorio_01.jpg'} alt="" sizes="100%" fill data-aos="fade-right" data-duration="3000" />
                        </div>
                        <div className="flex-1 max-w-xl">
                            <span className="text-sm font-light text-white/90 block mb-2 uppercase" data-aos="fade-up" data-aos-delay="50">Tema Digital</span>
                            <h2 className="text-3xl lg:text-5xl title mb-4 max-w-4xl" data-aos="fade-up" data-aos-delay="100">Sonhar. Inovar. Implementar.</h2>
                            <p className="text-sm font-light text-white/90 leading-7" data-aos="fade-up" data-aos-delay="150">Nossa agência criativa está há mais de 13 anos se destacando no mercado goiano. Cultivamos ideias inteligentes para a sua empresa. Seguindo os padrões do setor, construímos um portfólio impressionante.</p>
                            <Link href={'/portfolio'} className="w-fit h-12 px-8 flex items-center justify-center border text-sm font-medium mt-8 border-white/30 hover:border-white transition-colors" data-aos="fade-up" data-aos-delay="200">NOSSOS PROJETOS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}