import Link from "next/link";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="border-b-4 border-mw-gray-200 w-full text-center pt-6 pb-4 drop-shadow">
      <Link href="/">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
      </Link>
    </header>
  );
};

export default Header;
