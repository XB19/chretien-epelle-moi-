# Chrétien Épelle-Moi — React + Supabase

Réécriture complète du site Django en **React (Vite)** connecté à **Supabase**, avec le design d'origine conservé à l'identique (côté client et côté administration).

## Structure

- `src/pages/` — pages du site client (Accueil, À propos, Histoire, Galerie, Témoignages, Équipe, Partenaire, Contact, Faire un don)
- `src/admin/` — panel d'administration (login, dashboard, messages, demandes partenaires)
- `src/components/` — navbar, footer, layout, compteur animé
- `src/assets/images/` — toutes les images du site (la galerie est détectée automatiquement depuis `assets/images/gallery/<édition>/`)
- `supabase/schema.sql` — script de création des tables Supabase

## URLs (identiques au projet Django)

| Page | URL |
|---|---|
| Accueil | `/` |
| À propos | `/a-propos` |
| Histoire | `/histoire` |
| Galerie | `/galerie` et `/galerie/:edition` |
| Témoignages | `/temoignage` |
| Équipe | `/equipe` |
| Partenaire | `/partenaire` |
| Contact | `/contact` |
| Faire un don | `/faire-un-don` |
| Connexion admin | `/admin-login` |
| Panel admin | `/admin-panel`, `/admin-panel/contacts`, `/admin-panel/partners` + pages de détail |

## Configuration Supabase (une seule fois)

1. Créez un projet sur [supabase.com](https://supabase.com).
2. Dans **SQL Editor**, collez et exécutez le contenu de `supabase/schema.sql`
   (crée les tables `contacts` et `partners` + les règles de sécurité).
3. Dans **Authentication → Users → Add user**, créez le compte admin
   (email + mot de passe). C'est ce compte qui sert à se connecter sur `/admin-login`.
4. Dans **Project Settings → API**, copiez l'URL du projet et la clé `anon`.
5. Copiez `.env.example` en `.env` et remplissez :

```
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre_cle_anon
```

## Lancer le projet

```bash
npm install
npm run dev       # développement -> http://localhost:5173
npm run build     # production (dossier dist/)
npm run preview   # tester le build de production
```

## Ajouter des photos à la galerie

Déposez simplement les photos dans un sous-dossier de
`src/assets/images/gallery/` (ex. `src/assets/images/gallery/2027/`).
Le dossier devient automatiquement une nouvelle édition dans la galerie,
comme avec l'ancien système Django.

## Déploiement

Le site est une SPA : sur votre hébergeur (Vercel, Netlify, cPanel...),
toutes les routes doivent être redirigées vers `index.html`.
Sur Vercel/Netlify c'est automatique pour un projet Vite.
