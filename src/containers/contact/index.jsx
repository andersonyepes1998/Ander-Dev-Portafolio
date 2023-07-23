import { BsInfoCircleFill } from 'react-icons/bs';
import { NavBar } from "../../components/navBar";
import { PageHeaderContent } from "../../components/pageHeaderContent";

export const Contact = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div>
                    <NavBar />
                </div>
                <PageHeaderContent
                    headerText='My Contact'
                    icon={<BsInfoCircleFill size={40} />}
                />
            </section>
        </>
    )
}
