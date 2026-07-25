-- =============================================================
-- Schéma Supabase pour le site Chrétien Épelle-Moi
-- À exécuter dans : Dashboard Supabase -> SQL Editor -> New query
-- =============================================================

-- Table des messages de contact (équivalent du modèle Django "Contact")
create table if not exists public.contacts (
  id bigint generated always as identity primary key,
  name varchar(150) not null,
  email varchar(254) not null,
  phone varchar(20),
  message text not null,
  created_at timestamptz not null default now()
);

-- Table des demandes de partenariat (équivalent du modèle Django "Partner")
create table if not exists public.partners (
  id bigint generated always as identity primary key,
  organization varchar(200) not null,
  email varchar(254) not null,
  phone varchar(20),
  message text not null,
  created_at timestamptz not null default now()
);

-- =============================================================
-- Sécurité (Row Level Security)
-- - Tout le monde (visiteurs du site) peut ENVOYER un message / une demande
-- - Seul un utilisateur connecté (l'admin) peut LIRE les données
-- =============================================================

alter table public.contacts enable row level security;
alter table public.partners enable row level security;

-- Insertion publique (formulaires du site)
create policy "Insertion publique des contacts"
  on public.contacts for insert
  to anon, authenticated
  with check (true);

create policy "Insertion publique des partenaires"
  on public.partners for insert
  to anon, authenticated
  with check (true);

-- Lecture réservée à l'admin connecté
create policy "Lecture admin des contacts"
  on public.contacts for select
  to authenticated
  using (true);

create policy "Lecture admin des partenaires"
  on public.partners for select
  to authenticated
  using (true);

-- Suppression réservée à l'admin connecté (bouton "Supprimer" du panneau admin)
create policy "Suppression admin des contacts"
  on public.contacts for delete
  to authenticated
  using (true);

create policy "Suppression admin des partenaires"
  on public.partners for delete
  to authenticated
  using (true);

-- =============================================================
-- Compte administrateur :
-- Dashboard Supabase -> Authentication -> Users -> "Add user"
-- Créez un utilisateur avec email + mot de passe.
-- Ce compte servira à se connecter sur la page /admin-login du site.
-- =============================================================
