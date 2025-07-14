import HighLightLinks from "./HighLightLinks";
import HighLightSlider from "./HighLightSlider";
import MainTitle from "../MainTitle/MainTitle";



interface highLightInter {
  mainTitle: string;
  link1: string;
  link2: string;
  iconlink1:React.ReactNode ;
  iconlink2:React.ReactNode ;
}

export default function SectionHighlight({mainTitle ,link1 , link2 , iconlink1 , iconlink2 } : highLightInter) {
  return (
    <section className="!bg-[#101010] px-5 lg:px-28">
    <div className="flex justify-between flex-wrap items-end py-14 ">
        <MainTitle mainTitle={mainTitle} highlight='highlight' />
        <div data-aos="fade-down" className="flex flex-wrap gap-3 pt-8 md:pt-0 ">
          <HighLightLinks linktxt={link1} iconlink={iconlink1} />
          <HighLightLinks linktxt={link2} iconlink={iconlink2} />
        </div>
    </div>
    <HighLightSlider />
    
      
    </section>
  )
}
