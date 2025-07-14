
interface highLightInter {
  linktxt: string;
  iconlink: React.ReactNode;
}



export default function HighLightLinks({linktxt , iconlink} : highLightInter) {
  return (
    <div className="text-[#2997ff] text-xl flex gap-2 items-center">
    <p>{linktxt}</p>
    {iconlink}
    </ div>
  )
}
