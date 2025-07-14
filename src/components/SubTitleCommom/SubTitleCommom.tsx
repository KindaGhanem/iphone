
interface subtitleInter {
    par1: string;
    par2: string;
    wingaming?: string;

}


export default function SubTitleCommom({par1 , par2 , wingaming} : subtitleInter) {
  return (
    <div className={`mt-16 mb-12 text-start text-white ${wingaming ? '!text-center' : ''}`}  data-aos="fade-up">
        <p className="text-5xl lg:text-7xl font-semibold pt-20">{par1}</p>
        <p className="text-5xl lg:text-7xl font-semibold py-10">{par2}</p>
    </div>
  )
}
