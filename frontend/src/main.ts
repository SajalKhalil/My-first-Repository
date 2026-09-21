import './style.css'

const pages = [
  { name: 'Home', slug: '/' },
  { name: 'test', slug: '/test' },
  { name: 'hello', slug: '/hello' }
]

document.querySelector('#app').innerHTML = `
  <div class="app">

    <aside class="sidebar">

      <div class="project">
        <div class="label">PROJECT</div>
        <h2>test</h2>
        <p>Business · 3 Pages</p>
      </div>

      <div class="project-actions">
        <button>Rename</button>
        <button>Duplicate</button>
        <button>Delete</button>
      </div>

      <div class="tabs">
        <span class="active">Pages</span>
        <span>Site</span>
      </div>

      <div class="pages-title">
        <strong>WEBSITE PAGES</strong>
        <button id="addPage">+ Add page</button>
      </div>

      <div id="pages">
        ${pages.map((page, index) => `
          <div class="page ${index === 2 ? 'selected' : ''}">
            <div>
              <strong>${page.name}</strong>
              <small>${page.slug}</small>
            </div>
            <span>✎</span>
          </div>
        `).join('')}
      </div>

      <div class="sections">
        <strong>SECTIONS</strong>

        <div class="empty">
          <div class="empty-icon">☷</div>
          <p>No sections on this page yet.</p>
          <small>Add a block below to start building.</small>
        </div>

        <button class="add-section">+ Add section</button>
      </div>

    </aside>

    <main class="main">

      <header class="topbar">

        <div>
          <div class="breadcrumb">
            ← Dashboard / <span>test</span>
          </div>

          <h1>hello</h1>

          <p>Editing page /hello · click a section to select</p>
        </div>

        <div class="devices">
          <button class="device active">Desktop</button>
          <button class="device">Tablet</button>
          <button class="device">Mobile</button>
        </div>

      </header>

      <section class="workspace">

        <div class="canvas">

          <div class="canvas-top">
            <span>Page: /hello</span>
            <span>100%</span>
          </div>

          <div class="canvas-content">

            <div class="empty-canvas">
              <div class="large-icon">☷</div>
              <h2>No sections yet</h2>
              <p>Add a section from the left panel to start building your page.</p>
              <button class="primary">+ Add your first section</button>
            </div>

          </div>

        </div>

      </section>

    </main>

  </div>
`

document.querySelector('#addPage').addEventListener('click', () => {
  alert('Add Page clicked!')
})