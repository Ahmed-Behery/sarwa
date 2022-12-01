import { Fragment } from 'react';
import ContactLayout from '../../components/Content/ContactLayout';
import Banner from '../../components/UI/Banner';
import { useRouter } from 'next/router'
import Head from 'next/head'
const ContactUsPage = () => {
  
  const location = useRouter();
  
  return (
    <Fragment>
    <Head>
          <title>Sarwa Life | Contact Us</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className={
          location.pathname.includes('/sarwa-Life') ? 'color-green ' : ''}>
        <Banner imgUrl="https://contact-clients-dev.s3.amazonaws.com/ContacUsLifeBannar.jpg" height={'250px'}/>
        <ContactLayout />
      </div>
    </Fragment>
    
  );
};

export default ContactUsPage;
