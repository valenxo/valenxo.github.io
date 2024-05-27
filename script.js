window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var message = document.getElementById('message');

        var errors = [];

        if(name.value.length > 50) {
            errors.push('El nombre no puede tener más de 50 caracteres.');
        }

        if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
            errors.push('El email no es válido.');
        }

        if(message.value === '') {
            errors.push('El mensaje no puede estar vacío.');
        }

        var outputDiv = document.getElementById('formOutput');
        outputDiv.innerHTML = '';

        if(errors.length > 0) {
            errors.forEach(function(error) {
                var errorElement = document.createElement('p');
                errorElement.textContent = error;
                outputDiv.appendChild(errorElement);
            });
        } else {
            var commentElement = document.createElement('p');
            commentElement.textContent = 'Usuario: ' + name.value + ' Email: ' + email.value + ' : ' + message.value;
            document.getElementById('commentsSection').appendChild(commentElement);
        }
    });
};

window.onload = function() {
    var images = ["recursos/lasaña1.png", "recursos/lasaña2.png", "recursos/lasaña3.png"];;
    var currentIndex = 0;

    document.getElementById('carouselImage').src = images[currentIndex];

    document.getElementById('prevButton').addEventListener('click', function() {
        currentIndex--;
        if(currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        document.getElementById('carouselImage').src = images[currentIndex];
    });

    document.getElementById('nextButton').addEventListener('click', function() {
        currentIndex++;
        if(currentIndex >= images.length) {
            currentIndex = 0;
        }
        document.getElementById('carouselImage').src = images[currentIndex];
    });
};

