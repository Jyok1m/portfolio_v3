# Configuration du Système d'Email - Portfolio

Ce document explique comment configurer l'envoi d'emails pour le formulaire de contact du portfolio.

## Services Supportés

Le système supporte plusieurs services d'email et essaiera de les utiliser dans l'ordre suivant :

1. **Resend** (recommandé)
2. **EmailJS**
3. **Simulation** (pour développement)

## Configuration

### 1. Resend (Recommandé)

Resend est un service moderne et fiable pour l'envoi d'emails.

**Étapes :**

1. Créez un compte sur [resend.com](https://resend.com)
2. Obtenez votre clé API
3. Ajoutez la variable d'environnement :
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   ```

**Avantages :**

- Simple à configurer
- Excellent taux de délivrabilité
- API moderne et fiable
- Pricing généreux (100 emails/jour gratuits)

### 2. EmailJS

EmailJS permet d'envoyer des emails directement depuis le frontend.

**Étapes :**

1. Créez un compte sur [emailjs.com](https://emailjs.com)
2. Configurez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email
4. Ajoutez les variables d'environnement :
   ```bash
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   EMAILJS_PUBLIC_KEY=your_public_key
   ```

**Avantages :**

- Pas de backend requis
- Integration facile
- Gratuit jusqu'à 200 emails/mois

### 3. Nodemailer (À implémenter)

Pour utiliser Nodemailer avec SMTP :

**Installation :**

```bash
yarn add nodemailer @types/nodemailer
```

**Configuration :**

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

## Déploiement sur Vercel

### Variables d'Environnement

1. Dans votre dashboard Vercel, allez dans Settings > Environment Variables
2. Ajoutez les variables selon le service choisi :

**Pour Resend :**

- `RESEND_API_KEY` = votre clé API Resend

**Pour EmailJS :**

- `EMAILJS_SERVICE_ID` = votre service ID
- `EMAILJS_TEMPLATE_ID` = votre template ID
- `EMAILJS_PUBLIC_KEY` = votre clé publique

### Fichier vercel.json

Le fichier `vercel.json` devrait contenir :

```json
{
	"functions": {
		"api/send-email.ts": {
			"runtime": "@vercel/node"
		}
	}
}
```

## Test en Local

1. Copiez `.env.example` vers `.env.local`
2. Configurez vos variables d'environnement
3. Lancez le serveur de développement :
   ```bash
   yarn dev
   ```

## Sécurité

- ✅ Validation côté client et serveur
- ✅ Protection CORS configurée
- ✅ Rate limiting recommandé (à ajouter)
- ✅ Validation des emails
- ✅ Sanitization des données

## Troubleshooting

### Erreurs Communes

**"Method not allowed"**

- Vérifiez que l'API route est bien déployée
- Assurez-vous que la requête est POST

**"CORS error"**

- Les headers CORS sont configurés dans l'API route
- Vérifiez le domaine d'origine

**"Email not sent"**

- Vérifiez les variables d'environnement
- Consultez les logs de Vercel Functions
- Testez d'abord en mode simulation

### Logs

Pour voir les logs sur Vercel :

1. Vercel Dashboard > Functions tab
2. Cliquez sur votre fonction
3. Consultez les logs d'exécution

## Contact

Si vous avez des questions sur cette configuration, n'hésitez pas à me contacter à joachim.jasmin-dev@proton.me
