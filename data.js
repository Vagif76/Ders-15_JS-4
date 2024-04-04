// console.log("Salam Məhərrəm!")
// console.log("Salam Murad!")
// console.log("Salam Raul!")



// Ağagıda qeyd olunan funksiya növü "Requlyar Funksiya" növü adlanır.
// function welcomeUser(istifadeciAdi) {
//     console.log("Xoş gəldiniz " + istifadeciAdi + "!")
// }
// welcomeUser("Raul")
// welcomeUser("Tahir")

// Burada qeyd olunan funksiya növü "Function expression" növü adlanır.
// const salamlama = function(istifadeci) {
//     console.log("Hörmətli " + istifadeci + ", sizi salamlayırıq!")
// }
// salamlama("Samir")

/* Burada qeyd olunan funksiya növü "Arrow Function" yəni yazılarkən görünüşcə oxa bənzədiyi üçün "ox funksiya"
növü adlanır və əsasən bir sətirdən ibarət olan kodları qısa şəkildə yazmaq üçün istifadə olunur. */
// const salamlamaOxFunksiya = () => {

// }

/* bu zaman qısaltmaya getmək üçün fiqurlu mötərizə silinə bilər, lakin böyükdür işarəsinin qarşısında
mütləq bir ifadə olmalıdır, məsələn: console.log ilə ekrana yazdırmalıyıq. */
// const salamlamaOxFunksiya = (name) => console.log("Welcome " + name + "!")
// salamlamaOxFunksiya("Vaqif")

/* Dəyişən adından sonra əgər bir parametr varsa "()" (konstraktor) olmadan da yazıla bilər, lakin 2 və
daha çox parametr olarsa mütləq mötərizələr arasında yazılmalı və hər birinin arasında vergül qoyulmalıdır. */
// const salamlamaOxFunc = ad => console.log("Welcome " + ad + "!")
// salamlamaOxFunc("Fidan")

// Əgər yaddaşda hər hansı bir funksiyanı dəyişən kimi yadda saxlayırıqsa bu "Funksiya ifadəsi" adlanır.


// IIFE (Immediately Invoked Function Expression) yəni "Anında çağırılan funksiya ifadəsi" deməkdir.
// (function s5Salamlama(ad, soyad) {
//     console.log("Welcome " + ad + " " + soyad + "!")
// }("Raul", "Ansarov"))












        /* API (Application Programming Interfase) */

// İlk öncə məhsulların və ya məlumatların HTML-də yerləşəcəyi yeri təyin edirik:
const mehsullarinYeri = document.querySelector("#mehsullar")

/* Assinxron və sinxron proqramlaşdırma 
Assinxron funksiyalar "async" açar sözü ilə yazılır. */

// Hoisting anlayışı - əvvəlcə funksiya çağırılır, sonra yaradılır.
// window.addEventListener("DOMContentLoaded", melumatlariGetir)

async function melumatlariGetir() {
    const unvan = "https://fakestoreapi.com/products"

    try {
        const responseCavab = await fetch(unvan) //sayta daxil olur (request, yəni sorğu göndərir)

/* "fetch" - bizə "Promis" qaytarır.
    Promisin 3 növü var:
    1. Pending    -   Gözləmədədir
    2. Fulfilled  -   Yerinə yetirilmişdir
    3. Reject     -   İmtina edilmişdir

*/      console.log(responseCavab)
/* Gələn məlumatlar "responseCavab" dəyişəninə gəldikdən sonra bu məlumatı frontendlə backendin başa
    düşəcəyi dilə (JSON - JavaScript Object Notation) çevirməliyik. JSON - Frontend və Backend arasında
    rabitə rolunu oynayır. Bunu etməyimiz üçün yeni dəyişən yaradırıq: */

        const gelenMehsullar = await responseCavab.json()
        // console.table(gelenMehsullar) // backendə məlumatlar gəlmişdir!

        for(let i=0; i< gelenMehsullar.length; i++) {
            mehsullarinYeri.innerHTML += `
            <div class="col-12 col-md-6 col-lg-3">
            <div class="card my-2 p-4">
              <img src="${gelenMehsullar[i].image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${gelenMehsullar[i].title.slice(0, 50)}..</h5>
                <p class="card-text">${gelenMehsullar[i].description.slice(0,40)}...</p>
                <a href="#" class="btn btn-primary text-center">Read more</a>
              </div>
            </div>
          </div>`

        }
    }

    catch(xeta) {
        console.log("Serverdə baş verən xəta: ", xeta.message)
    }

    finally {
        console.log("Serverdə xəta yarandı!")
    }
}

/* Yüklənmələr 2 cür olur:
   1. load (loading) - Tək HTML-in yüklənməsindən sonra funksiya işə düşür.
   2. DOMContentLoaded - Bütün sayt (HTML, CSS, Bootstrap və digər linklər) yükləndikdən sonra funksiya işə düşsün. */
window.addEventListener("DOMContentLoaded", melumatlariGetir)
 
