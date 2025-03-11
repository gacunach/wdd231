
const currentYear = new Date().getFullYear();

const currentyearelemnt = document.getElementById('currentyear');

const copyrightText = '&copy' + currentYear;

currentyearelemnt.innerHTML = copyrightText;

const lastmodifiedTS = document.lastModified;

const lastmodifiedDate = new Date(lastmodifiedTS);

const formattedDate = lastmodifiedDate.toLocaleString();

const lastModifiedElement = document.getElementById('lastModified');

lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;




document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show-menu");
    });

    document.addEventListener("DOMContentLoaded", function () {
        const courses = [
            {
                subject: 'CSE',
                number: 110,
                title: 'Introduction to Programming',
                credits: 2,
                certificate: 'Web and Computer Programming',
                description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
                technology: ['Python'],
                completed: true 
            },
            {
                subject: 'WDD',
                number: 130,
                title: 'Web Fundamentals',
                credits: 2,
                certificate: 'Web and Computer Programming',
                description: 'This course introduces students to the World Wide Web and to careers in web site design and development.',
                technology: ['HTML', 'CSS'],
                completed: true 
            },
            {
                subject: 'CSE',
                number: 111,
                title: 'Programming with Functions',
                credits: 2,
                certificate: 'Web and Computer Programming',
                description: 'Students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others.',
                technology: ['Python'],
                completed: true 
            },
            {
                subject: 'CSE',
                number: 210,
                title: 'Programming with Classes',
                credits: 2,
                certificate: 'Web and Computer Programming',
                description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level.',
                technology: ['C#'],
                completed: true 
            },
            {
                subject: 'WDD',
                number: 131,
                title: 'Dynamic Web Fundamentals',
                credits: 2,
                certificate: 'Web and Computer Programming',
                description: 'Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
                technology: ['HTML', 'CSS', 'JavaScript'],
                completed: true 
            },
            {
                subject: 'WDD',
                number: 231,
                title: 'Frontend Web Development I',
                credits: 2,
                certificate: 'Web and Computer Programming',
                description: 'Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
                technology: ['HTML', 'CSS', 'JavaScript'],
                completed: false
            }
        ];
    
        function displayCourses() {
            const courseContainer = document.getElementById("course-list");
            courseContainer.innerHTML = "";
            
            courses.forEach(course => {
                const courseItem = document.createElement("div");
                courseItem.classList.add("course-item");
                if (course.completed) {
                    courseItem.style.backgroundColor = "green";
                    courseItem.style.color = "white";
                } else {
                    courseItem.style.backgroundColor = "brown";
                    courseItem.style.color = "white";
                }
                
                courseItem.innerHTML = `
                    <h3>${course.subject} ${course.number}: ${course.title}</h3>
                    <p><strong>Credits:</strong> ${course.credits}</p>
                    <p><strong>Description:</strong> ${course.description}</p>
                    <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
                `;
                
                courseContainer.appendChild(courseItem);
            });
        }
        
        displayCourses();
    });
    
    
        const courseContainer = document.querySelector(".courses");
        function renderCourses(filter = "all") {
            courseContainer.innerHTML = "";
            courses.forEach(course => {
                if (filter === "all" || course.subject.toLowerCase() === filter) {
                    const button = document.createElement("button");
                    button.classList.add(course.subject.toLowerCase());
                    button.textContent = `${course.subject} ${course.number} - ${course.title}`;
                    if (course.completed) {
                        button.style.backgroundColor = "#4CAF50"; 
                        button.style.color = "white";
                    }
                    courseContainer.appendChild(button);
                }
            });
        }
    
        document.getElementById("all").addEventListener("click", () => renderCourses("all"));
        document.getElementById("cse").addEventListener("click", () => renderCourses("cse"));
        document.getElementById("wdd").addEventListener("click", () => renderCourses("wdd"));
    
        renderCourses();
    });