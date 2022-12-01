import { useEffect,Fragment } from "react";
import { useRouter } from 'next/router'

const ScrollToTop = (props) => {
  const location = useRouter()
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return(
    <Fragment>
      {props.children}
    </Fragment>
  )
};

export default ScrollToTop;
