import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import styled from 'styled-components';



class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    const {
                        id,
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        img,
                        title,
                        maps,
                        description
                    } = data.detailInfo;
                    return (
                        <React.Fragment>
                            <HeaderDetails className='conteiner-fluid'>
                            <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-secondary">Left</button>
                            <button type="button" class="btn btn-secondary">Middle</button>
                            <button type="button" class="btn btn-secondary">Right</button>
                            </div>
                            <svg class="bi bi-chevron-right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" 
                            xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" 
                            d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" 
                             clip-rule="evenodd"/></svg>
                                <h1 className='display-1 font-weight-bold'>{headerTitle}</h1>
                                <h4 className='display-5'>{headerSubTitle}</h4>
                                <p>{headerText}</p>
                                <div className='container mt-5'>
                                    <div className='row justify-content-center'>
                                        <div className='col-2'>
                                            <i className='fab fa-facebook-f' />
                                        </div>
                                        <div className='col-2'>
                                            <i className='fab fa-twitter' />
                                        </div>
                                        <div className='col-2'>
                                            <i className='fab fa-google-plus-g' />
                                        </div>
                                        <div className='col-2'>
                                            <i className='fab fa-reddit' />
                                        </div>
                                        <div className='col-2'>
                                            <i className='fab fa-facebook-messenger' />
                                        </div>
                                    </div>
                                </div>    
                            </HeaderDetails>
                            {/* Nav Link */}
                            <div className='container'>
                                <ul className='nav nav-tabs'>
                                    {/* About Place Link */}
                                    <li className='nav-item'>
                                        <a href='#aboutPlace'
                                            className='nav-link active'
                                            role='tab'
                                            data-toggle='tab'>
                                            About Place
                                        </a>
                                    </li>
                                    {/* Reviews Link */}
                                    <li className='nav-item'>
                                        <a href='#reviews'
                                            className='nav-link '
                                            role='tab'
                                            data-toggle='tab'>
                                            Reviews
                                        </a>
                                    </li>
                                    {/* Map Link */}
                                    <li className='nav-item'>
                                        <a href='#map'
                                            className='nav-link '
                                            role='tab'
                                            data-toggle='tab'>
                                            Map
                                        </a>
                                    </li>
                                </ul>
                                {/*  Tap Pane */}
                                <div className='tab-content mb-5'>
                                    {/* About Place Tab */}
                                    <div
                                        id='aboutPlace'
                                        className='tab-pane in active text-center mt-5'
                                        role='tappanel'
                                    >
                                        <h2 className='mb-3'>{title}</h2>
                                        <p>{description}</p>
                                        <img
                                            src={img}
                                            alt={title}
                                            className='img-thumbnail img-fluid'
                                        />
                                        {/* Reviews */}
                                        <div className='tab-pane'
                                            id='reviews'
                                            role='tabpanel'
                                        >
                                            Reviews content
                                        </div>
                                        {/* Map */}
                                        <div className='tab-pane'
                                            id='map'
                                            role='tabpanel'
                                        >
                                            <iframe src={maps} stayle={{
                                                border: '0',
                                                height: '28.12',
                                                weight: '100%',
                                                frameborder: '0'
                                            }}>
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                }}
            </InfoConsumer>
        );
    }
}

export default Details;

const HeaderDetails = styled.header`
    background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
    height: 100vh;
    text-transform: uppercase;
    color: var(--mainWhite);
    text-align: center;

h1 {
    padding-top: 10%;
    color: var(--mainDark);
}

h4{
    color: var(--mainDark);
}

p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--maindark);
}

i {
    font-size: 1.85rem;
    color: var(--mainDark);
}

i:hover {
    color: var(--mainBlue);
    cursor: pointer;
}

.nav-item {
    height: 18.75rem;
}
`