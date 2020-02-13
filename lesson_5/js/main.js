const $document = $(document);
let player_turn = 'w'; //w - whites; b - blacks

function piece_click() {
	const piece = $(this);
	const field = piece.parent();

	const piece_data = piece.attr('id').split('_');
	const field_data = field.attr('id').split('_');

	const data = {
		x: Number(field_data[0]),
		y: Number(field_data[1]),
		color: piece_data[0],
		type: piece_data[1],
	};

	if (data.color === player_turn) {
		const fields = $('.field');
		fields.removeClass('greenBG');
		fields.off('click');

		if (field.hasClass('selectedPiece')) {
			field.removeClass('selectedPiece');
		}
		else {
			fields.removeClass('selectedPiece');
			field.addClass('selectedPiece');
			select_piece(data, field, piece);
		}
	}
}

function change_turn() {
	const fields = $('.field');
	const pieces = fields.find('.piece');

	fields.off('click');
	fields.removeClass('selectedPiece greenBG');

	pieces.off('click');
	pieces.click(piece_click);

	player_turn = player_turn === 'w' ? 'b' : 'w';
}

function main() {
	$('#main-content').empty();
	player_turn = 'w';

	create_field();
	initialize_field();
	hints_toggle();
	$('.field .piece').click(piece_click);
}

$document.ready(main);