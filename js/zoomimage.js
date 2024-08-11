//const zoomLevel = 10; // Установите здесь нужное значение зума
    let isZoomed = false; // Переменная для отслеживания состояния зума

    function zoomImage(e,zoomLevel) {
        const img = document.getElementById('myImage');

        if (!isZoomed) {
            const rect = img.getBoundingClientRect(); // Получить размеры и положение изображения
            const x = e.clientX - rect.left; // Координата X нажатия
            const y = e.clientY - rect.top; // Координата Y нажатия

            img.style.transformOrigin = `${x}px ${y}px`; // Установить точку зума
            img.style.transform = `scale(${zoomLevel})`; // Применить зум
        } else {
            img.style.transform = 'scale(1)'; // Вернуться к обычному размеру
        }

        isZoomed = !isZoomed; // Меняем состояние зума
    }