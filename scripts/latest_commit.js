fetch('https://api.github.com/repos/oscie57/site-vocaloid/branches/master')
.then(resp => resp.json())
.then(resp => {
    document.getElementById('commit-author').innerHTML = resp.commit.committer.login
    document.getElementById('commit-message').innerHTML = resp.commit.commit.message
    document.getElementById('commit-link').href = resp.commit.html_url
    document.getElementById('commit-id').innerHTML = resp.commit.sha.slice(0, 6)
    document.getElementById('commit-date')
        .innerHTML = resp.commit.commit.committer.date
        .replace("-", "/")
        .replace("-", "/")
        .replace("T", ", ")
        .replace("Z", " UTC")
})