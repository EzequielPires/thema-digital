export function CardComment() {
    return (
        <div className="lg:px-20">
            <div className="flex flex-wrap justify-center gap-8 items-center bg-zinc-900 p-4">
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <img src={'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg'} className="object-cover w-full h-full" />
                    </div>
                    <h4 className="text-xl font-semibold mb-1 mt-2">Christopher Michael</h4>
                    <span className="text-sm font-light text-white/70">Guardiões da Galáxia</span>
                </div>
                <div className="flex-1">
                    <p className="text-center lg:text-start">"Tive uma experiência geral muito positiva com a empresa XYZ. Eles forneceram um excelente serviço ao cliente e foram muito responsivos às minhas perguntas e preocupações. A equipe foi amigável e profissional, tornando a interação muito agradável. Além disso, os produtos/serviços oferecidos pela empresa são de alta qualidade e atenderam às minhas expectativas. A entrega foi pontual, e qualquer problema que surgiu foi resolvido de maneira eficiente."</p>
                </div>
            </div>
        </div>
    )
}