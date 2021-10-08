// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

//css stylesheets to load, in order
const css_links = [
        'https://fonts.googleapis.com/css?family=Roboto', //fonts
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', //fonts
        'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css', //fonts
        '../../../static/assets/webfont.css',//UCSB web standards font
        '../../../static/css/katex.min.css', //Katex styles
        '../../../static/css/custom.css', //Custom Sass compiled CSS sheet for manual environments
        '../../../static/css/dashboard.css' // Another Custom CSS sheet that should get moved directly into custom.css eventually
]


// Create new stylesheet link Elements
css_links.forEach(e => {
        var link = document.createElement('link');
        // set the attributes for link element 
        link.rel = 'stylesheet';

        link.type = 'text/css';

        link.href = e;
        // Append link element to HTML head
        head.appendChild(link);
});



