document.addEventListener('DOMContentLoaded', function(){
    var dropdowns = document.querySelectorAll('.dropdown-btn');
    
    dropdowns.forEach(function(dropdown){
        dropdown.addEventListener('click', function(e){
            e.stopPropagation();
            var content = this.nextElementSibling;
            if (content.style.display === 'block'){
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    window.addEventListener('click', function(){
        var dropdownContents = document.querySelectorAll('.dropdown-content');
        dropdownContents.forEach(function(content){
            content.style.display = 'none';
        });
    });
})