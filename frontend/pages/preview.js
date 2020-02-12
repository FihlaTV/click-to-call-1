import PreviewCampaignItem from '../components/PreviewCampaignItem';
import MainStyles from '../components/styles/MainStyles';

const PreviewPage = ({ query }) => (
  <MainStyles>
    <PreviewCampaignItem id={query.id} />
  </MainStyles>
);

export default PreviewPage;