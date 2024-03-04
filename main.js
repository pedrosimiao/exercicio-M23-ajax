document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const bio = document.getElementById('bio');
    const repos = document.getElementById('repos');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/pedrosimiao')
    .then(response => {            
        if (!response.ok) {
            throw new Error(`Erro ao obter informações. Código de resposta: ${response.status}`);
        }
    
        return response.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        username.innerText = `@${json.login}`;
        bio.innerText = json.bio;
        repos.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText  = json.following;
        link.href = json.html_url;
    })
})