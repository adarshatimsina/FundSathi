import CampaignList from "./_components/campaignList";
import Landing from "./_components/landing";

export default function Home() {
  return (
    <div>
      <Landing/> 
      <div className='p-10 md:px-36 lg:px-48'>
        <CampaignList />
      </div>
    </div>
  );
}
