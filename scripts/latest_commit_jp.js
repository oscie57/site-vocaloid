fetch('https://api.github.com/repos/oscie57site-vocaloid/branches/master')
.then(resp => resp.json())
.then(resp => {
    document.getElementById('commit-author').innerHTML = resp.commit.committer.login
    document.getElementById('commit-message').innerHTML = resp.commit.commit.message
    document.getElementById('commit-link').href = resp.commit.html_url
    document.getElementById('commit-id').innerHTML = resp.commit.sha.slice(0, 6)
    document.getElementById('commit-date')
        .innerHTML = resp.commit.commit.committer.date
        .replace("-", "年")
        .replace("-", "月")
        .replace("T", "日、")
        .replace(":", "時")
        .replace(":", "分")
        .replace("Z", "秒UTC")
})