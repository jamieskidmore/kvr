import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Review({
  name,
  date,
  rating,
  description,
}: {
  name: string;
  date: string;
  rating: number;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <div>
        <p className="font-semibold">{name}</p>
        <hr />
      </div>
      <p className="flex justify-between">
        <span>
          {rating} <FontAwesomeIcon icon={faStar} />
        </span>
        <span>{date}</span>
      </p>
      <p className="max-w-3xl mx-auto">{description}</p>
    </div>
  );
}
