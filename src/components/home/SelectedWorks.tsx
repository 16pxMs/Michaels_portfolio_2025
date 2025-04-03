interface WorkItem {
  id: string;
  title: string;
}

export const SelectedWorks = () => {
  const works: WorkItem[] = [
    { id: "001", title: "Project title" },
    { id: "001", title: "Project title" },
    { id: "001", title: "Project title" },
    { id: "001", title: "Project title" },
  ];

  return (
    <div className="max-w-[596px] flex flex-col gap-8 mx-auto">
      <div className="flex items-center gap-2.5 flex-wrap">
        <div className="text-white text-base font-bold h-8 bg-[#B0B0B0] px-3 py-2 rounded-[100px]">
          Selected works
        </div>
        <div className="text-white text-base h-8 bg-[#494949] px-4 py-2 rounded-[100px]">
          Resume
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[29px] max-sm:grid-cols-1">
        {works.map((work, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="text-base text-white">{work.id}</div>
            <div className="text-base text-white">{work.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
