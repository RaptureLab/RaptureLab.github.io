console.log("Discord User Archive V:0.1 Loaded!");

//Loads Jquery and bootstrap for this js file.
function include(filename, onload) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = function() {
        if (script.readyState) {
            if (script.readyState === 'complete' || script.readyState === 'loaded') {
                script.onreadystatechange = null;
                onload();
            }
        }
        else {
            onload();
        }
    };
    head.appendChild(script);
}

include('../../../scripts/jquery-3.4.1.min.js', function() {
    $(document).ready(function() {
        console.log('!! jquery is ready for user.js');
    });
});

include('../../../bootstrap/js/bootstrap.min.js', function() {
    $(document).ready(function() {
        console.log('!! bootstrap is ready for user.js');
    });
});
