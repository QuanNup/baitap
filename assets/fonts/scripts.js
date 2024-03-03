
        var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight;

        mobileMenu.onclick = function () {
            var isClose = header.clientHeight === headerHeight;
            if (isClose) {
                header.style.height = 'auto';
            } else {
                header.style.height = null;
            }
        }

        var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
        for (var i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];


            menuItem.onclick = function (event) {
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

                if (isParentMenu) {
                    event.preventDefault();
                } else {
                    header.style.height = null;
                }

            }
        }


        var header = document.getElementById('nav');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight;

        mobileMenu.onclick = function () {
            var isClose = header.clientHeight === headerHeight;
            if (isClose) {
                header.style.height = 'auto';
            } else {
                header.style.height = null;
            }
        }
        // const closeTable = document.querySelector('.js-header')
        // closeTable.addEventListener('click',function(event){
        //     event.stopPropagation();
        // })

        var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
        for (var i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];


            menuItem.onclick = function (event) {
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

                if (isParentMenu) {
                    event.preventDefault();
                } else {
                    header.style.height = null;
                }

            }
        }
        var video = document.getElementById("myVideo");
        var playButton = document.querySelector(".play-button");
        var pauseButton = document.querySelector(".pause-button");
        var timeout;

        function togglePlayPause() {
            if (!isPlayPauseCalled) {
                isPlayPauseCalled = true;
                if (video.paused || video.ended) {
                    video.play();
                    showPauseButton();
                } else {
                    video.pause();
                    hidePauseButton();
                }
            }
        }

        function playVideo() {
            video.play();
            playButton.style.display = "none"; // Ẩn nút play
            pauseButton.style.display = "block"; // Hiển thị nút pause
        }

        function pauseVideo() {
            video.pause();
            playButton.style.display = "block"; // Hiển thị nút play
            pauseButton.style.display = "none"; // Ẩn nút pause
        }

        function showPauseButton() {
            pauseButton.style.opacity = "1";
            clearTimeout(timeout);
            timeout = setTimeout(hidePauseButton, 2000);
        }

        function hidePauseButton() {
            if (!video.paused && !isMouseOverPauseButton()) {
                pauseButton.style.opacity = "0";
            }
        }

        function isMouseOverPauseButton() {
            var rect = pauseButton.getBoundingClientRect();
            var mouseX = event.clientX;
            var mouseY = event.clientY;
            return (
                mouseX >= rect.left &&
                mouseX <= rect.right &&
                mouseY >= rect.top &&
                mouseY <= rect.bottom
            );
        }

        function hidePlayButton() {
            playButton.style.display = "none";
        }

        video.onplay = function () {
            hidePlayButton();
            showPauseButton();
        };

        video.onpause = function () {
            hidePauseButton();
            showPlayButton();
        };



        video.addEventListener("mousemove", function () {
            showPauseButton();
        });

        video.addEventListener("mouseout", function () {
            hidePauseButton();
        });

        video.addEventListener("click", function () {
            togglePlayPause();
        });

        video.onplay = function () {
            playButton.style.display = "none"; // Ẩn nút play
            pauseButton.style.display = "block"; // Hiển thị nút pause
        };

        video.onpause = function () {
            playButton.style.display = "block"; // Hiển thị nút play
            pauseButton.style.display = "none"; // Ẩn nút pause
        };

        video.onended = function () {
            video.currentTime = 0; // Quay lại thời điểm ban đầu
            video.play(); // Chạy lại video
        };