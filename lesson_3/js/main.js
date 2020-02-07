// window.onload = () => { code };

$(document).ready(function() {

	//$(SELECTOR).doSomething();

	// setTimeout -> delay execution
	// setInterval -> execute over time

	// p -> get me all paragraphs
	// #musaka -> get me all elements with an id = "musaka"
	// .musaka -> get me all elements with a class = "musaka"

	/* Section 1 */
    const paragraph_1_1 = $('#div-1 p');
    // paragraph_1.hide(1000); // hide/show
    // paragraph_1.fadeOut(1000); // fadeOut/fadeIn

    // paragraph_1.on('click', function () {
    paragraph_1_1.click(function () {
        const $this = $(this);
        $this.fadeOut(400);
        setTimeout(function () {
            $this.fadeIn(400);
        }, 600);
    });
    /* END Section 1 */

	/* Section 2 */
    $('#div-2 #swap').click(function () {
        const paragraph_2_1 = $('#div-2 p#one');
        const paragraph_2_2 = $('#div-2 p#two');

        const value_text_one = paragraph_2_1.text(); // .html() is a similar function
        const value_text_two = paragraph_2_2.text();

        paragraph_2_1.text(value_text_two);
        paragraph_2_2.text(value_text_one);
    });
	/* END Section 2 */

	/* Section 3 */
    $('#div-3 #sum').click(function () {
        const input_1 = $('#div-3 #num-one');
        const input_2 = $('#div-3 #num-two');

        const input_value_1 = Number(input_1.val()); // Number, String, ... (all basic types)
        const input_value_2 = Number(input_2.val());

        const result = input_value_1 + input_value_2;

        console.log(result);
        console.log(typeof result);

        $('#div-3 #result').text('Result: ' + result);

        input_1.val('');
        input_2.val('');
    });
	/* END Section 3 */

	/* Section 4 */
    $('#div-4 #fix').click(function () {
        const paragraphs = $('#div-4 p');

        paragraphs.each(function () {
            const $this = $(this);
            const color = $this.attr('class');

            // $this.css('property', 'value')
            // $this.css({ 'property': 'value' })

            // $this.css('color', color);
            $this.css({
                'color': color,
                'backgroundColor': '#000000', // black, #000, rgb(0,0,0), rgba(0,0,0,1)
            });
        });
    });
	/* END Section 4 */

	/* Section 5 */
    $('#div-5 #before').click(function () {
        const html = '<p>I am before.</p>';
        $('#div-5 #alfa').before(html);
        $('#div-5 #content').prepend(html);
    });

    $('#div-5 #after').click(function () {
        const html = '<p>I am after.</p>';
        $('#div-5 #alfa').after(html);
        $('#div-5 #content').append(html);
    });
	/* END Section 5 */

	/* Section 6 */
    $('#div-6 #del').click(function () {
        const paragraphs = $('#div-6 p');
        const len = paragraphs.length;

        if (len > 0) {
            const random = Math.floor(Math.random() * len);
            // paragraphs.eq(random).remove();
            paragraphs
                .eq(random)
                .remove();
        }
        else {
            alert('No more victims to eradicate!!1!');
        }
    });
	/* END Section 6 */

	/* Section 7 */
    $('#div-7 #catch').click(function () {
        $('#div-7')
            .find('#crime')
            .css('fontSize', '34px');
    });
	/* END Section 7 */

	/* Section 8 */
    const square = $('#div-8 #square');
    let degrees = 0;
    let rotation_side = 'right';

    square.css('transform', `rotate(${degrees}deg)`);
    const rotate_interval = setInterval(function () {
        square.css('transform', `rotate(${degrees}deg)`);

        switch (rotation_side) {
            case 'right':
                degrees++;
                break;
            case 'left':
                degrees--;
                break;
            default:
                break;
        }
    }, 2);

    $('#div-8 #swap-direction').click(function () {
        if (rotation_side === 'right') {
            rotation_side = 'left';
        }
        else {
            rotation_side = 'right';
        }
    });
    
	/* END Section 8 */
});