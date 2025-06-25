---
layout: default
title: Fox Paintings Gallery
---

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Montserrat&display=swap" rel="stylesheet" />

<style>
  body {
    background: url('https://dashing-empanada-2c3316.netlify.app/assets/1000143373_dimmed.png') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #eee;
  }

  h1.gallery-title {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    margin-top: 2rem;
    text-align: center;
    color: #f5f5f5;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  }

  p.gallery-subtitle {
    text-align: center;
    color: #ccc;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  /* FILTER UI */
  #filter-container {
    max-width: 600px;
    margin: 0 auto 1rem;
    padding: 1rem 1.5rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(0,0,0,0.15);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  #filter-container label {
    font-weight: 600;
    color: #eee;
    font-family: 'Montserrat', sans-serif;
    align-self: center;
  }

  #filter-container select {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    border: 1px solid #aaa;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    background: #fff;
    cursor: pointer;
    font-weight: 600;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  #filter-container select:hover,
  #filter-container select:focus {
    border-color: #f25a5a;
    outline: none;
    box-shadow: 0 0 5px rgba(242,90,90,0.6);
  }

  #clear-filters {
    background: transparent;
    border: 1px solid #f25a5a;
    border-radius: 20px;
    color: #f25a5a;
    font-weight: 600;
    padding: 0.4rem 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    align-self: center;
    font-family: 'Montserrat', sans-serif;
  }

  #clear-filters:hover {
    background-color: #f25a5a;
    color: #fff;
  }

  #filter-count {
    color: #ccc;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }

  .gallery-grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem 4rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  .painting-item {
    position: relative;
    background: rgba(255,255,255,0.95);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: opacity 0.4s ease, transform 0.3s ease;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    cursor: pointer;
    animation: fadeIn 0.4s ease;
  }

  .painting-item[style*="display: none"] {
    opacity: 0;
    transform: scale(0.95);
    pointer-events: none;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .painting-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 18px rgba(0,0,0,0.15);
  }

  .painting-image {
    width: 100%;
    height: 220px;
    object-fit: contain;
    background: #eee;
  }

  .painting-hover-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(34, 34, 34, 0.75);
    color: #fff;
    font-size: 1rem;
    text-align: center;
    padding: 0.6rem 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    font-family: 'Playfair Display', serif;
  }

  .painting-item:hover .painting-hover-overlay {
    opacity: 1;
  }

  .painting-footer {
    padding: 1rem;
    text-align: center;
  }

  .painting-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    color: #222;
    margin-bottom: 0.4rem;
  }

  .painting-description {
    font-size: 0.95rem;
    color: #444;
    margin-bottom: 0.4rem;
  }

  .painting-meta {
    font-size: 0.8rem;
    color: #777;
    line-height: 1.4;
  }

  /* Contact form */
  #contact {
    max-width: 480px;
    margin: 2rem auto 4rem;
    background: #e6f0ff;
    border-radius: 12px;
    padding: 1.2rem 1.5rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    color: #222;
  }

  #contact h2 {
    font-family: 'Playfair Display', serif;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  #contact form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  #contact label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 0.95rem;
  }

  #contact input,
  #contact textarea {
    padding: 0.4rem 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.95rem;
  }

  #contact button {
    background: #222;
    color: #fff;
    padding: 0.6rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    transition: background 0.3s ease;
    font-size: 1rem;
  }

  #contact button:hover {
    background: #444;
  }

  /* Modal */
  #imageModal {
    position: fixed;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10,10,10,0.85);
  }

  #imageModal img {
    max-width: 90vw;
    max-height: 80vh;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(255,255,255,0.2);
  }

  #closeModal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    z-index: 10001;
  }

  .nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.2);
    border: none;
    color: white;
    font-size: 2rem;
    padding: 0.4em 0.6em;
    cursor: pointer;
    z-index: 10000;
    user-select: none;
  }

  #prevBtn { left: 1rem; }
  #nextBtn { right: 1rem; }

  .nav-arrow:hover {
    background: rgba(255,255,255,0.4);
  }

  @media (max-width: 600px) {
    .painting-image {
      height: 180px;
    }

    h1.gallery-title {
      font-size: 2.2rem;
    }

    p.gallery-subtitle {
      font-size: 1rem;
    }

    #contact {
      margin-left: 1rem;
      margin-right: 1rem;
      max-width: calc(100% - 2rem);
    }

    #filter-container {
      max-width: 100%;
      gap: 0.5rem;
      padding: 0.8rem 1rem;
    }
  }

  .social-icon {
    margin: 0 0.5rem;
    display: inline-block;
    transition: transform 0.3s ease, filter 0.3s ease;
    vertical-align: middle;
    cursor: pointer;
  }

  .social-icon img {
    width: 36px;
    height: 36px;
    transition: transform 0.3s ease, filter 0.3s ease;
    filter: brightness(95%);
  }

  .social-icon:hover img {
    transform: scale(1.15);
    filter: brightness(110%);
  }
