// Accesible.js

function openNav() {
    document.getElementById("mySidebar").style.left = "0";
    document.querySelector(".content").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.left = "-250px";
    document.querySelector(".content").style.marginLeft = "0";
}


// Accesible.js

function toggleMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
}

function filterBooks() {
    var input, filter, bookList, bookItems, title, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    bookList = document.getElementById("book-list");
    bookItems = bookList.getElementsByClassName('book-item');

    for (i = 0; i < bookItems.length; i++) {
        title = bookItems[i].getElementsByTagName("p")[0];
        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            bookItems[i].style.display = "";
        } else {
            bookItems[i].style.display = "none";
        }
    }
}

// Event listener for the search input
document.getElementById('searchInput').addEventListener('keyup', filterBooks);
