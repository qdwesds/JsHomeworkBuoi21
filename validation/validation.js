// Validation
function checkInputRong(idInput, idNotif) {
  var valueInput = document.getElementById(idInput).value;
  if (valueInput == "") {
    document.getElementById(idNotif).innerHTML = "Vui lòng không để trống";
    return false;
  } else {
    document.getElementById(idNotif).innerHTML = "";
    return true;
  }
}

// Validate tài khoản
function validateAccount(idInput, idNotif) {
  var regexAcc = /^[0-9]+$/;
  var valueInput = document.getElementById(idInput).value;
  if (!valueInput.match(regexAcc) && valueInput !== "") {
    document.getElementById(idNotif).innerHTML = "Vui lòng nhập đúng số";
    return false;
  } else if (valueInput.match(regexAcc) && valueInput !== "") {
    if (valueInput >= 1000 && valueInput <= 999999) {
      document.getElementById(idNotif).innerHTML = "";
      return true;
    } else {
      document.getElementById(idNotif).innerHTML =
        "Tài khoản phải chứa tối đa 4-6 ký số";
      return false;
    }
  }
}

// Validate tên
function validateName(idInput, idNotif) {
  var regexName =
    /^[a-zA-Z'-'\sáàảãạăâắằấầặẵẫậéèẻ ẽẹếềểễệóòỏõọôốồổỗộ ơớờởỡợíìỉĩịđùúủũụưứ� �ửữựÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠ ƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼ� ��ỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞ ỠỢỤỨỪỬỮỰỲỴÝỶỸửữựỵ ýỷỹ]*$/;
  var valueInput = document.getElementById(idInput).value;

  if (!regexName.test(valueInput) && valueInput !== "") {
    document.getElementById(idNotif).innerHTML = "Tên nhân viên không hợp lệ";
    return false;
  } else if (regexName.test(valueInput) && valueInput !== "") {
    document.getElementById(idNotif).innerHTML = "";
    return true;
  }
}

// Validate email
function validateEmail(idInput, idNotif) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var valueInput = document.getElementById(idInput).value;

  if (!regexEmail.test(valueInput) && valueInput !== "") {
    document.getElementById(idNotif).innerHTML = "Email không đúng định dạng";
    return false;
  } else if (regexEmail.test(valueInput) && valueInput !== "") {
    document.getElementById(idNotif).innerHTML = "";
    return true;
  }
}

// Validate mật khẩu
function validatePassword(idInput, idNotif) {
  var regexPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{6,10}$/;
  var valueInput = document.getElementById(idInput).value;
  if (!valueInput.match(regexPassword) && valueInput !== "") {
    document.getElementById(idNotif).innerHTML =
      "Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
    return false;
  } else if (valueInput.match(regexPassword) && valueInput !== "") {
    document.getElementById(idNotif).innerHTML = "";
    return true;
  }
}

// Validate lương
function validateSalary(idInput, idNotif) {
  var regexSal = /^[0-9]+$/;
  var valueInput = document.getElementById(idInput).value;
  if (!valueInput.match(regexSal) && valueInput !== "") {
    document.getElementById(idNotif).innerHTML = "Vui lòng nhập đúng số";
    return false;
  } else if (valueInput.match(regexSal) && valueInput !== "") {
    if (valueInput >= 1e6 && valueInput <= 20e6) {
      document.getElementById(idNotif).innerHTML = "";
      return true;
    } else {
      document.getElementById(idNotif).innerHTML =
        "Lương cơ bản phải từ 1 000 000 - 20 000 000";
      return false;
    }
  }
}

// Validate giờ làm
function validateWorkingHours(idInput, idNotif) {
  var regexHours = /^[0-9]+$/;
  var valueInput = document.getElementById(idInput).value;
  if (!valueInput.match(regexHours) && valueInput !== "") {
    document.getElementById(idNotif).innerHTML = "Vui lòng nhập đúng số";
    return false;
  } else if (valueInput.match(regexHours) && valueInput !== "") {
    if (valueInput >= 80 && valueInput <= 200) {
      document.getElementById(idNotif).innerHTML = "";
      return true;
    } else {
      document.getElementById(idNotif).innerHTML =
        "Số giờ làm phải từ 80 - 200 giờ";
      return false;
    }
  }
}
