let PHOENIX = document.querySelector('.PHOENIX_block');
let JETT = document.querySelector('.JETT_block');
let SOVA = document.querySelector('.SOVA_block');
let SAGE = document.querySelector('.SAGE_block');
let offset = 0;
let slider = document.querySelector('.slider');
let slider_line = document.querySelector('.slider_line');

PHOENIX.addEventListener('click',function (){
    //смена цвета фона карточки
    document.querySelector('.fon_img').style.backgroundColor = "#F8F8F8";
    document.querySelector('.fon_img_1').style.backgroundColor = "#1F2326";
    document.querySelector('.fon_img_2').style.backgroundColor = "#1F2326";
    document.querySelector('.fon_img_3').style.backgroundColor = "#1F2326";
    //смена цвета обводки текста
    document.querySelector('.txt2').style.WebkitTextStroke = "1.5px #1F2326";
    document.querySelector('.txt2_1').style.WebkitTextStroke = "1px #F8F8F8";
    document.querySelector('.txt2_2').style.WebkitTextStroke = "1px #F8F8F8";
    document.querySelector('.txt2_3').style.WebkitTextStroke = "1px #F8F8F8";
    //смена фона способностей
    document.querySelector('.abilities').style.backgroundColor= "#F8F8F8";
    document.querySelector('.abilities_1').style.backgroundColor= "#1F2326";
    document.querySelector('.abilities_2').style.backgroundColor= "#1F2326";
    document.querySelector('.abilities_3').style.backgroundColor= "#1F2326";
    //смена обводки фона способностей
    document.querySelector('.abilities').style.border= "2px solid #1F2326";
    document.querySelector('.abilities_1').style.border= "2px solid #F8F8F8";
    document.querySelector('.abilities_2').style.border= "2px solid #F8F8F8";
    document.querySelector('.abilities_3').style.border= "2px solid #F8F8F8";
    //смена цвета способностей
    document.querySelector('.ab1').style.fill= "#1F2326";
    document.querySelector('.ab2').style.fill= "#1F2326";
    document.querySelector('.ab3').style.fill= "#1F2326";
    document.querySelector('.ab4').style.fill= "#1F2326";
    document.querySelector('.ab1_1').style.fill= "#F8F8F8";
    document.querySelector('.ab2_1').style.fill= "#F8F8F8";
    document.querySelector('.ab3_1').style.fill= "#F8F8F8";
    document.querySelector('.ab4_1').style.fill= "#F8F8F8";
    document.querySelector('.ab1_2').style.fill= "#F8F8F8";
    document.querySelector('.ab2_2').style.fill= "#F8F8F8";
    document.querySelector('.ab3_2').style.fill= "#F8F8F8";
    document.querySelector('.ab4_2').style.fill= "#F8F8F8";
    document.querySelector('.ab1_3').style.fill= "#F8F8F8";
    document.querySelector('.ab2_3').style.fill= "#F8F8F8";
    document.querySelector('.ab3_3').style.fill= "#F8F8F8";
    document.querySelector('.ab4_3').style.fill= "#F8F8F8";
})

