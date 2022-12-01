
import style from './FilterFieldDropdown.module.css';
import style2 from './JoinUsForm.module.css';
import React, { useState,Fragment } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router'
const FilterFieldDropdown = () => {
  const [content, setContent] = useState('');
  const {t,lang} = useTranslation("common");
  const location = useRouter();
  const governs = [t('governate'), t('alex'), t('Cairo'), t('Giza'), t('Port')];
  const governsL = [t('governate'), t('Cairo')];
  const citys = [t('city'), t('alex'), t('Giza'), t('Port'), t('Cairo')];
  const citysL = [t('city'), t('Cairo')];
  const araes = [
    t('area1'),
    t('Bab Sharqi'),
    t('Dokki'),
    t('El-Gomhoreya'),
    t('Heliopolis'),
  ];
  const [selected, setSelected] = React.useState('');
  const [selected2, setSelected2] = React.useState('');
  const [selected3, setSelected3] = React.useState('');
  let input = false;

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    setSelected2(t('city'));
  };
  const changeSelectOptionHandler2 = (event) => {
    setSelected2(event.target.value);
    setSelected3(t('city'));
  };
  const changeSelectOptionHandler3 = (event) => {
    setSelected3(event.target.value);
  };

  if (
    selected == t('Cairo') &&
    selected2 == t('Cairo') &&
    selected3 == t('Heliopolis')
  ) {
    input = (
      <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/8PkwQW3zn11EpD3TA">
        <p className="text-center pt-4">{t('HeliopolisAd')}</p>
      </a>
    );
  } else if (
    selected == t('Cairo') &&
    selected2 == t('Cairo') &&
    selected3 == t('DownTwon')
  ) {
    input = location.pathname.includes('sarwa-insurance') ? (
      <Fragment>
        <a target="_blank" href=" https://maps.app.goo.gl/UJkGrqxwjVnsdzmN7">
          <p className="text-center pt-4">{t('inADD')}</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/gqqDbhHCN4DBuc1S6">
          <p className="text-center pt-4">{t('inADD1')}</p>
        </a>
      </Fragment>
    ) : (
      <a href="https://goo.gl/maps/tLNP6dSXspFWhTRTA" target="_blank" rel="noreferrer">
        {' '}
        <p className="text-center pt-4">{t('caAD')}</p>
      </a>
    );
  } else if (
    selected == t('alex') &&
    selected2 == t('alex') &&
    selected3 == t('Bab Sharqi')
  ) {
    input = (
      <a href="https://goo.gl/maps/hpYMppd66fRMeJ1Q6" target="_blank" rel="noreferrer">
        <p className="text-center pt-4">{t('alexAD')}</p>
      </a>
    );
  } else if (
    selected == t('Giza') &&
    selected2 == t('Giza') &&
    selected3 == t('Dokki')
  ) {
    input = (
      <a target="_blank" href="https://goo.gl/maps/u9WTuVws3CMKtyt66" rel="noreferrer">
        <p className="text-center pt-4">{t('giAD')}</p>
      </a>
    );
  } else if (
    selected == t('Port') &&
    selected2 == t('Port') &&
    selected3 == t('El-Gomhoreya')
  ) {
    input = (
      <a href="https://goo.gl/maps/ooVoZZmiJLtWfdLm6" target="_blank" rel="noreferrer">
        <p className="text-center pt-4">{t('poAD')}</p>
      </a>
    );
  }

  return (
    <div>
      <div
        className={style.filter__field  +" "+ style.branch_bg}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        {location.pathname.includes('sarwa-insurance') ? (
          <div className="row justify-content-around">
            <div className="col-lg-4 col-md-6 my-2">
              <label className="form-label">{t('governate')}</label>
              <select
                onChange={changeSelectOptionHandler}
                type="text"
                className="form-select"
                required
              >
                {governs.map((govern) => {
                  return (
                    <option key={govern.index}>{govern}</option> 
                    )})}
              </select>
            </div>

            <div className="col-lg-4 col-md-6 my-2">
              <label className="form-label">{t('city')}</label>
              <select
                onChange={changeSelectOptionHandler2}
                type="text"
                className="form-select"
                required
                value={selected2}
              >
                {selected == t('Cairo') ? (
                  <Fragment>
                    <option>{t('city')}</option>
                    <option>{t('Cairo')}</option>
                  </Fragment>
                ) : selected == t('alex') ? (
                  <Fragment>
                    <option>{t('city')}</option>
                    <option>{t('alex')}</option>
                  </Fragment>
                ) : selected == t('Giza') ? (
                  <Fragment>
                    <option>{t('city')}</option>
                    <option>{t('Giza')}</option>
                  </Fragment>
                ) : selected == t('Port') ? (
                  <Fragment>
                    <option>{t('city')}</option>
                    <option>{t('Port')}</option>
                  </Fragment>
                ) : (
                  ''
                )}
              </select>
            </div>

            <div className="col-lg-4 col-md-6 my-2">
              <label className="form-label">{t('area')}</label>
              <select
                onChange={changeSelectOptionHandler3}
                type="text"
                className="form-select"
                required
              >
                {selected2 == t('Cairo') ? (
                  <Fragment>
                    <option>{t('area1')}</option>
                    <option>{t('DownTwon')}</option>
                    <option>{t('Heliopolis')}</option>
                  </Fragment>
                ) : selected2 == t('alex') ? (
                  <Fragment>
                    <option>{t('area1')}</option>
                    <option>{t('Bab Sharqi')}</option>
                  </Fragment>
                ) : selected2 == t('Giza') ? (
                  <Fragment>
                    <option>{t('area1')}</option>
                    <option>{t('Dokki')}</option>
                  </Fragment>
                ) : selected2 == t('Port') ? (
                  <Fragment>
                    <option>{t('area1')}</option>
                    <option>{t('El-Gomhoreya')}</option>
                  </Fragment>
                ) : (
                  ''
                )}
              </select>
            </div>
            {input}

            {/* <div class="col-lg-3 col-md-6 my-2">
      <label class="form-label">{t("address")}</label>
      <Selection />
    </div> */}
            <div className="col-lg-12 col-md-6 my-2">
              <div className={style2.btn_glob_contain +" mt-3"}>
                <button
                  value="hi"
                  className={"btn btn-primary btn-glob color-sec " + style.search__pr}
                  type="submit"
                >
                  {t('search')}
                </button>

                {/* onClick={ ()=> setContent(<div className="contain-div d-inline">
        <label>PhoneNumber:</label ><span className="text-white">123456789</span> <br /> <label>PhoneNumber:</label><span className="text-white">123456789</span>
      </div>)} */}
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-around">
            <div className="col-lg-4 col-md-6 my-2">
              <label className="form-label">{t('governate')}</label>
              <select
                onChange={changeSelectOptionHandler}
                type="text"
                className="form-select"
                required
              >
                {governsL.map((city) => {
                  return (
                      <option key={city.index}>{city}</option>
                  );
                })}
              </select>
            </div>

            <div className="col-lg-4 col-md-6 my-2">
              <label className="form-label">{t('city')}</label>
              <select
                onChange={changeSelectOptionHandler2}
                type="text"
                className="form-select"
                required
              >
                {selected == t('Cairo') ? (
                 <Fragment>
                  <option>{t('city')}</option> 
                  <option>{t('Cairo')}</option>
                 </Fragment>
                ) : selected == t('alex') ? (
                  <Fragment>
                    <option>{t('city')}</option>
                    <option>{t('alex')}</option>
                  </Fragment>
                ) : selected == t('Giza') ? (
                  <Fragment>
                    <option>{t('city')}</option> <option>{t('Giza')}</option>
                  </Fragment>
                ) : selected == t('Port') ? (
                  <Fragment>
                    <option>{t('city')}</option> <option>{t('Port')}</option>
                  </Fragment>
                ) : (
                  ''
                )}
              </select>
            </div>

            <div className="col-lg-4 col-md-6 my-2">
              <label className="form-label">{t('area')}</label>
              <select
                onChange={changeSelectOptionHandler3}
                type="text"
                className="form-select"
                required
              >
                {selected2 == t('Cairo') ? (
                  <Fragment>
                    <option selected>{t('area1')}</option>
                    <option>{t('DownTwon')}</option>
                  </Fragment>
                ) : selected2 == t('alex') ? (
                  <Fragment>
                    <option selected>{t('area1')}</option>{' '}
                    <option>{t('Bab Sharqi')}</option>
                  </Fragment>
                ) : selected2 == t('Giza') ? (
                  <Fragment>
                    <option selected>{t('area1')}</option>{' '}
                    <option>{t('Dokki')}</option>
                  </Fragment>
                ) : selected2 == t('Port') ? (
                  <Fragment>
                    <option selected>{t('area1')}</option>{' '}
                    <option>{t('El-Gomhoreya')}</option>
                  </Fragment>
                ) : (
                  <Fragment>
                    <option disabled>المنطقة</option>
                  </Fragment>
                )}
              </select>
            </div>
            {input}

            {/* <div class="col-lg-3 col-md-6 my-2">
    <label class="form-label">{t("address")}</label>
    <Selection />
  </div> */}
            <div className="col-lg-12 col-md-6 my-2">
              <div className={style2.btn_glob_contain  + " mt-3"}>
                <button
                  value="hi"
                  className={"btn btn-primary btn-glob color-sec "+ style.search__pr}
                  type="submit"
                >
                  {t('search')}
                </button>

                {/* onClick={ ()=> setContent(<div className="contain-div d-inline">
      <label>PhoneNumber:</label ><span className="text-white">123456789</span> <br /> <label>PhoneNumber:</label><span className="text-white">123456789</span>
    </div>)} */}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="filter__field aos-init aos-animate ">
      <h3 className="text-white">Information Data</h3>
      <div>{content}</div>
    </div> */}
    </div>
  );
};

