import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
export default function PortFolioCard({ props }: { props: Card }) {
  return (
    <a href={props.href}>
    <div className=" bg-neutral-100 rounded-xl">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {typeof(props.image) === "string" ? <img className="w-full" src={`${props.image}`} alt="Mountain" /> : 
            <Image
              alt="portfolio-image"
              className="w-full"
              src={props.image}
            />
        
        }
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {props.tags.map((tag, index) => (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              key={`${tag}-${index}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    </a>
  );
}
