import { useEffect, useRef, useState } from "react";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { slides } from "../../Data/Data";



export default function VideoSlider() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === current) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [current]);

  const handleEnded = () => {
    setCurrent((prev) => (prev + 1 < slides.length ? prev + 1 : 0));
  };

  const togglePlay = () => {
    const video = videoRefs.current[current];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  slides

  
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="relative overflow-hidden">
          <div   className="flex gap-[100px] transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%) md:translateX(-${current * 80}%)` }}>
            {slides.map((slide, i) => (
              <div key={slide.id} className="w-full md:w-[80%] flex-shrink-0 relative" >
                <video  src={slide.src} ref={(el) => {
                    if (el) videoRefs.current[i] = el;
                  }}
                  onEnded={handleEnded} muted className="w-full object-cover h-[674px] rounded-3xl"
                />
                <div className="absolute top-10 left-10 text-white space-y-2">
                  {slide.texts.map((text, idx) => (
                    <p key={idx} className="text-xl md:text-2xl font-medium">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-8 justify-center items-center mt-6 pb-14" >

        <div className="flex justify-center items-center space-x-3 bg-gray-700 px-8 py-4 rounded-full "  data-aos="fade-right">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>


        <div className="flex justify-center"  data-aos="fade-left">
          <button
            onClick={togglePlay}
            className="bg-gray-700 text-white p-4 rounded-full"
          >
            {isPlaying ? <CiPause1 /> : <CiPlay1 /> }
          </button>
        </div>
      </div>
    </>
  );
}
