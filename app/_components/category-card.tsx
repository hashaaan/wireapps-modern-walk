import Link from "next/link";
import { cn } from "@/_lib/utils";

type CategoryCardProps = {
  category: string;
  href: string;
  className?: string;
};

const CategoryCard = ({
  category,
  href = "#",
  className,
}: CategoryCardProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex justify-center items-center h-80 rounded-3xl shadow-xl px-4 py-6",
        className
      )}
    >
      <div className="text-5xl font-bold text-white text-center">
        {category}
      </div>
    </Link>
  );
};

export default CategoryCard;
