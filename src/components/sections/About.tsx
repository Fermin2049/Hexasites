export default function About() {
	return (
		<section
			id="about"
			className="section-default max-w-6xl mx-auto section-bg"
			aria-labelledby="about-title"
		>
			<h2
				id="about-title"
				className="text-3xl md:text-4xl font-bold text-white text-center"
			>
				About Us
			</h2>

			<p className="text-gray-300 text-center mt-4 max-w-3xl mx-auto text-lg">
				Hexasites is a binational IT development company operating between
				Australia and Argentina. We specialise in building modern websites,
				mobile applications, backend systems and custom digital solutions for
				businesses looking to improve efficiency and expand their digital
				presence.
			</p>

			<div className="mt-16">
				<h3 className="text-2xl font-semibold text-white text-center">
					Our Team
				</h3>

				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
					<div className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-xl">
						<div className="w-32 h-32 rounded-full overflow-hidden bg-white/10 mb-4">
							{/* Photo of Australian colleague goes here */}
							<img
								src="/images/team/australia-partner.jpg"
								alt="Alejandro Gonzales"
								className="w-full h-full object-cover"
							/>
						</div>
						<h4 className="text-xl font-semibold text-white">
							Alejandro Gonzales — Product Manager & Founder
						</h4>
						<p className="text-gray-300 text-sm mt-1">
							Product Manager & Co-Founder
						</p>
						<p className="text-gray-400 text-sm mt-4">
							Responsible for local operations, client communication and
							ensuring high-quality delivery for Australian businesses.
						</p>
					</div>

					<div className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-xl">
						<div className="w-32 h-32 rounded-full overflow-hidden bg-white/10 mb-4">
							{/* Photo of Fermin goes here */}
							<img
								src="/images/team/fermin.jpg"
								alt="Fermin Santiago"
								className="w-full h-full object-cover"
							/>
						</div>
						<h4 className="text-xl font-semibold text-white">
							Fermin Fernandez
						</h4>
						<p className="text-gray-300 text-sm mt-1">
							Full Stack Developer & Co-Founder
						</p>
						<p className="text-gray-400 text-sm mt-4">
							Backend specialist in .NET, Node.js and scalable architectures.
							Focused on high-performance systems and business automation.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
