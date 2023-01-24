const employees = [
    {
        id: "1",
        name: "Vibhuti Bajaj",
        profileImage: "assets/images/Vibhuti.jpg",
        introduction: "I like playing cricket and travelling. I'm always focused on the task which I take at hand.",
        profileLink: "https://vibhi24.github.io/Personal-Website/",
    },
    {
        id: "2",
        name: "Varun Athreya",
        profileImage: "assets/images/varun.jpg",
        introduction: "I am a passionate coder who loves capturing memories and exploring new places.",
        profileLink: "https://varunsathreya.github.io/contentstack-training/",
    },
    {
        id: "3",
        name: "Priya NB",
        profileImage: "assets/images/Priya.jpeg",
        introduction: "I'm enthusiastic to learn new things and I don't give up until i achieve it.",
        profileLink: "https://priya-nb.github.io/personalweb/index.html",
    },
    {
        id: "4",
        name: "Rangaswamy Vikas",
        profileImage: "assets/images/vikas.jpg",
        introduction: "I enjoy balancing my love for learning with my passion for gaming and a fit lifestyle.",
        profileLink: "https://vikasrangaswamy.github.io/portfolio/main.html",
    },
    {
        id: "5",
        name: "Deepak Chaturvedi",
        profileImage: "assets/images/deepak.png",
        introduction: "Believer, Dedicated. I am a curious developer that loves to convert ideas into code.",
        profileLink: "https://thedeepakchaturvedi.github.io/Portfolio/",
    },
    {
        id: "6",
        name: "Rakshitha S",
        profileImage: "assets/images/Rakshitha.jpg",
        introduction:
            "I'm passionate to meet people, learn new things. I love challenges and interested in travelling.",
        profileLink: "#",
    },
    {
        id: "7",
        name: "Kashmeera Raychoty",
        profileImage: "assets/images/Kashmeera.jpg",
        introduction: "I am a creative person and like to explore new things.",
        profileLink: "https://kashmeeraraychoty.github.io/Kashmeera-s-Portfolio/",
    },
    {
        id: "8",
        name: "Harshitha D",
        profileImage: "assets/images/Harshitha D.png",
        introduction: "I'm a partical person and like to travel and listen K-pop.",
        profileLink: "https://harshithad0703.github.io/individual_website/",
    },
    {
        id: "9",
        name: "Sanika Pareek",
        profileImage: "assets/images/sanika.jpeg",
        introduction: "I'm curious to learn and explore new things and like to paint.",
        profileLink: "https://sanikapareek-contentstack.github.io/sanika-portfolio/",
    },
    {
        id: "10",
        name: "Raj Pandey",
        profileImage: "assets/images/Raj.png",
        introduction: "Computer Engineer, Painter, Poet, Reader",
        profileLink: "https://cs-raj.github.io/pw-2/",
    },
    {
        id: "11",
        name: "Viraj Yadav",
        profileImage: "assets/images/Viraj.jpg",
        introduction: "I'm a sincere lunatic curious about technology and like playing cricket.",
        profileLink: "https://vikasrangaswamy.github.io/Contentstack/#",
    },
    {
        id: "12",
        name: "Faraaz Biyabani",
        profileImage: "assets/images/faraaz.webp",
        introduction: "I am always curious about technology and I love writing code to create purposeful things.",
        profileLink: "https://faraazb.github.io/cs-personal-website/",
    },
    {
        id: "13",
        name: "Vaibhav Patil",
        profileImage: "assets/images/Vaibhav.png",
        introduction: "I'm a true technophile. I love to talk about Physics and Spirituality.",
        profileLink: "https://vaibhav-patil07.github.io/portfolio/#",
    },
    {
        id: "14",
        name: "Soumik Paul",
        profileImage: "assets/images/Soumik.png",
        introduction: "2x ICPC regionalist and first runner-up at Techsurf 2022.",
        profileLink: "https://soumik43.github.io/Portfolio/",
    },
];

function Intern(id, name, profileImage, introduction, profileLink) {
    this.id = id;
    this.name = name;
    this.profileImage = profileImage;
    this.introduction = introduction;
    this.profileLink = profileLink;
    return this;
}

let interns = employees.map(
    (intern) =>
        new Intern(parseInt(intern.id), intern.name, intern.profileImage, intern.introduction, intern.profileLink)
);

// Find element by ID
function findInternByID(id) {
    let intern = interns.find((currIntern) => currIntern.id === id);
    if (intern === undefined) {
        console.log("Intern not present in the database.");
        return;
    }
    return intern;
}

// Find element
function findIntern(data) {
    if (Object.keys(data).length > 1 || Object.keys(data).length === 0) {
        console.log("No results.");
        return;
    }
    let keys = Object.keys(data);
    let intern = interns.filter((currIntern) => {
        let internFound = true;
        for (let key of keys) {
            if (currIntern[key] !== data[key]) {
                internFound = false;
            }
        }
        return internFound;
    });
    if (intern.length === 0) {
        console.log("Intern not present in the database.");
        return [];
    }
    return intern;
}

// Update element
function updateInternsByID(id, data) {
    let index = interns.findIndex((intern) => intern.id === id);
    if (index === -1) {
        console.log("Intern not present in the database.");
        return;
    }
    if (Object.keys(data).includes("id")) {
        data.id = interns[index].id;
    }
    interns[index] = Object.assign({}, interns[index], data);
    console.log("Update successful!");
}

// Delete element
function deleteInternsByID(id) {
    let index = interns.findIndex((intern) => intern.id === id);
    if (index === -1) {
        console.log("Intern not present in the database.");
        return;
    }
    interns.splice(index, 1);
    return interns;
}
