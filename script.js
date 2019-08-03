// MVP:
// Fetch the API data.
// Fetch the specific API data.
// Append the data to the DOM.
// Create a function that calculates the average.
// Append it to the DOM.
// Create a search field.
// Create a function that puts all the first names and last names in an object/array
// Create a function that can filter through the object/array
// Create a function that will impact the DOM in real time to show only filtered results
// Create a function that hides test scores.
// Create a function that displays the test scores via click listener.
// As part of the form add a submission form for tags.
// Add the tags to an object
// Create another search function that searches by tags.

// Stretch Goal:
// Have the "search by name" work in conjunction with "search by tags"





// Namespacing to store all the necessry blocks of info in an object
const studentProfileApp = {};
// studentProfile.profiles = result;

// document ready
$(function (){
    // function used to grab the student profiles from the API
    // studentProfileApp.getProfiles = function(){
        $.ajax({
            url:"https://www.hatchways.io/api/assessment/students",
            method: "GET",
            dataType: "json"
        }).then(function(result){
            // The results of the API
            console.log(result);
            console.log(typeof result);

            studentProfileApp.studentProfileCard(result);

        }).catch(function(){
            // Error handling
            console.error("Something's wrong.");
        })
    // }


    // This is the template that will be used for each student profile.
    // It pulls the (result) from the API and runs it through the parameter of (data).
    // Map will go through the object to pick through the results
    // Lastly, the specified results are then placed in their respective places via the specific place holders
    studentProfileApp.studentProfileCard = function(data){
        // const studentImageAltText = `<p>${studentObject.firstName} ${studentObject.lastName}</p>`;
        
        
        
        // data-profileNumber=`${unqiqueId}`;
        const addResultsToCard = data.students.map(function(studentObject){

            // const studentImage = studentObject.pic;
            // const studentFirstName = studentObject.firstName;
            // const studentLastName = studentObject.lastName;
            // const studentWorkplace = studentObject.company;
            // const studentEmail = studentObject.email;
            // const studentSkill = studentObject.skill;
            // const studentTestScores = studentObject.grades;

            let studentCardTemplate = `
                <div class="data"> 
                    <div>
                        
                        <h2>${studentObject.firstName} ${studentObject.lastName}</h2>
                        <ul class="data__ul filmData">
                            <li class="data__li">company: <span>${studentObject.workplace}</span></li>
                            <li class="data__li">email: <span>${studentObject.email}</span></li>
                            <li class="data__li">skill: <span>${studentObject.skill}</span></li>
                            <li class="data__li">last name: <span>${studentObject.testScores}</span></li>
                        </ul>
                    </div>
                </div>`;
            return studentCardTemplate;
        }).join('');
            $('.results').append(addResultsToCard);
    };


    
});
