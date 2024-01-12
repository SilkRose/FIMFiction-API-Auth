import { Theme, save_theme, set_theme, set_theme_onload } from "./theme";
import "@total-typescript/ts-reset";

let mane_content = document.getElementById("mane")!;
window.onload = mane;

async function mane() {
	const parameters = document.URL.toString().split("#")[1];
	if (parameters.includes("error")) {
		let error_type;
		const array = parameters.split("&");
		for (let i = 0; i <= array.length - 1; i++) {
			if (array[i].startsWith("error")) {
				error_type = array[i].split("=")[1];
				break;
			}
		}
		const error = `Encountered the following error: ${error_type}`;
		const message = `If the error persists, please <a href="mailto:silkrose@love-tolerance.com">contact</a> me.`;
		append_element(error);
		append_element(message);
	} else {
		append_element(parameters);
	}
}

function append_element(element: string) {
	const new_element = document.createElement("div");
	new_element.className = "content";
	new_element.innerHTML = `${element}`;
	mane_content.appendChild(new_element);
	new_element.scrollIntoView();
}
