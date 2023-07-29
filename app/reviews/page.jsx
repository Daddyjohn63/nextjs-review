import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';

export const metadata = {
  title: 'Reviews'
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
  //console.log('[Reviews Page] reviews:', reviews);
  return (
    <>
      <Heading>Reviews </Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map(review => (
          <li
            key={review.slug}
            className="border w-80 bg-white rounded shadow hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt="hollow-knight"
                width="320"
                height="180"
                className="rounded-t mb-2"
              />
              <h2 className="font-semibold font-orbitron text-center py-1">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
