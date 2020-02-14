import { useRouter } from 'next/router';
import PreviewCampaignItem from '../../components/PreviewCampaignItem';


function PP() {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </>
  );
}

export default PP;