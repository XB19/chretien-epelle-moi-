# --- Étape 1 : build de l'application Vite/React ---
FROM node:20-alpine AS build

WORKDIR /app

# Variables Supabase injectées au build (Vite les intègre dans le JS statique)
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Étape 2 : image de production, sert les fichiers statiques ---
FROM nginx:alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
