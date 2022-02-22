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
	[document.getElementById("5"), true],
	[document.getElementById("6"), false],
	[document.getElementById("7"), true],
	[document.getElementById("8"), false]];
	
	for (let i = 0; i < harmadik.length; i++) {
		if (harmadik[i][0].checked) {
			if (harmadik[i][1]) {
				hpont++;
			} else {
				hpont--;
			}
		}
	}

	if (hpont < 0) {
		hpont = 0;
	}

	pont += hpont;

	//Negyedik
	const negyedik = document.getElementById("negyedik");
	if (negyedik.value.trim().toLowerCase() === "zöld") {
		pont++;
	}

	//Ötödik
	const otodik = document.getElementById("otodik");
	if (parseInt(otodik.value) === 11) {
		pont++;
	}

	eredmeny.innerHTML = "Eredmény: " + pont;
}