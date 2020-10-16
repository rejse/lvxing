(function($) {
        var isBuilder = $('html').hasClass('is-builder');

        $.extend($.easing, {
            easeInOutCubic: function(x, t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            }
        });

        $.fn.outerFind = function(selector) {
            return this.find(selector).addBack(selector);
        };

        $.fn.scrollEnd = function(callback, timeout) {
            $(this).scroll(function(){
                var $this = $(this);
                if ($this.data('scrollTimeout')) {
                    clearTimeout($this.data('scrollTimeout'));
                }
                $this.data('scrollTimeout', setTimeout(callback,timeout));
            });
        };

        $.fn.footerReveal = function() {
            var $this = $(this);
            var $prev = $this.prev();
            var $win = $(window);
            var isIE = !!document.documentMode;

            
