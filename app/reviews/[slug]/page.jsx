import Heading from '@/components/Heading';
import ShareLinkButton from '@/components/ShareLinkButton';
import { getReview, getSlugs } from '@/lib/reviews';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map(slug => ({ slug })); //turn the array of strings into an object
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title
  };
}

export default async function ReviewPage({ params: { slug } }) {
  //console.log('[RevewPage] props:', props);
  const review = await getReview(slug);
  //console.log('[Review Page] rendering', slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}</p>
      <ShareLinkButton />
      <img
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="rounded mb-2"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
}
