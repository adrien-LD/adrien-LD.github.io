const technologyStack = ["JS", "CSS", "React", "Vue"];

export const TechnologyStackPanel = () => {
  return (
    <div className="mx-a pos-fixed shadow-2xl w-[1110px] h-[728px]">
      {technologyStack.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};
