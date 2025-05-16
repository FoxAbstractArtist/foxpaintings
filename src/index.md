---
layout: default
title: Fox Paintings Gallery
---

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Montserrat&display=swap" rel="stylesheet" />

<style>
  body {
    background: url('/assets/1000143373_dimmed.png') no-repeat center center fixed;
    background-size: cover;
    color: #333;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }

  .gallery-title {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center !important;
    margin: 1.5rem 0 0.25rem 0;
    color: #2c3e50;
  }

  .gallery-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
    text-align: center !important;
    color: #7f8c8d;
    margin-bottom: 2.5rem;
  }

  .gallery-grid {
    max-width: 1200px;
    margin: 0 auto 4rem;
    padding: 0 1rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 900px) {
    .gallery-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }

  @media (max-width: 600px) {
    .gallery-grid {
      grid-template-columns: 1fr;
    }
  }

  .painting-item {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(44, 62, 80, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }

  .painting-item:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 30px rgba(44, 62, 80, 0.2);
  }

  .painting-image {
    width: 100%;
    height: 280px;
    object-fit: contain;
    background-color: #f9f7f4;
    border-bottom: 1px solid #ecf0f1;
    flex-shrink: 0;
  }

  .painting-footer {
    padding: 0.75rem 1rem 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .painting-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    color: #34495e;
    margin: 0 0 0.3rem 0;
    text-align: center;
  }

  .painting-description {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    line-height: 1.4;
    color: #4d5656;
    margin: 0;
    text-align: center;
  }

  .painting-description p {
    margin: 0;
  }

  /* Modal styles (centered) */
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
    background-color: rgba(0, 0, 0, 0.8);
  }

  #imageModal img {
    max-width: 90vw;
    max-height: 80vh;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
  }

  #closeModal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    z-index: 10000;
  }

  @media (max-width: 600px) {
    .painting-image {
      height: 180px;
    }

    .gallery-title {
      font-size: 2.2rem;
    }

    .gallery-subtitle {
      font-size: 1rem;
    }

    #imageModal img {
      max-width: 95vw;
      max-height: 75vh;
    }

    #closeModal {
      font-size: 1.75rem;
      top: 0.75rem;
      right: 0.75rem;
    }
  }
</style>

<h1 class="gallery-title">Fox Paintings Gallery</h1>
<p class="gallery-subtitle">Explore the collection below!</p>

{% if collections.paintings.size > 0 %}
  <div class="gallery-grid">
    {% for painting in collections.paintings %}
      <article class="painting-item">
        <img src="{{ painting.data.image }}" alt="{{ painting.data.title }}" class="painting-image" onclick="openModal(this)" />
        <div class="painting-footer">
          <h2 class="painting-title">{{ painting.data.title }}</h2>
          <div class="painting-description">
            {{ painting.templateContent | safe }}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p style="text-align: center; font-family: 'Montserrat', sans-serif; color: #999; font-style: italic;">
    No paintings found yet.
  </p>
{% endif %}

<!-- Modal structure -->
<div id="imageModal">
  <span id="closeModal">&times;</span>
  <img id="modalImg" src="" alt="Preview" />
</div>

<script>
  function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  }

  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }

  document.getElementById("closeModal").addEventListener("click", closeModal);

  document.getElementById("imageModal").addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
</script>
