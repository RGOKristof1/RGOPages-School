let students = [];
const content = document.getElementById('content');
const loginPage = document.getElementById('loginPage');
const registerPage = document.getElementById('registerPage');
const forgetPasswordPage = document.getElementById('forgotPasswordPage');
const resetPasswordPage = document.getElementById('resetPasswordPage');
const userDataPage = document.getElementById('userDataPage');
const logInBtn = document.getElementById('logInBtn');
const logInBtn2 = document.getElementById('logInBtn2');
const newRegisterBtn = document.getElementById('newRegisterBtn');
const registerBtn = document.getElementById('registerBtn');
const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
const newPasswordBtn = document.getElementById('newPasswordBtn');
const requirePasswordBtn = document.getElementById('requirePasswordBtn');
const logOutBtn = document.getElementById('logOutBtn');

window.addEventListener('load', () => {
    registerPage.remove();
    forgetPasswordPage.remove();
    resetPasswordPage.remove();
    userDataPage.remove();
})

logInBtn.addEventListener('click', () => {
    loginPage.remove();
    content.append(userDataPage);

})

logInBtn2.addEventListener('click', () => {
    registerPage.remove();
    content.append(loginPage);

})

logOutBtn.addEventListener('click', () => {
    userDataPage.remove();
    content.append(loginPage);

})

registerBtn.addEventListener('click', () => {
    loginPage.remove();
    content.append(registerPage);

})

newRegisterBtn.addEventListener('click', () => {
    registerPage.remove();
    content.append(loginPage);
    //input elemek értékének beolvasása
    let newStudent = {
        userName: registerName.value,
        password: registerPassword.value,
        birthDate: birthDate.value,
        class: schoolClass.value,
        email: email.value,
        phone: phone.value
    }
    students.push(newStudent);

})

forgotPasswordBtn.addEventListener('click', () => {
    loginPage.remove();
    content.append(forgetPasswordPage);

})

requirePasswordBtn.addEventListener('click', () => {
    forgetPasswordPage.remove();
    content.append(resetPasswordPage);

})

newPasswordBtn.addEventListener('click', () => {
    resetPasswordPage.remove();
    content.append(loginPage);

})

//Feladat leírás

//A feladat egy bejelentkezési és regisztrációs felület elkészítése a Bláthyba járó diákok számára. A felület kínézete már elkészült, így csak a működését kell befejezni az alábbiak szerint:

/*A diákok profilját egy-egy objektumként add hozzá a students Array-hez. A diákokról tárold el a következőket:
Felhasználónév: registerName
Jelszó: registerPassword
Születési dátum: birthDate
Osztály: schoolClass
Email: email
Telefonszám: phone


Ezeket az adatokat a regisztrációs (registerPage) űrlap segítségével kérd be a felhasználóktól, a newRegisterBtn-ra kattintáskor!

Regisztrációkor ellenőrizd le, hogy létezik-e már felhasználó a students Array-ben, a megadott felhasználónévvel!

A regisztrációs űrlapon szerepel egy jelszó megerősítő mező is. A regisztráció csak akkor sikeres, ha a jelszó és a jelszó megerősítő mező értéke megegyezik, ha felhasználó még nem létezik a students Array-ben és ha minden adatot megadott a felhasználó, akkor sikeres a regisztráció!

Amennyiben a regisztráció sikeres, ennek tényéről tájékoztasd egy alert üzenetben a felhasználót! Majd tüntesd el a regisztrációs felületet és jelenítsd meg újra a bejelentkezési felületet!

A bejelentkezési felületen validáld, a felhasználónevet és a jelszavat! Csak akkor sikeres a bejelentkezés, ha a felhasználónévhez a hozzá tartozó jelszó lett megadva. Amennyiben ez nem teljesül egy alert üzenetben közöld a felhasználóval: "Hibás felhasználónév, vagy jelszó!"
Sikeres bejelentkezés esetén szintén egy alert üzenetben tájékoztasd a felhasználót!

A bejelentkezés után tüntesd el a bejelentkezési felületet és jelenítsd meg a felhasználó adatait tartalmazó userDataPage oldalt, ahova a mintáknak megfelelő (HTML) adatokat írasd ki a felhasználókról.

A kijelentkezés gombra kattintva, újra a bejelentkezési felület jelenjen meg!
Ahol szükséges töröld az űrlapelemek értékeit!

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Szorgalmi feladatok a regisztrációs részhez:
1. Validáljátok le, hogy a felhasználók életkora megfelel-e ahhoz, hogy Bláthy diákprofilt készítsenek! Diákprofilt csak a 2006 és 2012 között születettek készíthetnek!
2. Ellenőrizzátek, hogy a felhasználó által megadott email-cím valóban bláthys-e, tehát @blathy.info-ra végződik-e!
3. Ellenőrizzétek le, hogy a felhasználó érvenyes magyar telefonszámot adott-e meg!
4. Csak olyan jelszót fogadj el a felhasználótól, ami:
 - Legalább 8 karakterből áll
 - Tartalmaz kis és nagy betűket is egyaránt
 - Tartalmaz legalább egy speciális karaktert az alábbiak közül:
    - kötőjel
    _ alsó vonal
    % százalék jel
    ! felkiáltó jel
    / per jel
    $ dollár jel

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Szorgalmi feladat "Új jelszó" funkció:
Amennyiben a felhasználó az "Elfelejtett jelszó?" szövegre kattint, jelenítsd meg a forgotPasswordPage oldalt, ahol a felhasználónak meg kell adnia a felhasználónevét. Ellenőrizd le, hogy létezik-e ilyen felhasználónév a students Array-ben. Amennyiben nincs ilyen felhasználónév, akkor ezt a tényt közöld a felhasználóval egy alert üzenetben! Sikeres jelszóváltoztatás után újra a loginPage jelenjen meg!

Ha a megadott felhasználónév helyes, akkor tüntesd el a forgotPasswordPage oldalt és jelenítsd meg a resetPasswordPage oldalt, ahol validáld le, hogy felhasználó által megadott új jelszó és a jelszó megerősítő mező értéke megegyezik-e. A sikeres és a sikertelen jelszóváltozatás tényéről is tájékoztasd a felhasználót egy alert üzenetben!
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/