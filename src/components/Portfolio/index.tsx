import PortFolioCard from "./Card";

export default function Portfolio({projects} :  {projects: Card[]}) {
  return (
    <div className="bg-neutral-800 text-black px-4 pt-16 md:pt-24 lg:px-8">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col gap-y-8">
          <h2 className="text-center mx-auto text-3xl font-bold uppercase text-neutral-100">
            Portfolio 
          </h2>
          {/* Portfolio of example websites with a thumbnail and some information to the side in an alternating way. left to right- right to left- etc. */}
          <div className="flex flex-col pb-8">
            <div className="md:columns-3 gap-2 overflow-none">
              {/* Card with a thumbnail with a link to the website and some information to the side, on hover an overlay is displayed with some information about the project */}
              {projects.map((project, index) => (
                <div className="relative py-2 w-full h-max overflow-hidden shadow-lg shadow-black/30 lg:shadow-xl" key={`${project.title}-${index}`}>
                  <PortFolioCard props={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
