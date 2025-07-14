import { useState} from "react";
import MainTitle from "../MainTitle/MainTitle";

interface Sizes {
  label: string;
  value: string;
}

interface Models {
  img: string;
  title: string;
  color: string[];
}

interface closerLookinter {
  mainTitle: string;
  closerlooktext: string;
  models: Models[];
  sizes: Sizes[];
}

const SectionCloserLook = ({ mainTitle, closerlooktext, sizes, models }: closerLookinter) => {
  if (!models || models.length === 0) return <p className="text-white text-center">No models available.</p>;

  const [size, setSize] = useState("small");
  const [model, setModel] = useState(models[0]);

  return (
    <section className="px-5 lg:px-28 bg-black">
      <MainTitle mainTitle={mainTitle} highlight="highlight" closerlook='closerlook' />
      <div className="max-w-5xl mx-auto">


        <div className="flex flex-col items-center mt-10">
          <div className="w-full max-w-md h-[400px] md:h-[500px] overflow-hidden relative">
            <img src={model.img} alt={model.title} className={`object-contain w-[90%] h-[90%] absolute top-0 left-0 transition-transform duration-1000 ${ size === "large" ? "translate-x-[-100%]" : "translate-x-0" }`}/>
            {size === "large" && (
              <img src={model.img} alt={`${model.title}other`} className="m-auto object-contain w-full h-full absolute top-0 left-full transition-transform duration-1000 translate-x-[-100%]" />
            )}
          </div>
          <p className="text-sm max-w-md mx-auto my-5 text-white"> {closerlooktext} </p>

          <div className="flex flex-col md:flex-row items-center gap-4 pb-14"  data-aos="fade-right">
            <ul className="flex items-center bg-[#42424570] p-[15px] rounded-full">
              {models.map((item, i) => (
                <li key={i}  className="w-6 h-6 rounded-full mx-2 cursor-pointer border-gray-300 "  style={{ backgroundColor: item.color[0] }}  onClick={() => setModel(item)} ></li>
              ))}
            </ul>

            <div className="flex items-center gap-2 bg-[#42424570] p-2 rounded-full"  data-aos="fade-left">
              {sizes?.map(({ label, value }) => (
                <button key={label} onClick={() => setSize(value)} className={`px-2 py-1 rounded-full ${   size === value ? "bg-white text-black" : "bg-transparent text-white border-white" } transition`}> {label} </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCloserLook;
