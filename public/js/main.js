$(document).ready(function() {
    $('#repo-table').DataTable();
} );

$('.js-switch').bootstrapSwitch();

$("#select-all").click(function () {
    $(".js-switch").prop('checked', $(this).prop('checked'));
});
    
$("#select-all").onclick=function () {
    $(".js-switch").setState($("#select-all").state());
};
