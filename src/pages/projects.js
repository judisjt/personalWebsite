import React from "react"
import "../components/layouts/projectsLayout.css"
import { Link } from "gatsby";
import  styled  from "styled-components"
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
		<h1>Projects Worked On</h1>
			<table class="projectsTable2">
			<tr>
				<th>League of Legends Information App</th>
			</tr>
			<tr class='descTableRow2'>
				<td><p>I worked on this while at Cincinnati Children's Hospital. I never finished it, but it was worth it because I learned more about retrieving information from REST APIs</p></td>
			</tr>
			<tr class="projectLinks">
				<td><a href="https://github.com/judisjt/JhinMainsAPp" target="_blank"> Github Link </a></td>
			</tr>
			<tr>
				<th>React Native School Project</th>
			</tr>
			<tr class='descTableRow2'>
				<td><p>I worked on this project for school to learn react native. It has basic UI elements and navigation control.</p></td>
			</tr>
			<tr class="projectLinks">
				<td><a href="https://github.com/judisjt/UIProject" target="_blank"> Github Link </a></td>
			</tr>
			<tr>
				<th>Simple Angular Auth App</th>
			</tr>
			<tr class='descTableRow2'>
				<td><p>I worked on this at Cincinnati Children's Hospital. We were investigating different authentication/authorization ways for myChart using Oauth2.</p></td>
			</tr>
			<tr class="projectLinks">
				<td><a href="https://github.com/judisjt/krd-simple-auth-app" target="_blank"> Github Link </a></td>
			</tr>
			<tr>
				<th>Interactive Music Maker</th>
			</tr>
			<tr class='descTableRow2'>
				<td><p>I made this as our final senior design project with my friends. It is an interactive music maker created in unity. We somehow won the UC IEE award with it, so it was voted one of the best in our class.</p></td>
			</tr>
			<tr class="projectLinks">
				<td><a href="https://github.com/judisjt/seniordesign" target="_blank"> Github Link </a></td>
			</tr>
		</table>
		<table class="projectsTable">
			<tr>
				<th>League of Legends Information App</th>
				<th>React Native School Project</th>
				<th>Simple Angular Auth App</th>
				<th>Interactive Music Maker</th>
			</tr>
			<tr class='descTableRow'>
				<td><p>I worked on this while at Cincinnati Children's Hospital. I never finished it, but it was worth it because I learned more about retrieving information from REST APIs</p></td>
				<td><p>I worked on this project for school to learn react native. It has basic UI elements and navigation control.</p></td>
				<td><p>I worked on this at Cincinnati Children's Hospital. We were investigating different authentication/authorization ways for myChart using Oauth2.</p></td>
				<td><p>I made this as our final senior design project with my friends. It is an interactive music maker created in unity. We somehow won the UC IEE award with it, so it was voted one of the best in our class.</p></td>
			</tr>
			<tr class="projectLinks">
				<td><a href="https://github.com/judisjt/JhinMainsAPp" target="_blank"> Github Link </a></td>
				<td><a href="https://github.com/judisjt/UIProject" target="_blank"> Github Link </a></td>
				<td><a href="https://github.com/judisjt/krd-simple-auth-app" target="_blank"> Github Link </a></td>
				<td><a href="https://github.com/judisjt/seniordesign" target="_blank"> Github Link </a></td>
			</tr>
		</table>
		<div> 
			<p> 
				Created by Jason Judis <br /> Powered with GatsbyJs and React
			</p>
		</div>
	</div>
  )
}
