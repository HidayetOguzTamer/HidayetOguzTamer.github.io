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
firebase.initializeApp(firebaseConfig);

//login
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            alert("Giriş Yapıldı. Verileri Geti Butonuna Basınız");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            alert("Hatalı Giriş");
            location.reload();
        });
}

function refresh() {
    location.reload(true);
}

// Read data
firebase
    .database()
    .ref("users6/")
    .on("value", function (snapshot) {
        document.getElementById("showUsers").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            let addDiv = document.createElement("tr");
            addDiv.className = "ekle";
            addDiv.innerHTML =
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.uniad +
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.merkezad +
                '  <td class="col-sm-2"     word-break: break-word;">' +
                childData.merkezozet +
                '  <td class="col-sm-2"     word-break: break-word;">' +
                childData.name1 +
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.akademikunvan1 +
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.idarigorev1 +
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.telno +
                '  <td class="col-sm-2"     word-break: break-word;">' +
                childData.name2 +
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.akademikunvan2 +
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.idarigorev2 +
                '  <td class="col-sm-2"     word-break: break-word;">' +
                childData.name3 +
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.akademikunvan3 +
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.idarigorev3 +
                '  <td class="col-sm"     word-break: break-word;">' +
                childData.sunumEvet +
                '  <td class="col-sm"     word-break: break-word;">' +
                childData.sunumHayir;
            document.getElementById("showUsers").appendChild(addDiv);
        });
    });

//sign.out
function signOut() {
    firebase
        .auth()
        .signOut()
        .then(() => {
            // Sign-out successful.
            alert("Başarıyla Çıkış Yapıldı!");
            location.reload();
        })
        .catch((error) => {
            // An error happened.
            alert("Çıkış Yapılamadı!");
            location.reload();
        });
}
