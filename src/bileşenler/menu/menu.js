import "./Menu.less";

// Kullanacağımız veri bu, üzerinde çalışın ama henüz hiçbir şeyi değiştirmeyin.
let menuElemanlari = [
  "Gündem",
  "Dünya",
  "Ekonomi",
  "Yazarlar",
  "Burç Yorumları",
  "Diğer",
];

/*
  Adım 1: Aşağıdaki etiketler gibi bir menü oluşturmak için 'menuYapici' adlı bir bileşen yazın:

  <div class="menu">
    <ul>
      {tüm menü elemanları <li> içlerine}
    </ul>
  </div>

  'menuYapici' fonksiyonu tek argümanı olarak bir menü elemanları dizisini alır (birinci parametre).

  Adım 2: Fonksiyonun içinde, dizideki her öğe için bir liste <li> öğesi oluşturarak dizi üzerinde yineleme yapın.
  Tüm bu öğeleri <ul>'a ekleyin

  Adım 3: Hala fonksiyon içindeyiz, DOM'dan menü düğmesini seçin (`index.html` içinde `menu-button` sınıfına (class) sahip öğe).

  Adım 4: Menü butonuna bir `click` event dinleyicisi ekleyin. Butona her tıklanıldığında div.menu classına `menu--open`('menu' class'ına sahip olan div) ekleyip/silecek(toogle).
  
  İPUCU: Javascript'te toogle metotları bir öğeyi bir elemana ekleyip/çıkarmaya yarar. Örnek olarak bir öğeye tıklandığında bir class toogle'ı kullanıldığında, o öğreye tıklandığında eğer o class ismi öğede yoksa ekler, eğer o class ismi öğede varsa siler. Toogle - aç kapa manasına da gelir.

  Adım 5: Oluştrulan div.menu 'yü döndürmeyi unutmayın.

  Adım 6: 'menuYapici' fonksiyonunu ve 'menuElemanlari' dizisini kullanarak menüyü oluşturun, ve döndürülen menüyü header'e ekleyin.
*/



function menuYapici(menuElemanlarDizisi){
  const menuOlustur = document.createElement("div");

  menuOlustur.classList.add("menu");
  menuOlustur.classList.add("menu--open");

  const menuListesi =document.createElement("ul");

  menuElemanlarDizisi.forEach((baslik) => {
    const menuElemani = document.createElement("li");
    menuElemani.textContent=baslik;
    menuListesi.appendChild(menuElemani);
  });

  menuOlustur.appendChild(menuListesi);

  return menuOlustur;
}

const dynamic= menuYapici(menuElemanlari);

const headerDiv=document.querySelector(".header");
headerDiv.appendChild(dynamic);
console.log("menuElemanlari",menuElemanlari);

const menuButton = document.querySelector(".menu-button");


menuButton.addEventListener("click", () => {
  dynamic.classList.toggle("menu--open");
});