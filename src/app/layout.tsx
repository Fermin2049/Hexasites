import './(site)/globals.css';
import localFont from 'next/font/local';

const sofiaPro = localFont({
	src: [
		{
			path: '../fonts/SofiaPro/Sofia-Pro-Light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../fonts/SofiaPro/Sofia-Pro-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/SofiaPro/Sofia-Pro-Bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-sofia',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" className="h-full">
			<body
				className={`${sofiaPro.variable} min-h-screen h-full m-0 bg-black text-white`}
			>
				{children}
			</body>
		</html>
	);
}
