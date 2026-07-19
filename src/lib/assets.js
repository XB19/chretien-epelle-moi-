// Charge automatiquement toutes les images du dossier assets/images
// (équivalent du dossier static/images du projet Django)
const all = import.meta.glob('../assets/images/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

// asset('logo.png') -> URL de l'image, '' si absente
export function asset(path) {
  return all[`../assets/images/${path}`] ?? ''
}

// Liste des éditions de la galerie, détectées automatiquement
// depuis les sous-dossiers de assets/images/gallery (comme os.listdir en Django)
export function getGalleryEditions() {
  const editions = {}
  for (const key of Object.keys(all)) {
    const match = key.match(/^\.\.\/assets\/images\/gallery\/([^/]+)\/([^/]+)$/)
    if (match) {
      const [, edition, file] = match
      if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) continue
      if (!editions[edition]) editions[edition] = []
      editions[edition].push({ file, url: all[key] })
    }
  }
  return Object.keys(editions)
    .sort()
    .map((name) => {
      const images = editions[name].sort((a, b) => a.file.localeCompare(b.file))
      return { name, cover: images[0], images }
    })
}
