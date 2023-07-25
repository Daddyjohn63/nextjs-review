import Link from 'next/link';
import Heading from '@/components/Heading';

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews </Heading>
      <ul className="flex flex-col gap-3">
        <li className="border w-80 bg-white rounded shadow hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img
              src="/images/hollow-knight.jpg"
              alt="hollow-knight"
              width="320"
              height="180"
              className="rounded-t mb-2"
            />
            <h2 className="font-semibold font-orbitron text-center py-1">
              Hollow Knight
            </h2>
          </Link>
        </li>
        <li className="border w-80 bg-white rounded shadow hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
            <img
              src="/images/stardew-valley.jpg"
              alt="stardew-valley"
              width="320"
              height="180"
              className="rounded-t mb-2"
            />
            <h2 className=" font-semibold font-orbitron text-center py-1">
              Stardew Valley
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
