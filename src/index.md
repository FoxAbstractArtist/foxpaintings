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
    object-fit: cover;
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

  .painting-meta {
    font-size: 0.9rem;
    color: #555;
    line-height: 1.4;
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
  }
</style>

<h1 class="gallery-title">Fox Paintings Gallery</h1>
<p class="gallery-subtitle">Explore the collection below</p>

{% if collections.paintings.size > 0 %}
  <div class="gallery-grid">
    {% for painting in collections.paintings %}
      <article class="painting-item" onclick="openModal(this.querySelector('img'))">
        <img src="{{ painting.data.image }}" alt="{{ painting.data.title }}" class="painting-image" />
        <div class="painting-footer">
          <h2 class="painting-title">{{ painting.data.title }}</h2>
          {% if painting.data.medium or painting.data.size %}
            <div class="painting-meta">
              {% if painting.data.medium %}
                <div><strong>Medium:</strong> {{ painting.data.medium }}</div>
              {% endif %}
              {% if painting.data.size and painting.data.size != 0 %}
                <div><strong>Size:</strong> {{ painting.data.size }}</div>
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

<div id="imageModal">
  <span id="closeModal">&times;</span>
  <img id="modalImg" src="" alt="" />
</div>

<script>
  function openModal(img) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
    document.getElementById("modalImg").alt = img.alt;
  }

  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }

  document.getElementById("closeModal").addEventListener("click", closeModal);
  document.getElementById("imageModal").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
</script>
