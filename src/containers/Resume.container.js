import React, {Component} from 'react';

import Aux from '../hoc/ReactAux';
import Navbar from '../components/Navbar/Navbar.component';
import SideContent from '../components/SideContent/SideContent.component';
import MainContent from "../components/MainContent/MainContent.component";

import './Resume.styles.css';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

const SOCIAL_LINK_ICONS = {
    linkedin: "fab fa-linkedin-in",
    twitter: "fab fa-twitter",
    youtube: "fab fa-youtube",
    github: "fab fa-github",
    facebook: "fab fa-facebook-f",
};

class ResumeContainer extends Component {
    state = {
        name: "Salman Fazal",
        designation: "Software Developer",
        summary: "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs. My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.",
        links: {
            linkedin: "https://www.linkedin.com/in/salmanfazal01/",
            github: "https://github.com/salmanfazal01",
            twitter: "https://twitter.com/samsfxjournal",
            youtube: "https://www.youtube.com/channel/UCSEy8lBnjp42x5W1JPcca0w",
            facebook: "https://facebook.com/salmanfazal01",
        },
        personal_information: {
            birthday: "01 August 1996",
            website: "www.website.com",
            phone: "+128921622265",
            email: "salmanfazal01@gmail.com",
            location: ""
        },
        languages: {
            english: "native",
            swahili: "fluent"
        },
        interests: ["Football", "Finance"],
        education: [
            {
                date: "Oct 2015 - May 2018",
                title: "Computer Science",
                subtitle: "Coventry University",
                description: "First class degree"
            },
            {
                date: "Oct 2019 - Apr 2020",
                title: "Financial Technology",
                subtitle: "Seneca College",
                description: "First class degree"
            },

        ],
        experience: [
            {
                date: "Oct 2015 - May 2018",
                title: "Computer Science",
                subtitle: "Coventry University",
                description: "First class degree"
            },
            {
                date: "Oct 2015 - May 2018",
                title: "Computer Science",
                subtitle: "Coventry University",
                description: "First class degree"
            },
        ]

    };

    render() {
        return (
            <div className="wrapper">
                {/*<Navbar/>*/}

                <MDBContainer fluid>
                    <MDBRow>

                        <MDBCol size="2" className="col-bg1">
                            <SideContent
                                name={this.state.name}
                                designation={this.state.designation}
                                personalInformation={this.state.personal_information}
                                languages={this.state.languages}
                                interests={this.state.interests}
                                links={this.state.links}
                                link_icons={SOCIAL_LINK_ICONS}
                            />
                        </MDBCol>

                        <MDBCol size="10" className="col-bg1">
                            <MainContent
                                name={this.state.name}
                                summary={this.state.summary}
                                email={this.state.personal_information.email}
                                education={this.state.education}
                                experience={this.state.experience}
                            />
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>

                {/*<Router/>*/}
            </div>

        );
    }
}

export default ResumeContainer;