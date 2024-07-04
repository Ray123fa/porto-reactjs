const Footer = () => {
	return (
    <div className="flex flex-col items-center justify-center bg-[#cbcfd5] dark:bg-[#e2e2e2]" id="footer">
			<footer className="flex flex-col items-center justify-center w-full h-24 border-t dark:border-gray-700 text-center">
				<p className="text-base font-semibold">
					&copy; {new Date().getFullYear()} | Made with ❤️ by{" "}
					<a href="https://instagram.com/rayhan.frdh" target="__blank">Rayhan F</a><br />
					Design and Inspired by <a href="https://instagram.com/sandhikagalih" target="__blank">Sandhika Galih</a>
				</p>
			</footer>
    </div>
  );
}

export default Footer;