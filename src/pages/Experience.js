import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css"

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a" position="flex" >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2024"
          dateClassName="date"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
          position="right" // Set the position to "left"
        >
          <h3 className="vertical-timeline-element-title" >
            B.E in Information Technology
          </h3>
          <h3 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>
            Army Institute of Technology, Pune
          </h3>
          <p>Final year student with 9.1 SGPA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 July - 2023 July"
          dateClassName="date"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
          position="left" // Set the position to "right"
        >
          <h3 className="vertical-timeline-element-title">
            Secretary of AIT Competitive Programming Club
          </h3>

          <p> Led a team in conducting informative classes on Data Structures and Algorithms (DSA) and Competitive Programming. Organized and coordinated inter and intra coding events, including Crack and CoDeft.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 May - 2023 November"
          dateClassName="date"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
          position="right" // Set the position to "left"
        >
          <h3 className="vertical-timeline-element-title">
            Technical Assistant Intern
          </h3>
          <h3 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>
            GeeksforGeeks
          </h3>
          <p>Resolved doubts and provided guidance to the users of GFG. Corrected and refined GFG's technical content.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 July "
          dateClassName="date"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
          position="left" // Set the position to "right"
        >
          <h3 className="vertical-timeline-element-title">
            Upcoming Software Engineer
          </h3>
          <h3 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>
            HELPSHIFT
          </h3>
  
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
