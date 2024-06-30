const groupButton = document.getElementById('groupButton');
let isJoining = true;

function toggleGroupStatus() {
    groupButton.innerHTML = isJoining
        ? 'Leave Group <i class="fa-solid fa-arrow-right-from-bracket"></i>'
        : '<i class="fa-sharp fa-solid fa-user-plus"></i> Join Group';

    groupButton.classList.toggle('leave', isJoining);
    isJoining = !isJoining;
}

function toggleJoin(button) {
    button.classList.toggle("joined");
    button.textContent = button.classList.contains("joined") ? "Leave Group" : "Join Group";
}


function toggleCategory(categoryId) {
    const categories = document.querySelectorAll('.category-content');
  
    categories.forEach(category => {
        category.style.display = 'none';
        category.classList.remove('active');
    });
  
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
        selectedCategory.classList.add('active');
    }
  }
  
  toggleCategory('all');
  


  function toggleDropdown(boxNumber) {
    const dropdownButton = document.querySelector(`#dropdown-button${boxNumber}`);
    const dropdownContent = document.querySelector(`#dropdown-content${boxNumber}`);

    dropdownButton.addEventListener("click", function(event) {
        event.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });
}

for (let i = 1; i <= 8; i++) {
    toggleDropdown(i);
}

document.addEventListener("click", function(event) {
    document.querySelectorAll("[id^='dropdown-content']").forEach(dropdownContent => {
        if (dropdownContent.style.display === "block" &&
            !event.target.matches(`#dropdown-button${dropdownContent.id.slice(-1)}`)) {
            dropdownContent.style.display = "none";
        }
    });
});


function toggleFollow(button) {
    button.classList.toggle("followed");
    button.textContent = button.classList.contains("followed") ? "Followed" : "Follow";
}



document.getElementById('signupButton').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'block';
});

document.getElementById('closeOverlay').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'none';
});

document.getElementById('signupButtonMd').addEventListener('click', function() {
    document.getElementById('signupOverlayMd').style.display = 'block';
});

document.getElementById('closeOverlayMd').addEventListener('click', function() {
    document.getElementById('signupOverlayMd').style.display = 'none';
});


function flip(){
    document.getElementById("form").style.
        transform='rotateY(180deg)';
}
function flip1(){
    document.getElementById("form").style.
        transform='rotateY(0deg)';
}
function flip2(){
    document.getElementById("formMd").style.
        transform='rotateY(180deg)';
}
function flip3(){
    document.getElementById("formMd").style.
        transform='rotateY(0deg)';
}


document.getElementById('submit').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'none';
    document.getElementById('account').style.opacity = 0;
    document.getElementById('accountCreated').style.display = 'flex';
});

document.getElementById('create').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'none';
    document.getElementById('account').style.opacity = 0;
    document.getElementById('accountCreated').style.display = 'flex';
});