export default FilterFieldDropdown;

// import Selection from '../UI/Selection';
// import CardInfo from './CardInfo';
// import './FilterFieldDropdown.css';
// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// const FilterFieldDropdown = () => {
//   const [content, setContent] = useState('');
//   const [t, i18n] = useTranslation();

//   // t("governate")

//   const governates = [
//     { title: 'alex' },
//     { title: 'Cairo' },
//     { title: 'Giza' },
//     { title: 'Port' },
//   ];
//   const cities = [
//     { title: 'alex', parent: 'alex' },
//     { title: 'Giza', parent: 'Giza' },
//     { title: 'Port', parent: 'Port' },
//     { title: 'Cairo', parent: 'Cairo' },
//   ];
//   const araes = [
//     { title: 'Bab Sharqi', parent: 'alex' },
//     { title: 'Dokki', parent: 'Giza' },
//     { title: 'El-Gomhoreya', parent: 'Port' },
//     { title: 'Heliopolis', parent: 'Cairo' },
//   ];

//   const [governate, setGovernate] = React.useState('');
//   const [city, setCity] = React.useState('');
//   const [area, setArea] = React.useState('');
//   let input = false;

//   const changeGovernatesOptionHandler = (event) => {
//     setGovernate(event.target.value);
//     setCity(cities.find((x) => x.parent === event.target.value));
//   };
//   const changeCitiesOptionHandler = (event) => {
//     setCity(event.target.value);
//     setArea(araes.find((x) => x.parent === event.target.value));
//   };
//   const changeAreasOptionHandler = (event) => {
//     setArea(event.target.value);
//   };

