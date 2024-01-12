import { Theme, save_theme, set_theme, set_theme_onload } from "./theme";
import "@total-typescript/ts-reset";

window.onload = mane;

async function mane() {
	const values = window.location.search;
	const params = new URLSearchParams(values);
	params.forEach((p) => console.log(p));
}
