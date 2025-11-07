# Documents - Diplômes et Certificats

## Structure des dossiers

```
public/documents/
├── degrees/          # Diplômes universitaires
│   ├── msc-skema.pdf
│   └── bba-glion.pdf
└── certificates/     # Certifications professionnelles
    ├── rncp6-concepteur-dev.pdf
    └── certification-ia-ironhack.pdf
```

## Fonctionnalités

### 👀 Visualisation en ligne

- Cliquez sur l'icône "œil" pour ouvrir le PDF dans une modale
- Affichage en plein écran avec contrôles natifs du navigateur
- Fermeture avec ESC ou en cliquant sur le bouton X

### 📥 Téléchargement

- Cliquez sur l'icône "télécharger" pour sauvegarder le PDF
- Nom de fichier automatique basé sur le titre du document

## Comment ajouter des documents

1. **Placez vos PDFs** dans les dossiers appropriés :

   - `public/documents/degrees/` pour les diplômes
   - `public/documents/certificates/` pour les certifications

2. **Nommez vos fichiers** de façon claire :

   - `msc-skema.pdf` (MSc SKEMA)
   - `bba-glion.pdf` (BBA Glion)
   - `rncp6-concepteur-dev.pdf` (RNCP 6)
   - `certification-ia-ironhack.pdf` (Certification IA)

3. **Mettez à jour le code** dans `src/sections/Education.tsx` :
   ```tsx
   pdfPath: "/documents/degrees/votre-diplome.pdf";
   ```

## Sécurité et performance

✅ **Avantages** :

- PDFs servis statiquement par Vercel/Vite
- Pas de traitement serveur nécessaire
- Cache automatique des documents
- Compatible avec tous les navigateurs modernes

⚠️ **Considérations** :

- Les PDFs sont publiquement accessibles
- Vérifiez que vous avez le droit de publier ces documents
- Optimisez la taille des PDFs (recommandé < 5MB par document)

## Fallback

Si un PDF ne peut pas être affiché :

- Message d'erreur avec bouton de téléchargement
- Fallback automatique vers le téléchargement direct
- Support pour tous les types de navigateurs
