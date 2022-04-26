import { finalize } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emmitEnglish: boolean = true;

  constructor() {
  }


  ngOnInit() {

    $('.page-loader').delay(200).fadeOut('slow');

    this.bindAngularMenu();
    this.headerStyles();
    this.sectionBackgrounds();

    $('.onepage-nav').singlePageNav({
      filter: ':not(.external)',
      currentClass: 'active',
      offset: '58',
    });
  }

  headerStyles() {

    /* ---------------------------------------------- /*
         * Header animation
        /* ---------------------------------------------- */

    const header = jQuery('.header');

    jQuery(window).scroll(function() {
      const scroll = jQuery(window).scrollTop();
      if (scroll >= 5) {
        header.addClass('header-small');
        header.addClass('header-shadow');
      } else {
        header.removeClass('header-small');
        header.removeClass('header-shadow');
      }
      if ( ( jQuery('.module-header').length <= 0 ) && ( jQuery('.module-slides').length <= 0 ) ) {
        header.addClass('header-small');
      }
    }).scroll();

    /* ---------------------------------------------- /*
         * Light/dark header
        /* ---------------------------------------------- */

    const module_header = jQuery('.module-header');

    if ( module_header.length >= 0 ) {
      if ( module_header.hasClass('bg-dark') ) {
        header.addClass('header-light');
      } else {
        header.removeClass('header-light');
      }
    }
  }

  sectionBackgrounds() {

    /* ---------------------------------------------- /*
         * Setting background of modules
        /* ---------------------------------------------- */

    jQuery('[data-background]').each(() => {
      jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-background') + ')');
    });

    jQuery('[data-background-color]').each(() => {
      jQuery(this).css('background-color', jQuery(this).attr('data-background-color') );
    });

    jQuery('[data-color]').each(() => {
      jQuery(this).css('color', jQuery(this).attr('data-color') );
    });
  }

  bindAngularMenu() {
    const navBreakpoint: number = 991;
    let mobileTest: any;

    /* ---------------------------------------------- /*
         * Mobile detect
        /* ---------------------------------------------- */

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      mobileTest = true;
    } else {
      mobileTest = false;
    }
    const width = Math.max(jQuery(window).width(), window.innerWidth);
    const menuItem = jQuery('.menu-item-has-children').not('.mega-menu-col');

    // Remove old margins from sub-menus
    menuItem.children('.sub-menu, .mega-menu').removeClass('sub-menu-left');

    if (width > navBreakpoint) {
      menuItem.removeClass('sub-menu-open');
    }

    if ((width > navBreakpoint) && (mobileTest !== true)) {
      menuItem.children('a').unbind('click');
      menuItem.unbind('mouseenter mouseleave');
      menuItem.on({
        mouseenter: function () {
          jQuery(this).addClass('sub-menu-open');
        },
        mouseleave: function () {
          jQuery(this).removeClass('sub-menu-open');
        }
      });
    } else {
      menuItem.unbind('mouseenter mouseleave');
      menuItem.children('a').unbind('click').click( (e: any) => {
        e.preventDefault();
        jQuery(this).parent().toggleClass('sub-menu-open');
        // If device has big screen
        if ((width > navBreakpoint) && (mobileTest === true)) {
          jQuery(this).parent().siblings().removeClass('sub-menu-open');
          jQuery(this).parent().siblings().find('.sub-menu-open').removeClass('sub-menu-open');
        }
      });
    }

    // -----
    if ((width > navBreakpoint) && (mobileTest !== true)) {
      menuItem.children('.sub-menu, .mega-menu').each( () => {
        const a = jQuery(this).offset();
        const b = jQuery(this).width() + a.left;

        if (b > width) {
          jQuery(this).addClass('sub-menu-left');
        } else {
          jQuery(this).removeClass('sub-menu-left');
        }
      });
    }
  }

  emmit(recibe: boolean) {
    this.emmitEnglish = recibe;
  }

}
