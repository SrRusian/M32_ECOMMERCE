// ---------- auto-scroll with wheel & touch ----------
      (function () {
        const sections = Array.from(document.querySelectorAll(".section"));
        let scrolling = false;
        let current = 0;

        // intersection observer to set current and add in-view class
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((ent) => {
              if (ent.isIntersecting) {
                ent.target.classList.add("in-view");
                current = sections.indexOf(ent.target);
              }
            });
          },
          { threshold: 0.5 }
        );
        sections.forEach((s) => io.observe(s));

        // wheel handler
        window.addEventListener(
          "wheel",
          (e) => {
            if (scrolling) return;
            if (Math.abs(e.deltaY) < 10) return;
            if (e.deltaY > 0 && current < sections.length - 1) {
              scrolling = true;
              sections[current + 1].scrollIntoView({ behavior: "smooth" });
              setTimeout(() => (scrolling = false), 900);
            } else if (e.deltaY < 0 && current > 0) {
              scrolling = true;
              sections[current - 1].scrollIntoView({ behavior: "smooth" });
              setTimeout(() => (scrolling = false), 900);
            }
          },
          { passive: true }
        );

        // touch swipe
        let startY = null;
        window.addEventListener(
          "touchstart",
          (e) => (startY = e.touches[0].clientY),
          { passive: true }
        );
        window.addEventListener(
          "touchend",
          (e) => {
            if (startY == null) return;
            const endY = e.changedTouches[0].clientY;
            const diff = startY - endY;
            if (Math.abs(diff) < 40) return;
            if (scrolling) return;
            if (diff > 0 && current < sections.length - 1) {
              scrolling = true;
              sections[current + 1].scrollIntoView({ behavior: "smooth" });
              setTimeout(() => (scrolling = false), 900);
            }
            if (diff < 0 && current > 0) {
              scrolling = true;
              sections[current - 1].scrollIntoView({ behavior: "smooth" });
              setTimeout(() => (scrolling = false), 900);
            }
            startY = null;
          },
          { passive: true }
        );
      })();