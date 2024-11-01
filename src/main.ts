import "./style.scss";
import "./script";
import { createHeader } from "./header";
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

document.addEventListener("DOMContentLoaded", () => {
  // Create and insert header
  const heroTop = document.querySelector(".hero-top");
  if (heroTop) {
    const header = createHeader();
    heroTop.insertBefore(header, heroTop.firstChild);
  }

  // Initialize 3D model iframe
  const IframeInjector = (function () {
    const encodedUrl: string = "aHR0cHM6Ly9teS5zcGxpbmUuZGVzaWduL25leGJvdHJvYm90Y2hhcmFjdGVyY29uY2VwdC0wYmYzMmRjM2EyMjNkODYyZmEyMzg4ZDQzMDVhMDVjYS8=";

    function decodeBase64(encoded: string): string {
      return atob(encoded);
    }

    function injectIframe(containerSelector: string, url: string): void {
      const container = document.querySelector(containerSelector);
      if (container) {
        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("frameborder", "0");
        container.appendChild(iframe);
      } else {
        console.error(`Container element with selector '${containerSelector}' not found.`);
      }
    }

    return {
      init: function (containerSelector: string): void {
        const decodedUrl = decodeBase64(encodedUrl);
        injectIframe(containerSelector, decodedUrl);
      },
    };
  })();

  // Initialize the 3D model
  IframeInjector.init(".container");

  // Initialize testimonials slider
  new Swiper('.testimonials-slider', {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Handle contact form submission
  // const contactForm = document.getElementById('contact-form') as HTMLFormElement;
  // if (contactForm) {
  //   contactForm.addEventListener('submit', async (e) => {
  //     e.preventDefault();

  //     try {
  //       await emailjs.sendForm(
  //         'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  //         'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  //         contactForm
  //       );

  //       alert('Message sent successfully!');
  //       contactForm.reset();
  //     } catch (error) {
  //       console.error('Error sending email:', error);
  //       alert('Failed to send message. Please try again.');
  //     }
  //   });
  // }
});