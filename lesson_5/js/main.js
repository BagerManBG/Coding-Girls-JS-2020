const $document = $(document);
let player_turn = 'w'; //w - whites; b - blacks

function piece_click() {}

function change_turn() {}

function main() {
	$('#main-content').empty();
	player_turn = 'w';

	create_field();
	initialize_field();
	hints_toggle();
	$('.field .piece').click(piece_click);
}

$document.ready(main);