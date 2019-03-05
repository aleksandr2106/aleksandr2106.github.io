//if(language!=""){
      //  switch(lang){
      //    case '#Ukr': {lang='Украинский'; break;}
      //    case '#Rus': {lang='Русский'; break;}

      //    default:break;
//    }
  //  else{
  //    lang='Русский';
  //  }
  //    document.getElementById('Lang').innerHTML=language;

/* Открытие меню */
 var main = function() {

    $('.mobmenu').click(function() { /* выбираем класс mobmenu и
               добавляем метод click с функцией, вызываемой при клике */

        $('.second_menu').animate({ //выбираем класс second_menu и метод animate

            right: '0px' /* теперь при клике по иконке, меню, скрытое за
               левой границей на -50%, изменит свое положение на 0px и станет видимым */

        }, 200); //скорость движения меню в мс

        $('body').animate({ //выбираем тег body и метод animate

            right: '50%' /* чтобы всё содержимое также сдвигалось вправо
               при открытии меню, установим ему положение 50% */

        }, 200); //скорость движения меню в мс
    });


/* Закрытие меню */

    $('.icon-close').click(function() { //выбираем класс icon-close и метод click

        $('.second_menu').animate({ //выбираем класс second_menu и метод animate

            right: '-50%' /* при клике на крестик меню вернется назад в свое
               положение и скроется */

        }, 200); //скорость движения меню в мс

    $('body').animate({ //выбираем тег body и метод animate

          left: '0' //а содержимое страницы снова вернется в положение 0px

        }, 200); //скорость движения меню в мс
    });
};

$(document).mouseup(function(e){ //Событие mouseup происходит когда отпущена любая из стандартных клавиш мыши.
  var popup = $('.js-popup-campaign');
  //при клике вне формы
  if (e.target!=popup[0]&&popup.has(e.target).length ===0){ //Свойство target экземпляра объекта е идентифицирует элемент.
    $('.js-overlay-campaign').fadeOut(); //скрываем форму
    $('main').css('filter','none'); //убираем замыливание
  }
});



var tach = $('#tach-menu');
      var manu = $('.submenu_lang');

      $(tach).on('click', function(f) { /*при клике на "Язык" появляется подменю*/
          f.preventDefault(); //отменяет действие браузера и подменю стаёт видимым
          manu.slideToggle(); //При нажатии на кнопку подменю будет поочередно сворачиваться и разворачиваться
      });


$(document).ready(main); /* как только страница полностью загрузится, будет
               вызвана функция main, отвечающая за работу меню */

//open
   $('.js-button-campaign').click(function(){  //campaign - отслеживание событий
     $('main').css('filter','blur(4px)');  //замыливаем наш фон при вызове формы
     $('.js-overlay-campaign').fadeIn();  //показываем элементы
     $('.js-overlay-campaign').addClass('disabled'); //создаётся новый класс
   });

//close
$('.js-close-campaign').click(function(){ //при нажатии на крестик
  $('.js-overlay-campaign').fadeOut(); //сворачиваем элементы
  $('main').css('filter','none'); // и убираем замыленость

});

$('.form-wrapperb').click(function(){ //при клике на кнопку Отправить вакансию выполняем следующее
  $('.js-overlay-campaign').fadeOut();   //скрываем форму
  $('main').css('filter','none'); //снимаем замыливание
  $('.js-message-campaign').fadeIn(); //показываем форму оповещения об успешной отправке вакансии
  $('.js-overlay-campaign').addClass('disabled'); //создаём новый класс
  $('.js-message-campaign').fadeTo(1000,0.3); //форма стаёт прозрачной вплоть до 30% за 1500мс

    $('.js-message-campaign').fadeOut(); // и она скрывается полность
    $('.js-message-campaign').fadeTo(10,1);


});
$('.js-message-campaign').click(function(){  //при клике на форму
  $('.js-message-campaign').fadeTo(1000,0.3); //форма стаёт прозрачной вплоть до 30% за 1500мс
    $('.js-message-campaign').fadeTo(10,1);
    $('.js-message-campaign').fadeOut(); // и она скрывается полностью

});
