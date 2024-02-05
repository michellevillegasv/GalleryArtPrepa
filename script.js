document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    //Buscador sin base de datos
    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const category = button.dataset.category;
  
        galleryItems.forEach(function(item) {
          if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });


    //Botón de me gusta y contador
    var likeButtons = document.querySelectorAll(".like-btn");
    likeButtons.forEach(function(likeButton) {
      var likeCount = 0;
      var likeCountElement = likeButton.nextElementSibling;

      function handleLikeButtonClick() {
        likeCount++;
        likeCountElement.innerText = likeCount;
      }

      likeButton.addEventListener("click", handleLikeButtonClick);
    });

    
    

    //Form - validaciones
    document.getElementById("enviar").addEventListener("click", function(event) {
        event.preventDefault(); 

        var nombre = document.getElementById("nombre").value;
        var correo = document.getElementById("correo").value;
        var telefono = document.getElementById("telefono").value;
        var opinion = document.getElementById("opinion").value;
      
        if (nombre === "" || correo === "" || telefono === "" || opinion === "") {
          alert("Por favor, completa todos los campos requeridos.");
          return;
        }
    
        var emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(correo)) { 
          alert("Por favor, ingresa una dirección de correo electrónico válida.");
          return;
        }
    
        var phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(telefono)) {
          alert("Por favor, ingresa un número de teléfono válido (10 dígitos).");
          return;
        }
    
        alert("El formulario se ha enviado correctamente.");
      });
  });
  