JETT.addEventListener('click',function (){
    //смена цвета фона карточки
    document.querySelector('.fon_img').style.backgroundColor = "#1F2326";
    document.querySelector('.fon_img_1').style.backgroundColor = "#F8F8F8";
    document.querySelector('.fon_img_2').style.backgroundColor = "#1F2326";
    document.querySelector('.fon_img_3').style.backgroundColor = "#1F2326";
     //смена цвета обводки текста
     document.querySelector('.txt2').style.WebkitTextStroke = "1px #F8F8F8";
     document.querySelector('.txt2_1').style.WebkitTextStroke = "1.5px #1F2326";
     document.querySelector('.txt2_2').style.WebkitTextStroke = "1px #F8F8F8";
     document.querySelector('.txt2_3').style.WebkitTextStroke = "1px #F8F8F8";
     //смена фона способностей
     document.querySelector('.abilities').style.backgroundColor= "#1F2326";
     document.querySelector('.abilities_1').style.backgroundColor= "#F8F8F8";
     document.querySelector('.abilities_2').style.backgroundColor= "#1F2326";
     document.querySelector('.abilities_3').style.backgroundColor= "#1F2326";
     //смена обводки фона способностей
     document.querySelector('.abilities').style.border= "2px solid #F8F8F8";
     document.querySelector('.abilities_1').style.border= "2px solid #1F2326";
     document.querySelector('.abilities_2').style.border= "2px solid #F8F8F8";
     document.querySelector('.abilities_3').style.border= "2px solid #F8F8F8";
     //смена цвета способностей
     document.querySelector('.ab1').style.fill= "#F8F8F8";
     document.querySelector('.ab2').style.fill= "#F8F8F8";
     document.querySelector('.ab3').style.fill= "#F8F8F8";
     document.querySelector('.ab4').style.fill= "#F8F8F8";
     document.querySelector('.ab1_1').style.fill= "#1F2326";
     document.querySelector('.ab2_1').style.fill= "#1F2326";
     document.querySelector('.ab3_1').style.fill= "#1F2326";
     document.querySelector('.ab4_1').style.fill= "#1F2326";
     document.querySelector('.ab1_2').style.fill= "#F8F8F8";
     document.querySelector('.ab2_2').style.fill= "#F8F8F8";
     document.querySelector('.ab3_2').style.fill= "#F8F8F8";
     document.querySelector('.ab4_2').style.fill= "#F8F8F8";
     document.querySelector('.ab1_3').style.fill= "#F8F8F8";
     document.querySelector('.ab2_3').style.fill= "#F8F8F8";
     document.querySelector('.ab3_3').style.fill= "#F8F8F8";
     document.querySelector('.ab4_3').style.fill= "#F8F8F8";
})

SOVA.addEventListener('click',function (){
    //смена цвета фона карточки
    document.querySelector('.fon_img').style.backgroundColor = "#1F2326";
    document.querySelector('.fon_img_1').style.backgroundColor = "#1F2326";
    document.querySelector('.fon_img_2').style.backgroundColor = "#F8F8F8";
    document.querySelector('.fon_img_3').style.backgroundColor = "#1F2326";
     //смена цвета обводки текста
     document.querySelector('.txt2').style.WebkitTextStroke = "1px #F8F8F8";
     document.querySelector('.txt2_1').style.WebkitTextStroke = "1px #F8F8F8";
     document.querySelector('.txt2_2').style.WebkitTextStroke = "1.5px #1F2326";
     document.querySelector('.txt2_3').style.WebkitTextStroke = "1px #F8F8F8";
     //смена фона способностей
     document.querySelector('.abilities').style.backgroundColor= "#1F2326";
     document.querySelector('.abilities_1').style.backgroundColor= "#1F2326";
     document.querySelector('.abilities_2').style.backgroundColor= "#F8F8F8";
     document.querySelector('.abilities_3').style.backgroundColor= "#1F2326";
     //смена обводки фона способностей
     document.querySelector('.abilities').style.border= "2px solid #F8F8F8";
     document.querySelector('.abilities_1').style.border= "2px solid #F8F8F8";
     document.querySelector('.abilities_2').style.border= "2px solid #1F2326";
     document.querySelector('.abilities_3').style.border= "2px solid #F8F8F8";
     //смена цвета способностей
     document.querySelector('.ab1').style.fill= "#F8F8F8";
     document.querySelector('.ab2').style.fill= "#F8F8F8";
     document.querySelector('.ab3').style.fill= "#F8F8F8";
     document.querySelector('.ab4').style.fill= "#F8F8F8";
     document.querySelector('.ab1_1').style.fill= "#F8F8F8";
     document.querySelector('.ab2_1').style.fill= "#F8F8F8";
     document.querySelector('.ab3_1').style.fill= "#F8F8F8";
     document.querySelector('.ab4_1').style.fill= "#F8F8F8";
     document.querySelector('.ab1_2').style.fill= "#1F2326";
     document.querySelector('.ab2_2').style.fill= "#1F2326";
     document.querySelector('.ab3_2').style.fill= "#1F2326";
     document.querySelector('.ab4_2').style.fill= "#1F2326";
     document.querySelector('.ab1_3').style.fill= "#F8F8F8";
     document.querySelector('.ab2_3').style.fill= "#F8F8F8";
     document.querySelector('.ab3_3').style.fill= "#F8F8F8";
     document.querySelector('.ab4_3').style.fill= "#F8F8F8";
})

