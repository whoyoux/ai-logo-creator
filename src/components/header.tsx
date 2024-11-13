import { ThemeDropdown } from "./theme-dropdown";

export function Header() {
	return (
		<header className="w-full flex justify-between items-center border-b py-6 mb-4">
			<h1>ai logo creator</h1>
			<div>
				<ThemeDropdown />
			</div>
		</header>
	);
}
