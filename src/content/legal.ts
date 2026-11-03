export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalText = {
  id: string;
  heading: string;
  sections: LegalSection[];
};

export type LegalContent = {
  heading: string;
  texts: LegalText[];
};

// Placeholders in [square brackets] still need to be filled in by Chris
const impressum: LegalText = {
  id: 'impressum',
  heading: 'Impressum',
  sections: [
    {
      heading: 'Angaben gemäß § 5 DDG',
      paragraphs: [
        '[Vor- und Nachname]',
        '[Firmenname, falls vorhanden]',
        '[Straße Hausnummer]',
        '[PLZ Ort]',
      ],
    },
    {
      heading: 'Kontakt',
      paragraphs: ['E-Mail: [E-Mail-Adresse]', 'Telefon: [optional]'],
    },
    {
      heading: 'Umsatzsteuer',
      paragraphs: [
        '[Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG – oder: Kleinunternehmer gemäß § 19 UStG, daher keine Umsatzsteuer-ID]',
      ],
    },
    {
      heading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
      paragraphs: ['[Vor- und Nachname, Anschrift wie oben]'],
    },
  ],
};

const datenschutz: LegalText = {
  id: 'datenschutz',
  heading: 'Datenschutzerklärung',
  sections: [
    {
      heading: 'Verantwortlicher',
      paragraphs: [
        'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
        '[Vor- und Nachname], [Straße Hausnummer], [PLZ Ort], E-Mail: [E-Mail-Adresse]',
      ],
    },
    {
      heading: 'Hosting über GitHub Pages',
      paragraphs: [
        'Diese Website wird bei GitHub Pages gehostet, einem Dienst der GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.',
        'Beim Aufruf der Website verarbeitet GitHub technisch notwendige Daten, insbesondere Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs sowie Informationen zu Browser und Betriebssystem (Server-Logfiles). Das dient der sicheren und stabilen Bereitstellung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.',
        'Dabei können Daten in die USA übermittelt werden. GitHub ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub.',
      ],
    },
    {
      heading: 'Keine Cookies, kein Tracking',
      paragraphs: [
        'Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste.',
      ],
    },
    {
      heading: 'Schriftarten',
      paragraphs: [
        'Die verwendeten Schriftarten sind lokal eingebunden. Beim Aufruf der Website wird keine Verbindung zu Servern Dritter (zum Beispiel Google Fonts) hergestellt.',
      ],
    },
    {
      heading: 'Kontakt per E-Mail',
      paragraphs: [
        'Wenn Sie mir eine E-Mail schreiben, verarbeite ich Ihre Angaben, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es um einen Vertrag oder eine Bewerbung geht, ansonsten Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für diesen Zweck nicht mehr benötigt werden.',
      ],
    },
    {
      heading: 'Links zu anderen Websites',
      paragraphs: [
        'Diese Website enthält Links zu GitHub und LinkedIn. Erst wenn Sie einen dieser Links anklicken, werden Daten an den jeweiligen Anbieter übertragen. Dort gelten dessen Datenschutzbestimmungen.',
      ],
    },
    {
      heading: 'Ihre Rechte',
      paragraphs: [
        'Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten, auf Datenübertragbarkeit sowie auf Widerspruch gegen die Verarbeitung (Art. 15 bis 21 DSGVO).',
        'Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO).',
      ],
    },
    {
      heading: 'Stand',
      paragraphs: ['[Monat Jahr]'],
    },
  ],
};

export const legal: LegalContent = {
  heading: 'Rechtliches',
  texts: [impressum, datenschutz],
};
