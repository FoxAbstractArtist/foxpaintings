async function loadPaintings() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '<p>Loading paintings...</p>';

  try {
    // Netlify CMS stores content in markdown under /content/paintings/
    // We'll fetch the published JSON index from the repo's /paintings/ folder via Netlify's API.
    // But for static sites, easiest is to use a small JSON file that CMS updates or use a static JSON endpoint.
    // For now, we fetch all painting markdown files from /content/paintings via Netlify CMS + GitHub repo.

    // Since we can't fetch markdown files directly, we'll simplify:
    // You'll need to publish a `paintings.json` file manually or via a build script.

    const res = await fetch('paintings.json');
    if (!res.ok) throw new Error('Failed to load paintings data');

    const paintings = await res.json();

    if (paintings.length === 0) {
      gallery.innerHTML = '<p>No paintings found yet.</p>';
      return;
    }

    gallery.innerHTML = '';
    paintings.forEach(paint => {
      const div = document.createElement('div');
      div.className = 'painting';

      div.innerHTML = `
        <img src="${paint.image}" alt="${paint.title}" />
        <div class="info">
          <div class="title">${paint.title}</div>
          <div class="description">${paint.description}</div>
          <div class="medium"><strong>Medium:</strong> ${paint.medium}</div>
          <div class="size"><strong>Size:</strong> ${paint.size}</div>
        </div>
      `;

      gallery.appendChild(div);
    });
  } catch (err) {
    gallery.innerHTML = `<p>Error loading paintings: ${err.message}</p>`;
  }
}

loadPaintings();
