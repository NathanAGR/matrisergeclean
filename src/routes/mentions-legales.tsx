import { createFileRoute } from '@tanstack/react-router'
import { pageHead } from '@/components/site'
export const Route = createFileRoute('/mentions-legales')({head:()=>pageHead('Mentions légales','Mentions légales du site Maîtrise RGE : éditeur, hébergeur, propriété intellectuelle et informations réglementaires.'),component:MentionsLegales})
function MentionsLegales(){return <main><section className="page-intro"><div className="container"><div className="eyebrow text-forest">Informations réglementaires</div><h1>Mentions légales</h1><p className="body-copy">Les informations ci-dessous identifient l’éditeur du site et précisent les conditions d’utilisation. Les mentions entre crochets sont à compléter avec les informations de l’entreprise avant publication.</p></div></section><section className="section container"><div className="legal-content">
<h2>Éditeur du site</h2>
<p>Le site www.maitriserge.fr (ci-après « le Site ») est édité par <strong>Maîtrise RGE</strong>, dont les informations d’identification sont les suivantes :</p>
<ul>
<li>Forme juridique : [à compléter — SAS, SARL, EURL, etc.]</li>
<li>Capital social : [à compléter]</li>
<li>Siège social : [adresse complète à compléter]</li>
<li>SIREN / SIRET : [à compléter]</li>
<li>RCS : [ville et numéro à compléter]</li>
<li>N° TVA intracommunautaire : [à compléter]</li>
<li>Téléphone : [à compléter]</li>
<li>E-mail : [à compléter]</li>
<li>Qualification RGE : [numéro de qualification à compléter, ex. QualiPAC]</li>
</ul>
<p><strong>Directeur de la publication :</strong> [nom du représentant légal à compléter].</p>
<h2>Hébergement</h2>
<p>Le Site est hébergé par : [nom de l’hébergeur, adresse, téléphone et site web à compléter].</p>
<h2>Propriété intellectuelle</h2>
<p>L’ensemble des contenus du Site (textes, images, logo, graphismes, éléments graphiques et de mise en page) est protégé par le droit d’auteur. Toute reproduction, représentation ou exploitation, totale ou partielle, sans l’autorisation écrite préalable de Maîtrise RGE est interdite. Les marques et logos cités appartiennent à leurs propriétaires respectifs.</p>
<h2>Conditions d’utilisation</h2>
<p>Le Site a pour objet de présenter les solutions de chauffage et de climatisation proposées par Maîtrise RGE et de permettre aux visiteurs de manifester leur intérêt via un formulaire. L’utilisateur s’engage à faire un usage licite du Site. Maîtrise RGE s’efforce d’assurer l’exactitude des informations publiées, qui sont fournies à titre indicatif et ne constituent ni un devis contractuel, ni un engagement de résultat, ni un conseil juridique ou fiscal personnalisé.</p>
<h2>Aides financières</h2>
<p>Les dispositifs d’aide à la rénovation énergétique (MaPrimeRénov’, primes CEE, éco-prêt à taux zéro, etc.) évoluent régulièrement. Leur éligibilité et leurs montants dépendent de la situation de chaque foyer et doivent être vérifiés avant tout engagement. Le Site ne garantit aucun montant d’aide. Le service public d’information France Rénov’ (www.france-renov.gouv.fr) informe gratuitement les consommateurs sur leurs projets de rénovation énergétique.</p>
<h2>Consommateur et médiation</h2>
<p>Conformément au Code de la consommation, le consommateur dispose de recours en cas de litige avec l’entreprise, notamment la possibilité de recourir gratuitement à un médiateur de la consommation. Les coordonnées du médiateur compétent sont : [à compléter, si l’entreprise relève d’une obligation de médiation].</p>
<h2>Liens externes</h2>
<p>Le Site peut contenir des liens vers des sites tiers (notamment France Rénov’). Maîtrise RGE n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
<h2>Droit applicable</h2>
<p>Le Site et ses mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront compétents, dans le respect des règles de compétence applicables aux consommateurs.</p>
</div></section></main>}
