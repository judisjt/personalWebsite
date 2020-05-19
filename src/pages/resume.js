import React from "react"
import EducationLayout from "../components/layouts/educationLayout"
import downloadFile from '../components/files/Judis_Resume.pdf' 
import { Link } from "gatsby";
import  styled  from "styled-components"
import "../components/layouts/resumeLayout.css"
import { Helmet } from 'react-helmet'



const StyledLink = styled.div`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border-bottom: 2px solid black;
`


export default function Resume() {
  return (
	<div class="container">
	  <Helmet>
	  <meta name="viewport" content="width=device-width,height=device-height, initial-scale=1.0"/>
    </Helmet>
	  <div class="topnav">
		<StyledLink> <Link to="/">Home</Link></StyledLink>
		<StyledLink> <Link to="/resume/">Resume</Link></StyledLink>
		<StyledLink> <Link to="/projects/">Projects</Link></StyledLink>
	</div>
		<div>
			<h1>Resume</h1>
		</div>
		<EducationLayout>
			<h3>Education</h3>
			<div class="degreeInfo"> <p>University of Cincinnati College of Engineering and Applied Science: Cincinnati, Ohio  <br /> 
			B.S., Bachelor of Science in Computer Science</p></div>
		</EducationLayout>
		<EducationLayout>
			<h3>Skills</h3>
			<table class="skillsTable2">
				<tr>
					<td>Angular 4+</td>
					<td>Android Studio</td>
				</tr>
				<tr>
    				<td>CSS</td>
					<td>ASPNET MVC</td>
				</tr>
				<tr>
					<td>Github</td>
					<td>React/React Native</td>
				</tr>
				<tr>
					<td>Jet Brains Webstorm</td>
					<td>Javascript/Typescript</td>
				</tr>
				<tr>
					<td>Visual Studio</td>
					<td>HTML</td>
				</tr>
				<tr>
					<td>Sitefinity</td>
					<td>Python</td>
				</tr>
				<tr>
					<td>SQL</td>
					<td>C#</td>
				</tr>
				<tr>
					<td>TFS</td>
					<td>Unity</td>
				</tr>
			</table>
			<table class="skillsTable">
				<tr>
					<td>Angular 4+</td>
					<td>Android Studio</td>
					<td>Visual Studio</td>
					<td>HTML</td>
				</tr>
				<tr>
    				<td>CSS</td>
					<td>ASPNET MVC</td>
					<td>Sitefinity</td>
					<td>Python</td>
				</tr>
				<tr>
					<td>Github</td>
					<td>React/React Native</td>
					<td>SQL</td>
					<td>C#</td>
				</tr>
				<tr>
					<td>Jet Brains Webstorm</td>
					<td>Javascript/Typescript</td>
					<td>TFS</td>
					<td>Unity</td>
				</tr>
			</table>
		</EducationLayout>
		<EducationLayout>
			<h3>Experiences</h3>
			<h4>C# .NET Developer at Great American Insurance Group</h4>
			<ul>
				<li>Created improved navigation system for ease of use of inter-department website</li>
				<li>Customized checkout system (a Sitefinity default page) for Asset Disposal Team (ADT) <br />
				with new product list, shopping cart, checkout page and other specifics</li>
				<li>Developed an editor for a lunch application by adding ability to create and edit different <br /> 
				food related items, to ease menu changes for the executive  </li>
			</ul>
			<h4>Web Developer Intern at Cincinnati Children's Hospital (CCHMC)</h4>
			<ul class="listOfStuff">
				<li>Developed proficiency in Angular4+ and Typescript</li>
					<ul>
					<li> Built a website to help families get through the Neonatal Intensive Care Unit (NICU) <br />
					experience, so they are more well-informed through the experience, <br />
					so they can get through it with less stress </li>
					</ul>
			</ul>
		</EducationLayout>
		<EducationLayout>
			<p class="resumeButtonDesc"><b> This page has most of my resume information on it. <br />Click the download button below to get the full PDF version </b></p>
		    <button class="downloadButton">
				<a href={downloadFile} target="_blank">Download the PDF Version Here</a>
			</button>
		</EducationLayout>
		<EducationLayout>
				<p class="pLine"> 
					Created by Jason Judis <br /> Powered with GatsbyJs and React
				</p>
		</EducationLayout>
	</div>
  );
}