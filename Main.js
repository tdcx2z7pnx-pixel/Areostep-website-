const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let Navmenu = document.querySelector('.Navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    Navmenu.classList.toggle('open');
}

// image selector//
var MainImg = document.getElementById("product-img");
var smallimg = document.getElementsByClassName("small-img");

if(MainImg && smallimg.length > 0){
    for(let i = 0; i < smallimg.length; i++){
        smallimg[i].onclick = function(){
            MainImg.src = smallimg[i].src;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const cart = document.getElementById("cart");
    const cartClose = document.getElementById("cart-close");

    if (cartIcon && cart && cartClose) {
        cartIcon.addEventListener("click", () => {
            cart.classList.add("active");
        });
        cartClose.addEventListener("click", () => {
            cart.classList.remove("active");
        });
    }
});

//product shoe information//

const products = {
    "nike-shox-z": {
        name: "Nike Shox Z",
        price: "£74.99",
        image: "images/side img products/NIKE/W+NIKE+SHOX+Z-1.png",
        description: "Classic women's running shoes with responsive cushioning.",
        thumbnails: [
            "images/side img products/NIKE/W+NIKE+SHOX+Z-2.png",
            "images/side img products/NIKE/W+NIKE+SHOX+Z-3.png",
            "images/side img products/NIKE/W+NIKE+SHOX+Z-4.png",
            "images/side img products/NIKE/W+NIKE+SHOX+Z-5.png",
            "images/side img products/NIKE/W+NIKE+SHOX+Z-6.png",
            "images/side img products/NIKE/W+NIKE+SHOX+Z-1.png"
        ]
    },
    "xlg-mtw-shoes": {
        name: "XLG MTW shoes",
        price: "£130.00",
        image: "images/side img products/ADDIDAS/XLG_MTW_Shoes_Grey_JS1501_01_00_standard.jpg.avif",
        description: "Unisex shoes perfect for everyday wear.",
        thumbnails: [
            "images/side img products/ADDIDAS/XLG_MTW_Shoes_Grey_JS1501_02_standard_hover.jpg.avif",
            "images/side img products/ADDIDAS/XLG_MTW_Shoes_Grey_JS1501_03_standard.jpg.avif",
            "images/side img products/ADDIDAS/XLG_MTW_Shoes_Grey_JS1501_04_standard.jpg.avif",
            "images/side img products/ADDIDAS/XLG_MTW_Shoes_Grey_JS1501_41_detail.jpg.avif",
            "images/side img products/ADDIDAS/XLG_MTW_Shoes_Grey_JS1501_42_detail.jpg.avif",
            "images/side img products/ADDIDAS/XLG_MTW_Shoes_Grey_JS1501_01_00_standard.jpg.avif"
        ]
    },
    "anthony-edwards-1": {
        name: "Anthony Edwards 1 Low",
        price: "£74.99",
        image: "images/side img products/ADDIDAS/Anthony_Edwards_1_Low_Trainers_White_JQ6140_01_00_standard.jpg.avif",
        description: "Basketball shoes built for performance.",
        thumbnails: [
            "images/side img products/ADDIDAS/Anthony_Edwards_1_Low_Trainers_White_JQ6140_02_standard.jpg.avif",
            "images/side img products/ADDIDAS/Anthony_Edwards_1_Low_Trainers_White_JQ6140_03_standard.jpg.avif",
            "images/side img products/ADDIDAS/Anthony_Edwards_1_Low_Trainers_White_JQ6140_04_standard.jpg.avif",
            "images/side img products/ADDIDAS/Anthony_Edwards_1_Low_Trainers_White_JQ6140_05_standard.jpg.avif",
            "images/side img products/ADDIDAS/Anthony_Edwards_1_Low_Trainers_White_JQ6140_16_hover_standard.jpg.avif",
            "images/side img products/ADDIDAS/Anthony_Edwards_1_Low_Trainers_White_JQ6140_01_00_standard.jpg.avif"

        ]
    },
    "nike-jordan-1": {
        name: "Nike Jordan 1 Retro High OG",
        price: "£69.99",
        image: "images/side img products/NIKE/JORDAN+1+RETRO+HIGH+OG+(PS).png.avif",
        description: "Classic Jordan high-tops for kids.",
        thumbnails: [
            "images/side img products/NIKE/JORDAN+1+RETRO+HIGH+OG+(PS)-2.png.avif",
            "images/side img products/NIKE/JORDAN+1+RETRO+HIGH+OG+(PS)-3.png.avif",
            "images/side img products/NIKE/JORDAN+1+RETRO+HIGH+OG+(PS)-4.png.avif",
            "images/side img products/NIKE/JORDAN+1+RETRO+HIGH+OG+(PS)-5.png.avif",
            "images/side img products/NIKE/JORDAN+1+RETRO+HIGH+OG+(PS)-1.png.avif",
            "images/side img products/NIKE/JORDAN+1+RETRO+HIGH+OG+(PS).png.avif"
            
        ]
    },
    "deviate-nitro": {
        name: "Deviate NITRO Elite 3",
        price: "£195.99",
        image: "images/side img products/PUMA/Deviate-NITRO™-Elite-3-Running-Shoes-Women-1.avif",
        description: "High-performance running shoes for women.",
        thumbnails: [
            "images/side img products/PUMA/Deviate-NITRO™-Elite-3-Running-Shoes-Women-2.avif",
            "images/side img products/PUMA/Deviate-NITRO™-Elite-3-Running-Shoes-Women-3.avif",
            "images/side img products/PUMA/Deviate-NITRO™-Elite-3-Running-Shoes-Women-4.avif",
            "images/side img products/PUMA/Deviate-NITRO™-Elite-3-Running-Shoes-Women-5.avif",
            "images/side img products/PUMA/Deviate-NITRO™-Elite-3-Running-Shoes-Women.avif",
            "images/side img products/PUMA/Deviate-NITRO™-Elite-3-Running-Shoes-Women-1.avif"
        ]
    },
    "campus-00s": {
        name: "Campus 00s Shoes",
        price: "£90.00",
        image: "images/side img products/ADDIDAS/Campus_00s_Shoes_Green_H03472_01_standard.jpg.avif",
        description: "Retro unisex shoes with comfort and style.",
        thumbnails: [
            "images/side img products/ADDIDAS/Campus_00s_Shoes_Green_H03472_02_standard.jpg.avif",
            "images/side img products/ADDIDAS/Campus_00s_Shoes_Green_H03472_03_standard.jpg.avif",
            "images/side img products/ADDIDAS/Campus_00s_Shoes_Green_H03472_05_standard.jpg.avif",
            "images/side img products/ADDIDAS/Campus_00s_Shoes_Green_H03472_15_hover_standard.jpg.avif",
            "images/side img products/ADDIDAS/Campus_00s_Shoes_Green_H03472_42_detail.jpg.avif",
            "images/side img products/ADDIDAS/Campus_00s_Shoes_Green_H03472_01_standard.jpg.avif"
        ]
    },
    "vomero-premium": {
        name: "Nike VOMERO PREMIUM",
        price: "£210.00",
        image: "images/side img products/NIKE/NIKE+VOMERO+PREMIUM.png.avif",
        description: "Premium cushioning and support for running.",
        thumbnails: [
            "images/side img products/NIKE/NIKE+VOMERO+PREMIUM-2.png.avif",
            "images/side img products/NIKE/NIKE+VOMERO+PREMIUM-3.png.avif",
            "images/side img products/NIKE/NIKE+VOMERO+PREMIUM-4.png.avif",
            "images/side img products/NIKE/NIKE+VOMERO+PREMIUM-5.png.avif",
            "images/side img products/NIKE/NIKE+VOMERO+PREMIUM-1.png.avif",
            "images/side img products/NIKE/NIKE+VOMERO+PREMIUM.png.avif"
            
        ]
    },
    "palermo-sneakers": {
        name: "Palermo Sneakers",
        price: "£74.99",
        image: "images/side img products/PUMA/Palermo-Sneakers-Unisex-1.avif",
        description: "Stylish unisex sneakers for casual wear.",
        thumbnails: [
            "images/side img products/PUMA/Palermo-Sneakers-Unisex-2.avif",
            "images/side img products/PUMA/Palermo-Sneakers-Unisex-3.avif",
            "images/side img products/PUMA/Palermo-Sneakers-Unisex-4.avif",
            "images/side img products/PUMA/Palermo-Sneakers-Unisex-5.avif",
            "images/side img products/PUMA/Palermo-Sneakers-Unisex.avif",
            "images/side img products/PUMA/Palermo-Sneakers-Unisex-1.avif"
        ]
    },
    "fuelcell-rebel-v5": {
        name: "Fuelcell Rebel v5 shoes",
        price: "£140.00",
        image: "images/side img products/NEW BALENCE/mfcxlv5_nb_07_i.webp",
        description: "stylish and durable for running",
        thumbnails: [
            "images/side img products/NEW BALENCE/mfcxlv5_nb_03_i.webp",
            "images/side img products/NEW BALENCE/mfcxlv5_nb_03_i.webp",
            "images/side img products/NEW BALENCE/mfcxlv5_nb_04_i.webp",
            "images/side img products/NEW BALENCE/mfcxlv5_nb_05_i.webp",
            "images/side img products/NEW BALENCE/mfcxlv5_nb_06_i.webp",
            "images/side img products/NEW BALENCE/mfcxlv5_nb_07_i.webp"
        ]
    },
    "predator-megaride": {
        name: "Predator Megaride Shoes",
        price: "£150.00",
        image:"images/side img products/ADDIDAS/Predator_Megaride_Shoes_Grey_JS1555_01_00_standard.jpg.avif",
        description: "sleek, with just the right amount of show",
        thumbnails: [
            "images/side img products/ADDIDAS/Predator_Megaride_Shoes_Grey_JS1555_02_standard_hover.jpg.avif",
            "images/side img products/ADDIDAS/Predator_Megaride_Shoes_Grey_JS1555_03_standard.jpg.avif",
            "images/side img products/ADDIDAS/Predator_Megaride_Shoes_Grey_JS1555_05_standard.jpg.avif",
            "images/side img products/ADDIDAS/Predator_Megaride_Shoes_Grey_JS1555_41_detail.jpg.avif",
            "images/side img products/ADDIDAS/Predator_Megaride_Shoes_Grey_JS1555_42_detail.jpg.avif",
            "images/side img products/ADDIDAS/Predator_Megaride_Shoes_Grey_JS1555_01_00_standard.jpg.avif"
        ]
    },
    "monstro-og": {
        name: "PUMA Mostro OG",
        price: "£115.00",
        image: "images/side img products/PUMA/jd_768503_a.webp",
        description: "make a statment in style",
        thumbnails: [
            "images/side img products/PUMA/jd_768503_b.webp",
            "images/side img products/PUMA/jd_768503_c.webp",
            "images/side img products/PUMA/jd_768503_d.webp",
            "images/side img products/PUMA/jd_768503_e.webp",
            "images/side img products/PUMA/jd_768503_f.webp",
            "images/side img products/PUMA/jd_768503_a.webp"
        ]
    },
    "abzorb-2000": {
        name: "ABZORB 2000 Shoes",
        price: "£170.00",
        image: "images/side img products/NEW BALENCE/u2000pbc_nb_02_i.webp",
        description: "super soft with extra cushioning at the sole",
        thumbnails: [
            "images/side img products/NEW BALENCE/u2000pbc_nb_04_i.webp",
            "images/side img products/NEW BALENCE/u2000pbc_nb_05_i.webp",
            "images/side img products/NEW BALENCE/u2000pbc_nb_06_i.webp",
            "images/side img products/NEW BALENCE/u2000pbc_nb_07_i.webp",
            "images/side img products/NEW BALENCE/u2000pbc_nb_14_i.webp",
            "images/side img products/NEW BALENCE/u2000pbc_nb_02_i.webp"
        ]
    },
    "nike-shox-r4": {
        name: "Nike Shox R4",
        price: "£89.99",
        image: "images/side img products/NIKE/NIKE+SHOX+R4+(GS).png.avif",
        description: "perfect shoes for older kids expanding their collection",
        thumbnails: [
            "images/side img products/NIKE/NIKE+SHOX+R4+(GS)-2.png.avif",
            "images/side img products/NIKE/NIKE+SHOX+R4+(GS)-3.png.avif",
            "images/side img products/NIKE/NIKE+SHOX+R4+(GS)-4.png.avif",
            "images/side img products/NIKE/NIKE+SHOX+R4+(GS)-5.png.avif",
            "images/side img products/NIKE/NIKE+SHOX+R4+(GS)-1.png.avif",
            "images/side img products/NIKE/NIKE+SHOX+R4+(GS).png.avif"
            
        ]
    },
    "asap-rocky-inhale": {
        name: "PUMA x A$AP Rocky Inhale",
        price: "£130.00",
        image: "images/side img products/PUMA/jd_768455_a.webp",
        description: "from a$ap rocky's collection dress in style",
        thumbnails: [
            "images/side img products/PUMA/jd_768455_b.webp",
            "images/side img products/PUMA/jd_768455_c.webp",
            "images/side img products/PUMA/jd_768455_d.webp",
            "images/side img products/PUMA/jd_768455_e.webp",
            "images/side img products/PUMA/jd_768455_f.webp",
            "images/side img products/PUMA/jd_768455_a.webp"
        ]
    },
    "hoka-bondai-i":{
        name: "HOKA Bondi 9 Women's",
        price: "£160.00",
        image: "images/side img products/NEW BALENCE/1162012-TLSL_1.webp",
        description: "the perfect sneaker to go with any outfit",
        thumbnails:[
            "images/side img products/NEW BALENCE/1162012-TLSL_2.webp",
            "images/side img products/NEW BALENCE/1162012-TLSL_4.webp",
            "images/side img products/NEW BALENCE/1162012-TLSL_5.webp",
            "images/side img products/NEW BALENCE/1162012-TLSL_6.webp",
            "images/side img products/NEW BALENCE/1162012-TLSL_7.webp",
            "images/side img products/NEW BALENCE/1162012-TLSL_1.webp"
        ]
    },
    "nike-hyperboot": {
        name: "Nike x Hyperice Hyperboot",
        price: "£699.99",
        image: "images/side img products/NIKE/HYPERBOOT+BY+NIKE+X+HYPERICE.png.avif",
        description: "the ultimate comfort shoe and ultimate futueristic shoe",
        thumbnails: [
            "images/side img products/NIKE/HYPERBOOT+BY+NIKE+X+HYPERICE-2.png.avif",
            "images/side img products/NIKE/HYPERBOOT+BY+NIKE+X+HYPERICE-3.png.avif",
            "images/side img products/NIKE/HYPERBOOT+BY+NIKE+X+HYPERICE-4.png.avif",
            "images/side img products/NIKE/HYPERBOOT+BY+NIKE+X+HYPERICE-5.png.avif",
           "images/side img products/NIKE/HYPERBOOT+BY+NIKE+X+HYPERICE-1.png.avif",
           "images/side img products/NIKE/HYPERBOOT+BY+NIKE+X+HYPERICE.png.avif"
            
        ]
    },
    "530": {
        name: "530 Shoes",
        price: "£110.00",
        image: "images/side img products/NEW BALENCE/mr530snc_nb_02_i.webp",
        description: "perfect men's shoe for the colder weather",
        thumbnails: [
            "images/side img products/NEW BALENCE/mr530snc_nb_03_i.webp",
            "images/side img products/NEW BALENCE/mr530snc_nb_04_i.webp",
            "images/side img products/NEW BALENCE/mr530snc_nb_05_i.webp",
            "images/side img products/NEW BALENCE/mr530snc_nb_06_i.webp",
            "images/side img products/NEW BALENCE/mr530snc_nb_02_i.webp"
        ]
    },
    "nora": {
        name: "nora",
        price: "£80.00",
        image:  "images/side img products/ADDIDAS/Nora_Purple_JP8586_01_00_standard.jpg.avif",
        description: "platform shoe ideal for skatebording",
        thumbnails: [
            "images/side img products/ADDIDAS/Nora_Purple_JP8586_02_standard_hover.jpg.avif",
            "images/side img products/ADDIDAS/Nora_Purple_JP8586_03_standard.jpg.avif",
            "images/side img products/ADDIDAS/Nora_Purple_JP8586_05_standard.jpg.avif",
            "images/side img products/ADDIDAS/Nora_Purple_JP8586_41_detail.jpg.avif",
            "images/side img products/ADDIDAS/Nora_Purple_JP8586_42_detail.jpg.avif",
            "images/side img products/ADDIDAS/Nora_Purple_JP8586_01_00_standard.jpg.avif"
        ]
    },
    "caven-ii-infant": {
        name: "PUMA Caven II Infant",
        price: "£35.00",
        image: "images/side img products/PUMA/jd_766897_a.webp",
        description: "infant shoes to go with any outfit",
        thumbnails: [
            "images/side img products/PUMA/jd_766897_b.webp",
            "images/side img products/PUMA/jd_766897_c.webp",
            "images/side img products/PUMA/jd_766897_d.webp",
            "images/side img products/PUMA/jd_766897_e.webp",
            "images/side img products/PUMA/jd_766897_f.webp",
            "images/side img products/PUMA/jd_766897_a.webp"
        ]
    },
    "taekwondo-f50": {
        name: "Taekwondo F50 Shoes",
        price: "£100.00",
        image: "images/side img products/ADDIDAS/Taekwondo_F50_Shoes_Blue_JS1046_01_00_standard.jpg.avif",
        description:"sleek design and fit make it perfect for taekwondo",
        thumbnails: [
            "images/side img products/ADDIDAS/Taekwondo_F50_Shoes_Blue_JS1046_02_standard_hover.jpg.avif",
            "images/side img products/ADDIDAS/Taekwondo_F50_Shoes_Blue_JS1046_03_standard.jpg.avif",
            "images/side img products/ADDIDAS/Taekwondo_F50_Shoes_Blue_JS1046_04_standard.jpg.avif",
            "images/side img products/ADDIDAS/Taekwondo_F50_Shoes_Blue_JS1046_41_detail.jpg.avif",
            "images/side img products/ADDIDAS/Taekwondo_F50_Shoes_Blue_JS1046_42_detail.jpg.avif",
            "images/side img products/ADDIDAS/Taekwondo_F50_Shoes_Blue_JS1046_01_00_standard.jpg.avif"
        ]
    },
    "fresh-foam-kaiha": {
        name: "FRESH FOAM X KAIHA RD",
        price: "£110.00",
        image: "images/side img products/NEW BALENCE/21417526_xxl.jpg.avif",
        description: "extra foam cushoning for running on rough terrain",
        thumbnails: [
            "images/side img products/NEW BALENCE/21417526_xxl_a2.jpg.avif",
            "images/side img products/NEW BALENCE/21417526_xxl_a3.jpg.avif",
            "images/side img products/NEW BALENCE/21417526_xxl_a4.jpg.avif",
            "images/side img products/NEW BALENCE/21417526_xxl.jpg.avif",
            "images/side img products/NEW BALENCE/21417526_xxl_a1.jpg.avif"
        ]
    },
    "superstar-ii": { 
        name: "Superstar II Shoes",
        price: "£100.00",
        image: "images/side img products/ADDIDAS/Superstar_II_Shoes_Black_JP8164_01_00_standard.jpg.avif",
        description: "platform shoes for men with extra style",
        thumbnails: [
            "images/side img products/ADDIDAS/Superstar_II_Shoes_Black_JP8164_02_standard.jpg.avif",
            "images/side img products/ADDIDAS/Superstar_II_Shoes_Black_JP8164_03_standard.jpg.avif",
            "images/side img products/ADDIDAS/Superstar_II_Shoes_Black_JP8164_04_standard.jpg.avif",
            "images/side img products/ADDIDAS/Superstar_II_Shoes_Black_JP8164_41_detail.jpg.avif",
            "images/side img products/ADDIDAS/Superstar_II_Shoes_Black_JP8164_42_detail.jpg.avif",
            "images/side img products/ADDIDAS/Superstar_II_Shoes_Black_JP8164_01_00_standard.jpg.avif"

        ]
    },
    "speecat-pony": {
        name: "A Speedcat Pony Hair",
        price: "£100.00",
        image: "images/side img products/PUMA/jd_773592_a.webp",
        description: "womens shoe made with real pony hair for a different look",
        thumbnails: [
            "images/side img products/PUMA/jd_773592_b.webp",
            "images/side img products/PUMA/jd_773592_c.webp",
            "images/side img products/PUMA/jd_773592_d.webp",
            "images/side img products/PUMA/jd_773592_e.webp",
            "images/side img products/PUMA/jd_773592_f.webp",
            "images/side img products/PUMA/jd_773592_a.webp"
        ]
    },
    "nike-air-max-dn": {
        name: "Nike Air Max Dn",
        price: "£99.99",
        image: "images/side img products/NIKE/AIR+MAX+DN+(GS).png.avif",
        description: "older kids shoe with air soles to provide ultimate comfort",
        thumbnails:[
            "images/side img products/NIKE/AIR+MAX+DN+(GS)-2.png.avif",
            "images/side img products/NIKE/AIR+MAX+DN+(GS)-3.png.avif",
            "images/side img products/NIKE/AIR+MAX+DN+(GS)-4.png.avif",
            "images/side img products/NIKE/AIR+MAX+DN+(GS)-5.png.avif",
            "images/side img products/NIKE/AIR+MAX+DN+(GS)-1.png.avif",
            "images/side img products/NIKE/AIR+MAX+DN+(GS).png.avif"
            
        ]
    },
    "league-jb-fold": {
        name: "PREDATOR LEAGUE JB FOLD-OVER TONGUE TURF BOOTS",
        price: "£65.00",
        image: "images/side img products/ADDIDAS/Predator_League_JB_Fold-Over_Tongue_Turf_Boots_Kids_Black_JR1759_01_00_standard_hover.jpg.avif",
        description: "comfortable football boots perfect for kids ",
        thumbnails: [
            "images/side img products/ADDIDAS/Predator_League_JB_Fold-Over_Tongue_Turf_Boots_Kids_Black_JR1759_02_standard.jpg.avif",
            "images/side img products/ADDIDAS/Predator_League_JB_Fold-Over_Tongue_Turf_Boots_Kids_Black_JR1759_03_standard.jpg.avif",
            "images/side img products/ADDIDAS/Predator_League_JB_Fold-Over_Tongue_Turf_Boots_Kids_Black_JR1759_04_standard.jpg.avif",
            "images/side img products/ADDIDAS/Predator_League_JB_Fold-Over_Tongue_Turf_Boots_Kids_Black_JR1759_41_detail.jpg.avif",
            "images/side img products/ADDIDAS/Predator_League_JB_Fold-Over_Tongue_Turf_Boots_Kids_Black_JR1759_42_detail.jpg.avif",
            "images/side img products/ADDIDAS/Predator_League_JB_Fold-Over_Tongue_Turf_Boots_Kids_Black_JR1759_01_00_standard_hover.jpg.avif"
        ]
    },
    "fenty-puma-avanti": {
        name: "FENTY x PUMA Avanti LS-X Sneakers",
        price: "£100.00",
        image: "images/side img products/PUMA/FENTY-x-PUMA-Avanti-LS-X-Sneakers-Unisex-1.avif",
        description: "in collabaration with fenty colorful, comfortable and pratical",
        thumbnails: [
            "images/side img products/PUMA/FENTY-x-PUMA-Avanti-LS-X-Sneakers-Unisex-2.avif",
            "images/side img products/PUMA/FENTY-x-PUMA-Avanti-LS-X-Sneakers-Unisex-3.avif",
            "images/side img products/PUMA/FENTY-x-PUMA-Avanti-LS-X-Sneakers-Unisex-4.avif",
            "images/side img products/PUMA/FENTY-x-PUMA-Avanti-LS-X-Sneakers-Unisex-5.avif",
            "images/side img products/PUMA/FENTY-x-PUMA-Avanti-LS-X-Sneakers-Unisex.avif",
            "images/side img products/PUMA/FENTY-x-PUMA-Avanti-LS-X-Sneakers-Unisex-1.avif"
        ]
    },
    "air-max-muse": {
        name: "Air Max Muse x KNWLS",
        price: "£184.99",
        image: "images/side img products/NIKE/women-s-air-max-muse-x-knwls-elemental-pink-hv5872-600-release-date.jpg.avif",
        description: "pretty and elegant these make the perfect ballerina shoes",
        thumbnails: [
            "images/side img products/NIKE/women-s-air-max-muse-x-knwls-elemental-pink-hv5872-600-release-date-2.jpg.avif",
            "images/side img products/NIKE/women-s-air-max-muse-x-knwls-elemental-pink-hv5872-600-release-date-3.jpg.avif",
            "images/side img products/NIKE/women-s-air-max-muse-x-knwls-elemental-pink-hv5872-600-release-date-4.jpg.avif",
            "images/side img products/NIKE/women-s-air-max-muse-x-knwls-elemental-pink-hv5872-600-release-date-5.jpg.avif",
            "images/side img products/NIKE/women-s-air-max-muse-x-knwls-elemental-pink-hv5872-600-release-date-1.jpg.avif",
            "images/side img products/NIKE/women-s-air-max-muse-x-knwls-elemental-pink-hv5872-600-release-date.jpg.avif"
            
        ]
    },
    "uk-allerdale": {
        name: "Made in UK Allerdale Shoe",
        price: "£220.00",
        image: "images/side img products/NEW BALENCE/uadwggr_nb_02_i.webp",
        description: "made in the uk with premium materials perfect for any outfit",
        thumbnails: [
            "images/side img products/NEW BALENCE/uadwggr_nb_03_i.webp",
            "images/side img products/NEW BALENCE/uadwggr_nb_04_i.webp",
            "images/side img products/NEW BALENCE/uadwggr_nb_05_i.webp",
            "images/side img products/NEW BALENCE/uadwggr_nb_06_i.webp",
            "images/side img products/NEW BALENCE/uadwggr_nb_07_i.webp",
            "images/side img products/NEW BALENCE/uadwggr_nb_02_i.webp"
        ]
    }
};

//geting the images to change live//

document.querySelectorAll('product-item').forEach(item => {
    item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        window.location.href = `sproduct.html?id=${id}`;
    });
});

