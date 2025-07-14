

interface mainTitle {
  mainTitle: string;
  herotitle?: string;
  highlight?: string;
  closerlook?: string;

}



export default function MainTitle({mainTitle , herotitle ,highlight , closerlook } : mainTitle) {
  return (
    <>
    <h1 data-aos="fade-down" className={`font-semibold text-start text-[#94928d] 
      ${herotitle ? 'text-3xl pt-40 text-center' : ''} 
      ${highlight ? 'text-3xl md:text-6xl' : ''} 
      ${closerlook ? `text-5xl  font-bold !pt-14` : ''}

      `}>{mainTitle}</h1>
</>

  )
}
