const css = {
    left_0: {left: '0%'},
    left_100: {left: '100%'},
    left__100: {left: '-100%'},
};

const wait_time = 5000;
const anim_time = 1500;

let is_animating = false;
let interval;

const move_left = (slides) => {
    is_animating = true;
    const active_element = slides.filter('.active');

    const length = slides.length;
    const active_id = Number(active_element.attr('id').split('_')[1]);

    // condition ? if_true : if_false
    // let next_id = 0;
    // if (active_id + 1 < length) {
    //     next_id = active_id + 1;
    // }
    // else {
    //     next_id = 0;
    // }
    const active_id_incremented = active_id + 1;
    const next_id = active_id_incremented < length ? active_id_incremented : 0;
    const next_element = slides.filter('#slide_' + next_id);

    next_element.css(css.left_100); // css.left_100 === {left: '100%'}
    active_element.css(css.left_0); // css.left_0 === {left: '0%'}

    next_element.animate(css.left_0, anim_time + 1);
    active_element.animate(css.left__100, anim_time, function () {
        slides.removeClass('active');
        next_element.addClass('active');
        is_animating = false;
    });
};

const move_right = (slides) => {
    is_animating = true;
    const active_element = slides.filter('.active');

    const length = slides.length;
    const active_id = Number(active_element.attr('id').split('_')[1]);

    const active_id_incremented = active_id - 1;
    const next_id = active_id_incremented < 0 ? length - 1 : active_id_incremented;
    const next_element = slides.filter('#slide_' + next_id);

    next_element.css(css.left__100);
    active_element.css(css.left_0);

    next_element.animate(css.left_0, anim_time + 1);
    active_element.animate(css.left_100, anim_time, function () {
        slides.removeClass('active');
        next_element.addClass('active');
        is_animating = false;
    });
};

const init = () => {
    const slides = $('.container--slides--slide');
    interval = setInterval(move_left, wait_time, slides);

    $(document).on('keyup', function (e) {
        const key_code = Number(e.which);

        if (!is_animating) {
            switch (key_code) {
                case 39:
                    clearInterval(interval);
                    interval = setInterval(move_left, wait_time, slides);
                    move_left(slides);
                    break;
                case 37:
                    clearInterval(interval);
                    interval = setInterval(move_left, wait_time, slides);
                    move_right(slides);
                    break;
                default:
                    break;
            }
        }
    });
};

window.onload = init();