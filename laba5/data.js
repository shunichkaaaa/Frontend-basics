const fnm = document.studentForm.fnm;
const variant = document.studentForm.variant;
const phone = document.studentForm.phone;
const faculty = document.studentForm.faculty;
const address = document.studentForm.address;

let check = true;

function Formdata(data) {
  /* if the "Full Name" field is empty, length less than 3*/
  if (data.fnm != null && data.fnm.value.length < 3) {
    check = false;
    document.getElementById("fnm-validation").innerText =
      "The full name should consist from at least 3 symbols.";
    fnm.classList.add("is-invalid");
    fnm.classList.remove("is-valid");
  } else if (!/^[a-zA-Z. ]+$/.test(data.fnm.value)) {
    check = false;
    document.getElementById("fnm-validation").innerText = "The full name contains invalid symbols.";
    fnm.classList.add("is-invalid");
    fnm.classList.remove("is-valid");
  } else {
    fnm.classList.remove("is-invalid");
    fnm.classList.add("is-valid");
    document.getElementById("fnm-validation").innerText = null;
  }

  /* if the "Variant" was not selected*/
  var selectedValue = variant.value;
  if (
    selectedValue !== "1" &&
    selectedValue !== "2" &&
    selectedValue !== "3" &&
    selectedValue !== "4" &&
    selectedValue !== "5"
  ) {
    check = false;
    document.getElementById("variant-validation").innerText = "The variant should be selected.";
    variant.classList.add("is-invalid");
    variant.classList.remove("is-valid");
  } else {
    variant.classList.remove("is-invalid");
    variant.classList.add("is-valid");
    document.getElementById("variant-validation").innerText = null;
  }

  /* Phone number */
  if (data.phone != null && data.phone.value.length < 10) {
    check = false;
    document.getElementById("phone-validation").innerText =
      "The phone number should consist from at least 10 symbols.";
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
  } else if (!/^[0-9-+() ]+$/.test(data.phone.value)) {
    check = false;
    document.getElementById("phone-validation").innerText =
      "The phone number contains invalid symbols.";
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
  } else {
    phone.classList.remove("is-invalid");
    phone.classList.add("is-valid");
    document.getElementById("phone-validation").innerText = null;
  }

  /* Faculty */
  if (data.faculty != null && data.faculty.value.length < 2) {
    check = false;
    document.getElementById("faculty-validation").innerText =
      "The faculty should consist from at least 2 symbols.";
    faculty.classList.add("is-invalid");
    faculty.classList.remove("is-valid");
  } else if (!/^[a-zA-Z ]+$/.test(data.faculty.value)) {
    check = false;
    document.getElementById("faculty-validation").innerText =
      "The faculty contains invalid symbols.";
    faculty.classList.add("is-invalid");
    faculty.classList.remove("is-valid");
  } else {
    faculty.classList.remove("is-invalid");
    faculty.classList.add("is-valid");
    document.getElementById("faculty-validation").innerText = null;
  }

  /* Address */
  if (data.address != null && data.address.value.length < 4) {
    check = false;
    document.getElementById("address-validation").innerText =
      "The address should consist from at least 4 symbols.";
    address.classList.add("is-invalid");
    address.classList.remove("is-valid");
  } else if (!/^[A-Za-z. ]+$/.test(data.address.value)) {
    check = false;
    document.getElementById("address-validation").innerText =
      "The address number contains invalid symbols.";
    address.classList.add("is-invalid");
    address.classList.remove("is-valid");
  } else {
    address.classList.remove("is-invalid");
    address.classList.add("is-valid");
    document.getElementById("address-validation").innerText = null;
  }

  if (check == false) {
    document.querySelector(".output").classList.remove("output--visible");
    check = true;
    return false;
  } else {
    document.querySelector(".fnm-output").innerText = fnm.value;
    let selectedText = null;
    for (let i = 0; i < variant.options.length; i++) {
      if (variant.options[i].value === selectedValue) {
        selectedText = variant.options[i].innerText;
        break;
      }
    }
    document.querySelector(".variant-output").innerText = selectedText;
    document.querySelector(".phone-output").innerText = phone.value;
    document.querySelector(".faculty-output").innerText = faculty.value;
    document.querySelector(".address-output").innerText = address.value;
    document.querySelector(".output").classList.add("output--visible");
    return false;
  }
}
