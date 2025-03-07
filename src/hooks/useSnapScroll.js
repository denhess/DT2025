// hooks/useSnapScroll.js
"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';

export function useSnapScroll() {
  useEffect(() => {
    // Add scroll-snap class to html element
    document.documentElement.classList.add('snap-scroll');
    
    // Helper variables for tracking scroll state
    let isScrolling = false;
    let scrollTimeout;
    let scrollingAnimationFrame;
    let isManualScrolling = false;
    
    const handleScroll = () => {
      // If this is a programmatic scroll, don't interfere
      if (isManualScrolling) return;
      
      const scrollTop = window.scrollY;
      
      // Cancel any pending animation frame
      if (scrollingAnimationFrame) {
        cancelAnimationFrame(scrollingAnimationFrame);
      }
      
      // Clear previous timeout
      clearTimeout(scrollTimeout);
      
      // Set scrolling state
      if (!isScrolling) {
        isScrolling = true;
        document.body.classList.add('is-scrolling');
      }
      
      // Set timeout to end scrolling state
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        document.body.classList.remove('is-scrolling');
        
        // Only apply gentle snap when user stops scrolling
        scrollToNearestSection(300);
      }, 150);
    };
    
    // Function to smoothly scroll to nearest section
    const scrollToNearestSection = (duration) => {
      const sections = document.querySelectorAll('section');
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      // Find which section is closest to being in view
      let closestSection = null;
      let minDistance = Infinity;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const distance = Math.abs(scrollTop - sectionTop);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      });
      
      // Only snap if we're close enough to a section boundary
      if (closestSection && minDistance < viewportHeight * 0.3) {
        // Mark as manual scrolling to prevent interference
        isManualScrolling = true;
        
        // Get the target position
        const targetPosition = closestSection.getBoundingClientRect().top + scrollTop;
        
        // Calculate distance and setup smooth animation
        const startPosition = scrollTop;
        const distance = targetPosition - startPosition;
        const startTime = performance.now();
        
        const animateScroll = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          
          if (elapsedTime < duration) {
            // Easing function for smoother motion
            const progress = easeInOutCubic(elapsedTime / duration);
            const currentPosition = startPosition + (distance * progress);
            
            window.scrollTo(0, currentPosition);
            scrollingAnimationFrame = requestAnimationFrame(animateScroll);
          } else {
            // Animation complete
            window.scrollTo(0, targetPosition);
            isManualScrolling = false;
          }
        };
        
        scrollingAnimationFrame = requestAnimationFrame(animateScroll);
      }
    };
    
    // Easing function for smoother animation
    const easeInOutCubic = (t) => {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // For mobile devices, handle touch events
    let touchStartY = 0;
    let touchStartTime = 0;
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartTime = performance.now();
    };
    
    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = performance.now();
      const timeDiff = touchEndTime - touchStartTime;
      const diff = touchStartY - touchEndY;
      
      // Calculate velocity of swipe
      const velocity = Math.abs(diff) / timeDiff;
      
      // Only trigger for intentional swipes
      if (Math.abs(diff) > 80 && velocity > 0.2) {
        const sections = document.querySelectorAll('section');
        const sectionsArray = Array.from(sections);
        
        const currentIndex = sectionsArray.findIndex((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom > 0;
        });
        
        if (currentIndex !== -1) {
          const targetIndex = diff > 0 ? currentIndex + 1 : currentIndex - 1;
          if (targetIndex >= 0 && targetIndex < sectionsArray.length) {
            // Smoother scroll with longer duration
            isManualScrolling = true;
            
            sectionsArray[targetIndex].scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
            
            // Reset manual scrolling after animation completes
            setTimeout(() => {
              isManualScrolling = false;
            }, 800);
          }
        }
      }
    };
    
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      document.documentElement.classList.remove('snap-scroll');
      if (scrollingAnimationFrame) {
        cancelAnimationFrame(scrollingAnimationFrame);
      }
    };
  }, []);
}