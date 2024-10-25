function kiemTra() {
    var tenDangNhap = document.frDangKy.tenDangNhap.value;
    var matKhau = document.frDangKy.matKhau.value;
    var nhapLaiMatKhau = document.frDangKy.nhapLaiMatKhau.value;
    var email = document.frDangKy.email.value;
    var hoTen = document.frDangKy.hoTen.value;
    var quocGia = document.frDangKy.quocGia.value;
    var thanhPho = document.frDangKy.thanhPho.value;
    var maBuuChinh = document.frDangKy.maBuuChinh.value;
    var gioiTinh = document.frDangKy.gioiTinh.value;
    var namSinh = document.frDangKy.namSinh.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;


    if (tenDangNhap == '') {
        alert('Nhập tên đăng nhập');
        document.frDangKy.tenDangNhap.focus();
        return false;
    }
    else
        if (tenDangNhap.length < 6) {
            alert('Tên đăng nhập có ít nhất 6 ký tư');
            document.frDangKy.tenDangNhap.focus();
            return false;
        }
    if (matKhau == '') {
        alert('Nhập mật khẩu');
        document.frDangKy.matKhau.focus();
        return false;
    }
    if (nhapLaiMatKhau != matKhau) {
        alert('Nhập lại mật khẩu không khớp');
        document.frDangKy.nhapLaiMatKhau.focus();
        return false;
    }
    if (email == '') {
        alert('Nhập địa chỉ email');
        document.frDangKy.email.focus();
        return false;
    }
    else
        if (!filter.test(email)) {
            alert('Email chưa đúng');
            document.frDangKy.email.focus();
            return false;
        }
    if (hoTen == '') {
        alert('Nhập họ tên');
        document.frDangKy.hoTen.focus();
        return false;
    }
    if (quocGia == 'chon') {
        alert('Chọn quốc gia');
        return false;
    }
    if (thanhPho == 'chon') {
        alert('Chọn thành phố');
        return false;
    }
    if (maBuuChinh == '') {
        alert('Mã bưu chính không được để trống');
        document.frDangKy.maBuuChinh.focus();
        return false
    }
    if (gioiTinh == '') {
        alert('Chọn giới tính');
        return false;
    }
    if (namSinh == '') {
        alert('Nhập năm sinh');
        document.frDangKy.namSinh.focus();
        return false;
    }
    else
        if (namSinh.length < 4) {
            alert('Năm sinh không đúng');
            document.frDangKy.namSinh.focus();
            return false;
        }
        else
            if (namSinh.length > 4) {
                alert('Năm sinh không đúng');
                document.frDangKy.namSinh.focus();
                return false;
            }
    alert('Đăng ký thành công');
    var thongTin = '?tenDangNhap=' + encodeURIComponent(tenDangNhap) +
        '&matKhau=' + encodeURIComponent(matKhau) +
        '&email=' + encodeURIComponent(email) +
        '&hoTen=' + encodeURIComponent(hoTen) +
        '&quocGia=' + encodeURIComponent(quocGia) +
        '&thanhPho=' + encodeURIComponent(thanhPho) +
        '&maBuuChinh=' + encodeURIComponent(maBuuChinh) +
        '&gioiTinh=' + encodeURIComponent(gioiTinh) +
        '&namSinh=' + encodeURIComponent(namSinh);
    window.location.href = 'thongTin.html' + thongTin;

}