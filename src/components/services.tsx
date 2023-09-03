import { Layout, Box, PenTool, Star, MonitorSmartphone, Presentation, Brain, Hexagon } from "lucide-react";

export function Services() {
    return (
        <div className="grid lg:grid-cols-4 gap-4">
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <Hexagon size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Construção de Marcas</h4>
                <span className="text-sm font-light text-white/80">Estratégias e ações para criar, moldar e fortalecer a identidade de uma marca, estabelecendo conexões significativas com seu público-alvo e garantindo sua presença duradoura no mercado.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <Brain size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Modernização de Marcas</h4>
                <span className="text-sm font-light text-white/80">Rejuvenescimento estratégico de identidades corporativas, atualizando-as para corresponder às tendências e demandas contemporâneas do mercado.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <Box size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Embalagens e Rótulos</h4>
                <span className="text-sm font-light text-white/80">Desenvolvimento de designs e elementos gráficos eficazes para embalagens de produtos, destacando-os nas prateleiras e comunicando sua qualidade.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <PenTool size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Design Gráfico e Comunicação</h4>
                <span className="text-sm font-light text-white/80">Criação visual e estratégica de materiais de comunicação que transmitam mensagens claras e impactantes, fortalecendo a identidade da marca.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <Star size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Assessoria em Endomarketing</h4>
                <span className="text-sm font-light text-white/80">Orientação especializada para melhorar o engajamento interno, promovendo uma cultura organizacional positiva e motivadora.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <MonitorSmartphone size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Desenvolvimento de Websites</h4>
                <span className="text-sm font-light text-white/80">Criação de sites funcionais e atraentes para fortalecer a presença online da marca e proporcionar uma experiência positiva ao usuário.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <Presentation size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Gestão de Mídias Sociais</h4>
                <span className="text-sm font-light text-white/80">Estratégias para administrar eficazmente as plataformas de mídias sociais, interagindo com o público e impulsionando a visibilidade da marca.</span>
            </div>
            <div className="bg-zinc-800 p-4 hover:bg-zinc-950 transition-colors duration-300 ease-in-out">
                <Layout size={40}/>
                <h4 className="text-white text-xl font-semibold my-6 mb-2">Tráfego em Mídias Sociais</h4>
                <span className="text-sm font-light text-white/80">Otimização do alcance e engajamento nas redes sociais, aumentando o tráfego direcionado e a presença online da marca.</span>
            </div>
        </div>
    )
}