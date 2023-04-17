import Link from "next/link";

interface BlogItemProps {
  description: string;
  date: string;
  href: string;
  title: string;
}

export const BlogItem = ({ href, title, description, date }: BlogItemProps) => {
  return (
    <Link href={href}>
      <div className="rounded-xl border-2 border-gray-800 p-6 hover:bg-gray-800 hover:bg-opacity-50 h-full">
        <span className="text-xs text-gray-500">{date}</span>
        <h4 className="my-2 text-2xl font-bold line-clamp-2">{title}</h4>
        <p className="text-sm text-gray-300 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};
