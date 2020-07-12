import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';

const Sluggerino: React.FC<{ text: string }> = ({ text }) => {
    const router = useRouter();
    return <div>{text}</div>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://cat-fact.herokuapp.com/${params.slug}`);
    const facts = await res.json();

    // Pass post data to the page via props
    return { props: { text: facts.all[0].text } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { slug: 'facts' } }],
        fallback: false,
    };
};

export default Sluggerino;
