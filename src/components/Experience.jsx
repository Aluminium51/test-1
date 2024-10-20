import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../data/exampleData";

const Excard = ({item}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date= {item.date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    >
      <h3 className="vertical-timeline-element-title">{item.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{item.company_name}</h4>
      
      <ul>
          {item.points.map((p,i)=>(
            <li key={i}>{p}</li>
          ))}
      </ul>
      <img src={item.icon}/>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div>
      <VerticalTimeline>
        {experiences.map((item, index) => (
          <Excard key={index} item={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
