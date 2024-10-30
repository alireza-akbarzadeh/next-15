import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

type StartupCardProps = {
  _createdAt: string;
  views: number;
  author: { _id: number };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
};

export function StartupCard(props: StartupCardProps) {
  const {
    _id,
    author,
    category,
    views,
    description,
    _createdAt,
    title,
    image,
  } = props;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="siz-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href="/startup/create"></Link>
        </div>
      </div>
    </li>
  );
}
