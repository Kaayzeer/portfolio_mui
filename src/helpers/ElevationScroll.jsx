import React from "react";
import PropTypes from "prop-types";

import useScrollTrigger from "@mui/material/useScrollTrigger";

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll;

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};
