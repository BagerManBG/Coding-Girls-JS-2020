function create_field() {
	for (let y = 0; y < 8; y++) {
		for (let x = 0; x < 8; x++) {
			const color = (x + y) % 2 !== 0 ? 'black' : 'white';
			const htmlToAdd = `<div class="field ${color}" id="${x}_${y}"><p class="field-id">${x}_${y}</p></div>`;
			$('#main-content').append(htmlToAdd);
		}
	}
}

function initialize_field() {
	create_figure(0, 0, 'b_t');
	create_figure(7, 0, 'b_t');
	create_figure(1, 0, 'b_k');
	create_figure(6, 0, 'b_k');
	create_figure(2, 0, 'b_o');
	create_figure(5, 0, 'b_o');
	create_figure(3, 0, 'b_q');
	create_figure(4, 0, 'b_g');

	create_figure(0, 7, 'w_t');
	create_figure(7, 7, 'w_t');
	create_figure(1, 7, 'w_k');
	create_figure(6, 7, 'w_k');
	create_figure(2, 7, 'w_o');
	create_figure(5, 7, 'w_o');
	create_figure(3, 7, 'w_q');
	create_figure(4, 7, 'w_g');

	for (let i = 0; i <= 7; i++) {
		create_figure(i, 1, 'b_p');
		create_figure(i, 6, 'w_p');
	}
}

function create_figure(x, y, id) {
	const field = $('.field#' + x + '_' + y);
	field.append(`<img alt="${id}" src="resources/images/pieces/${id}.svg" id="${id}" class="${id.charAt(0)}">`);

	const field_img = field.find('#' + id);
	field_img.addClass('piece cursorPointer');

	return field_img;
}

function hints_toggle() {
	const hints = $('.field .field-id');
	hints.hide();

	$document.on('keydown', function (e) {
		if (e.which === 70)
			hints.show();
	});

	$document.on('keyup', function (e) {
		if (e.which === 70)
			hints.hide();
	});
}