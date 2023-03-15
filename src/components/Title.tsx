const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex title">
      <div className="stroke-line" />
      <span >{title}</span>
    </div>
  );
};

export default Title;
