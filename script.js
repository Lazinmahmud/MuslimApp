document.getElementById("friendIcon").addEventListener("click", function() {
  // Your code here
  document.getElementById("homeGray").style.display  = "block"
  document.getElementById("homeBlue").style.display  = "none"
  document.getElementById("friendsBlue").style.display  = "block"
  document.getElementById("friendsGray").style.display  = "none"
  document.getElementById("nBlue").style.display  = "none"
  document.getElementById("nGray").style.display  = "block"
  document.getElementById("videoBlue").style.display  = "none"
  document.getElementById("videoGray").style.display  = "block"
  document.getElementById("underline").style.marginLeft = "52%"
  document.getElementById("friendPage").style.top = "3rem"
  
});

document.getElementById("homeIcon").addEventListener("click", function() {
  // Your code here
  document.getElementById("homeBlue").style.display  = "block"
  document.getElementById("homeGray").style.display  = "none"
  document.getElementById("friendsGray").style.display  = "block"
  document.getElementById("friendsBlue").style.display  = "none"
  document.getElementById("nBlue").style.display  = "none"
  document.getElementById("nGray").style.display  = "block"
  document.getElementById("videoBlue").style.display  = "none"
  document.getElementById("videoGray").style.display  = "block"
  document.getElementById("underline").style.marginLeft = "4%"
  document.getElementById("friendPage").style.left = "100%"
  document.getElementById("friendPage").style.top = "6rem"
  document.getElementById("profile-page").style.display = "none"
  document.getElementById('underline').style.display ='block'
 
});



document.getElementById("notificationIcon").addEventListener("click", function() {
  // Your code here
  document.getElementById("nBlue").style.display  = "block"
  document.getElementById("nGray").style.display  = "none"
  document.getElementById("homeGray").style.display  = "block"
  document.getElementById("homeBlue").style.display  = "none"
  document.getElementById("friendsGray").style.display  = "block"
  document.getElementById("friendsBlue").style.display  = "none"
  document.getElementById("videoBlue").style.display  = "none"
  document.getElementById("videoGray").style.display  = "block"
  document.getElementById("underline").style.marginLeft = "75%"

});



document.getElementById("videoIcon").addEventListener("click", function() {
  // Your code here
  
  document.getElementById("videoBlue").style.display  = "block"
  document.getElementById("videoGray").style.display  = "none"
  document.getElementById("homeGray").style.display  = "block"
  document.getElementById("homeBlue").style.display  = "none"
  document.getElementById("nBlue").style.display  = "none"
  document.getElementById("nGray").style.display  = "block"
  document.getElementById("friendsBlue").style.display  = "none"
  document.getElementById("friendsGray").style.display  = "block"
  document.getElementById("underline").style.marginLeft = "28%"
  
});




document.getElementById("cTwo").addEventListener("click", function() {
    document.querySelector(".story-content").style.background = "linear-gradient(#FF0D90, #FF910E)";
    document.getElementById("cTwo").style.border = "3px solid #000"
    document.getElementById("cOne").style.border = "none"
    document.getElementById("cThree").style.border = "none"
    document.getElementById("cFive").style.border = "none"
    document.getElementById("cFour").style.border = "none"
    document.getElementById("storyTextContent").style.color = "#fff"
});

document.getElementById("cOne").addEventListener("click", function() {
    document.querySelector(".story-content").style.background = "#FFF9C4";
    document.getElementById("cTwo").style.border = "none"
    document.getElementById("cOne").style.border = "3px solid #000"
    document.getElementById("cThree").style.border = "none"
    document.getElementById("cFive").style.border = "none"
    document.getElementById("cFour").style.border = "none"
    document.getElementById("storyTextContent").style.color = "#000"
});

document.getElementById("cThree").addEventListener("click", function() {
    document.querySelector(".story-content").style.background = "linear-gradient(#013BFF,#FF0194)";
    document.getElementById("cTwo").style.border = "none"
    document.getElementById("cOne").style.border = "none"
    document.getElementById("cFour").style.border = "none"
    document.getElementById("cFive").style.border = "none"
    document.getElementById("cThree").style.border = "3px solid #000"
    document.getElementById("storyTextContent").style.color = "#fff"
});

document.getElementById("cFour").addEventListener("click", function() {
    document.querySelector(".story-content").style.background = "#FF2B7F";
    document.getElementById("cTwo").style.border = "none"
    document.getElementById("cOne").style.border = "none"
    document.getElementById("cThree").style.border = "none"
    document.getElementById("cFive").style.border = "none"
    document.getElementById("cFour").style.border = "3px solid #000"
    document.getElementById("storyTextContent").style.color = "#fff"
});

