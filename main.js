var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var inputFile = document.getElementById('inputFile');
    var profilePic = document.getElementById('profilePic');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePicUrl_1 = profilePic ? profilePic.src : 'Profile pic.jpg';
        if (inputFile) {
            inputFile.addEventListener('change', function () {
                if (inputFile.files && inputFile.files.length > 0) {
                    profilePicUrl_1 = URL.createObjectURL(inputFile.files[0]);
                    if (profilePic) {
                        profilePic.src = profilePicUrl_1;
                    }
                }
            });
        }
        // Create resume output
        var resumeOutput = "\n    \n    <div class=\"CVtemplate CVoutput\" >\n\n        <h2>Your Resume</h2>\n\n        <img src=\"".concat(profilePicUrl_1, "\" alt=\"Profile Picture\" class=\"profileimg\">\n\n        <h3>Name:</h3>\n        <p> ").concat(name_1, "</p>\n        <h3>Email:</h3>\n        <p>").concat(email, "</p>\n        <h3>Phone Number:</h3>\n        <p>").concat(phone, "</p>\n        <h3>Education:</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience:</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills:</h3>\n        <p>").concat(skills, "</p>\n        </div>\n\n           ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The Resume Output Element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
