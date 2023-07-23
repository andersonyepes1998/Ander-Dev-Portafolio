/* eslint-disable react/jsx-no-undef */
import { BsInfoCircleFill } from 'react-icons/bs';
import { NavBar } from "../../components/navBar";
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { PageHeaderContent } from "../../components/pageHeaderContent";
import { skillsData } from './utils';
import { Line } from 'rc-progress';
import './styles.scss';

export const Skills = () => {
    return (
        <>
            <section id="skills" className="skills">
                <div>
                    <NavBar />
                </div>
                <PageHeaderContent
                    headerText='Mis Habilidades'
                    icon={<BsInfoCircleFill size={40} />}
                />
                <div className='skills_content_wrapper'>
                    {
                        skillsData.map((item, i) => (
                            <div key={i} className='skills_content_wrapper_inner-content'>
                                <Animate
                                    play
                                    duration={1}
                                    start={{
                                        transform: 'translateX(-200px)'
                                    }}

                                    end={{
                                        transform: 'translateX(0px)'
                                    }}
                                >
                                    <h3 className='skills_content_wrapper_inner-content_category-text'>{item.label}</h3>
                                    <div className='skills_content_wrapper_inner-content_progressbar-container'>
                                        {
                                            item.data.map((skillItem, index) => (
                                                <AnimateKeyframes
                                                    key={index}
                                                    play
                                                    duration={1}
                                                    keyframes={['opacity : 1', 'opacity : 0']}
                                                    iterationCount='1'
                                                >
                                                    <div className='progressbar-wrapper' >
                                                        <p>{skillItem.skillName}</p>
                                                        <Line
                                                            percent={skillItem.percentage}
                                                            strokeWidth='2'
                                                            strokeColor='var(--azul-theme-main-color)'
                                                            trailWidth='2'
                                                            strokeLinecap='square'
                                                        />
                                                    </div>
                                                </AnimateKeyframes>
                                            ))
                                        }
                                    </div>
                                </Animate>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}