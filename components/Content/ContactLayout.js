import Aos from "aos";
import { useEffect } from "react";
import BranchesDropdown from "./BranchesDropdown";
import ContactForm from "./ContactForm";
import style from "./ContactLayout.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import FilterFieldDropdown from "./FilterFieldDropdown";
import BranchesMap from "./mapBranches";
// import {
//   GoogleMap,
//   withScriptjs,
//   withGoogleMap,
//   Marker,
// } from 'react-google-maps';
import React from "react";
import useTranslation from "next-translate/useTranslation";

const onMarkerClick = (evt) => {};
let handleMarkerClickL = () => {
  location.replace("https://goo.gl/maps/tLNP6dSXspFWhTRTA");
};
// const MyMapComponent = withScriptjs(
//   withGoogleMap((props) => (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: 30.09776, lng: 31.32906 }}>
//       {props.isMarkerShown && (
//         <>
//           {location.pathname.includes('sarwa-Life') ? (
//             <Marker
//               clickable
//               onClick={props.onMarkerClick3}
//               position={{ lat: 30.04715, lng: 31.23729 }}
//             />
//           ) : (
//             <>
//               <Marker
//                 clickable
//                 position={{ lat: 31.19895, lng: 29.919491 }}
//                 onClick={props.onMarkerClick1}
//               />
//               <Marker
//                 clickable
//                 position={{ lat: 31.27035, lng: 32.28873 }}
//                 onClick={props.onMarkerClick3}
//               />
//               <Marker
//                 clickable
//                 position={{ lat: 30.04048, lng: 31.20948 }}
//                 onClick={props.onMarkerClick2}
//               />

//               <Marker
//                 clickable
//                 position={{ lat: 30.095166246101506, lng: 31.325898168527605 }}
//                 onClick={props.onMarkerClick}
//               />
//               <Marker
//                 clickable
//                 position={{ lat: 30.047265583477632, lng: 31.238081913131325 }}
//                 onClick={props.onMarkerClick4}
//               />
//             </>
//           )}
//         </>
//       )}
//     </GoogleMap>
//   ))
// );

function SimpleMap() {
  return (
    // <GoogleMap
    // defaultZoom={10}
    // defaultCenter={{ lat: 30.04048, lng: 31.20948 }}
    // />
    <></>
  );
}
// const WrappedMap = withScriptjs(withGoogleMap(SimpleMap));
const ContactLayout = (props) => {
  let hotAr = "https://www.linkpicture.com/q/اتصل-بنا_2.png";

  const { t, lang } = useTranslation("common");
  const location = useRouter();
  useEffect(() => {
    Aos.init();
  }, []);

  let handleMarkerClick = () => {
    location.replace("https://goo.gl/maps/GhGfAUGY8Uo2kpfH6");
  };
  let handleMarkerClick3 = () => {
    location.replace("https://goo.gl/maps/A57RHVmUygw8wpRaA");
  };
  let handleMarkerClick1 = () => {
    location.replace("https://goo.gl/maps/U9rrLrAZVB9bZPTz6");
  };
  let handleMarkerClick2 = () => {
    location.replace("https://goo.gl/maps/6yoURotXeYAU5aDD9");
  };
  let handleMarkerClick4 = () => {
    location.replace("https://goo.gl/maps/xYZQh1Ua85SebmvQ7");
  };

  return (
    <div>
      <div dir={t("dir")} className={"container " + style.contact__layout}>
        <div className="row m-0">
          <div className="col-lg-12">
            <p
              className={"text-center " + style.branchTit}
              data-aos-once="true"
              data-aos-duration="1000"
            >
              {t("branches")}
            </p>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-12">
            <BranchesDropdown />
          </div>
        </div>
        <div>
          <BranchesMap />
          {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="w-100"
            />
      <WrappedMap
       googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUQUZh1KHcrl2R-tbouYTowdRxjZcLODE"  loadingElement={<div style={{ height: `100%` }} />}
       containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}>
            {/* <Marker position={{ lat: -34.397, lng: 150.644 }} />     */}
          {/* 
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUQUZh1KHcrl2R-tbouYTowdRxjZcLODE"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            onMarkerClick={handleMarkerClick}
            onMarkerClick1={handleMarkerClick1}
            onMarkerClick2={handleMarkerClick2}
            onMarkerClick3={handleMarkerClick3}
            onMarkerClick4={handleMarkerClick4}
          />
          */}
        </div>

        <h2 className="text-center mt-4">{t("contact")}</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactLayout;