if (window.location.pathname.includes("sproduct.html")) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (products[id]) {
        document.querySelector("#product-img").src = products[id].image;
        document.querySelector("#product-title").textContent = products[id].name;
        document.querySelector("#product-price").textContent = products[id].price;
        document.querySelector("#product-description").textContent = products[id].description;

        const smallimgGroup = document.querySelector(".small-img-group");
        if (smallimgGroup) {
            smallimgGroup.innerHTML = "";
            products[id].thumbnails.forEach(src=> {
                const div = document.createElement("div");
                div.className = "small-img-col";
                div.innerHTML = `<img src="${src}" width=100% class="small-img" alt="">`;
                smallimgGroup.appendChild(div);
            });

            var smallimg = document.getElementsByClassName("small-img");
            for(let i = 0; i < smallimg.length; i++){
                smallimg[i].onclick = function(){
                    document.getElementById("product-img").src = smallimg[i].src;
                }
            }
        }
    }
}

document.querySelectorAll('product-item').forEach(item => {
    item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        window.location.href = `sproduct2.html?id=${id}`;
    });
});

if (window.location.pathname.includes("sproduct2.html")) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (products[id]) {
        document.querySelector("#product-img").src = products[id].image;
        document.querySelector("#product-title").textContent = products[id].name;
        document.querySelector("#product-price").textContent = products[id].price;
        document.querySelector("#product-description").textContent = products[id].description;

        const smallimgGroup = document.querySelector(".small-img-group");
        if (smallimgGroup) {
            smallimgGroup.innerHTML = "";
            products[id].thumbnails.forEach(src=> {
                const div = document.createElement("div");
                div.className = "small-img-col";
                div.innerHTML = `<img src="${src}" width=100% class="small-img" alt="">`;
                smallimgGroup.appendChild(div);
            });

            var smallimg = document.getElementsByClassName("small-img");
            for(let i = 0; i < smallimg.length; i++){
                smallimg[i].onclick = function(){
                    document.getElementById("product-img").src = smallimg[i].src;
                }
            }
        }
    }
}


