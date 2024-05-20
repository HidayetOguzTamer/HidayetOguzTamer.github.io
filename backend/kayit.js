// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDmUHmAutU8W1kMXMcfqRVMOazTs9SNFcs",
    authDomain: "harummmw.firebaseapp.com",
    projectId: "harummmw",
    storageBucket: "harummmw.appspot.com",
    messagingSenderId: "686002002322",
    appId: "1:686002002322:web:7b82db1a76251273fd894b",
    measurementId: "G-JTCGPWHFTM",
};
base.initializeApp(firebaseConfig);

// Create a new data
function createData() {
    // console.log(document.getElementById("yemek-katilim-evet").value);

    let sunumEvet = " ",
        sunumHayir = " ";

    if (document.querySelector(".sunumEvet").checked) {
        sunumEvet = document.getElementById("sunumEvet").value;
    }

    if (document.querySelector(".sunumHayir").checked) {
        sunumHayir = document.getElementById("sunumHayir").value;
    }

    const newData = {
        name1: document.getElementById("name1").value,
        name2: document.getElementById("name2").value,
        name3: document.getElementById("name3").value,

        akademikunvan1: document.getElementById("akademikunvan1").value,
        akademikunvan2: document.getElementById("akademikunvan2").value,
        akademikunvan3: document.getElementById("akademikunvan3").value,

        idarigorev1: document.getElementById("idarigorev1").value,
        idarigorev2: document.getElementById("idarigorev2").value,
        idarigorev3: document.getElementById("idarigorev3").value,

        telno: document.getElementById("telno").value,

        merkezad: document.getElementById("merkezad").value,
        merkezozet: document.getElementById("merkezozet").value,

        uniad: document.getElementById("uniad").value,

        sunumEvet: sunumEvet,
        sunumHayir: sunumHayir,
    };

    firebase.database().ref("users6/").push(newData);

    alert("Başarıyla Kayıt Edildi");

    setTimeout(function () {
        window.location.href = "../index.html";
    }, 6000);
}
