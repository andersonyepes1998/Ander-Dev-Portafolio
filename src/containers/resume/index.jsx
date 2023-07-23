import { BsInfoCircleFill } from 'react-icons/bs';
import { NavBar } from "../../components/navBar";
import { PageHeaderContent } from "../../components/pageHeaderContent";
import { data } from './utils';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles.scss';
import {MdWork} from 'react-icons/md';

export const Resume = () => {
    return (
        <>
            <section id="resume" className="resume">
                <div>
                    <NavBar />
                </div>
                <PageHeaderContent
                    headerText='My Resumen'
                    icon={<BsInfoCircleFill size={40} />}
                />
                <div className='timeline'>
                    <div className="timeline_education">
                        <h3 className='timeline_education_header-text'>
                            Educación
                        </h3>
                        <VerticalTimeline
                            layout={'1-column'}
                            lineColor='var(--azul-theme-main-color)'
                        >
                            {
                                data.education.map((item,i) => (
                                    <VerticalTimelineElement
                                        key={i}
                                        className='timeline_education_vertical-timeline-element'
                                        contentStyle={{
                                            background: 'none',
                                            color: 'var(--azul-theme-tertiary-color)',
                                            border: '2px solid var(--azul-theme-main-color)'
                                        }}
                                        date='2023 - Presente'
                                        icon={<MdWork/>}
                                        iconStyle={{
                                            background : '#181818',
                                            color: 'var(--azul-theme-secondary-color)'
                                        }}
                                    >
                                        <div className='vertical-timeline-element-title-wrapper'>
                                            <h3>
                                                {item.title}
                                            </h3>
                                            <h4>
                                                {item.instituto}
                                            </h4>
                                        </div>
                                            <p className='vertical-timeline-element-title-wrapper-description'>
                                                {item.description}
                                            </p>
                                    </VerticalTimelineElement>
                                ))
                            }
                        </VerticalTimeline>
                    </div>
                    <div className="timeline_experience">
                        <h3 className='timeline_experience_header-text'>
                            Experiencia
                        </h3>
                        <VerticalTimeline
                            layout={'1-column'}
                            lineColor='var(--azul-theme-main-color)'
                        >
                            {
                                data.experience.map((item,i) => (
                                    <VerticalTimelineElement
                                        key={i}
                                        className='timeline_education_vertical-timeline-element'
                                        contentStyle={{
                                            background: 'none',
                                            color: 'var(--azul-theme-tertiary-color)',
                                            border: '1.5px solid var(--azul-theme-main-color)'
                                        }}
                                        date='2023 - Presente'
                                        icon={<MdWork/>}
                                        iconStyle={{
                                            background : '#181818',
                                            color: 'var(--azul-theme-secondary-color)'
                                        }}
                                    >
                                        <div className='vertical-timeline-element-title-wrapper'>
                                            <h3>
                                                {item.title}
                                            </h3>
                                            <h4>
                                                {item.empresa}
                                            </h4>
                                        </div>
                                            <p className='vertical-timeline-element-title-wrapper-description'>
                                                {item.description}
                                            </p>
                                    </VerticalTimelineElement>
                                ))
                            }
                        </VerticalTimeline>
                    </div>
                </div>
            </section>
        </>
    )
}
