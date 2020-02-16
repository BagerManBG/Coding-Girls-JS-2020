function move(field_new_id, data) {
    const field_new_arr = field_new_id.split('_');

    // $(`.piece#${data.color}_${data.type}`).remove();
    $(`.field#${data.x}_${data.y}`).empty();
    $(`.field#${field_new_arr[0]}_${field_new_arr[1]}`).empty();

    create_figure(field_new_arr[0], field_new_arr[1], data.color + '_' + data.type);

    change_turn();
}