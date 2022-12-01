import Aos from 'aos';
import { useEffect } from 'react';
import Card from '../UI/Card';
import  Link  from 'next/link';

import style from './Features.module.css';
import useTranslation from 'next-translate/useTranslation';

const Features = () => {
  const {t} = useTranslation("common");

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      dir={t('dir')}
      className={`${style.feature} d-flex flex-wrap justify-content-around align-aitems-center  my-5`}>
      <span className={style.service_title}>
        {' '}
        <Link href="/sarwa-insurance/product/retail">
          {t('servicesTitle')}
        </Link>{' '}
      </span>
      <Card
        content={t('isuranceCar')}
        icon={
          'https://contact-clients-dev.s3.amazonaws.com/InsuranceMotorIcon.png'
        }
        delay="500"
      />
      <Card
        content={t('isuranceAc')}
        icon={
          'https://contact-clients-dev.s3.amazonaws.com/InsuranceLiabiltyIcon.png'
        }
        delay="1000"
      />
      <Card
        content={t('isurancebl')}
        icon={
          'https://contact-clients-dev.s3.amazonaws.com/InsurancePropertyIcon.png'
        }
        delay="1500"
      />
      <Card
        content={t('isuranceEng')}
        icon={
          'https://contact-clients-dev.s3.amazonaws.com/InsuranceEngineeringIcon.png'
        }
        delay="2000"
      />
      <Card
        content={t('isuranceSea')}
        icon={
          'https://contact-clients-dev.s3.amazonaws.com/InsuranceMarineIcon.png'
        }
        delay="2500"
      />
      <Card
        content={t('isurancef')}
        icon={
          'https://contact-clients-dev.s3.amazonaws.com/InsuranceCreditIcon.png'
        }
        delay="3000"
      />
      <Card 
        content={t('isuranceMed')} 
        icon="https://contact-clients-dev.s3.amazonaws.com/InsuranceMidicalIcon.png" 
        delay="3000" />
    </section>
  );
};

export default Features;
