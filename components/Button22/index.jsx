import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button22.css";

function Button22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x27323835TimelineData);
  }, []);

  return (
    <div className="x27323835 component component-wrapper not-ready">
      <div className="master-button-yNBhMu">
        <div className="button-i2732383551-x47ShW valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x27323835TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x27323835",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button22;
