import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import Servives from "../components/Services"

const Home = () => {
	return (
		<>
			<Hero>
				<Banner title="Luxurious Rooms" subtitle="Deluxe Rooms starting at $299">
					<Link to="/rooms" className="btn-primary">
						Our Rooms
					</Link>
				</Banner>
			</Hero>
			<Servives />
		</>
	)
}

export default Home
