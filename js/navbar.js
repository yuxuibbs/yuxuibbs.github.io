$(document).ready(function() {
    document.getElementById('insertNavBar').innerHTML =`
        <nav class="navbar navbar-expand-lg custom-toggler">
            <a class="navbar-brand" href="index.html">
                <h1><strong>Yuxuan Chen</strong></h1>
            </a>
            <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                <span class="navbar-toggler-icon">
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" id="menu">
                <ul class="nav navbar-nav nav-fill w-100">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="projects.html">
                            Projects
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cubing.html">
                            Cubing
                        </a>
                    </li>
                </ul>
            </div>
        </nav>`;
});