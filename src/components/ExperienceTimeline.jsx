
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";




function ExperienceTimeline() {
  return (
    <div>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#7B68EE', color: '#EBE4D1' }}
            contentArrowStyle={{ borderRight: '9px solid  #fff600' }}
            date="May 2024"
            iconStyle={{ background: '#FF3333', color: '#EBE4D1' }}
            icon={<GiGraduateCap/>}
        >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#7B68EE', color: '#EBE4D1' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff600' }}
            date="2023 - present"
            iconStyle={{ background: '#FF3333', color: '#EBE4D1' }}
            icon={<MdOutlineWork/>}
        >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
      
    </div>
  )
}

export default ExperienceTimeline
