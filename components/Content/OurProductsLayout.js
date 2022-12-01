import Aos from 'aos';
import { useEffect } from 'react';
import Banner from '../UI/Banner';
import PolicyCard from '../UI/PolicyCard';
import PolicyCard2 from '../UI/PolicyCard2';
import Tabs from '../UI/Tabs';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router'
import style from "../Content/JoinUsForm.module.css"

const OurProductsLayout = () => {
  const {t,lang} = useTranslation("common");
  const location = useRouter();
  const lifeRetail = [
    t('proTitle1L'),
    t('proTitle2L'),
    t('proTitle3L'),
    t('he'),
    t('she'),
    t('smoke'),
  ];
  const lifeCommerial = [
    t('pro'),
    t('ins'),
    t('co'),
    t('acc'),
    t('med'),
    t('sem'),
    t('accp'),
  ];
  const citys = [
    t('city'),
    t('alex'),
    t('Cairo'),
    t('Giza'),
    t('Qalyubia'),
    t('Port'),
    t('Suez'),
    t('Gharbia'),
    t('Dakahlia'),
    t('Asyut'),
    t('Fayoum'),
    t('Aswan'),
    t('El-Minya'),
    t('Luxor'),
    t('Sohag'),
    t('Kafr'),
  ];

  useEffect(() => {
    Aos.init();
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(t('messageF'));
  };
 
  return (
    <div>
      <Banner
        imgUrl={
          location.pathname.includes('/sarwa-Life') ? "https://contact-clients-dev.s3.amazonaws.com/ProductsLiveBannar.jpg" : "https://contact-clients-dev.s3.amazonaws.com/ProductsInsBannar.jpg"
        }
        height={'250px'}
      />

      <div className="container mt-4 pg">
        <Tabs
          className="product-d"
          tabOneTitle={
            location.pathname.includes('/sarwa-Life')
              ? t('proLifeTitle')
              : t('retailT')
          }
          tabOneContent={
            <div>
              <PolicyCard
                imgUrl={
                  location.pathname.includes('/sarwa-Life')
                    ? "https://contact-clients-dev.s3.amazonaws.com/ProductLifeSaving.jpg"
                    : ' https://contact-clients-dev.s3.amazonaws.com/ProductInsMotor.jpg'
                }
                title={
                  location.pathname.includes('/sarwa-Life')
                    ? t('proTitle1L')
                    : t('proTitle1')
                }
                supTitle={
                  location.pathname.includes('/sarwa-Life')
                    ? t('')
                    : t('proSupTitle1')
                }
                text={
                  location.pathname.includes('/sarwa-Life')
                    ? t('proDesc1L')
                    : t('proDesc1')
                }
                imgRight={false}
                proLink="/sarwa-insurance/product/motorInsurance"
              />
              <PolicyCard
                imgUrl={
                  location.pathname.includes('/sarwa-Life')
                    ? 'https://contact-clients-dev.s3.amazonaws.com/ProductLifeDisability.jpg'
                    : 'https://contact-clients-dev.s3.amazonaws.com/ProductInsHome.jpg'
                }
                title={
                  location.pathname.includes('/sarwa-Life')
                    ? t('proTitle2L')
                    : t('proTitle2')
                }
                supTitle={
                  location.pathname.includes('/sarwa-Life')
                    ? t('')
                    : t('proSupTitle2')
                }
                text={
                  location.pathname.includes('/sarwa-Life')
                    ? t('proDesc2L')
                    : t('proDesc2')
                }
                imgRight={true}
                proLink="/sarwa-insurance/product/homeInsurance"
              />
              <PolicyCard
                imgUrl={
                  location.pathname.includes('/sarwa-Life')
                    ? 'https://contact-clients-dev.s3.amazonaws.com/ProductLiveDisabilityLong.jpg'
                    : 'https://contact-clients-dev.s3.amazonaws.com/ProductInsPersonal.jpg'
                }
                title={
                  location.pathname.includes('/sarwa-Life')
                    ? t('proTitle3L')
                    : t('proTitle3')
                }
                supTitle={
                  location.pathname.includes('/sarwa-Life')
                    ? t('')
                    : t('proSupTitle3')
                }
                text={
                  location.pathname.includes('/sarwa-Life')
                    ? t('proDesc3L')
                    : t('proDesc3')
                }
                imgRight={false}
                proLink="/sarwa-insurance/product/personalAccidents"
              />
              {location.pathname.includes('/sarwa-Life') ? (
                <div>
                  <PolicyCard
                    imgUrl={'https://contact-clients-dev.s3.amazonaws.com/ProductLiveMaleCancer.jpg' }
                    title={t('he')}
                    text={t('heDesc')}
                    imgRight={true}
                    proLink="/sarwa-insurance/product/product-3"
                  />
                  <PolicyCard
                    imgUrl={
                      'https://contact-clients-dev.s3.amazonaws.com/ProductLiveFemaleCancer.jpg'
                    }
                    title={t('she')}
                    text={t('sheDesc')}
                    imgRight={false}
                  />
                  <PolicyCard
                    imgUrl={'https://contact-clients-dev.s3.amazonaws.com/ProductLiveSmokers.jpg'}
                    title={t('smoke')}
                    text={t('smokeDesc')}
                    imgRight={true}
                  />
                </div>
              ) : (
                ''
              )}
            </div>
          }
          tabTwoTitle={
            location.pathname.includes('/sarwa-Life')
              ? t('campanyL')
              : t('comercial')
          }
          tabTwoContent={
            location.pathname.includes('sarwa-Life') ? (
              <div>
                <div>
                  <PolicyCard2
                    imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductLiveGroupLife.jpg"
                    title={t('pro')}
                    text={t('proDesc')}
                    imgRight={false}
                  />
                  <PolicyCard2
                    imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductLiveGroupCreditLife.jpg"
                    title={t('ins')}
                    text={t('insDesc')}
                    imgRight={true}
                  />
                  <PolicyCard2
                    imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductLivePension.jpg"
                    title={t('co')}
                    text={t('coDesc')}
                    imgRight={false}
                  />
                  <PolicyCard2
                    imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductLivePersonal.jpg"
                    title={t('acc')}
                    text={t('accDesc')}
                    imgRight={true}
                  />
                  <PolicyCard2
                    imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductLiveMedical.jpg"
                    title={t('med')}
                    text={t('medDesc')}
                    imgRight={false}
                  />
                  <PolicyCard2
                    imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductLiveGroupLifeEnterprises.jpg"
                    title={t('sem')}
                    text={t('semDesc')}
                    imgRight={true}
                  />
                  <PolicyCard2
                    imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductLiveVoluntary.jpg"
                    title={t('accp')}
                    text={t('accpDesc')}
                    imgRight={false}
                  />
                </div>
              </div>
            ) : (
              <div>
                <PolicyCard2
                  imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductInsProperty.jpg"
                  title={t('property')}
                  supTitle={t('')}
                  text={t('propertyDesc')}
                  imgRight={false}
                  proLink="/sarwa-insurance/product/propertyInsurance"
                />
                <PolicyCard2
                  imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductInsEngineering.jpg"
                  title={t('eng')}
                  supTitle={t('engSup')}
                  text={t('engDesc')}
                  imgRight={true}
                  proLink="/sarwa-insurance/product/engineeringInsurance"
                />
                <PolicyCard2
                  imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductInsMotorFleet.jpg"
                  title={t('motor')}
                  supTitle={t('motorSup')}
                  text={t('motorDesc')}
                  imgRight={false}
                  proLink="/sarwa-insurance/product/motorFleetInsurance"
                />
                <PolicyCard2
                  imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductInsMarine.jpg"
                  title={t('marine')}
                  supTitle={t('marineSup')}
                  text={t('marineDesc')}
                  imgRight={true}
                  proLink="/sarwa-insurance/product/marineInsurance"
                />
                <PolicyCard2
                  imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductInsPublicLiability.jpg"
                  title={t('liability')}
                  supTitle=""
                  text={t('liabilityDesc')}
                  imgRight={false}
                  proLink="/sarwa-insurance/product/publicLiabilityInsurance"
                />
                <PolicyCard2
                  imgUrl="https://contact-clients-dev.s3.amazonaws.com/ProductInsMedical.jpg"
                  title={t('medical')}
                  // supTitle={t("medicalSup")}
                  text={t('medicalDesc')}
                  imgRight={true}
                  proLink="/sarwa-insurance/product/medicalInsurance"
                />
              </div>
            )
          }
        />

        {location.pathname.includes('sarwa-Life') ? (
          <div id="reqP">
            <div
              dir={t('dir')}
              className={style.join__form  +" "+ style.contact__formL +" my-5"}
              id="join"
            >
              <h3 className="text-center text-white"> {t('Reqp')}</h3>
              
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="col-md-12 mb-3">
                  <input
                    type="text"
                    className={t('text-align') + " " + style.form_control}
                    placeholder={t('namePlace1')}
                    required
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <input
                    type="email"
                    placeholder={t('mailPlace')}
                    className={t('text-align') +" " + style.form_control}
                    required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    placeholder={t('phonePlace')}
                    type="text"
                    className={t('text-align') + " " + style.form_control}
                    required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <select type="text" className={style.form_select + " " + style.form_control} required>
                    {citys.map((city) => {
                      return <option key={city.index}>{city}</option>;
                    })}
                  </select>
                </div>

                <div className="col-lg-12">
                  <select className={style.form_select +" mb-3 " +style.form_control} required>
                    <option className={style.opt_title} disabled>
                      {t('retailT')}
                    </option>
                    {lifeRetail.map(function (policy, index) {
                      return (<option key={index}>{policy}</option>
                      );
                    })}

                    <option className={style.opt_title} disabled>
                      {t('comercial')}
                    </option>
                    {lifeCommerial.map(function (policy, index) {
                      return (
                          <option key={index}>{policy}</option>
                      );
                    })}
                  </select>

                  <div className={style.btn_glob_contain}>
                    <button className="btn btn-primary w-100 " type="submit">
                      {t('applyBtn')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default OurProductsLayout;