document.getElementById("cFive").addEventListener("click", function() {
    document.querySelector(".story-content").style.background = "linear-gradient(#07CC81,#0BAAEA)";
    document.getElementById("cTwo").style.border = "none"
    document.getElementById("cOne").style.border = "none"
    document.getElementById("cThree").style.border = "none"
    document.getElementById("cFour").style.border = "none"
    document.getElementById("cFive").style.border = "3px solid #000"
    document.getElementById("storyTextContent").style.color = "#fff"
});



// typing and shar now button color change

const textarea = document.getElementById('storyTextContent');
const shareBtn = document.getElementById('shareBtn');

textarea.addEventListener('input', function() {
    if (textarea.value.split(' ').length >= 6) {
        shareBtn.style.display = 'block';
    } else {
        shareBtn.style.display = 'none';
    }
});

textarea.addEventListener('blur', function() {
    if (textarea.value.length === 0) {
        shareBtn.style.display = 'none';
    }
});
    
    
// create story page open 
document.getElementById("CreateStory").addEventListener("click", function() {
    document.querySelector('.create-story-page-opachity').style.display = 'flex'
});
// create story page close 
document.getElementById("storyPageClose").addEventListener("click", function() {
    
    document.querySelector('.create-story-page-opachity').style.display = 'none'
    document.getElementById("storyTextContent").value = "";
});







// share button click and display story
document.getElementById("shareBtn").addEventListener("click", function() {
    var storyDiv = document.createElement("div");
    storyDiv.className = "user-story";

    // Random background color
    var colors = ["#1876f2", "#F4426A", "#EA002E", "#880E4F"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomIndex];
    storyDiv.style.backgroundColor = randomColor;

    var profileDiv = document.createElement("div");
    profileDiv.className = "story-profile";

    var profileImg = document.createElement("img");
    profileImg.src = "profile.jpg";

    profileDiv.appendChild(profileImg);
    storyDiv.appendChild(profileDiv);

    var storyText = document.getElementById("storyTextContent").value;
    var storyTextContainer = document.createElement("div");
    storyTextContainer.className = "story-text-content";

    // Check if text has more than 6 words
    var words = storyText.split(" ");
    var textElement = document.createElement("h4");
    if (words.length > 5) {
        var truncatedText = words.slice(0, 5).join(" ") + " ..."; // Truncate text
        textElement.innerHTML = truncatedText.replace(/\s+/g, "<br>");
    } else {
        textElement.innerHTML = storyText;
    }

    // Random text color: black or white
    var randomTextColor = Math.random() > 0.5 ? "#FFF" : "#FFF";
    textElement.style.color = randomTextColor;

    storyTextContainer.appendChild(textElement);

    storyDiv.appendChild(storyTextContainer);

    setTimeout(function() {
        document.querySelector('.create-story-page-opachity').style.display ='none'
        document.getElementById("storyTextContent").value = "";
        document.getElementById('shareBtn').style.display = "none";

        // Progress bar height adjustment function
        function updateProgress(progress) {
            document.getElementById("progress").style.width = progress + "%";
            if (progress === 100) {
                // Create user-story container after progress completion
                document.querySelector(".story-scroll-container").appendChild(storyDiv);
                document.querySelector(".upload-story-container").style.display = "none";
            } else {
                document.querySelector(".upload-story-container").style.display = "block";
                
            }
        }

        // Update progress example (from 0% to 100%)
        for (let i = 0; i <= 100; i++) {
            setTimeout(() => {
                updateProgress(i);
            }, i * 50); // Update every 50 milliseconds
        }
    }, 1000);
});




// socialbook like button making 

function toggleLike() {
  var likeBlue = document.getElementById("likeBlue");
  var likeGray = document.getElementById("likeGray");

  if (likeBlue.style.display === "none" || likeBlue.style.display === "") {
    // প্রথম বারের ক্লিকে সাউন্ড প্লে করুন
    var clickSound = document.getElementById("clickSound");
    clickSound.play();

    likeBlue.style.display = "block";
    likeGray.style.display = "none";
    document.getElementById("likeText").style.color = "#1876f2";
  } else {
    likeBlue.style.display = "none";
    likeGray.style.display = "block";
    document.getElementById("likeText").style.color = "#808080";
  }
}

// প্রোফাইল পেজ থেকে ক্রিয়েট স্টোরি পেজ ওপেন

document.getElementById("profilePageCreateStory").addEventListener("click", function() {
    setTimeout(function(){
        document.getElementById("createStorypage").style.top = "0";
    }, 100);
});

document.getElementById("profilePageOpen").addEventListener("click", function(){
  
  document.getElementById("profile-page").style.display = "block"
  
  document.getElementById("homeGray").style.display  = "block"
  document.getElementById("homeBlue").style.display  = "none"
  
  document.getElementById('underline').style.display ='none'
});


