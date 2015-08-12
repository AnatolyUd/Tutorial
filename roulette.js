$(document).ready(function () {
    var iNectar = 0;
    var sHoney = 0;
    var bRunning = false;
    var bTiming = false;
    var bAdPlaying = false;
    var iRepeat = 0;

    var Bee = function (num, dir, defaultLeft, defaultTop, length, size) {
        this.length = length;
        this.size = (size === undefined) ? 39 : size;
        this.num = num;
        this.element = '#bee' + num;
        this.dir = dir;
        this.defaultTop = defaultTop;
        this.defaultLeft = defaultLeft;
        this.currentCell = 0;
        this.currentTop = defaultTop;
        this.currentLeft = defaultLeft;
    };

    Bee.prototype.reset = function () {
        $(this.element)
            .css('top', this.defaultTop + 'px')
            .css('left', this.defaultLeft + 'px');
    };

    Bee.prototype.hide = function () {
        $(this.element).hide();
    };

    Bee.prototype.show = function () {
        $(this.element).show();
    };

    Bee.prototype.animateHorizontal = function (cell, success) {
        var dir = (this.num == 1) ? 1: -1;
        var newLeft = Math.round(this.defaultLeft + cell * this.size * dir);
        var diff = Math.abs($(this.element).position().left - newLeft);
        $(this.element).animate({left: newLeft + 'px'}, Math.round(19200 / 1860 * diff), success);
    };

    Bee.prototype.animateVertical = function (cell, success) {
        var dir = (this.num == 2) ? 1: -1;
        var newTop = Math.round(this.defaultTop + cell * this.size * dir);
        var diff = Math.abs($(this.element).position().top - newTop);
        $(this.element).animate({top: newTop + 'px'}, Math.round(6400 / 540 * diff), success);
    };

    Bee.prototype.animate = function (cell, success) {
        if (cell === undefined) {
            cell = this.length;
        }
        if (success === undefined) {
            success = function () {};
        }
        if (this.dir == 'h') {
            this.animateHorizontal(cell, success);
        } else {
            this.animateVertical(cell, success);
        }
    };

    function fnAnimate(side, cell, init) {
        var endCell = cell;
        var successful = function () {
            $('#honey').html(sHoney);
            // console.log('sHoney', sHoney);
            for (var i = 1; i <= 10; i++) {
                if (i == iNectar) {
                    $('#n' + i).addClass('active');
                } else {
                    $('#n' + i).removeClass('active');
                }
            }
            iCell = cell;
            iSide = side;
            bRunning = false;
            if (!bTiming && !bAdPlaying) {
                $('#btnStart').prop('disabled', false);
                setWheels('enabled');
                if (jwplayer('roulettePlayer').getState() != 'IDLE') {
                    jwplayer('roulettePlayer').stop();
                }
            }
        };
        if ((iSide != side) || init) {
            endCell = (iSide % 2 == 1) ? 31 : 9;
            successful = function () {
                $('#bee' + iSide).hide();
                iSide = (++iSide > 4) ? (iSide - 4) : iSide;
                eval('bee' + iSide + '.reset()');
                eval('bee' + iSide + '.show()');
                iCell = cell;
                fnAnimate(side, cell, false);
            };
        }
        // console.log('fnAnimate side, cell, endCell, iSide:', side, cell, endCell, iSide);

        switch (iSide) {
            case 1:
                bee1.animate(endCell, successful);
                break;
            case 2:
                bee2.animate(endCell, successful);
                break;
            case 3:
                bee3.animate(endCell, successful);
                break;
            case 4:
                bee4.animate(endCell, successful);
                break;
        }
    }

    var bee1 = new Bee(1, 'h', 15, 5, 32);
    var bee2 = new Bee(2, 'v', 1224, 5, 10);
    var bee3 = new Bee(3, 'h', 1224, 356, 32);
    var bee4 = new Bee(4, 'v', 15, 356, 10);

    function setWheels(status) {
        var z = (status == 'enabled') ? '20' : '-1';
        $('#gameWheel').css('z-index', z);
        $('#channelWheel').css('z-index', z);
    }

    function startRoulette() {
        $.post('/ajax/roulette', {a: 'start', s: iSide, c: iCell, ch: iChannel, g: sGUID}, function (data) {
            // console.log('iSide, iCell, iChannel, g, {data}:', iSide, iCell, iChannel, sGUID, data);

            if (data.errcode == 'fraud') {
                showFraud();
                return;
            }

            bValidate = data.validate;

            iNectar = data.nectar;
            sHoney = data.honey;
            sGUID = data.guid;

            bRunning = true;
            bTiming = true;
            bAdPlaying = false;

            jwplayer('roulettePlayer').setControls(true);
            jwplayer('roulettePlayer').load({
                file: '/chs/' + data.video
            });

            jwplayer('roulettePlayer').onAdComplete(function() {
                bAdPlaying = false;
                if (!bRunning) {
                    $('#btnStart').prop('disabled', false);
                    setWheels('enabled');
                }
                jwplayer('roulettePlayer').setControls(false);
            });

            jwplayer('roulettePlayer').onAdError(function() {
                bTiming = false;
                jwplayer('roulettePlayer').setControls(false);
            });

            jwplayer('roulettePlayer').onComplete(function () {
                if (!bRunning) {
                    $('#btnStart').prop('disabled', false);
                    setWheels('enabled');
                }
                jwplayer('roulettePlayer').load({
                    image: '/img/promo_video_img.png',
                    file: '/chs/' + data.video
                });
            });

            jwplayer('roulettePlayer').play();

            if (iRepeat > 1) {
                $('#leftAdContainer').html('<ins class="adsbygoogle"'
                    + ' style="display:inline-block;width:336px;height:280px"'
                    + ' data-ad-client="ca-pub-8343654756093091"'
                    + ' data-ad-slot="5425978367"></ins>');
                (adsbygoogle = window.adsbygoogle || []).push({});
            }

            jwplayer('roulettePlayer').onAdPlay(function() {
                bAdPlaying = true;
            });

            setTimeout(function() {
                if (!bAdPlaying) {
                    $('#btnStart').prop('disabled', false);
                    setWheels('enabled');
                }
            }, 12000);

            fnAnimate(data.side, data.cell, true);
        }, 'json');
        mixpanel.track('Play Roulette 1');
    }

    $('#captchaForm').submit(function () {
        $('#btnCaptcha').trigger('click');
        return false;
    });

    $('#btnStart').click(function () {
        if (++iRepeat > 5) {
            var r = /([^\?]+)/.exec(document.location);
            var d = new Date();
            document.location = r[0] + '?' + d.getTime();
        } else {
            if ($('#btnStart').data('ui-tooltip')) {
                $('#btnStart').tooltip('close');
            }
            setWheels('disabled');
            $(this).prop('disabled', true);

            if (bValidate) {
                showCaptcha(false);
            } else {
                startRoulette();
            }
        }
    });

    function showCaptcha(err) {
        $('#captchaTitle').html(err ? 'Invalid verification code. Try again.' : 'Please enter verification code.');
        $('#captchaCode').val('');
        var d = new Date();
        $('#captchaImage').attr('src', '/captcha/default?' + d.getTime());
        $('#captchaBox').dialog({
            resizable: false,
            modal: true
        });
    }

    $('#btnCaptcha').click(function () {
        // console.log('code:', $('#captchaCode').val());
        $('#captchaBox').dialog('close');

        $.post('/ajax/captcha', {c: $('#captchaCode').val(), g: $('#gameID').val()}, function (data) {
            // console.log('data.valid:', data);
            if (data.valid) {
                startRoulette();
            } else {
                showCaptcha(true);
            }
        }, 'json');
    });
});
