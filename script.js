function ellenorzes() {
	let pont = 0;

	const eredmeny = document.getElementById("eredmeny");

	//Első
	const elso = document.getElementById("2");

	if (elso.checked) {
		pont++;
	}

	//Második
	const masodik = document.getElementById("masodik");

	if (masodik.value == 1) {
		pont++;
	}

	//Harmadik
	let hpont = 0;
	const harmadik = [
	document.getElementById("5"),
	document.getElementById("6"),
	document.getElementById("7"),
	document.getElementById("8")]

	if (harmadik[0].checked) {
		hpont++;
	}

	if (harmadik[1].checked) {
		hpont--;
	}

	if (harmadik[2].checked) {
		hpont++;
	}

	if (harmadik[3].checked) {
		hpont--;
	}

	if (hpont < 0) {
		hpont = 0;
	}

	pont += hpont;

	eredmeny.innerHTML = "Eredmény: " + pont;
}