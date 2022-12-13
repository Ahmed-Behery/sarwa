import Box from "@mui/material/Box";
import Image from "next/image";

const Banner = (props) => {
  return (
    // <picture>
    //   <source srcSet={props.imgUrl} type="image/webp" />
    //   <img
    //     className="banner-img"
    //     src={props.imgUrl}
    //     width="100%"
    //     height=""
    //     alt=""
    //   />
    // </picture>

    <Box
      sx={{
        width: "100%",
        position: "relative",
        height: { xs: "150px", sm: "420px" },
      }}
    >
      <Image
        className="banner-img"
        alt="img"
        src={props.imgUrl}
        layout="fill"
        objectFit="cover"
      />
    </Box>
  );
};

export default Banner;
