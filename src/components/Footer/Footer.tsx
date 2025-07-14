interface FooterLinks {
  id: number;
  link: string;
}

interface footerInter {
  parfooter1: string;
  spanfooter1: string;
  parfooter2: string;
  parfooter3: string;
  copyrightfooter: string;
  footerLinks: FooterLinks[];
}

export default function Footer({
  parfooter1,
  spanfooter1,
  parfooter2,
  parfooter3,
  copyrightfooter,
  footerLinks
}: footerInter) {
  return (
    <>
      <footer className="py-5 bg-black px-5 lg:px-28 border-y-0 border-x-0">
        <div className="max-w-screen-xl mx-auto">
          <div>
            <p className="text-xs font-semibold text-gray-500">
              {parfooter1}
              <span className="underline text-blue-600 cursor-pointer">
                {spanfooter1}
              </span>
              {parfooter2}
            </p>
            <p className="text-xs font-semibold text-gray-500">
              {parfooter3}
            </p>
          </div>

          <div className="my-5 h-px w-full bg-neutral-700" />

          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-xs font-semibold text-gray-500">
              {copyrightfooter}
            </p>
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              {footerLinks?.map((element) => (
                <p className="text-xs font-semibold text-gray-500" key={element.id}>
                  {element.link}
                </p>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
