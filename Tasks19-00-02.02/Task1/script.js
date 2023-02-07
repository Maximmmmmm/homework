function updateTime() {
    // Здесь должен быть элемент hours
    const hours = document.querySelector('.hours')
    // Здесь должен быть элемент minutes
    const minutes = document.querySelector('.minutes')
    // Здесь должен быть элемент seconds
    const seconds = document.querySelector('.seconds')

    const clock = new Date();

    hours.innerHTML = clock.getHours()
    minutes.innerHTML = clock.getMinutes()
    seconds.innerHTML = clock.getSeconds()

}
// Здесь должен быть задан интервал
setInterval(updateTime, 1000)