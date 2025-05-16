---
layout: default
title: Fox Paintings Gallery
---

# Welcome to Fox Paintings

Explore the collection below!

{% for painting in collections.paintings %}
<div class="painting-item">
  <h2>{{ painting.data.title }}</h2>
  <img src="{{ painting.data.image }}" alt="{{ painting.data.title }}" style="max-width:300px;" />
  <p>{{ painting.data.description }}</p>
</div>
{% else %}
<p>No paintings found yet.</p>
{% endfor %}