document.getElementById("coverCameraClick").addEventListener('click', function(){
  
  document.querySelector(".cover-upload-bottom-bar-container").style.top = "0"
  document.querySelector(".cover-upload-bottom-bar").style.bottom = "0"
  
})









// ড্রপডাউন মেনু এক্সপোজ করার ফাংশন
function toggleDropdownMenu() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  var computedStyle = window.getComputedStyle(dropdownMenu);
  
  document.getElementById("searchContainer").style.display = 'none'
  if (computedStyle.display === "none" || computedStyle.display === "") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
}

// post create image select 

document.getElementById('fileInput').addEventListener('change', function() {
        var file = this.files[0];
        if (file && file.type.startsWith('image/')) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('selectedImage').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    

// post create page open and close


var inputContainer = document.querySelector('.input-container');
var opacityBlack = document.querySelector('.opacity-black');

inputContainer.addEventListener('click', function(){
  opacityBlack.style.display = 'flex'
});


var crossBtn = document.querySelector('.close-btn');

crossBtn.addEventListener('click', function(){
  opacityBlack.style.display = 'none';
});





  // নির্দিষ্ট সময় নির্ধারণ করুন যা থেকে কাউন্টডাউন শুরু হবে
  var startTime = new Date().getTime();

  // সময় আপডেট ফাংশন
  function updateTime() {
    var currentTime = new Date().getTime();
    var difference = currentTime - startTime;
    var minutes = Math.floor(difference / 60000); // মিলিসেকেন্ড থেকে মিনিটে রূপান্তর
    if (minutes === 0) {
      document.getElementById("time-text").innerHTML = "just now";
    } else if (minutes === 1) {
      document.getElementById("time-text").innerHTML = minutes+ "m ago";
    } else {
      document.getElementById("time-text").innerHTML = minutes+ "m ago";
    }
  }

  // প্রতি মিনিটে সময় আপডেট করুন
  setInterval(updateTime, 60000);
  
  
 // search container click 
 document.querySelector('.search-box').addEventListener('click', function(){
   
 });
 
 
 function toggleSearchBox() {
   var searchContainer = document.getElementById('searchContainer');
   dropdownMenu.style.display = "none";
   if (searchContainer.style.display === 'block') {
       searchContainer.style.display = 'none';
   } else {
       searchContainer.style.display = 'block';
   }
   document.querySelector('.searchBoxFocus').focus();
}


// radio button click ckecked and dark mode 

document.addEventListener("DOMContentLoaded", function() {
    var selectBtns = document.querySelectorAll('.select-btn-box');
    var selectedOption = localStorage.getItem("selectedOption");

    // Check if there's a selected option in local storage
    if (selectedOption) {
        // Check the corresponding radio button
        document.getElementById(selectedOption).checked = true;
        
        // Apply dark theme if the selected option is "option2"
        if (selectedOption === "option2") {
            document.body.classList.add("dark-theme");
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#212121');
        }
    }

    selectBtns.forEach(function(selectBtn) {
        selectBtn.addEventListener('click', function() {
            var radioBtn = this.querySelector('input[type="radio"]');
            radioBtn.checked = true;

            // Save selected option to local storage
            localStorage.setItem("selectedOption", radioBtn.id);

            // Check if the clicked button is the "On" button
            if (radioBtn.id === "option2") {
                document.body.classList.add("dark-theme");
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '#212121');
            } else {
                document.body.classList.remove("dark-theme");
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '#fff');
            }

            // Check if the clicked button is the "Use system settings" button
            if (radioBtn.id === "option3") {
                // Check if system dark mode is enabled
                checkSystemDarkMode();
            }
        });
    });

    // Listen for changes in system dark mode setting
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        // If system dark mode is turned on, apply dark theme to the website
        if (e.matches) {
            // Apply dark theme
            document.body.classList.add("dark-theme");
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#212121');
        } else {
            // Apply light theme
            document.body.classList.remove("dark-theme");
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#fff');
        }
    });

    // Function to check system dark mode and apply theme accordingly
    function checkSystemDarkMode() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Apply dark theme
            document.body.classList.add("dark-theme");
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#212121');
        } else {
            // Apply light theme
            document.body.classList.remove("dark-theme");
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#fff');
        }
    }

    // Check system dark mode on page load if "Use system settings" is selected
    if (selectedOption === "option3") {
        checkSystemDarkMode();
    }
});
 
 
 // display and accessblity click 
 
 document.getElementById("theameClick").addEventListener('click', function(){
   
   document.querySelector(".display-accessibility").style.display = "block"
   document.querySelector(".menu-home").style.display = "none"
 });
 
 document.querySelector(".theme-title i").addEventListener('click', function(){
   
   document.querySelector(".display-accessibility").style.display = "none"
   document.querySelector(".menu-home").style.display = "block"
 });
 
 
 
 