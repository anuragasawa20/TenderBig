import UserCards from './UserCards';

const UserDetails = () => {
  return (
    <div className='flex justify-center m-10'>
      <div className="card-container mx-5">
        <UserCards className='my-5' description="Numbers and Counts" title="Career & Manpower" />
        <UserCards className='my-5' description="Numbers and Counts" title="Registrations" />
        <UserCards className='my-5' description="Numbers and Counts" title="Certifications" />
      </div>
      <div className='card-container mx-5'>
        <UserCards className='my-5' description="Numbers and Counts" title="Licenses" />
        <UserCards className='my-5' description="Numbers and Counts" title="Auction Materials" />
        <UserCards className='my-5' description="Numbers and Counts" title="Joint Venture" />
      </div>
      <div className="card-container mx-5">
        <UserCards className='my-5' description="Numbers and Counts" title="Online Tender Filling" />
        <UserCards className='my-5' description="Numbers and Counts" title="Offline Tender Filling" />
        <UserCards className='my-5' description="Numbers and Counts" title="Gem Registration" />
      </div>
    </div>
  );
};

export default UserDetails;

