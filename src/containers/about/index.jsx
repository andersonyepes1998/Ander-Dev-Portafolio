import { BsInfoCircleFill } from 'react-icons/bs';
import { NavBar } from "../../components/navBar";
import { PageHeaderContent } from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';

import './styles.scss';

const personalDetails = [
    {
        label: "Nombre:",
        value: 'Anderson Yepes Bedoya'
    },
    {
        label: "Edad:",
        value: '25 Años'
    },
    {
        label: "Profesión:",
        value: 'Diseñador Gráfico / Desarrollador de Software'
    },
    {
        label: "Direccion:",
        value: 'Medellín - Colombia'
    },
    {
        label: "Email:",
        value: 'andersonyepesbedoya@gmail.com'
    },
    {
        label: "Numero Contacto:",
        value: '314 724 7816'
    },
]

export const About = () => {
    return (
        <>
            <section id="about" className="about">
                <div>
                    <NavBar />
                </div>
                <PageHeaderContent
                    headerText='Acerca de'
                    icon={<BsInfoCircleFill size={40} />}
                />
                <div className='about_content'>
                    <div className='about_content_personalWrapper'>
                        <Animate
                            play
                            duration={1.5}
                            deplay={1}
                            start={{
                                transform: 'translateX(-900px)'
                            }}
                            end={{
                                transform: 'translatex(0px)'
                            }}
                        >
                            <h3>
                                Desarrollador Front-End
                            </h3>
                            <p>Soy un desarrollador web, apasionado por la tecnología💻 y en constante evolución. Con un enfoque en los resultados y una mentalidad proactiva. Me destaco por mi capacidad de adaptación y solución de problemas, lo que me permite ofrecer soluciones innovadoras y eficientes. Como desarrollador me gusta trabajar mucho en equipo, aprender de cada una de la personas, que me corrijan e investigar sobre lo que no se. Mi objetivo es seguir creciendo y mejorando mis habilidades, mientras contribuyo al éxito de los proyectos en los que participo..🕹🖥
                            </p>
                        </Animate>

                        <Animate
                            play
                            duration={1.5}
                            deplay={1}
                            start={{
                                transform: 'translateX(500px)'
                            }}
                            end={{
                                transform: 'translatex(0px)'
                            }}
                        >
                            <h3 className='personalInformation'>Información Personal</h3>
                            <ul>
                                {
                                    personalDetails.map((item, i) => (
                                        <li key={i}>
                                            <span className='tittle'>{item.label}</span>
                                            <span className='value'>{item.value}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Animate>
                    </div>
                    <div className='about_content_servicesWrapper'>
                        <Animate
                            play
                            duration={1.5}
                            deplay={1}
                            start={{
                                transform: 'translateX(600px)'
                            }}
                            end={{
                                transform: 'translatex(0px)'
                            }}
                        >
                            <div className='about_content_servicesWrapper_innerContent'>
                                <div>
                                    <FaDev size={60} color='var(--azul-theme-secondary-color)' />
                                </div>
                                <div>
                                    <DiAndroid size={60} color='var(--azul-theme-secondary-color)' />
                                </div>
                                <div>
                                    <FaDatabase size={60} color='var(--azul-theme-secondary-color)' />
                                </div>
                                <div>
                                    <DiApple size={60} color='var(--azul-theme-secondary-color)' />
                                </div>
                            </div>
                        </Animate>
                    </div>
                </div>
            </section>
        </>
    )
}