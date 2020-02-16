function collision_check(x, y, data) {
    if (x > 7 || x < 0 || y > 7 || y < 0) {
        return {
            collision: false,
            allowed: false,
        }
    }

    const piece = $(`.field#${x}_${y} .piece`);
    if (piece.length) {
        const piece_id = piece.attr('id');
        const piece_coords = piece_id.split('_');

        if (data.color === piece_coords[0]) {
            return {
                collision: true,
                allowed: false,
            };
        }
        else {
            return {
                collision: true,
                allowed: true,
            };
        }
    }

    return {
        collision: false,
        allowed: true,
    };
}