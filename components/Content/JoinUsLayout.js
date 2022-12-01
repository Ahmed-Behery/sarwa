import Banner from '../UI/Banner';
import JoinUsForm from './JoinUsForm';

const JoinUsLayout = () => {
  const imgUrl = "https://contact-clients-dev.s3.amazonaws.com/JoinUsBannar.jpg";
  return (
    <div>
      <Banner imgUrl={imgUrl} height={'250px'} />
      <JoinUsForm />
    </div>
  );
};

export default JoinUsLayout;
