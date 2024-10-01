
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();


 // Type assertion

 const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLTextAreaElement;
const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
const inputFile = document.getElementById('inputFile') as HTMLInputElement;
const profilePic = document.getElementById('profilePic') as HTMLImageElement;

if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;


    let profilePicUrl: string = profilePic ? profilePic.src : 'Profile pic.jpg';

    if (inputFile) {
        inputFile.addEventListener('change', () => {
            if (inputFile.files && inputFile.files.length > 0) {
                profilePicUrl = URL.createObjectURL(inputFile.files[0]);
                if (profilePic) {
                    profilePic.src = profilePicUrl;
                }
            }
        });
    }

    // Create resume output
    const resumeOutput = `
    
    <div class="CVtemplate CVoutput" >

        <h2>Your Resume</h2>

        <img src="${profilePicUrl}" alt="Profile Picture" class="profileimg">

        <h3>Name:</h3>
        <p> ${name}</p>
        <h3>Email:</h3>
        <p>${email}</p>
        <h3>Phone Number:</h3>
        <p>${phone}</p>
        <h3>Education:</h3>
        <p>${education}</p>
        <h3>Experience:</h3>
        <p>${experience}</p>
        <h3>Skills:</h3>
        <p>${skills}</p>
        </div>

           `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The Resume Output Element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});