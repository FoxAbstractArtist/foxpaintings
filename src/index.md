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
    object-fit: contain;
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
  }

  .social-icon {
    margin: 0 0.5rem;
    display: inline-block;
    transition: transform 0.3s ease, filter 0.3s ease;
    vertical-align: middle;
    cursor: pointer;
  }

  .social-icon svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
    filter: brightness(95%);
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .social-icon:hover svg {
    transform: scale(1.15);
    filter: brightness(110%);
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

<footer style="text-align: center; padding: 1.5rem 1rem; background: rgba(255,255,255,0.15); color: #eee; font-family: 'Montserrat', sans-serif;">
  <div style="margin-bottom: 1rem;">
    <a class="social-icon" href="https://www.instagram.com/fox.paintings" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
      <!-- Instagram SVG inline -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.004 132" fill="currentColor" aria-hidden="true" role="img" >
        <defs>
          <linearGradient id="b">
            <stop offset="0" stop-color="#3771c8"/>
            <stop stop-color="#3771c8" offset=".128"/>
            <stop offset="1" stop-color="#60f" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="a">
            <stop offset="0" stop-color="#fd5"/>
            <stop offset=".1" stop-color="#fd5"/>
            <stop offset=".5" stop-color="#ff543e"/>
            <stop offset="1" stop-color="#c837ab"/>
          </linearGradient>
          <radialGradient id="c" cx="158.429" cy="578.088" r="65" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)" fx="158.429" fy="578.088" />
          <radialGradient id="d" cx="147.694" cy="473.455" r="65" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)" fx="147.694" fy="473.455" />
        </defs>
        <path fill="url(#c)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/>
        <path fill="url(#d)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/>
        <path fill="#fff" d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.104 1.043 8.592 2.23 11.645 1.226 3.157 2.866 5.835 5.535 8.503 2.668 2.668 5.346 4.31 8.503 5.535 3.053 1.19 6.54 2 11.64 2.23 5.12.233 6.757.29 19.793.29s14.667-.057 19.787-.29c5.104-.235 8.592-1.044 11.645-2.23 3.157-1.227 5.835-2.87 8.503-5.535 2.67-2.67 4.31-5.35 5.535-8.506 1.19-3.053 2-6.54 2.23-11.64.233-5.12.29-6.757.29-19.793s-.057-14.667-.29-19.787c-.235-5.104-1.044-8.592-2.23-11.645-1.227-3.157-2.87-5.835-5.535-8.503-2.67-2.67-5.35-4.31-8.506-5.535-3.053-1.19-6.54-2-11.64-2.23-5.12-.233-6.757-.29-19.793-.29zM66 29c10.59 0 18 7.41 18 18 0 10.59-7.41 18-18 18-10.59 0-18-7.41-18-18 0-10.59 7.41-18 18-18zm32.12-4.757a4.305 4.305 0 0 1-4.306-4.306 4.306 4.306 0 1 1 4.306 4.306zM66 41a25 25 0 1 0 0 50 25 25 0 0 0 0-50zm0 9a16 16 0 1 1 0 32 16 16 0 0 1 0-32z" />
      </svg>
    </a>

    <a class="social-icon" href="https://www.tiktok.com/@foxpaintings" target="_blank" rel="noopener" aria-label="TikTok" title="TikTok">
      <!-- TikTok SVG inline -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" role="img">
        <path d="M160 60a60 60 0 0 1-60-60v96a36 36 0 1 0 60 32V60Zm52 32a84 84 0 0 1-52-17v80a64 64 0 1 1-52-20V160a84 84 0 1 0 104-68Z"/>
      </svg>
    </a>
  </div>
  <div style="font-size: 0.9rem; color: #ccc;">
    © 2025 Fox Paintings. All rights reserved.
  </div>
</footer>
