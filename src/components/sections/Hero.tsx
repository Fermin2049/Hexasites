'use client';

import FloatingLines from '@/components/animations/FloatingLines';
import React from 'react';

export default function Hero() {
	return (
		<section
			className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6"
			aria-label="Hero section"
		>
			{/* Background animation */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<FloatingLines
					enabledWaves={['top', 'middle', 'bottom']}
					lineCount={[10, 15, 20]}
					lineDistance={[8, 6, 4]}
					bendRadius={5.0}
					bendStrength={-0.5}
					interactive={true}
					parallax={true}
				/>
			</div>

			{/* Content */}
			<main className="relative max-w-4xl mx-auto">
				<h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl leading-tight">
					Strategic Digital Solutions for Growing Businesses
				</h1>

				<p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
					We design and build high-performance websites, mobile apps, and custom IT systems.
					Helping Australian companies streamline operations and expand their digital presence.
				</p>

				<button className="mt-8 px-8 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-lg hover:bg-white/20 transition">
					Get a Free Consultation
				</button>
			</main>
		</section>
	);
}
