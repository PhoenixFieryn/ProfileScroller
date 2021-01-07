const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Los Angeles',
        image: 'https://randomuser.me/api/portraits/men/85.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Phoenix',
        image: 'https://randomuser.me/api/portraits/women/83.jpg'
    },
    {
        name: 'William Furghen',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'Chicago',
        image: 'https://randomuser.me/api/portraits/men/86.jpg'
    },
    {
        name: 'Godly-Steve',
        age: 19,
        gender: 'male',
        lookingfor: 'female',
        location: 'Chicago',
        image: 'https://randomuser.me/api/portraits/men/87.jpg'
    }
];

const profiles = profileIterator(data);

// Next Events
document.getElementById('next').addEventListener('click', nextProfile);

// Call first profile
nextProfile();

// Next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
            </ul>
        `

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // No more profiles
        window.location.reload();
    }

    
}
 
// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false } :
            { done: true }
        }
    };
}