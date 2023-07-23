import { BsInfoCircleFill } from 'react-icons/bs';
import { NavBar } from "../../components/navBar";
import { PageHeaderContent } from "../../components/pageHeaderContent";

export const Portfolio = () => {
    return (
        <>
            <section id="portfolio" className="portfolio">
                <div>
                    <NavBar />
                </div>
                <PageHeaderContent
                    headerText='My Portafolio'
                    icon={<BsInfoCircleFill size={40} />}
                />
            </section>
        </>
    )
}