//   if (
//     governate == t('Cairo') &&
//     city == t('Cairo') &&
//     area == t('Heliopolis')
//   ) {
//     input = (
//       <a target="_blank" href="https://goo.gl/maps/8PkwQW3zn11EpD3TA">
//         <p className="text-center pt-4">{t('HeliopolisAd')}</p>
//       </a>
//     );
//   } else if (
//     governate == t('Cairo') &&
//     city == t('Cairo') &&
//     area == t('DownTwon')
//   ) {
//     input = location.pathname.includes('sarwa-insurance') ? (
//       <>
//         <a target="_blank" href=" https://maps.app.goo.gl/UJkGrqxwjVnsdzmN7">
//           <p className="text-center pt-4">{t('inADD')}</p>
//         </a>
//         <a target="_blank" href="https://maps.app.goo.gl/gqqDbhHCN4DBuc1S6">
//           <p className="text-center pt-4">{t('inADD1')}</p>
//         </a>
//       </>
//     ) : (
//       <a href="https://goo.gl/maps/tLNP6dSXspFWhTRTA" target="_blank">
//         {' '}
//         <p className="text-center pt-4">{t('caAD')}</p>
//       </a>
//     );
//   } else if (
//     governate == t('alex') &&
//     city == t('alex') &&
//     area == t('Bab Sharqi')
//   ) {
//     input = (
//       <a href="https://goo.gl/maps/hpYMppd66fRMeJ1Q6" target="_blank">
//         <p className="text-center pt-4">{t('alexAD')}</p>
//       </a>
//     );
//   } else if (
//     governate == t('Giza') &&
//     area == t('Giza') &&
//     city == t('Dokki')
//   ) {
//     input = (
//       <a target="_blank" href="https://goo.gl/maps/u9WTuVws3CMKtyt66">
//         <p className="text-center pt-4">{t('giAD')}</p>
//       </a>
//     );
//   } else if (
//     governate == t('Port') &&
//     area == t('Port') &&
//     city == t('El-Gomhoreya')
//   ) {
//     input = (
//       <a href="https://goo.gl/maps/ooVoZZmiJLtWfdLm6" target="_blank">
//         <p className="text-center pt-4">{t('poAD')}</p>
//       </a>
//     );
//   }

