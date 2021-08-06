function startlog() {
    var net1 = document.getElementById('username').value + document.getElementById('password').value;
    var net2 = ('kresnadumbo') + ('manguni88');
    if (net1 == net2) {
        var logakses = document.getElementById('form').innerHTML =
            '<div class="col-lg-8 col-10 text-center" data-aos="zoom-out-down" data-aos-duration="1500" data-aos-delay="500"> <a class="btn btn-primary" style:"width: 100px;" href="form.html" role="button"><i class="bi bi-unlock-fill" style="font-size: 30px;"></i></a> </div>';
    } else {
        var logakses = document.getElementById('form').innerHTML = '<div class="col-lg-8 col-10 text-center"> <h2>SILAHKAN KELUAR !!!</h2> <h5>ANDA BUKAN BAGIAN DARI KRESNA DUMBO</h5> </div>';
    }
};