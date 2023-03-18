let coin = document.getElementById('coin')

function coinflip() {
    coin.classList.add('coinflip')
    setTimeout(function() {
        for (let i = 0; i < 11; i++) {
            let randomColor = Math.floor(Math.random() * 2)
            if (randomColor / 2 === 0) {
                coin.style.backgroundColor = 'var(--teal-3)'
                coin.style.color = 'var(--yellow-2)'
                coin.innerHTML = 'Heads'
            } else if (randomColor / 2 !== 0) {
                coin.style.backgroundColor = 'var(--yellow-2)'
                coin.style.color = 'var(--teal-3)'
                coin.innerHTML = 'Tails'
            }
        }
    }, 1000)
    setTimeout(function() {
        coin.classList.remove('coinflip')
        console.log('high')
    }, 1000)
}