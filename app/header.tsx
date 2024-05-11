type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="border-b-4 w-full text-center pt-6 pb-4">
      <h1 className="text-6xl font-bold">{title}</h1>
    </div>
  );
};

export default Header;
