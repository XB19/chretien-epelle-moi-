import { createClient } from '@supabase/supabase-js'

// Les valeurs viennent du fichier .env en local, ou des
// "Environment Variables" du projet sur Vercel.
// On nettoie (espaces, guillemets) pour éviter tout plantage
// si la valeur a été collée avec un caractère en trop.
function clean(value) {
  return (value || '').trim().replace(/^["']+|["']+$/g, '')
}

let supabaseUrl = clean(import.meta.env.VITE_SUPABASE_URL)
let supabaseAnonKey = clean(import.meta.env.VITE_SUPABASE_ANON_KEY)

// Valeurs de secours : le site s'affiche toujours, même si la
// configuration Supabase est absente (les formulaires afficheront
// simplement une erreur à l'envoi).
if (!/^https?:\/\//.test(supabaseUrl)) {
  console.warn('VITE_SUPABASE_URL manquante ou invalide — vérifiez la configuration.')
  supabaseUrl = 'https://placeholder.supabase.co'
}
if (!supabaseAnonKey) {
  console.warn('VITE_SUPABASE_ANON_KEY manquante — vérifiez la configuration.')
  supabaseAnonKey = 'placeholder-anon-key'
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
