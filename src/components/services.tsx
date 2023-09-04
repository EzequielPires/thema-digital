import { Layout, Box, PenTool, Star, MonitorSmartphone, Presentation, Brain, Hexagon, Instagram, Facebook, Repeat2, ScrollText } from "lucide-react";

export function Services() {
    return (
        <div className="grid lg:grid-cols-4 gap-4">
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <Layout size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Anúncios do Google</h4>
                <span className="text-sm font-light text-white/80">Desenvolvimento e gerenciamento de campanhas no Google Ads, Google Shopping, Google Maps, Remarketing e Display. Apareça sempre para o seu público.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <PenTool size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Identidade Visual</h4>
                <span className="text-sm font-light text-white/80">Elaboração de identidade visual em materiais, redes sociais, site, logotipo, mídia kits, materiais impressos, entre outros elementos gráficos.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <Facebook size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Gerenciamento de Redes Sociais</h4>
                <span className="text-sm font-light text-white/80">Estudo de tendências, identidade visual, hashtags e concorrentes.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <ScrollText size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Blog e Produção de Textos</h4>
                <span className="text-sm font-light text-white/80">Criação de blog, produção de artigos ou textos para sites, redes sociais, peças publicitárias entre outros.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <Repeat2 size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Plataforma de Conversão</h4>
                <span className="text-sm font-light text-white/80">Plataforma desenvolvida para monitorar leads, formulários e telefonemas provenientes das campanhas. </span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <Instagram size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Campanhas de Redes Sociais</h4>
                <span className="text-sm font-light text-white/80">Criação de campanhas de Facebook, Instagram, Linkedin, e outras redes sociais.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <MonitorSmartphone size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Website, Apps e Sistemas</h4>
                <span className="text-sm font-light text-white/80">Criação e Redesign de sites institucionais, E-commerces, blogs, portais. Desenvolvimento de sistemas, integrações ou aplicações para diversas aplicações e áreas. Crie as mais complexas soluções de forma simples e rápida.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <Star size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Lançamento e coprodução</h4>
                <span className="text-sm font-light text-white/80">Estratégia, copywriting, gestão de tráfego, ferramentas de automação e armazenamento de e-mails, design, hospedagem, criação de grupos de whatsapp, dentre outras ações para lançar o seu infoproduto.</span>
            </div>
        </div>
    )
}