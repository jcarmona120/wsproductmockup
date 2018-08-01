var expand = document.getElementsByClassName('product-summary')
var drawer = document.getElementById('info-drawer')
var arrow = document.getElementById('arrow-right')

console.log(expand)

for (i = 0; i < expand.length; i++) {
        console.log(expand[i])
        expand[i].addEventListener('click', function() {
            var drawer = this.nextElementSibling;
            if (drawer.style.display === 'block') {
                drawer.style.display = 'none'
            } else {
                drawer.style.display = 'block'
            }
        })
}


