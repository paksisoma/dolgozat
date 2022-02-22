const osszespontszam = 6;

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

	const szazalek = Math.floor(pont * (100/osszespontszam));
	let erdem = "";

	if (szazalek < 50) {
		erdem = "Elégtelen";
	} else if (szazalek < 65) {
		erdem = "Elégséges";
	} else if (szazalek < 75) {
		erdem = "Közepes";
	} else if (szazalek < 80) {
		erdem = "Jó";
	} else {
		erdem = "Jeles";
	}
	
	eredmeny.innerHTML = "Pontszám: <b>" + pont + " pont</b><br>"
	+ "Százalék: <b>" + szazalek + "%</b><br>"
	+ "Eredmény: <b>" + erdem + "</b>";
}