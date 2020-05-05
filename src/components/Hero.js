import React from "react"

const Hero = ({ children, hero }) => {
	return (
		<header className={hero}>
			<p>Header</p>
			{children}
		</header>
	)
}

Hero.defaultProps = {
	hero: "defaultHero",
}

export default Hero
