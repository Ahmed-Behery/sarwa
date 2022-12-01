import GalleryImg from "../UI/GalleryImg";
import style from './NewsCard.module.css';

const EventsMedia = () => {
  const images = [
    {
      title: "Gift Habeshaw",
      src: "https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg",
      description: "Person wearing shoes",
    },
    {
      title: "Gift Habeshaw",
      src: "https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg",
      description: "Person wearing shoes",
    },
    {
      title: "Gift Habeshaw",
      src: "https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg",
      description: "Person wearing shoes",
    },
    {
      title: "Gift Habeshaw",
      src: "https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg",
      description: "Person wearing shoes",
    },
    {
      title: "Gift Habeshaw",
      src: "https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg",
      description: "Person wearing shoes",
    },
    {
      title: "Gift Habeshaw",
      src: "https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg",
      description: "Person wearing shoes",
    },
    {
      title: "Gift Habeshaw",
      src: "https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg",
      description: "Person wearing shoes",
    },
    {
      title: "Gift Habeshaw",
      src: "https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg",
      description: "Person wearing shoes",
    },
    {
      title: "Gift Habeshaw",
      src: "https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg",
      description: "Person wearing shoes",
    },
  ];
  return (
    <div className={"container " +style.p_new}>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {/*{images.map((image, index) => (
          <GalleryImg key={index} imgUrl={image.src} title={image.title} />
        ))} */}
        <div>Events will add soon</div>
      </div>
    </div>
  );
};

export default EventsMedia;
