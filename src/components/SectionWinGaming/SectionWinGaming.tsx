import { useRef } from 'react';
import PargraphCommon from '../PargraphCommon/PargraphCommon';
import SubTitleCommom from '../SubTitleCommom/SubTitleCommom';

interface wingamingInter {
  imgA17: string;
  pargraph1: string;
  pargraph2: string;
  pargraph3: string;
  imgframe: string;
  videoframe: string;
  bottomtext: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  span1: string;
  span2: string;
}


const SectionWinGaming = ({imgA17 , pargraph1 , pargraph2 , pargraph3 , imgframe , videoframe , bottomtext , p1 , p2 , p3, p4 ,span1 , span2} : wingamingInter) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="py-20 bg-black px-5 lg:px-28 border-0">
      <div className="max-w-screen-xl mx-auto px-4">

        <div className="flex justify-center items-center w-full my-20">
          <img src={imgA17} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center text-center font-semibold">
          <SubTitleCommom par1={pargraph1} par2={pargraph2} wingaming='wingaming' />
          <p className="my-7 text-gray-500 text-2xl ">{pargraph3}</p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative   flex justify-center items-center">
              <img src={imgframe} alt="frame" className=" relative z-10"/>
              <video className="absolute object-cover overflow-hidden w-[94.8%]" playsInline  preload="none" muted autoPlay ref={videoRef}>
                <source src={videoframe} type="video/mp4" />
              </video>
          </div>
          <p className="text-gray-500 font-semibold text-center mt-3">
            {bottomtext}
          </p>
        </div>
        <PargraphCommon p1={p1} p2={p2} p3={p3} p4={p4} span1={span1} span2={span2} winsec={'winsec'} />
      </div>
    </section>
  );
};

export default SectionWinGaming;
