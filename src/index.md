---
layout: default
title: Fox Paintings Gallery
---

<h1 class="gallery-title">Fox Paintings Gallery</h1>
<p class="gallery-subtitle">Explore the collection below!</p>

{% if collections.paintings.size > 0 %}
<div class="gallery-grid">
  {% for painting in collections.paintings %}
    <article class="painting-item">
      <img src="{{ painting.data.image }}" alt="{{ painting.data.title }}" class="painting-image" />
      <h2 class="painting-title">{{ painting.data.title }}</h2>
      {% if painting.data.date %}
      <time class="painting-date" datetime="{{ painting.data.date | date: '%Y-%m-%d' }}">{{ painting.data.date | date: '%B %d, %Y' }}</time>
      {% endif %}
      <p class="painting-description">{{ painting.data.body }}</p>
    </article>
  {% endfor %}
</div>
{% else %}
<p>No paintings found yet.</p>
{% endif %}

<style>
.gallery-title {
  font-family: 'Georgia', serif;
  font-size: 2.8rem;
  margin-bottom: 0.2rem;
  text-align: center;
  color: #222;
}

.gallery-subtitle {
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #555;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 1rem;
}

.painting-item {
  background: #fafafa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
}

.painting-item:hover {
  box-shadow: 0 8px 20px rgb(0 0 0 / 0.15);
}

.painting-image {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 1rem;
  object-fit: cover;
}

.painting-title {
  font-family: 'Georgia', serif;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  color: #111;
}

.painting-date {
  font-family: 'Arial', sans-serif;
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 1rem;
}

.painting-description {
  font-family: 'Georgia', serif;
  font-size: 1rem;
  line-height: 1.4;
  color: #333;
  flex-grow: 1;
}
</style>