//cart function//
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateTotal() {
    const totalElement = document.querySelector(".total-price");
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    totalElement.textContent = "£" + total.toFixed(2);
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-box');

        itemEl.innerHTML = `
            <img src="${item.image}" class="cart-img">
            <div class="cart-detail">
                <h2 class="cart-product-title">${item.name}</h2>
                <span class="cart-price">£${item.price}</span>
                <p>Size: ${item.size}</p>
                <span class="cart-quantity">Qty: ${item.quantity}</span>
            </div>
            <i class='bx bx-trash cart-remove'></i>
        `;

        itemEl.querySelector('.cart-remove').addEventListener('click', () => {
            removeCartItem(item.id);
        });

        cartItemsContainer.appendChild(itemEl);
    });

    saveCart();
    updateTotal();
}

function removeCartItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}


const addToCartBtn = document.getElementById('add-cart-btn');

if (addToCartBtn) {
    const sizeSelect = document.getElementById('product-size');

    const productTitleEl = document.getElementById('product-title');

    if (productTitleEl) {
    const productTitle = document.getElementById('product-title').textContent;
    const productPrice = parseFloat(document.getElementById('product-price').textContent.replace('£', ''));
    const productImg = document.getElementById('product-img').src;

    addToCartBtn.addEventListener('click', () => {
    const selectedSize = sizeSelect.value;

    if (!selectedSize) {
        alert("Please select a size before adding to cart!");
        return;
    }

    const productId = `${productTitle.toLowerCase().replace(/\s/g, '_')}-${selectedSize}`;
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            name: productTitle,
            price: productPrice,
            image: productImg,
            size: selectedSize,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    alert("Added to cart!");
});
}


document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const cartPanel = document.getElementById("cart");
    const cartClose = document.getElementById("cart-close");

    if (cartIcon && cartPanel && cartClose) {
        cartIcon.addEventListener("click", () => {
            cartPanel.classList.add("active");
        });
        cartClose.addEventListener("click", () => {
            cartPanel.classList.remove("active");
        });
    }

    renderCart();
});
}

//Form validation//

const form = document.getElementById('form');

if (form) {
    const  username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    form.addEventListener('submit', e => {
    e.preventDefault();

    vaLidateInputs();
    });
}


const setError = (Element, message) => {
    const inputControl = Element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = Element => {
    const inputControl = Element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const vaLidateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'password must be at least 8 charecters.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "passwords don't match");
    } else {
        setSuccess(password2)
    }
};