</style>

<h1 class="gallery-title">Fox Paintings Gallery</h1>
<p class="gallery-subtitle">Explore the collection below</p>

<!-- FILTER UI -->
<div id="filter-container" role="region" aria-label="Painting filters">
  <label for="filter-medium">Medium:</label>
  <select id="filter-medium" aria-controls="galleryGrid" aria-label="Filter paintings by medium">
    <option value="">All Mediums</option>
  </select>

  <label for="filter-year">Year:</label>
  <select id="filter-year" aria-controls="galleryGrid" aria-label="Filter paintings by year">
    <option value="">All Years</option>
  </select>

  <button id="clear-filters" aria-label="Clear all filters" title="Clear all filters">Clear Filters</button>
</div>

<div id="filter-count" aria-live="polite" aria-atomic="true" aria-relevant="text">Showing all paintings</div>

{% if collections.paintings.size > 0 %}
  <div class="gallery-grid" id="galleryGrid">
    {% assign mediums = "" | split: "" %}
    {% assign years = "" | split: "" %}
    {% for painting in collections.paintings %}
      {% assign medium = painting.data.medium | default: "" %}
      {% assign year = painting.data.year | default: "" %}

      {% unless mediums contains medium or medium == "" %}
        {% assign mediums = mediums | push: medium %}
      {% endunless %}
      {% unless years contains year or year == "" %}
        {% assign years = years | push: year %}
      {% endunless %}
    {% endfor %}

    {% for painting in collections.paintings %}
      <article 
        class="painting-item" 
        data-medium="{{ painting.data.medium | escape }}" 
        data-year="{{ painting.data.year | escape }}">
        <div style="position: relative;">
          <img src="{{ painting.data.image }}" alt="{{ painting.data.title }}" class="painting-image" loading="lazy" />
          <div class="painting-hover-overlay">{{ painting.data.title }}</div>
        </div>
        <div class="painting-footer">
          <h2 class="painting-title">{{ painting.data.title }}</h2>
          <div class="painting-description">{{ painting.templateContent | safe }}</div>
          {% if painting.data.medium or painting.data.size or painting.data.year %}
            <div class="painting-meta">
              {% if painting.data.medium %}
                <div><strong>Medium:</strong> {{ painting.data.medium }}</div>
              {% endif %}
              {% if painting.data.size and painting.data.size != 0 %}
                <div><strong>Size:</strong> {{ painting.data.size }}</div>
              {% endif %}
              {% if painting.data.year %}
                <div><strong>Year:</strong> {{ painting.data.year }}</div>
              {% endif %}
            </div>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p style="text-align:center;">No paintings yet.</p>
{% endif %}

<!-- Contact Form -->
<section id="contact">
  <h2>Contact Me</h2>
  <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <p style="display:none;">
      <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
    </p>

    <label>
      Name
      <input type="text" name="name" required />
    </label>

    <label>
      Email
      <input type="email" name="email" required />
    </label>

    <label>
      Message
      <textarea name="message" rows="5" required></textarea>
    </label>

    <button type="submit">Send Message</button>
  </form>
