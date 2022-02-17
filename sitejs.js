// 4. uzdevums

function je_salidzina() {
	let a = 0;
	let b = 8;

	if (typeof a === 'undefined' && typeof b === 'undefined') {
		console.log("Mainīgais a vai b nav definēts");
	} else if (a > b) {
		console.log("a lielāks par b");
	} else if (a < b) {
		console.log("a mazāks par b");
	} else if (a === b) {
		console.log("abi lielumi ir vienādi");
	}
}

// 5. uzdevums
function je_cikls() {
	let a = 0;
	let b = 8;
	let c = 0;
	let d = 8;
	let rngx = (a + b) - (c + d);
	let rng = 1;

	while (rng < rngx + 1) {
		console.log(rng, '.rinda: vērtība ir', a + b - rng - 1);
		rng++;
	}
}

// 6. uzdevums

var clicks = 0;

function je_poga() {
	clicks += 1;
	document.getElementById("clicks").innerHTML = clicks;
}


// 7. uzdevums

function je_poga2() {
	document.getElementById("check").innerHTML = "Šis bija viens klikšķis";
}

function je_poga2_db() {
	document.getElementById("check").innerHTML = "Šis bija dubultklikšķis.";
}

// 8. Uzdevums


function je_poga3() {
	btn.style.backgroundColor = "#BF616A";
	btn.style.fontSize = "28px";
	setTimeout(() => {
		btn.style.backgroundColor = "#ECEFF4";
    btn.style.fontSize = "14px";
	}, 2000)
}