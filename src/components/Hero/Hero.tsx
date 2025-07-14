import MainTitle from '../MainTitle/MainTitle';

interface HeroInter {
  mainTitle: string;
  herovideo1?: string;
  herovideo2?: string;
  herobtn: string;
  texthero: string;
}

export default function Hero({ mainTitle, herobtn, herovideo1, herovideo2 , texthero}: HeroInter) {

  return (
    <section className='h-screen bg-black w-full flex flex-col justify-between items-center'>
      <MainTitle mainTitle={mainTitle} herotitle={'herotitle'} />
      <video data-aos="flip-left" autoPlay muted loop className="w-[80%] !hidden md:!block">
        <source src={herovideo1} type="video/mp4" />
      </video>
      <video data-aos="flip-left" autoPlay muted loop className="w-[80%] !block md:!hidden">
        <source src={herovideo2} type="video/mp4" />
      </video>
      <div data-aos="fade-up" className='flex justify-center items-center flex-col gap-7'>
        <button className="bg-[#2997ff] text-white rounded-3xl px-5 py-2  text-lg hover:text-[#2997ff] hover:bg-white">{herobtn}</button>
        <p className='text-white font-normal text-xl pb-14'>{texthero}</p>
      </div>
    </section>
  );
}