</section>

<div id="imageModal">
  <span id="closeModal" role="button" tabindex="0" aria-label="Close image modal">&times;</span>
  <button id="prevBtn" class="nav-arrow" aria-label="Previous image">&#10094;</button>
  <img id="modalImg" src="" alt="" />
  <button id="nextBtn" class="nav-arrow" aria-label="Next image">&#10095;</button>
</div>

<script>
  // Fill filter dropdowns dynamically from collected mediums and years
  const mediumsSet = new Set();
  const yearsSet = new Set();

  document.querySelectorAll(".painting-item").forEach(item => {
    const medium = item.dataset.medium.trim();
    if(medium) mediumsSet.add(medium);
    const year = item.dataset.year.trim();
    if(year) yearsSet.add(year);
  });

  const mediumSelect = document.getElementById("filter-medium");
  const yearSelect = document.getElementById("filter-year");
  const clearBtn = document.getElementById("clear-filters");
  const filterCount = document.getElementById("filter-count");

  function populateSelectOptions(select, options) {
    options = Array.from(options).sort();
    options.forEach(opt => {
      const optionEl = document.createElement("option");
      optionEl.value = opt;
      optionEl.textContent = opt;
      select.appendChild(optionEl);
    });
  }

  populateSelectOptions(mediumSelect, mediumsSet);
  populateSelectOptions(yearSelect, yearsSet);

  // Filter function with count update
  function filterPaintings() {
    const selectedMedium = mediumSelect.value.toLowerCase();
    const selectedYear = yearSelect.value.toLowerCase();
    let visibleCount = 0;
    document.querySelectorAll(".painting-item").forEach(item => {
      const itemMedium = (item.dataset.medium || "").toLowerCase();
      const itemYear = (item.dataset.year || "").toLowerCase();

      let show = true;
      if(selectedMedium && itemMedium !== selectedMedium) show = false;
      if(selectedYear && itemYear !== selectedYear) show = false;

      item.style.display = show ? "" : "none";
      if(show) visibleCount++;
    });

    const totalCount = document.querySelectorAll(".painting-item").length;
    if(visibleCount === totalCount) {
      filterCount.textContent = `Showing all paintings (${totalCount})`;
    } else {
      filterCount.textContent = `Showing ${visibleCount} of ${totalCount} paintings`;
    }
  }

  mediumSelect.addEventListener("change", filterPaintings);
  yearSelect.addEventListener("change", filterPaintings);

  clearBtn.addEventListener("click", () => {
    mediumSelect.value = "";
    yearSelect.value = "";
    filterPaintings();
  });

  // Initialize filter count on load
  filterPaintings();

  // Modal and navigation script (unchanged)
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.getElementById("closeModal");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const paintings = Array.from(document.querySelectorAll(".painting-item"));
  let currentIndex = 0;

  function openModalByIndex(index) {
    currentIndex = index;
    const img = paintings[index].querySelector("img.painting-image");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % paintings.length;
    openModalByIndex(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + paintings.length) % paintings.length;
    openModalByIndex(currentIndex);
  }

  paintings.forEach((painting, index) => {
    painting.addEventListener("click", () => openModalByIndex(index));
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showNext();
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showPrev();
  });
</script>

<footer style="text-align: center; padding: 1.5rem 1rem; background: rgba(255,255,255,0.15); color: #eee; font-family: 'Montserrat', sans-serif;">
  <div style="margin-bottom: 1rem;">
    <a class="social-icon" href="https://www.instagram.com/fox.paintings" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
      <img src="/assets/icons/instagram.png" alt="Instagram" />
    </a>
    <a class="social-icon" href="https://www.tiktok.com/@foxpaintings" target="_blank" rel="noopener" aria-label="TikTok" title="TikTok">
      <img src="/assets/icons/tiktok.png" alt="TikTok" />
    </a>
  </div>
  <div style="font-size: 0.9rem; color: #ccc;">
    © 2025 Fox Paintings. All rights reserved.
  </div>
</footer>
