   //slider

   function slider() {
    const teamSlider = document.querySelector('.team__slider');
    const teamSlides = document.querySelector('.team__slides');
    const teamSliderBtn = document.querySelector('.team__btn');
 
    // Устанавливаем начальные значения переменных
    let currentSlide = 0;
    let slideOffset = 0;
    const visibleWidth = teamSlider.offsetWidth;
    const slideWidth = teamSlides.children[0].offsetWidth;
 
    // Создаем копии первого и последнего слайда
    const firstSlideCopy = teamSlides.children[0].cloneNode(true);
    const lastSlideCopy = teamSlides.children[teamSlides.children.length - 1].cloneNode(true);
 
    // Добавляем копии первого и последнего слайда в начало и конец слайдера соответственно
    teamSlides.insertBefore(lastSlideCopy, teamSlides.children[0]);
    teamSlides.appendChild(firstSlideCopy);
 
    // Добавляем обработчики событий на кнопку слайдера
    teamSliderBtn.addEventListener('mousedown', function() {
        // Запускаем анимацию прокрутки слайдов
        const scrollInterval = setInterval(function() {
            slideOffset -= 10;


 
            // Если достигнут конец слайдов, переключаемся на первый слайд
            if (slideOffset < -(currentSlide + 1) * slideWidth) {
                currentSlide++;
 
                // Если достигнут конец копий слайдов, переключаемся на первый слайд
                if (currentSlide === teamSlides.children.length - 2) {
                    currentSlide = 0;
                    slideOffset = 0;
                }
            }
 
            // Прокручиваем слайды к следующему слайду
            teamSlides.style.transform = `translateX(${slideOffset}px)`;
        }, 5);
 
        // Останавливаем анимацию прокрутки слайдов при отпускании кнопки
        teamSliderBtn.addEventListener('mouseup', function() {
            clearInterval(scrollInterval);
        });
    });


    teamSliderBtn.addEventListener('touchstart', function(event) {
        event.preventDefault();
        // Запускаем анимацию прокрутки слайдов
        const scrollInterval = setInterval(function() {
            slideOffset -= 10;


 
            // Если достигнут конец слайдов, переключаемся на первый слайд
            if (slideOffset < -(currentSlide + 1) * slideWidth) {
                currentSlide++;
 
                // Если достигнут конец копий слайдов, переключаемся на первый слайд
                if (currentSlide === teamSlides.children.length - 2) {
                    currentSlide = 0;
                    slideOffset = 0;
                }
            }
 
            // Прокручиваем слайды к следующему слайду
            teamSlides.style.transform = `translateX(${slideOffset}px)`;
        }, 2);
 
        // Останавливаем анимацию прокрутки слайдов при отпускании кнопки
        teamSliderBtn.addEventListener('touchend', function() {
            clearInterval(scrollInterval);
        });
    });
   }

export default slider;