function startlog() {
    var net1 = document.getElementById('username').value + document.getElementById('password').value;
    var net2 = ('kresnadumbo') + ('manguni');
    if (net1 == net2) {
        var logakses = document.getElementById('form').innerHTML =
            '<div class="col-lg-8 col-10 text-center" data-aos="zoom-out-down" data-aos-duration="1500" data-aos-delay="500"> <a class="btn btn-primary" style:"width: 100px;" href="form.html" role="button"><i class="bi bi-unlock-fill" style="font-size: 30px;"></i>KLICK DISINI !</a> </div>';
    } else {
        var logakses = document.getElementById('form').innerHTML = '<div class="col-lg-8 col-10 text-center"> <h2>SILAHKAN KELUAR !!!</h2> <h5>ANDA BUKAN BAGIAN DARI KRESNA DUMBO</h5> </div>';
    }
};

$('#show2').hide();
var pwd = document.getElementById('password');
var pwd2 = document.getElementById('password2');

$('#show').on('click', function () {
    $('#show').hide();
    $('#show2').show();
    if (pwd.type === "password") {
        pwd.type = "text";
    } else {
        pwd.type = "password";
    }
});

$('#show2').on('click', function () {
    $('#show2').hide();
    $('#show').show();

    if (pwd.type === "text") {
        pwd.type = "password";
    } else {
        pwd.type = "text";
    }
})