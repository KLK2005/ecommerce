/* ShopCam — pages/Contact.jsx
 * Rôle : Formulaire de contact local avec état de confirmation après envoi simulé.
 * Les données et actions restent locales dans ce prototype ; aucune requête serveur n’est déclenchée ici.
 */
import { useState } from 'react';
import { useToast } from '../components/Toast';

export default function Contact() {
  const { showToast } = useToast();
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    showToast('Votre message a bien été envoyé.', 'success');
  };

  return (
    <section className="mx-auto max-w-2xl px-4 py-12">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">Besoin d’aide ?</p>
      <h1 className="text-3xl font-bold text-gray-900">Contactez-nous</h1>
      <p className="mt-3 text-gray-600">Une question sur un produit ou une commande ? Écrivez-nous, nous vous répondrons rapidement.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Nom</label>
          <input id="contact-name" name="name" required className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Email</label>
          <input id="contact-email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700">Sujet</label>
          <input id="contact-subject" name="subject" required className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="contact-message" name="message" required rows="5" className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none" />
        </div>
        <button type="submit" className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          {sent ? 'Message envoyé' : 'Envoyer le message'}
        </button>
      </form>
    </section>
  );
}
