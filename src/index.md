---
layout: default
title: Fox Paintings Gallery
---

<!-- Load Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Montserrat&display=swap" rel="stylesheet" />

<style>
  body {
    background: #fffdfa;
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
    text-align: center;
    margin: 1.5rem 0 0.25rem 0;
    color: #2c3e50;
  }

  .gallery-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
    text-align: center;
    color: #7f8c8d;
    margin-bottom: 2.5rem;
  }

  .gallery-grid {
    max-width: 1200px;
    margin: 0 auto 4rem;
    padding: 0 1rem;
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .painting-item {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(44, 62, 80, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .painting-item:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 30px rgba(44, 62, 80, 0.2);
  }

  .painting-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-bottom: 1px solid #ecf0f1;
  }

  .painting-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    color: #34495e;
    margin: 1rem 1rem 0.25rem 1rem;
  }

  .painting-date {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    color: #95a5a6;
    margin: 0 1rem 1rem 1rem;
    font-style: italic;
  }

  .painting-description {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #4d5656;
    margin: 0 1rem 1.5rem 1rem;
    flex-grow: 1;
  }

  /* Responsive tweaks */
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
  }
</style>

<h1 class="gallery-title">Fox Paintings Gallery</h1>
<p class="gallery-subtitle">Explore the collection below!</p>

{% if collections.paintings.size > 0 %}
  <div class="gallery-grid">
    {% for painting in collections.paintings %}
      <article class="painting-item">
        <img src="{{ painting.data.image }}" alt="{{ painting.data.title }}" class="painting-image" />
        <h2 class="painting-title">{{ painting.data.title }}</h2>
        {% if painting.data.date %}
          <time class="painting-date" datetime="{{ painting.data.date | date: '%Y-%m-%d' }}">
            {{ painting.data.date | date: '%B %d, %Y' }}
          </time>
        {% endif %}
        <p class="painting-description">{{ painting.data.body | markdownify }}</p>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p style="text-align: center; font-family: 'Montserrat', sans-serif; color: #999; font-style: italic;">
    No paintings found yet.
  </p>
{% endif %}
