---
title: Fox Paintings Gallery
layout: layouts/base.njk
---

<style>
  /* Container vertically centered with padding */
  .container {
    max-width: 960px;
    margin: 2rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-height: 80vh;
  }

  ul.paintings-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul.paintings-list li {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #fafafa;
  }

  ul.paintings-list img {
    max-width: 100%;
    border-radius: 4px;
    height: auto;
  }

  .description {
    font-size: 1rem;
    line-height: 1.5;
  }
</style>

<div class="container">
  <h1>{{ title }}</h1>

  {% assign paintings = collections.paintings %}

  {% if paintings and paintings.size > 0 %}
  <ul class="paintings-list">
    {% for painting in paintings %}
      <li>
        <h2>{{ painting.data.title }}</h2>
        <img src="{{ painting.data.image }}" alt="{{ painting.data.title }}" />
        <div class="description">
          {{ painting.data.description | markdownify | safe }}
        </div>
      </li>
    {% endfor %}
  </ul>
  {% else %}
    <p>No paintings found.</p>
  {% endif %}
</div>
