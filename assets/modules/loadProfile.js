const profile = document.querySelector(".profile-img");
export const loadProfile = data => {
        let html = [];
            const element = `
            <h3>Profile</h3>
            <img src="${data.photoURL}" alt="">
            <h2>${data.displayName}</h2>
            <h4>${data.email}</h4>`;
        html += element;
        profile.innerHTML = html;
};