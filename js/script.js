$(document).ready(function () {
    $.ajaxSetup({
        cache: false
    });
    $('#nama_siswa').keyup(function () {
        $('#resultlist').html('');
        $('#state').val('');
        let nama_siswa = $('#nama_siswa').val();
        $.ajax({
            type: 'POST',
            url: "get_data.php",
            data: {
                nama_siswa: nama_siswa
            },
            success: function (data) {
                $.each(JSON.parse(data), function (key, value) {
                    $('#resultlist').append(`
                                <li class="list-group-item link-class">
                                    <img src="avatar/` + value.avatar + `" height="40" width="40" class="img-thumbnail" /> 
                                    <span class="nama">` + value.nama_siswa + `</span>
                                    <span class="text-muted" style="float: right;">` + value.alamat + `</span>
                                </li>`);
                });
            }
        });
    });
    $('#resultlist').on('click', 'li', function () {
        let nama_siswa = $(this).children('.nama').text();
        $('#nama_siswa').val(nama_siswa);
        $("#resultlist").html('');
    });
});