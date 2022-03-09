// Bài 1: Tính lương NV
document.getElementById("btnTinhLuongNV").onclick = function () {
  // Đầu vào
  const LUONG = 100000;
  var soNgayLam = document.getElementById("txtSoNgayLam").value;
  // Xử lý

  var tienLuong = LUONG * soNgayLam;
  var currentFormat = new Intl.NumberFormat("vn-VN");

  // Đầu ra
  var ketQuaTienLuong =
    "<div class='alert alert-success'> Tiền lương nhân viên là: ";
  ketQuaTienLuong += currentFormat.format(tienLuong);
  ketQuaTienLuong += "VNĐ</div>";
  console.log(ketQuaTienLuong);
  document.getElementById("footerTinhLuongNV").innerHTML = ketQuaTienLuong;
};
// Bài 2: Tính giá trị trung bình
document.getElementById("btnAverage").onclick = function () {
  // Đầu vào: dom đến 5 thẻ input để lấy 5 giá trị
  var number_1 = document.getElementById("txtNumber_1").value * 1;
  var number_2 = document.getElementById("txtNumber_2").value * 1;
  var number_3 = document.getElementById("txtNumber_3").value * 1;
  var number_4 = document.getElementById("txtNumber_4").value * 1;
  var number_5 = document.getElementById("txtNumber_5").value * 1;
  // Xử lý: 5 số cộng lại chia 5
  var numberAverage =
    (number_1 + number_2 + number_3 + number_4 + number_5) / 5;
  // Đầu ra
  var averageResult =
    "<div class='alert alert-success'> Giá trị trung bình của 5 số là: ";
  averageResult += numberAverage;
  averageResult += "</div>";
  document.getElementById("footerAverage").innerHTML = averageResult;
};
//Bài 3: Quy đổi USD => VNĐ
document.getElementById("btnVND").onclick = function () {
  // Đầu vào: lấy giá trị tiền USD, đặt tỷ giá quy đổi
  const exchangeRate = 23500;
  var USD_value = document.getElementById("txtUSD").value * 1;
  // Xử lý: lấy giá trị tiền USD * tỷ giá
  var VND_value = USD_value * exchangeRate;
  var currentFormat = new Intl.NumberFormat("vn-VN");
  //Đầu ra:
  var VNDResult =
    "<div class='alert alert-success'>Tiền VNĐ quy đổi là: " +
    currentFormat.format(VND_value) +
    "VNĐ </div>";
  document.getElementById("footerVND_value").innerHTML = VNDResult;
};
// Bài 4: Tính chu vi, diện tích hình chữ nhật
document.getElementById("btnPerimeter_Area").onclick = function () {
  // Đầu vào: dom lấy hai giá trị chiều dài, rộng
  var widthValue = document.getElementById("txtWidth").value * 1;
  var heightValue = document.getElementById("txtHeight").value * 1;
  // Xử lý: Chu vi: (dài+rộng) *2, Diện tích: dài * rộng
  var perimeterValue = (widthValue + heightValue) * 2;
  var areaValue = widthValue * heightValue;
  // Đầu ra:
  var perimeterResult = "<div> Chu vi của hình chữ nhật là: ";
  perimeterResult += perimeterValue;
  perimeterResult += "</div>";
  var areaResult = "<div>  Diện tích của hình chữ nhật là: ";
  areaResult += areaValue;
  areaResult += "</div>";
  document.getElementById("footerResult").innerHTML =
    perimeterResult + "<br/>" + areaResult;
};
// Bài 5: Tính tổng hai ký số
document.getElementById("btnTinhTong").onclick = function () {
  // Đầu vào: dom lấy giá trị của số có hai chữ số
  var numberValue = document.getElementById("txtNumber").value * 1;
  // Xử lý:
  var hangChuc = Math.floor(numberValue / 10);
  var hangDonVi = numberValue % 10;
  var tong2KySo = hangChuc + hangDonVi;
  // Đầu ra:
  var ketQuaTong =
    "<div class='alert alert-success'>Tổng hai ký số là: " +
    tong2KySo +
    "</div>";
  document.getElementById("footerTong2KySo").innerHTML = ketQuaTong;
};
