import { useRouter } from 'next/router';
import PreviewCampaignItem from '../../components/PreviewCampaignItem';

export default function Post() {
  const router = useRouter();

  console.log('helllo');

  return (
    <>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </>
  );
}
