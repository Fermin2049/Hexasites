'use client';

import FloatingLines from '@/components/animations/FloatingLines';
import './hero.css';

import React from 'react';

export default function Hero() {
	return (
		<section
			className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden"
			aria-label="Hero section"
		>
			{/* Background animation */}
			<div className="absolute inset-0 -z-10">
				<div className="w-full h-full relative">
					<FloatingLines
						enabledWaves={['top', 'middle', 'bottom']}
						lineCount={[10, 15, 20]}
						lineDistance={[8, 6, 4]}
						bendRadius={5}
						bendStrength={-0.5}
						interactive
						parallax
					/>
				</div>
			</div>

			{/* Content */}
			<main className="hero-content relative max-w-4xl mx-auto z-20 px-6">
				<h1 className="hero-title">
					Strategic Digital Solutions for Growing Businesses
				</h1>

				<p className="hero-description">
					We design and build high-performance websites, mobile apps, and custom
					IT systems. Helping Australian companies streamline operations and
					expand their digital presence.
				</p>

				<button className="hero-button">Get a Free Consultation</button>
			</main>
		</section>
	);
}
