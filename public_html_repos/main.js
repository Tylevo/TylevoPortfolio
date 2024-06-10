/* -------------------------------------------------------------------
 * Plugin Name           : Hohor - Portfolio & Gallery
 * Author Name           : Yucel Yilmaz
 * Author URI            : https://codecanyon.net/user/aip_theme3434
 * Created Date          : 22 May 2020
 * Version               : 1.0
 * File Name             : main.js
------------------------------------------------------------------- */

/* -------------------------------------------------------------------
 [Table of contents]
 * 01.Portfolio Gallery Dark
 * 02.Portfolio Gallery Light
 * 03.Wow Js
*/

$(function() {
    "use strict";

    // Call all ready functions
    hohor_portfolio_dark();
    hohor_portfolio_light();
    hohor_wow_js();
});

/* ------------------------------------------------------------------- */
/* 01.Portfolio Gallery Dark
/* ------------------------------------------------------------------- */
function hohor_portfolio_dark() {
    "use-strict";

    // Variables 
    let galleryWrapper         = $( '#portfolio-filter-masonry-dark' );
    let portfolioFilterBtn     = $( '.portfolio-filter-dark a' );

    // Portfolio Masonary Gallery
    galleryWrapper.imagesLoaded(function() {
        let grid = galleryWrapper.isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.portfolio-item',
            }
        });

        // filter items on button click
        portfolioFilterBtn.on( 'click', function() {
            let filterValue = $(this).attr( 'data-portfolio-filter' );
            grid.isotope({
                filter: filterValue
            });
        });
    });

    // filter items on button click
    portfolioFilterBtn.on( 'click', function() {
        portfolioFilterBtn.removeClass( 'current' );
        $(this).addClass( 'current' );
        event.preventDefault();
    });
}

/* ------------------------------------------------------------------- */
/* 02.Portfolio Gallery Light
/* ------------------------------------------------------------------- */
function hohor_portfolio_light() {
    "use-strict";

    // Variables 
    let galleryWrapper         = $( '#portfolio-filter-masonry-light' );
    let portfolioFilterBtn     = $( '.portfolio-filter-light a' );

    // Portfolio Masonary Gallery
    galleryWrapper.imagesLoaded(function() {
        let grid = galleryWrapper.isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.portfolio-item',
            }
        });

        // filter items on button click
        portfolioFilterBtn.on( 'click', function() {
            let filterValue = $(this).attr( 'data-portfolio-filter' );
            grid.isotope({
                filter: filterValue
            });
        });
    });

    // filter items on button click
    portfolioFilterBtn.on( 'click', function() {
        portfolioFilterBtn.removeClass( 'current' );
        $(this).addClass( 'current' );
        event.preventDefault();
    });
}

/* ------------------------------------------------------------------- */
/* 03.Wow Js
/* ------------------------------------------------------------------- */
function hohor_wow_js() {
    "use-strict";

    wow = new WOW(
        {
        boxClass:     'wow',     
        animateClass: 'animated',
        offset:       0,
        mobile:       true,
        live:         true
      }
    );
    wow.init();
}