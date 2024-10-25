#!/bin/bash

# Nom du dépôt distant, par défaut 'origin'
REMOTE=${1:-origin}

# Récupère toutes les informations du dépôt distant
git fetch "$REMOTE"

# Liste toutes les branches distantes et les ramène en local
for branch in $(git branch -r | grep "$REMOTE" | grep -v '\->'); do
    # On obtient le nom de la branche sans le préfixe "origin/"
    local_branch=${branch#"$REMOTE/"}

    # Si la branche n'existe pas en local, on la crée
    if ! git rev-parse --verify "$local_branch" >/dev/null 2>&1; then
        git checkout -b "$local_branch" --track "$branch"
    else
        # Si la branche existe déjà, on la met à jour
        git checkout "$local_branch"
        git pull "$REMOTE" "$local_branch"
    fi
done

# Retourne à la branche initiale
git checkout -

echo "Toutes les branches du dépôt distant '$REMOTE' ont été synchronisées."
