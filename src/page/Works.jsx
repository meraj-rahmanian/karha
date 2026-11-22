import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { works } from "../../public/works";

export default function Works() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const itemRefs = useRef(new Map());
  const previousPositions = useRef(new Map());
  const filter = ["همه", "اپلیکیشن", "سایت", "فروشگاه"];

  const activeFilters = selectedFilters.length ? selectedFilters : [0];
  const inactiveFilters = filter
    .map((_, index) => index)
    .filter((index) => !activeFilters.includes(index));
  const orderedFilter = [...activeFilters, ...inactiveFilters];

  const visibleWorks = activeFilters.includes(0)
    ? works
    : works.filter((work) =>
        activeFilters.some((index) => filter[index] === work.category),
      );

  useLayoutEffect(() => {
    const previous = previousPositions.current;

    itemRefs.current.forEach((element, index) => {
      const oldPosition = previous.get(index);
      if (!oldPosition) return;

      const newPosition = element.getBoundingClientRect();
      const x = oldPosition.left - newPosition.left;
      const y = oldPosition.top - newPosition.top;
      if (x === 0 && y === 0) return;

      element.style.transition = "none";
      element.style.transform = `translate(${x}px, ${y}px)`;
      element.getBoundingClientRect();
      element.style.transition = "";
      element.style.transform = "";
    });

    previous.clear();
  }, [selectedFilters]);

  const handleFilterClick = (index) => {
    previousPositions.current = new Map(
      [...itemRefs.current].map(([itemIndex, element]) => [
        itemIndex,
        element.getBoundingClientRect(),
      ]),
    );

    setSelectedFilters((current) => {
      if (index === 0) return current.length ? [] : current;
      return current.includes(index)
        ? current.filter((selectedIndex) => selectedIndex !== index)
        : [index, ...current];
    });
  };

  return (
    <div className="pt-20">
      <div className="flex flex-col max-w-300 mx-auto px-2 md:px-4">
        <span className="text-[32px] md:text-[48px] font-extrabold p-4">
          نمونه کارها
        </span>

        <div className="flex flex-wrap items-center gap-4 p-4">
          {orderedFilter.map((index, position) => (
            <Fragment key={filter[index]}>
              <span
                ref={(element) => {
                  if (element) itemRefs.current.set(index, element);
                  else itemRefs.current.delete(index);
                }}
                className={`filter_style cursor-pointer ${activeFilters.includes(index) ? "filter_style_active" : ""}`}
                onClick={() => handleFilterClick(index)}
              >
                {filter[index]}
              </span>
              {position === activeFilters.length - 1 &&
                inactiveFilters.length > 0 && (
                  <span className="w-px h-6 bg-[#DDD3C3]" />
                )}
            </Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pb-12 md:pb-24">
          {visibleWorks.map((work) => (
            <div
              key={work.name}
              className="bg-[#F7F3EC] cursor-pointer border border-[#DDD3C3] hover:border-[#23201D] transition-colors"
            >
              <img
                src={work.img}
                alt={work.name}
                className="w-full h-48 object-cover block bg-[#EFE7D8]"
              />

              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#23201D]">
                  {work.name}
                </h3>
                <span className="text-[14px] text-[#857F6B]">
                  {work.category} - {work.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}