import UpdateCampaignItem from '../components/UpdateCampaignItem';

const UpdatePage = ({ query }) => (
  <div>
    <UpdateCampaignItem id={query.id} />
  </div>
);

export default UpdatePage;
