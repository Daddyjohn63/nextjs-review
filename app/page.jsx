import Heading from '@/components/Heading';
import Link from 'next/link';
import { getFeaturedReview } from '@/lib/reviews';

export default async function HomePage() {
  const review = await getFeaturedReview();
  // console.log('[HomePage] Rendering!');
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the bast indie games, reviewed for you!</p>
      <div className="border  bg-white rounded shadow w-80 hover:shadow-xl sm:w-full">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt="stardew-valley"
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className=" font-semibold font-orbitron text-center py-1 sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
