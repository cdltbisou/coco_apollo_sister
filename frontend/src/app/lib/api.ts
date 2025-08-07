import { mockCategory, mockGift } from '../mock-data'
import { GiftFilter } from '../types'

const allCategories = [
  mockCategory({
    name: 'Poussettes & Transport',
    color: '#FF6B6B',
    description:
      'Poussettes, sièges auto et accessoires de transport pour bébé',
    slug: 'poussettes-transport',
  }),
  mockCategory({
    name: 'Mobilier & Chambre',
    color: '#4ECDC4',
    description: 'Lits, commodes, berceaux et mobilier pour la chambre de bébé',
    slug: 'mobilier',
  }),
  mockCategory({
    name: 'Literie & Textile',
    color: '#45B7D1',
    description: 'Draps, couvertures, gigoteuses et textile pour bébé',
    slug: 'textile',
  }),
  mockCategory({
    name: 'Décoration',
    color: '#96CEB4',
    description:
      'Objets décoratifs, veilleuses et accessoires pour embellir la chambre',
    slug: 'decoration',
  }),
  mockCategory({
    name: 'Accessoires Bébé',
    color: '#FECA57',
    description:
      'Bavoirs, bodies, chaussures et petits accessoires du quotidien',
    slug: 'accessoires',
  }),
  mockCategory({
    name: 'Sécurité & Bien-être',
    color: '#FF9FF3',
    description:
      'Babyphones, thermomètres et produits pour la sécurité de bébé',
    slug: 'securite',
  }),
  mockCategory({
    name: 'Divers',
    color: '#FF9FF3',
    description: "Tous les trucs qu'on ne sait pas trop classer",
    slug: 'divers',
  }),
]

