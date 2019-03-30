import React from 'react';
import NewsNav from '../components/NewsNav';
import FooterNav from './FooterNavigation';
import facebookImg from '../images/facebook.png';


const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container footer-top">
                <div className="row section-padding">
                    <div className="col-6 col-sm-4 col-md-3 order-1">
                        <div className="content">
                            <h3 className="footer-title">Radio</h3>
                            <FooterNav />
                        </div>
                    </div>
                    <div className="col-12 col-sm-7 col-md-6 col-lg-5 order-3 order-sm-2">
                        <div className="content">
                            <h3 className="footer-title">Aktualności</h3>
                            <NewsNav news={props.news} />
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 offset-lg-1 order-2 order-sm-3">
                        <div className="content">
                            <h3 className="footer-title">Społeczność</h3>
                            <a href="https://www.facebook.com/Radio-Ain-Karim-Skomielna-Czarna-682048501989248/?__xts__[0]=68.ARDH05qAb2O_2rxDiMPhkreGttziaxNgBCwcpPXsyCRzvnhFRTcORNHQBbzOzr9nHWmoTiryf-7r1FjkGTvD1Mmnrv3wWjsXtlOUvQ_tDsogzenBgHAm5bbcJ5VItpJ0ofPBcCXykVBoxpgY665BzKmNhz4KS6M-8QEsVzSqLKOYgXZLfx_Dzp_yTlcYhXyLfW-2szcY36zO7osGaIEAjrFweNTe5A5X8GprPWv6SVK0T4CrJf4iUtNh0OZV8aUcUqn1YuEa6zqZpMjxC69xOoepI2EculcMT1n-rAIkLVBBcB8_FHhiuMwABB-OmbzCvmYPMUN0gpJyVoFmA7sctnQ&__xts__[1]=68.ARAGDyJRhKG6kkLxMvD1VBYjOE5te77AT0Rp7PgpBgd-ZGLuWAgsumbL89tg2thFTUZtHTkQcMQeuRBO85zpTjz5BV4TG0SNM005y3IJrus39j6qEbgEFnJt7r21MJNGFt_MC37MMZLM4cgqJd7sTInnMo-UDhX4LrDiflCfjpr8T2PNmQLGeQriN0IdRqhnh9ib1vaWRI2nx48OuXto0SbwTZ2QWz2mIcMuuBx1dQvPY-SBqa1XVhuhUYVzGan9J1svzZywAXgcP1OHixAYg2mzh57641A3suKxM4P4ed7y7gC_bvmC4KuJI-qg5Y9FqpTGmW6GpDXAlKVpC9mD97s" target="_blank" rel="noopener noreferrer">
                                <img src={facebookImg} alt="facebook" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                Copyright 2017 © Radio Ain Karim | <a href="https://www.behance.net/lwrobel" target="blank" title="Łukasz Wróbel-portfolio">Łukasz Wróbel</a> &amp; Paweł Kotoniak
            </div>
        </footer>
    );
}

export default Footer;