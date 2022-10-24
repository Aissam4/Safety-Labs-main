import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
export default function Roadmap(){
return (
	<div>
		<div id="empty-roadmap"></div>
		  <h1  data-aos="fade-down"
				data-aos-offset="200"
				data-aos-delay="9"
				data-aos-duration="400"
				data-aos-easing="ease-in-out"
				data-aos-once="false" className="features text-center">ROADMAP</h1>
			  <br/><br/><br/>
			<VerticalTimeline>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgba(33, 150, 243, 0)', color: '#fff', boxShadow: "none", border: "2px solid rgba(243, 83, 253, 0.5)"}}
				contentArrowStyle={{ borderRight: '7px solid  rgba(243, 83, 253, 0.5)' }}
				date="STEP 01">
				<h4 className="vertical-timeline-element-title">- Launch our website, discord and twitter</h4>
				<h4 className="vertical-timeline-element-title">- Launch Safety Collabs BOT</h4>
				<h4 className="vertical-timeline-element-title">- Launch Purge inactive whitelist members BOT</h4>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgba(33, 150, 243, 0)', color: '#fff', boxShadow: "none", border: "2px solid rgba(243, 83, 253, 0.5)"}}
				contentArrowStyle={{ borderRight: '7px solid  rgba(243, 83, 253, 0.5)' }}
				date="STEP 02">
				<h4 className="vertical-timeline-element-subtitle">- Launch Discord Lock BOT</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch Daily Mint BOT</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch Check Floor Price BOT</h4>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgba(33, 150, 243, 0)', color: '#fff', boxShadow: "none", border: "2px solid rgba(243, 83, 253, 0.5)"}}
				contentArrowStyle={{ borderRight: '7px solid  rgba(243, 83, 253, 0.5)' }}
				date="STEP 03">
				<h4 className="vertical-timeline-element-subtitle">- Launch Raid-To-Earn BOT</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch Twitter Sales BOT</h4>
				<h4 className="vertical-timeline-element-subtitle">- Invite huge communities to use our BOTs</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch our $STL Token</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch our raffle website</h4>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgba(33, 150, 243, 0)', color: '#fff', boxShadow: "none", border: "2px solid rgba(243, 83, 253, 0.5)"}}
				contentArrowStyle={{ borderRight: '7px solid  rgba(243, 83, 253, 0.5)' }}
				date="STEP 04">
				<h4 className="vertical-timeline-element-subtitle">- Lunch our presale platform</h4>
				<h4 className="vertical-timeline-element-subtitle">- Mint our Safety Labs Collection</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch staking to earn $SLT Token</h4>
				<h4 className="vertical-timeline-element-subtitle">- Offer To our holders Pre-sale of Huge/hyped Project</h4>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				contentStyle={{ background: 'rgba(33, 150, 243, 0)', color: '#fff', boxShadow: "none", border: "2px solid rgba(243, 83, 253, 0.5)"}}
				contentArrowStyle={{ borderRight: '7px solid  rgba(243, 83, 253, 0.5)' }}
				date="STEP 05">
				<h4 className="vertical-timeline-element-subtitle">- Invite Ambassador to our Project</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch our Merch</h4>
				<h4 className="vertical-timeline-element-subtitle">- Brand Collaborations</h4>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				contentStyle={{ background: 'rgba(33, 150, 243, 0)', color: '#fff', boxShadow: "none", border: "2px solid rgba(243, 83, 253, 0.5)"}}
				contentArrowStyle={{ borderRight: '7px solid  rgba(243, 83, 253, 0.5)' }}
				date="STEP 06">
				<h1 className="vertical-timeline-element-subtitle">Roadmap v2 Soon...</h1>
			</VerticalTimelineElement>
			</VerticalTimeline>
		</div>);
}