//   return (
//     <div>
//       <div
//         className="filter__field  branch-bg"
//         data-aos="fade-up"
//         data-aos-delay="500"
//         data-aos-once="true"
//         data-aos-duration="1000"
//       >
//         {location.pathname.includes('sarwa-insurance') ? (
//           <div class="row justify-content-around">
//             <div class="col-lg-4 col-md-6 my-2">
//               <label class="form-label">{t('governate')}</label>
//               <select
//                 onChange={changeGovernatesOptionHandler}
//                 type="text"
//                 class="form-select"
//                 required
//               >
//                 {governates.map((govern) => {
//                   return (
//                     <>
//                       <option>{govern.title}</option>
//                     </>
//                   );
//                 })}
//               </select>
//             </div>

//             <div class="col-lg-4 col-md-6 my-2">
//               <label class="form-label">{t('city')}</label>
//               <select
//                 onChange={changeCitiesOptionHandler}
//                 type="text"
//                 class="form-select"
//                 required
//               >
//                 {cities
//                   .filter((x) => x.parent === governate)
//                   .map((cityItem) => {
//                     return (
//                       <>
//                         <option>{cityItem.title}</option>
//                       </>
//                     );
//                   })}
//               </select>
//             </div>

//             <div class="col-lg-4 col-md-6 my-2">
//               <label class="form-label">{t('area')}</label>
//               <select
//                 onChange={changeAreasOptionHandler}
//                 type="text"
//                 class="form-select"
//                 required
//               >
//                 {araes
//                   .filter((x) => x.parent === city)
//                   .map((areaItem) => {
//                     return (
//                       <>
//                         <option>{areaItem.title}</option>
//                       </>
//                     );
//                   })}
//               </select>
//             </div>
//             {input}

//             <div class="col-lg-12 col-md-6 my-2">
//               <div class=" btn-glob-contain  mt-3">
//                 <button
//                   value="hi"
//                   class="btn btn-primary btn-glob color-sec search__pr "
//                   type="submit"
//                 >
//                   {t('search')}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           ''
//         )}
//       </div>
//       {/* <div className="filter__field aos-init aos-animate ">
//       <h3 className="text-white">Information Data</h3>
//       <div>{content}</div>
//     </div> */}
//     </div>
//   );
// };

// export default FilterFieldDropdown;
