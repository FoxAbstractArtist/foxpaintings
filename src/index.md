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

  .gallery-grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem 4rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  .painting-item {
    background: rgba(255,255,255,0.95);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    cursor: pointer;
    animation: fadeIn 0.4s ease;
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
    object-fit: contain; /* Changed from cover to contain */
    background: #eee;
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
    background: #e6f0ff; /* soft pastel blue */
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

    /* Fix contact box width on small screens */
    #contact {
      margin-left: 1rem;
      margin-right: 1rem;
      max-width: calc(100% - 2rem);
    }
  }
</style>

<h1 class="gallery-title">Fox Paintings Gallery</h1>
<p class="gallery-subtitle">Explore the collection below</p>

{% if collections.paintings.size > 0 %}
  <div class="gallery-grid">
    {% for painting in collections.paintings %}
      <article class="painting-item">
        <img src="{{ painting.data.image }}" alt="{{ painting.data.title }}" class="painting-image" />
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
  <span id="closeModal">&times;</span>
  <button id="prevBtn" class="nav-arrow">&#10094;</button>
  <img id="modalImg" src="" alt="" />
  <button id="nextBtn" class="nav-arrow">&#10095;</button>
</div>

<script>
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

<footer style="text-align:center; padding:1.5rem 1rem; background: rgba(255,255,255,0.15); color: #eee; font-family: 'Montserrat', sans-serif;">
  <p style="margin: 0 0 0.5rem 0;">© 2025 Fox Paintings</p>
  <div style="font-size: 1.5rem;">
    <a href="https://www.instagram.com/fox.paintings" target="_blank" rel="noopener" style="color: #e6f0ff; margin: 0 0.8rem; text-decoration:none;" aria-label="Instagram">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#e6f0ff" viewBox="0 0 24 24" width="24" height="24" style="vertical-align: middle;">
        <path d="M7 2C4.243 2 2 4.243 2 7
