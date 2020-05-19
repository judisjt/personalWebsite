import React from "react"
import "../components/layouts/homeLayout.css"
import { Helmet } from 'react-helmet'
import { Link } from "gatsby";
import  styled  from "styled-components"

const StyledLink = styled.div`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border-bottom: 2px solid black;
`
export default function Home() {
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
		<picture>
			<source srcset="../../linkedInProfile.png" media="(max-width: 600px)"/>
			<img src="../../rightPic.jpg" alt="rightPicture"/>
		</picture>
		   <div class="top-left">Jason Judis <br /> <br /> Software Developer </div>
	</div>
	<div class='profileBox'>
		<div>
		<h1>My Profile</h1>
		</div>
		<div class='center'>
			<p> Computer Science student excels in solving programming related problems and learning new technologies as demonstrated
			in two professional development experiences delivering solutions on schedule.  Grasps expectations quickly with
			minimal supervision and applies good communication between team members, so the best product outcome is ensured 
			</p>
		</div>
	</div>
	<div class='contactBox'>
		<div>
		<h1>Email and Phone Number</h1>
		</div>
		<div class="center3">
			<p> <b>Email:</b> jasonjudis@yahoo.com <br/></p>
			<p><b>Phone Number:</b> 419-351-6958</p>
		</div>
	</div>
	<div class='pinkBox'>
		<div>
		<h1>Social Media Links</h1>
		</div>
		<div class='center2'>
			<table>
			<tr class="socialMediaTable">
				<td>
					<a href="https://github.com/judisjt" target="_blank">
						<img src="../../github.png" alt="github" class="Image1"/>
					</a>
				</td>
				<td>
					<a href = "https://www.facebook.com/jason.judis/"  target="_blank">
						<img src="../../facebook.png" alt="facebook" class="Image2"/>
					</a>
				</td>
				<td>
					<a href="https://www.linkedin.com/in/judisjt/" target="_blank">
						<img src="../../linkedin.png" alt="linkedin" class="Image3"/>
					</a>
				</td>
				<td>
					<a href = "https://www.instagram.com/jasonjudis/" target="_blank">
						<img src="../../instagram.png" alt="instagram" class="Image4"/>
					</a>
				</td>
			</tr>
			</table>
		</div>
	</div>
	<div class="absolute"> 
		<p> 
			Created by Jason Judis <br /> Powered with GatsbyJs and React
		</p>
	</div>
</div>
  )
}
