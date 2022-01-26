
// Get section | Array.from [ES6 Feature]
var sections = Array.from(document.querySelectorAll('section'));

// Get Number Of Section
var sectionCount = sections.length;

// Set Create Section
var createSection = 1;

//******************************************************************************** 

// Creat ul Element
var pagnElement = document.createElement('ul');
// set id on ul element
pagnElement.setAttribute('id', 'pagn-ul');

//================================================================================

// create list on section count
for (var i = 1; i <= sectionCount; i++) {
    // Creat li
    var pagnItem = document.createElement('li');

    // set id on ul element
    pagnItem.setAttribute('data-index', i);

    // set item content
    pagnItem.appendChild(document.createTextNode('Section '+i));

    // append item to the main ul list
    pagnElement.appendChild(pagnItem);

}


// Add The Created ul
document.getElementById('navbar-menu').appendChild(pagnElement);

// get created ul
var cteatedUl = document.getElementById('pagn-ul');

// Get section | Array.from [ES6 Feature]
var linkUl = Array.from(document.querySelectorAll('#pagn-ul li'));

// Loop Through All Links
for (var i = 0; i < linkUl.length; i++) {

    linkUl[i].onclick = function () {

        createSection = parseInt(this.getAttribute('data-index'));
       // trigger function
        check ();   
    }
}

// trigger function
check ();
// create check function
function check () {

    // remove all active
    removeAllActive();

    // set active class on section
    sections[createSection - 1].classList.add('active');

    // set active class on li
    cteatedUl.children[createSection - 1].classList.add('active');

    

}

// Remove All Active Classes
function removeAllActive() {

    // Loop Through Sections
    sections.forEach(function (sec){
        sec.classList.remove('active');
    });

    // // Loop Through lists
    linkUl.forEach(function (lin){
        lin.classList.remove('active');
    });

};


//=========================================================================
// create button scroll

var btn = document.querySelector('button');
window.onscroll = function () {
    if (window.scrollY >= 600){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    };
};

btn.onclick = function () {
    window.scrollTo ({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};

