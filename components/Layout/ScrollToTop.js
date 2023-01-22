import { useEffect, useLayoutEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { tabActions } from "../store/store";

const ScrollToTop = (props) => {
  const location = useRouter();
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.tab.tab);

  // location.pathname.includes("/sarwa-insurance")
  //   ? dispatch(tabActions.update("sarwa-insurance"))
  //   : dispatch(tabActions.update("sarwa-life"));
  // console.log(tab);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    // location.pathname.includes("/sarwa-insurance")
    //   ? dispatch(tabActions.update("sarwa-insurance"))
    //   : dispatch(tabActions.update("sarwa-life"));
    // console.log(tab);
  }, [location]);

  return <Fragment>{props.children}</Fragment>;
};

export default ScrollToTop;
