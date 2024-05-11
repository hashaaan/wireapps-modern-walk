import Link from "next/link";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex items-center justify-center border-b-4 w-full text-center pt-6 pb-4">
      <Link href="/">
        <h1 className="text-6xl font-bold">{title}</h1>
      </Link>
    </div>
  );
};

export default Header;
