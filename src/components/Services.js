import React, { Component } from "react"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
import Title from "./Title"

class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: "Free Cocktail",
				info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, provident!",
			},
			{
				icon: <FaHiking />,
				title: "Unlimited Hiking",
				info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, provident!",
			},
			{
				icon: <FaShuttleVan />,
				title: "Free Shuttle",
				info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, provident!",
			},
			{
				icon: <FaBeer />,
				title: "Unlimited Beerl",
				info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, provident!",
			},
		],
	}

	render() {
		return (
			<section className="services">
				<Title title="Services" />
				<div className="services-center">
					{this.state.services.map((service, index) => {
						return (
							<article key={index} className="service">
								<span>{service.icon}</span>
								<h6>{service.title}</h6>
								<p>{service.info}</p>
							</article>
						)
					})}
				</div>
			</section>
		)
	}
}

export default Services
