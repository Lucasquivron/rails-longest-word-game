function displayNextLetter (grid, index) {

};

$(function () {
  var grid = $('#data_grid').data('grid');
  for (index in grid) {
    var timeout = (parseInt(index) + 1)* 1000
    setTimeout(function () {
      $('#data_grid').append(grid.shift());
      if (grid.length > 0) {
        $('#data_grid').append(', ');
      }
    }, timeout);
  }
})
