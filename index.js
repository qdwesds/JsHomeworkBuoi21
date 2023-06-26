var arrNhanVien = [];
var arrInput = [
  "tknv",
  "name",
  "email",
  "password",
  "datepicker",
  "luongCB",
  "chucvu",
  "gioLam",
];

var arrNoti = [
  "tbTKNV",
  "tbTen",
  "tbEmail",
  "tbMatKhau",
  "tbNgay",
  "tbLuongCB",
  "tbChucVu",
  "tbGiolam",
];

// Thêm nhân viên

function themNhanVien() {
  var nhanVien = new NhanVien();

  var valid = true;

  for (var i = 0; i < arrInput.length; i++) {
    valid &= checkInputRong(arrInput[i], arrNoti[i]);
    var giaTri = document.getElementById(arrInput[i]).value;
    nhanVien[arrInput[i]] = giaTri;
  }

  valid &=
    validateAccount("tknv", "tbTKNV") &
    validateName("name", "tbTen") &
    validateEmail("email", "tbEmail") &
    validatePassword("password", "tbMatKhau") &
    validateSalary("luongCB", "tbLuongCB") &
    validateWorkingHours("gioLam", "tbGiolam");
  if (valid) {
    arrNhanVien.push(nhanVien);
    //   console.log(arrNhanVien);
    renderNhanVien();
    document.getElementById("formNhanVien").reset();
    saveLocal();
  }
}
document.getElementById("btnThemNV").onclick = themNhanVien;

// Render nhân viên
function renderNhanVien(arrNewNhanVien) {
  if (arrNewNhanVien == undefined && arrNewNhanVien !== "") {
    arrNewNhanVien = arrNhanVien;
  }

  var content = "";
  for (var i = 0; i < arrNewNhanVien.length; i++) {
    var nhanVien = arrNewNhanVien[i];
    var newNhanVien = new NhanVien();
    console.log(newNhanVien);
    Object.assign(newNhanVien, nhanVien);
    content += `
    <tr>
    <td>${newNhanVien.tknv}</td>
    <td>${newNhanVien.name}</td>
    <td>${newNhanVien.email}</td>
    <td>${newNhanVien.datepicker}</td>
    <td>${newNhanVien.chucvu}</td>
    <td>${newNhanVien.tinhTongLuong()}</td>
    <td>${newNhanVien.xepLoai()}</td>
    <td>
    <button onclick="xoaNhanVien(${
      newNhanVien.tknv
    })" class="btn btn-danger">Xóa</button>
    <button onclick="layThongTinNhanVien(${
      newNhanVien.tknv
    })" class="btn btn-warning">Sửa</button>
    </td>
    </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

// Ẩn nút thêm và cập nhật nhân viên
document.getElementById("btnThem").onclick = function () {
  var btnCapNhat = document.getElementById("btnCapNhat");
  btnCapNhat.style.display = "none";
  var btnThemNV = document.getElementById("btnThemNV");
  btnThemNV.style.display = "inline-block";
};

// Xóa nhân viên
function xoaNhanVien(maNv) {
  var index = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    if (nhanVien.tknv == maNv) {
      index = i;
    }
  }
  arrNhanVien.splice(index, 1);
  renderNhanVien();
  saveLocal();
}

// Local storage
function saveLocal() {
  localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}

function getLocal() {
  var data = localStorage.getItem("arrNhanVien");
  if (data) {
    arrNhanVien = JSON.parse(data);
    renderNhanVien();
  }
}
getLocal();

// Sửa nhân viên
function layThongTinNhanVien(maNv) {
  var nhanVien = {};
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].tknv == maNv) {
      nhanVien = arrNhanVien[i];
    }
  }
  // console.log(nhanVien);
  for (var z = 0; z < arrInput.length; z++) {
    document.getElementById(arrInput[z]).value = nhanVien[arrInput[z]];
  }

  document.getElementById("btnThemNV").style.display = "none";
  document.getElementById("btnCapNhat").style.display = "inline-block";
  document.getElementById("myModal").classList.add("show");
  document.getElementById("myModal").style.display = "inline-block";
  document.getElementById("tknv").readOnly = true;
  var btnDong = document.getElementById("btnDong");
  var modal = document.getElementById("myModal");
  var modalContent = document.querySelector(".modal-content");
  modal.style.overflowY = "scroll";
  modal.addEventListener("mouseover", function () {
    modalContent.style.overflowY = "auto";
  });

  modal.addEventListener("mouseout", function () {
    modalContent.style.overflowY = "hidden";
  });
  btnDong.addEventListener("click", function () {
    modal.style.display = "none";
  });
}

// Cập nhật thông tin nhân viên
function capNhat() {
  var nhanVien = new NhanVien();

  var valid = true;

  for (var i = 0; i < arrInput.length; i++) {
    valid &= checkInputRong(arrInput[i], arrNoti[i]);
    var valueInput = document.getElementById(arrInput[i]).value;
    nhanVien[arrInput[i]] = valueInput;
  }

  valid &=
    validateAccount("tknv", "tbTKNV") &
    validateName("name", "tbTen") &
    validateEmail("email", "tbEmail") &
    validatePassword("password", "tbMatKhau") &
    validateSalary("luongCB", "tbLuongCB") &
    validateWorkingHours("gioLam", "tbGiolam");

  var index = -1;
  for (var z = 0; z < arrNhanVien.length; z++) {
    if (arrNhanVien[z].tknv == nhanVien.tknv) {
      index = z;
    }
  }
  arrNhanVien[index] = nhanVien;

  if (valid) {
    document.getElementById("formNhanVien").reset();
    document.getElementById("tknv").readOnly = false;
    renderNhanVien();
    saveLocal();
  }
}
document.getElementById("btnCapNhat").onclick = capNhat;

// Search nhân viên
document.getElementById("btnTimNV").onclick = function () {
  var tuKhoa = document.getElementById("searchName").value;
  var newTuKhoa = tuKhoa.toLowerCase();
  var arrSearch = [];
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    var newNhanVien = new NhanVien();
    Object.assign(newNhanVien, nhanVien);
    var xepLoai = newNhanVien.xepLoai().toLowerCase();
    if (xepLoai.includes(newTuKhoa)) {
      arrSearch.push(nhanVien);
    }
  }
  renderNhanVien(arrSearch);
};
