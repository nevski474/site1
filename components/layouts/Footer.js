import React from 'react';
import { directive } from '@babel/types';
import styled from 'styled-components';



function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-midlle">
                <div className="container">
                    <div className="row">
                        {/* Column1*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>lorem insum</h4>
                            <ul className="list-unstyled">
                                <li><a href = "/">lorem insum</a></li>
                                <li><a href = "/">lorem insum</a></li>
                                <li><a href = "/">lorem insum</a></li>
                                <li><a href = "/">lorem insum</a></li>

                            </ul>
                        </div>     
                        {/* Column2*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>lorem insum</h4>
                            <ul className="list-unstyled">
                                <li><a href = "/">lorem insum</a></li>
                                <li><a href = "/">lorem insum</a></li>
                                <li><a href = "/">lorem insum</a></li>
                                <li><a href = "/">lorem insum</a></li>

                            </ul>
                        </div>
                        {/* Column3*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>lorem insum</h4>
                            <ul className="list-unstyled">
                                <li><a href = "/">lorem insum</a></li>
                                <li><a href = "/">lorem insum</a></li>
                                <li><a href = "/">lorem insum</a></li>
                                <li><a href = "/">lorem insum</a></li>

                            </ul>
                        </div>
                    </div>
                    {/* Footer buttom*/}
                    <div className="footer-bottom" >
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} City Guide App - All Right
                            Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;


const FooterContainer = styled.footer`
    .footer-midlle {
        background: var(--mainDark);
        padding-top: 3rem;
        color: var(--mainWhite);
        
    }

    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 2rem;

    }

    ul li a {
        color: var(--mainGrey);
    }

    ul li a:hover {
        color: var(--mainLightGrey);
    }
`;




