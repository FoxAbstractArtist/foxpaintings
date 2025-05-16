---
layout: default
title: Fox Paintings Gallery
---

<!-- Google Fonts -->
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Montserrat&display=swap" rel="stylesheet" />

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: url('https://dashing-empanada-2c3316.netlify.app/assets/1000143373_dimmed.png') no-repeat center center fixed;
    background-size: cover;
    color: #eee;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #eee;
  }

  .gallery-title {
  h1.gallery-title {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 2rem;
    text-align: center;
    margin: 1.5rem 0 0.25rem 0;
    color: #f1f1f1;
    color: #f5f5f5;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  }

  .gallery-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
  p.gallery-subtitle {
    text-align: center;
    color: #e0e0e0;
    margin-bottom: 2.5rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    color: #ccc;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .gallery-grid {
    max-width: 1200px;
    margin: 0 auto 4rem;
    padding: 0 1rem;
    margin: 0 auto;
    padding: 0 1rem 4rem;
    display: grid;
    gap: 0.75rem;
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
      padding: 0 0.5rem;
    }
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  .painting-item {
    background: rgba(255, 255, 255, 0.92);
    background: rgba(255,255,255,0.95);
    border-radius: 12px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
    height: 100%;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    cursor: pointer;
    backdrop-filter: blur(6px);
    animation: fadeIn 0.5s ease;
    animation: fadeIn 0.4s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .painting-item:hover {
    transform: scale(1.025);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
    box-shadow: 0 8px 18px rgba(0,0,0,0.15);
  }

  .painting-image {
    width: 100%;
    height: 280px;
    object-fit: contain;
    background-color: #f4f4f4;
    border-bottom: 1px solid #e0e0e0;
    height: 220px;
    object-fit: cover;
    background: #eee;
  }

  .painting-footer {
    padding: 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
  }

  .painting-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: #2c3e50;
    margin: 0 0 0.25rem;
    font-size: 1.4rem;
    color: #222;
    margin-bottom: 0.4rem;
  }

  .painting-description {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.4;
    margin-bottom: 0.4rem;
  }

  .painting-meta {
    font-size: 0.8rem;
    color: #888;
    margin-top: 0.5rem;
    color: #777;
    line-height: 1.4;
  }

  /* Modal styles */
  /* Modal */
  #imageModal {
    position: fixed;
    display: none;
@@ -135,15 +105,14 @@
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 10, 10, 0.85);
    background: rgba(10,10,10,0.85);
  }

  #imageModal img {
    max-width: 90vw;
    max-height: 80vh;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
    box-shadow: 0 0 20px rgba(255,255,255,0.2);
  }

  #closeModal {
@@ -153,95 +122,76 @@
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
    h1.gallery-title {
      font-size: 2.2rem;
    }

    .gallery-subtitle {
    p.gallery-subtitle {
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
<p class="gallery-subtitle">Explore the collection below</p>

{% if collections.paintings.size > 0 %}
  <div class="gallery-grid">
    {% for painting in collections.paintings %}
      <article class="painting-item" role="button" tabindex="0" onclick="openModal(this.querySelector('img'))">
      <article class="painting-item" onclick="openModal(this.querySelector('img'))">
        <img src="{{ painting.data.image }}" alt="{{ painting.data.title }}" class="painting-image" />
        <div class="painting-footer">
          <h2 class="painting-title">{{ painting.data.title }}</h2>
          <div class="painting-description">
            {{ painting.templateContent | safe }}
          </div>
          <div class="painting-description">{{ painting.templateContent | safe }}</div>
          {% if painting.data.medium or painting.data.size or painting.data.year %}
            <div class="painting-meta">
              {% if painting.data.medium %} <span><strong>Medium:</strong> {{ painting.data.medium }}</span><br> {% endif %}
              {% if painting.data.size %} <span><strong>Size:</strong> {{ painting.data.size }}</span><br> {% endif %}
              {% if painting.data.year %} <span><strong>Year:</strong> {{ painting.data.year }}</span> {% endif %}
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
  <p style="text-align: center; font-family: 'Montserrat', sans-serif; color: #bbb; font-style: italic;">
    No paintings found yet.
  </p>
  <p style="text-align:center;">No paintings yet.</p>
{% endif %}

<!-- Modal -->
<div id="imageModal">
  <span id="closeModal" aria-label="Close modal">&times;</span>
  <img id="modalImg" src="" alt="Preview" />
  <span id="closeModal">&times;</span>
  <img id="modalImg" src="" alt="" />
</div>

<script>
  function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
    document.getElementById("modalImg").alt = img.alt;
  }

  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }

  document.getElementById("closeModal").addEventListener("click", closeModal);

  document.getElementById("imageModal").addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
    if (e.target === this) closeModal();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
</script>
