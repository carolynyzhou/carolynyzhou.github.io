// injects the shared nav/logo partial into #site-nav on every page
fetch('/partials/nav.html')
    .then(function(res) { return res.text(); })
    .then(function(html) {
        var mount = document.getElementById('site-nav');
        mount.innerHTML = html;

        var selected = {
            '/design/': 'design',
            '/design/index.html': 'design',
            '/art/': 'art',
            '/art/index.html': 'art',
            '/misc/': 'misc',
            '/misc/index.html': 'misc',
            '/about.html': 'about'
        }[window.location.pathname];

        if (selected) {
            var link = mount.querySelector('.nav a[data-nav="' + selected + '"]');
            if (link) link.id = 'selected';
        }
    });
