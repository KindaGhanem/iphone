

interface pargraphInter {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  span1: string;
  span2: string;
  winsec?: string;
  exploresec?: string;

}


export default function PargraphCommon({p1 , p2 ,p3 ,p4 , span1 , span2 , winsec , exploresec} : pargraphInter) {
  return (
    <div className={`flex justify-between items-center flex-wrap md:flex-nowrap gap-8  ${exploresec ? 'md:px-10' : ''}`} data-aos="fade-down">
    <p className={`text-lg md:text-xl leading-relaxed text-[#86868b]  ${exploresec ? ' md:pr-7' : ''} ${winsec ? 'max-w-[512px]' : ''}`}>{p1} <span className='text-white font-semibold'> {span1} </span>{p2}</p>
    <p className={`text-lg md:text-xl leading-relaxed text-[#86868b] ${exploresec ? '  md:pl-7' : ''} ${winsec ? 'max-w-[512px]' : ''} `}>{p3} <span className={`text-white font-semibold ${winsec ? ' text-3xl md:text-5xl block ' : ''}`}>{span2}</span>  {p4}</p>
    </div>
  )
}