const allGifts = [
  mockGift({
    name: 'Stokke Sleepi™ Mini V3',
    price: 81899,
    url: 'https://fr.kidobebe.com/products/stokke-sleepi-mini-bunble-2023?variant=40370503811169',
    description:
      'Le Stokke® Sleepi™ Mini V3 est le premier lit idéal pour votre nouveau-né. Créant un environnement douillet, il offre à bébé une sensation de confort et de sécurité. Son design ovale doux enveloppe votre bébé et lui offre confort et familiarité pour un sommeil réparateur et de doux rêves.',
    brand: 'Stokke',
    imageUrl:
      'https://kidobebe.com/cdn/shop/products/SleepiMini-Natural_220419_0017_EDGE_eCom_2048x.jpg?v=1713904294',
    category: allCategories[1],
  }),
  mockGift({
    name: 'Poussette Vista',
    price: 129999,
    url: 'https://fr.kidobebe.com/products/uppababy-vista-v3-stroller?variant=41704232616033',
    description:
      "Poussette 3-en-1 premium avec châssis léger et maniable. Utilisable dès la naissance jusqu'à 22kg.",
    brand: 'Uppababy',
    imageUrl:
      'https://kidobebe.com/cdn/shop/files/UPPABABY_Vista_V3_Stroller_callum_2_612d8f1a-124f-4e25-ac20-eebfcafc8cf3_2048x.png?v=1723735029',
    category: allCategories[0],
  }),

  mockGift({
    name: 'Siège auto Cybex Cloud Z',
    price: 49299,
    url: 'https://fr.kidobebe.com/products/uppababy-aria-infant-car-seat?variant=41504828194913',
    description:
      'Siège auto groupe 0+ avec position allongée révolutionnaire pour plus de confort.',
    brand: 'Uppababy',
    imageUrl:
      'https://kidobebe.com/cdn/shop/files/Anthony-aria-uppababy-kido_2048x.png?v=1737407650',
    category: allCategories[0],
  }),
  mockGift({
    name: 'Gigoteuse en mousseline',
    price: 8799,
    url: 'https://fr.kidobebe.com/products/pehr-muslin-sleep-bag-1-7tog-celestial?variant=40521967599713',
    description:
      'Gigoteuse en coton bio, ultra-douce et respirante. Taille 6-18 mois.',
    brand: 'Pehr',
    imageUrl:
      'https://kidobebe.com/cdn/shop/products/PEHR-Muslin-Sleep-Bag-1.7TOG-Celestial-1_2048x.jpg?v=1668361208',
    category: allCategories[2],
  }),
  mockGift({
    name: 'Table à langer',
    price: 78900,
    url: 'https://fr.kidobebe.com/products/stokke-sleepi-changing-table-natural',
    description:
      "La table à langer Stokke® Sleepi™ est le complément parfait à notre concept de chambre d'enfant Stokke® Sleepi™, s'associant parfaitement à Berceaux Stokke® Sleepi™.​ Avec un espace ouvert pour les pieds des parents en dessous, la table à langer Stokke® Sleepi™ est à la hauteur idéale pour changer votre bébé sur le coussin moelleux inclus Table à langer.",
    brand: 'Stokke',
    imageUrl:
      'https://kidobebe.com/cdn/shop/files/STOKKE-Sleepi-Changing-Table-Natural_2048x.png?v=1710516769',
    category: allCategories[1],
  }),
  mockGift({
    name: 'Veilleuse nuage',
    price: 2499,
    url: 'https://fr.kidobebe.com/products/a-little-lovely-company-little-light-cloud',
    description:
      'Veilleuse LED avec mélodies apaisantes et minuterie programmable.',
    brand: 'A little lovely company',
    imageUrl:
      'https://kidobebe.com/cdn/shop/files/small-Night-Light-Cloud_2048x.png?v=1684257916',
    category: allCategories[3],
  }),
  mockGift({
    name: 'Transat',
    price: 52500,
    url: 'https://fr.kidobebe.com/products/charlie-crane-levo-baby-rocker-beech?variant=41610692624481',
    description:
      "Avec sa forme tout en courbes et son look mid-century, LEVO s'intègre parfaitement dans tous les intérieurs. Le mouvement de bascule naturel du transat s'adapte aux mouvements de votre enfant dès ses premiers pas.",
    brand: 'Charlie Crane',
    imageUrl:
      'https://kidobebe.com/cdn/shop/files/CHARLIECRANELevoBabyRocker-Beechorganicmilk_12_2048x.png?v=1713650619',
    category: allCategories[0],
  }),
  mockGift({
    name: 'Manteau',
    price: 11999,
    url: 'https://fr.kidobebe.com/products/7am-enfant-bunting-bebe-airy?variant=40977972658273',
    description:
      'Le Bunting Airy est le manchon de démarrage idéal pour les températures plus douces car il présente un extérieur respirant et aéré et une doublure douce 100 % coton ; 2 fermetures éclair centrales pour des entrées et sorties rapides ; et un sac corporel complet pour le confort de votre bébé.',
    brand: '7AM enfant',
    imageUrl:
      'https://kidobebe.com/cdn/shop/files/7AM-ENFANT-Bunting-Bebe-Airy-cameo_2048x.png?v=1706911155',
    category: allCategories[4],
  }),
  mockGift({
    name: 'Moniteur pour bébé',
    price: 27999,
    url: 'https://fr.kidobebe.com/products/maxi-cosi-see-pro-360-baby-monitor-parent-unit-with-cryassist-technology',
    description:
      'Babyphone connecté avec caméra HD, détection de mouvement et application mobile.',
    brand: 'MaxiCosi',
    imageUrl:
      'https://kidobebe.com/cdn/shop/files/MAXICOSISeePro360_BabyMonitor_ParentUnitWithCryAssistTechnology_1_2048x.png?v=1727115668',
    category: allCategories[5],
  }),
  mockGift({
    name: 'Pyjama',
    price: 3199,
    url: 'https://fr.kidobebe.com/products/perlimpinpin-bamboo-sleeper-moss?variant=40370474287201',
    description:
      "Tapis d'éveil coloré avec arches amovibles et jouets sensoriels intégrés.",
    brand: 'Perlimpinpin',
    imageUrl:
      'https://kidobebe.com/cdn/shop/products/PERLIMPINPIN-Bamboo-Sleeper-moss-green_2048x.jpg?v=1722966596',
    category: allCategories[3],
  }),
  mockGift({
    name: 'Berceau pour poussette',
    price: 12400,
    url: 'https://fr.kidobebe.com/inspirants/uppababy-berceau-v3?variant=41704230125665',
    description:
      "Tapis d'éveil coloré avec arches amovibles et jouets sensoriels intégrés.",
    brand: 'Uppababy',
    imageUrl:
      'https://kidobebe.com/cdn/shop/files/UPPABABY_Bassinet_V3_callum_6_2048x.png?v=1739357758',
    category: allCategories[3],
  }),
]

export const getCategories = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 300)
  })
  return allCategories
}

export const getGifts = async (
  filter?: Partial<Record<GiftFilter, string>>
) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })

  // Filtering

  if (filter?.category) {
    return allGifts.filter((gift) => gift.category.slug === filter.category)
  }
  if (filter?.price) {
    return allGifts.filter((gift) => gift.category.slug === filter.category)
  }
  return allGifts
}

export const getSingleGift = async (giftId: string) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 300)
  })
  return allGifts.find(({ id }) => id === giftId)
}
