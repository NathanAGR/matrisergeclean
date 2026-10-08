import { createFileRoute } from '@tanstack/react-router'
import { pageHead } from '@/components/site'
export const Route = createFileRoute('/politique-de-confidentialite')({head:()=>pageHead('Politique de confidentialité','Politique de confidentialité de Maîtrise RGE : données collectées, finalités, base légale, durée de conservation et vos droits RGPD.'),component:PolitiqueConfidentialite})
function PolitiqueConfidentialite(){return <main><section className="page-intro"><div className="container"><div className="eyebrow text-forest">Vos données, vos droits</div><h1>Politique de confidentialité</h1><p className="body-copy">Cette politique explique quelles données Maîtrise RGE traite, pourquoi, et comment exercer vos droits. Les mentions entre crochets sont à compléter avec les informations de l’entreprise avant publication. Elle est conforme au RGPD et à la loi Informatique et Libertés.</p></div></section><section className="section container"><div className="legal-content">
<h2>Responsable du traitement</h2>
<p>Le responsable du traitement de vos données est <strong>Maîtrise RGE</strong>, [forme juridique, siège social, SIREN à compléter]. Contact dédié à la protection des données : [adresse e-mail à compléter].</p>
<h2>Données collectées</h2>
<p>Selon votre utilisation du Site, nous pouvons traiter :</p>
<ul>
<li><strong>Données de contact</strong> : nom, prénom, adresse e-mail, numéro de téléphone, message facultatif que vous saisissez dans le formulaire « Parlons de votre projet ».</li>
<li><strong>Informations sur votre projet</strong> : type de projet (pompe à chaleur, chauffage, climatisation), type de logement, statut (propriétaire/locataire), surface et mode de chauffage actuel, code postal — uniquement pour préparer votre demande.</li>
<li><strong>Données de navigation</strong> : voir la section « Cookies et traceurs ».</li>
</ul>
<h2>Finalités et bases légales</h2>
<ul>
<li><strong>Répondre à votre demande et vous adresser un devis</strong> — base légale : votre consentement (article 6-1-a du RGPD), matérialisé par l’envoi du formulaire.</li>
<li><strong>Assurer le suivi commercial de votre projet</strong> (relance, rendez-vous, suivi d’installation) — base légale : notre intérêt légitime et, pour la prospection commerciale par e-mail ou SMS, votre consentement.</li>
<li><strong>Mesurer l’audience du Site et diffuser de la publicité</strong> (notamment via les outils publicitaires de Meta/Facebook) — base légale : votre consentement préalable, recueilli via un bandeau dédié lorsque ces outils sont activés.</li>
<li><strong>Respecter nos obligations légales</strong> (comptabilité, contrats, obligations de conservation) — base légale : l’obligation légale.</li>
</ul>
<h2>Publicité Facebook / Meta et traceurs</h2>
<p>Maîtrise RGE utilise des campagnes publicitaires sur Facebook et Instagram. Si le site intègre des outils de mesure d’audience ou de suivi publicitaire de Meta (par exemple le pixel Meta ou l’API Conversions), ces outils déposent des cookies et traitent des données techniques (identifiant publicitaire, pages visitées, événements de conversion) uniquement après votre consentement, recueilli via un bandeau cookies conforme aux recommandations de la CNIL. Vous pouvez refuser ou retirer votre consentement à tout moment depuis le bandeau ou en nous contactant. Ces données peuvent être transférées hors de l’Union européenne vers les États-Unis ; des garanties appropriées (clauses contractuelles types de la Commission européenne) sont mises en œuvre, et vous pouvez demander de plus amples informations à [e-mail de contact à compléter].</p>
<h2>Durées de conservation</h2>
<ul>
<li>Données issues du formulaire de contact : pendant le suivi de votre demande et, à défaut de concrétisation, [12 mois] à compter du dernier contact.</li>
<li>Clients : documents commerciaux et factures conservés selon les durées légales (notamment 10 ans pour les pièces comptables).</li>
<li>Prospection commerciale : [3 ans] à compter du dernier contact, ou jusqu’au retrait de votre consentement.</li>
<li>Cookies et traceurs : au maximum [13 mois] pour la durée de vie des traceurs, et [25 mois] pour les données d’audience.</li>
</ul>
<h2>Destinataires</h2>
<p>Vos données sont destinées aux équipes de Maîtrise RGE en charge de votre projet. Elles peuvent être communiquées, dans la stricte mesure nécessaire : aux partenaires et organismes concernés par les aides (par exemple pour le montage des dossiers MaPrimeRénov’ ou primes CEE, avec votre accord), aux sous-traitants techniques (hébergeur, solutions d’e-mailing) sous contrat, et aux autorités légalement habilitées à en demander.</p>
<h2>Vos droits</h2>
<p>Vous disposez des droits d’accès, de rectification, d’effacement, de limitation, de portabilité et d’opposition sur vos données. Pour exercer vos droits, écrivez à [adresse e-mail postale de contact à compléter] en justifiant votre identité. Vous pouvez également retirer votre consentement à tout moment.</p>
<p>Vous pouvez aussi introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">CNIL</a> (www.cnil.fr), autorité française de protection des données.</p>
<h2>Sécurité</h2>
<p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données (accès limité aux personnes habilitées, chiffrement des communications, hébergement sécurisé). Aucune transmission sur Internet n’est toutefois totalement sûre ; évitez de nous transmettre d’informations particulièrement sensibles par le formulaire.</p>
<h2>Évolutions de cette politique</h2>
<p>Cette politique peut évoluer pour refléter les changements du Site ou de la réglementation. La version applicable est celle publiée sur cette page, avec sa date de mise à jour. Dernière mise à jour : [date à compléter].</p>
</div></section></main>}
