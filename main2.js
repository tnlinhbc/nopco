window.onload = function () {
    var params = new URLSearchParams(window.location.search);
    var tenDangNhap = params.get('tenDangNhap');
    var matKhau = params.get('matKhau');
    var email = params.get('email');
    var hoTen = params.get('hoTen');
    var quocGia = params.get('quocGia');
    var thanhPho = params.get('thanhPho');
    var maBuuChinh = params.get('maBuuChinh');
    var gioiTinh = params.get('gioiTinh');
    var namSinh = params.get('namSinh');
    document.getElementById("tenDangNhap").innerHTML = '<p><b>Tên đăng nhập: </b>' + tenDangNhap + '</p>';
    document.getElementById("matKhau").innerHTML = '<p><b>Mật khẩu: </b>' + matKhau + '</p>';
    document.getElementById("email").innerHTML = '<p><b>Địa chỉ email: </b>' + email + '</p>';
    document.getElementById("hoTen").innerHTML = '<p><b>Họ và tên: </b>' + hoTen + '</p>';
    document.getElementById("quocGia").innerHTML = '<p><b>Quốc gia: </b>' + quocGia + '</p>';
    document.getElementById("thanhPho").innerHTML = '<p><b>Thành phố/Khu vực: </b>' + thanhPho + '</p>';
    document.getElementById("maBuuChinh").innerHTML = '<p><b>Mã bưu chính: </b>' + maBuuChinh + '</p>';
    document.getElementById("gioiTinh").innerHTML = '<p><b>Giới tính: </b>' + gioiTinh + '</p>';
    document.getElementById("namSinh").innerHTML = '<p><b>Năm sinh: </b>' + namSinh + '</p>';

}