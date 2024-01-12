import { Theme, save_theme, set_theme, set_theme_onload } from "./theme";
import "@total-typescript/ts-reset";

window.onload = mane;

async function mane() {
	let paramString = document.URL.toString().split("#")[1];
	let params_arr = paramString.split("&");
	for (let i = 0; i <= params_arr.length - 1; i++) {
		let pair = params_arr[i].split("=");
		console.log("Key is:", pair[0]);
		console.log("Value is:", pair[1]);
	}
}
