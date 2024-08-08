"use client";

import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/data/experiences';
import { LuGraduationCap } from "react-icons/lu";
import { LuBrainCircuit } from "react-icons/lu";
import { FollowerPointerCard } from './ui/Pointer';
import { GiTeacher } from "react-icons/gi";

import '@/components/style.css';

export default function Experience(){
  return (
    
    <section>
        <h1 className="heading pt-40 pb-20">
        <span className="text-purple">Professional </span>
        Background
        </h1>
        
        <VerticalTimeline animate={true} >
        
            <VerticalTimelineElement
                
                className="vertical-timeline-element--work "
                contentStyle={{ background: '#0b102e', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2023 - 2027"
                iconStyle={{ background: '#0b102e', color: '#fff' }}
                icon={<LuGraduationCap/>}
                visible={true}

                
            >
                
                    <FollowerPointerCard
                    title = "Read Blog Post"
                    >
                    <a href = "https://nelsonbermeo.blogspot.com/2024/08/i-love-stevens.html" target="_blank">
                <h3 className="vertical-timeline-element-title font-extrabold">Student - Stevens Institute of Technology</h3>
                    
                <h4 className="vertical-timeline-element-subtitle font-extrabold">Hoboken, NJ</h4>
                <p className="font-light">
                I am currently in my second year at Stevens Institute of Technology, pursuing a Bachelors Degree in Computer Science. My academic journey has provided me with a great foundation in problem solving, algorithms, and software development. Alongside my studies, I have gained practical experience through various projects continually enhancing my skills and knowledge in the field. Throughout my academic journey, Ive had the pleasure of making amazing friends and being an active member of the Computer Science Club. These experiences have enriched my learning and provided me with a supportive community.
                </p>
                </a>
                </FollowerPointerCard>
                
            </VerticalTimelineElement>
            

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0b102e', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2024 Sept - Present"
                iconStyle={{ background: '#0b102e', color: '#fff' }}
                icon={<GiTeacher />
                }
            >
                <FollowerPointerCard
                    title = "Read Blog Post"
                    >
                    <a href = "https://nelsonbermeo.blogspot.com/2024/08/course-assistant-experience-cs-115-w-dr.html" target="_blank">
                <h3 className="vertical-timeline-element-title font-extrabold">Course Assistant - Stevens Institute of Technology</h3>
                <h4 className="vertical-timeline-element-subtitle font-extrabold">Hoboken, NJ</h4>
                <p className="font-light">
                As a Course Assistant for Professor Zumrut Akcam-Kibis in CS115: Introduction to Computer Science at Stevens Institute of Technology I have taken on multiple responsibilities to support both the professor and the students. My duties include grading assignments and exams, as well as holding office hours to provide additional help and guidance to students. This role has allowed me to deepen my understanding of fundamental computer science concepts while helping others succeed in their studies. 
                </p>
                </a>
                </FollowerPointerCard>
            </VerticalTimelineElement>

            {/* <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0b102e', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: '#0b102e', color: '#fff' }}
                icon={<LuBrainCircuit />                }
            >
                <h3 className="vertical-timeline-element-title font-extrabold">Student - Machine Learning Specialization</h3>
                <h4 className="vertical-timeline-element-subtitle font-extrabold">Online, Coursera</h4>
                <p className="font-light">
                In Progress...
                </p>
            </VerticalTimelineElement> */}

            

            
            
            {/* {experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement>
                        <h3>{item.title}</h3>
                        <p>{item.location}</p>
                        <p>{item.description}</p>
                    </VerticalTimelineElement>
                </React.Fragment>
                        ))} */}
            
        </VerticalTimeline>
    </section>
  );
}

//export default Experience