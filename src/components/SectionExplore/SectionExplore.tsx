import { useRef } from 'react';


import exploreVideo from './../../assets/videos/explore.mp4'
import MainTitle from '../MainTitle/MainTitle';
import PargraphCommon from '../PargraphCommon/PargraphCommon';
import SubTitleCommom from '../SubTitleCommom/SubTitleCommom';
import { images } from '../../Data/Data';


interface exploreInter {
  mainTitle: string;
  par1: string;
  par2: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  span1: string;
  span2: string;

}

const Features = ({mainTitle , p1 , p2 ,p3 ,p4 , span1 , span2 , par1 ,par2} : exploreInter ) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);


images

  return (
    <section className=" py-16 bg-zinc-900 px-5 lg:px-28 text-white ">
    <MainTitle mainTitle={mainTitle} closerlook='closerlook'  />

        <div className="flex flex-col justify-center items-center">
          <SubTitleCommom par1={par1} par2={par2} />
          
          <div className=' max-w-[1100px] md:px-20'  data-aos="flip-left">
            <video playsInline muted autoPlay loop ref={videoRef} className="object-cover object-center rounded-lg shadow-lg h-[600px] md:h-[482px]">
              <source src={exploreVideo} type="video/mp4" />
            </video>

          <div className="grid md:grid-cols-2 mb-16"  data-aos="flip-left">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidde rounded-lg shadow-lg">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover object-center " />
              </div>
            ))}
          </div>
          <PargraphCommon p1={p1} p2={p2} p3={p3} p4={p4} span1={span1} span2={span2} exploresec='exploresec' />
          </div>

        </div>
    </section>
  );
};

export default Features;

