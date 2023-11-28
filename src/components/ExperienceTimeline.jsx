
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { FaClipboardQuestion } from "react-icons/fa6";




function ExperienceTimeline() {
  return (
    <div>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#7B68EE', color: '#EBE4D1' }}
            contentArrowStyle={{ borderRight: '9px solid  #fff600' }}
            date="Current"
            iconStyle={{ background: '#FF3333', color: '#EBE4D1' }}
            icon={<FaClipboardQuestion/>}
        >
            <h3 className="vertical-timeline-element-title font-bold text-md">What's next?</h3>
            <h4 className="vertical-timeline-element-subtitle text-sm">Insert your company.</h4>
            <p>
                Like what you see? Don't forget to contact me below!
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#7B68EE', color: '#EBE4D1' }}
            contentArrowStyle={{ borderRight: '9px solid  #fff600' }}
            date="May 2024"
            iconStyle={{ background: '#FF3333', color: '#EBE4D1' }}
            icon={<GiGraduateCap/>}
        >
            <h3 className="vertical-timeline-element-title font-bold text-md">B.S. Software Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle text-sm">Western Governors University</h4>
            <p>
                Studied fundamentals of multiple programming languages such as (C# and Python).
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#7B68EE', color: '#EBE4D1' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff600' }}
            date="June 2023 - Sept 2023"
            iconStyle={{ background: '#FF3333', color: '#EBE4D1' }}
            icon={<MdOutlineWork/>}
        >
            <h3 className="vertical-timeline-element-title font-bold text-md">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle text-sm">Street Sound Society </h4>
            <p>
                Collaborating with an Embedded Software Engineer to efficently match the user's access code with remote Arduino. 
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
      
    </div>
  )
}

export default ExperienceTimeline
