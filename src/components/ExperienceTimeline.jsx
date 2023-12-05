import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { FaClipboardQuestion } from "react-icons/fa6";

function ExperienceTimeline() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#7B68EE", color: "#EBE4D1" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff600" }}
          date="June 2023 - Sept 2023"
          iconStyle={{ background: "#FF3333", color: "#EBE4D1" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-[#dfbe76] text-lg">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-sm">
            Street Sound Society{" "}
          </h4>
          <p>
            I synchronized user access codes with a remote Arduino system to
            enhance efficiency and accuracy.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#7B68EE", color: "#EBE4D1" }}
          contentArrowStyle={{ borderRight: "9px solid  #fff600" }}
          date="May 2024"
          iconStyle={{ background: "#FF3333", color: "#EBE4D1" }}
          icon={<GiGraduateCap />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-[#dfbe76] text-lg">
            B.S. Software Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-sm">
            Western Governors University
          </h4>
          <p>
            Studied essential computer science concepts and mastered the
            fundamentals of multiple programming languages, including C# and
            Python.{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#7B68EE", color: "#EBE4D1" }}
          contentArrowStyle={{ borderRight: "9px solid  #fff600" }}
          date="Current"
          iconStyle={{ background: "#FF3333", color: "#EBE4D1" }}
          icon={<FaClipboardQuestion />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-[#dfbe76] text-lg">
            What's next?
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-sm">
            Insert your company.
          </h4>
          <p>
            Enjoyed what you’ve seen? Don’t hesitate to reach out through the
            contact form below!
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceTimeline;