SAGE.addEventListener('click',function (){
    //смена цвета фона карточки
    document.querySelector('.fon_img').style.backgroundColor = "#1F2326";
    document.querySelector('.fon_img_1').style.backgroundColor = "#1F2326";
    document.querySelector('.fon_img_2').style.backgroundColor = "#1F2326";
    document.querySelector('.fon_img_3').style.backgroundColor = "#F8F8F8";
    //смена цвета обводки текста
    document.querySelector('.txt2').style.WebkitTextStroke = "1px #F8F8F8";
    document.querySelector('.txt2_1').style.WebkitTextStroke = "1px #F8F8F8";
    document.querySelector('.txt2_2').style.WebkitTextStroke = "1px #F8F8F8";
    document.querySelector('.txt2_3').style.WebkitTextStroke = "1.5px #1F2326";
    //смена фона способностей
    document.querySelector('.abilities').style.backgroundColor= "#1F2326";
    document.querySelector('.abilities_1').style.backgroundColor= "#1F2326";
    document.querySelector('.abilities_2').style.backgroundColor= "#1F2326";
    document.querySelector('.abilities_3').style.backgroundColor= "#F8F8F8";
    //смена обводки фона способностей
    document.querySelector('.abilities').style.border= "2px solid #F8F8F8";
    document.querySelector('.abilities_1').style.border= "2px solid #F8F8F8";
    document.querySelector('.abilities_2').style.border= "2px solid #F8F8F8";
    document.querySelector('.abilities_3').style.border= "2px solid #1F2326";
    //смена цвета способностей
    document.querySelector('.ab1').style.fill= "#F8F8F8";
    document.querySelector('.ab2').style.fill= "#F8F8F8";
    document.querySelector('.ab3').style.fill= "#F8F8F8";
    document.querySelector('.ab4').style.fill= "#F8F8F8";
    document.querySelector('.ab1_1').style.fill= "#F8F8F8";
    document.querySelector('.ab2_1').style.fill= "#F8F8F8";
    document.querySelector('.ab3_1').style.fill= "#F8F8F8";
    document.querySelector('.ab4_1').style.fill= "#F8F8F8";
    document.querySelector('.ab1_2').style.fill= "#F8F8F8";
    document.querySelector('.ab2_2').style.fill= "#F8F8F8";
    document.querySelector('.ab3_2').style.fill= "#F8F8F8";
    document.querySelector('.ab4_2').style.fill= "#F8F8F8";
    document.querySelector('.ab1_3').style.fill= "#1F2326";
    document.querySelector('.ab2_3').style.fill= "#1F2326";
    document.querySelector('.ab3_3').style.fill= "#1F2326";
    document.querySelector('.ab4_3').style.fill= "#1F2326";
    //Открытие слайдера
    slider.style.display= "block";
    //Открытие кнопки
    document.querySelector('.knopka').style.display = "block";
})

//Слайдер
document.querySelector('.knopka').addEventListener('click', function(){
    offset = offset + 458;
    slider_line.style.left = -offset + 'px';
    if(offset > 915){
    offset = -458;
    }
})