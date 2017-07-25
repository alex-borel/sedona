$(function () {
    let min  = 0;
    let max = 3000;

    $('.slider').slider({
        range: true,
        min: 0,
        max: 4000,
        values: [0, 3000],
        slide: function(event, ui) {
            $('.one-slider').val(ui.values[0]);
            $('.two-slider').val(ui.values[1]);
        }
    });

    $('.one-slider').change( function () {
        min = this.value;
        $('.slider').slider( 'option', 'values', [ min, max] );
    })

    $('.two-slider').change( function () {
        max = this.value;
        $('.slider').slider( 'option', 'values', [ min, max] );
    })
});
