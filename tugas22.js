function duaDua(){
    var kalimat = "Saya ingin belajar bersama";
    var hasil = kalimat.split(" ");
    hasil.forEach(function(item, index){
        console.log("item : ", item, "index ke ", index);
    })
}
duaDua()