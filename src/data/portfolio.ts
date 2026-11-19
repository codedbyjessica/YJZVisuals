import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/images/**/*.{jpg,png}', { eager: true });

export interface Work {
  title: string;
  caption: string;
  image: ImageMetadata;
  /** YouTube video id; if set the lightbox plays the video instead of showing the image */
  video?: string;
}

const work = (title: string, caption: string, image: string, video?: string): Work => {
  const mod = images[`../assets/images/${image}`];
  if (!mod) throw new Error(`Missing image: ${image}`);
  return { title, caption, image: mod.default, video };
};

const MAYA = 'Autodesk Maya';
const AE_PR = 'Adobe After Effects, Adobe Premiere Pro';
const AI_AE_PR = `Adobe Illustrator, ${AE_PR}`;

export const portfolio = [
  {
    id: 'animation',
    label: 'Animation',
    items: [
      work('Demo Reel (2016)', `${MAYA}, Cinema4D, ${AE_PR}`, 'animation/animation1.png', 'iMTLiIfsyRw'),
      work('Colonoscopy Procedure (2016)', `${MAYA}, ${AE_PR}`, 'animation/animation2.jpg', 'XHot6QBx2JQ'),
      work('Inactive Wnt Pathway (2016)', `${MAYA}, ${AI_AE_PR}`, 'animation/animation3.jpg', 'DeJX33elXDM'),
      work('RIGHTOGEN: App Design Demo (2016)', `${MAYA}, ${AI_AE_PR}`, 'animation/animation4.jpg', '8jArE3KtBtA'),
      work('MAPK/ERK Pathway (2016)', `${MAYA}, ${AE_PR}`, 'animation/animation5.jpg', 'mDUtNdaMwD8'),
      work('The GTPase Cycle of Ras Proteins (2016)', `${MAYA}, ${AE_PR}`, 'animation/animation6.jpg', 'RqdlfZP26BI'),
      work('About the Blood (2015)', `${MAYA}, ${AI_AE_PR}`, 'animation/animation7.jpg', 'ki48m95i4j0'),
      work('Coronary Angioplasty (2015)', `${MAYA}, ${AE_PR}`, 'animation/animation8.jpg', 'Be2zxHyb9Bw'),
    ],
  },
  {
    id: '3d',
    label: '3D Modeling',
    items: [
      work('Polypectomy (2016)', MAYA, '3d/3d1.jpg'),
      work('3D Model of the Large Intestine (2016)', MAYA, '3d/3d2.jpg'),
      work('3D Models of Surgical Instruments (2015)', MAYA, '3d/3d3.jpg'),
      work('Thorax (2014)', MAYA, '3d/3d4.jpg'),
      work('Spinal Cord Model (2014)', `${MAYA}, Adobe Illustrator`, '3d/3d5.jpg'),
      work('Hematology (2014)', `${MAYA}, Adobe InDesign`, '3d/3d6.jpg'),
      work('Composition of Blood (2014)', `${MAYA}, Adobe InDesign`, '3d/3d7.jpg'),
      work('Surgical Drill (2016)', 'Cinema4D', '3d/3d8.jpg'),
    ],
  },
  {
    id: 'illustration',
    label: 'Illustration',
    items: [
      work('Relationship Between Thoracic Vertebrae and Spinal Cord (2016)', 'Adobe Illustrator', 'illustration/illustration1.jpg'),
      work('Comparing Animal and Plant Cells (2015)', 'Adobe Illustrator', 'illustration/illustration2.jpg'),
      work('Transmission of a Nerve Signal Across a Synapse (2015)', 'Adobe Illustrator', 'illustration/illustration3.jpg'),
      work('Arteries within the Pelvis (2015)', 'Adobe Photoshop and Illustrator', 'illustration/illustration4.jpg'),
      work('The Molecular Basis of Pain and Osteoarthritis (2015)', 'Adobe Photoshop and Illustrator', 'illustration/illustration5.jpg'),
      work('Aurora Faust Surgical Malpractice Case (2015)', `Adobe Photoshop and ${MAYA}`, 'illustration/illustration6.jpg'),
      work('Gastric Sleeve Procedure (2015)', `Adobe Photoshop and ${MAYA}`, 'illustration/illustration7.jpg'),
      work('Intestinal Villi Environment (2015)', 'Adobe Photoshop', 'illustration/illustration8.jpg'),
    ],
  },
  {
    id: 'personal',
    label: 'Personal',
    items: [
      work('Primrose Study Series (2015)', 'Pen and ink', 'personal/personal1.jpg'),
      work('Primrose Study Series (2015)', 'Coloured pencils', 'personal/personal2.jpg'),
      work('Green Sea Turtle Zoo Plate (2015)', 'Adobe Illustrator', 'personal/personal3.jpg'),
      work('Sexybac(teriophage) (2015)', `${MAYA}, ${AE_PR}`, 'personal/personal4.jpg'),
      work('Tremblant Village (2013)', 'Pen and ink', 'personal/personal5.jpg'),
      work('Compression (2013)', 'Pencil', 'personal/personal6.jpg'),
      work('Mobilization (2013)', 'Oil on canvas', 'personal/personal7.jpg'),
      work('View Through a Broken Window (2012)', 'Oil on canvas', 'personal/personal8.jpg'),
    ],
  },
];

export const thesis = {
  animations: [
    work('About the Blood (2015)', `${MAYA}, ${AI_AE_PR}`, 'thesis/thesis01.jpg', 'ki48m95i4j0'),
    work('Acute Lymphoblastic Leukemia (2015)', `${MAYA}, ${AI_AE_PR}`, 'thesis/thesis02.jpg', 'tiOGzj3LXAE'),
    work('Chemotherapy for ALL (2015)', `${MAYA}, ${AI_AE_PR}`, 'thesis/thesis03.jpg', 'F7MttKk_qWQ'),
    work('RECOVER Game Demo (2016)', 'Unity3D, Adobe Illustrator', 'thesis/thesis04.jpg', 'AmjcgmuYkaw'),
  ],
  storyboards: [1, 2, 3, 4].map((n) =>
    work(`Storyboard 0${n} (2015)`, 'Adobe Illustrator', `thesis/storyboard${n}.jpg`),
  ),
  design: [
    work('Animatic, Part 1: About the Blood (2015)', AI_AE_PR, 'thesis/animatic1.jpg', '6IuFKTfaz5g'),
    work('Animatic, Part 2: Acute Lymphoblastic Leukemia (2015)', AI_AE_PR, 'thesis/animatic2.jpg', 'eouMdjbqd1k'),
    work('Interface Design (2015)', 'Adobe Illustrator, Adobe Photoshop, HTML, CSS, JavaScript', 'thesis/app1.jpg'),
    work('Final Interface Design (2015)', 'Adobe Illustrator, Adobe Photoshop, HTML, CSS, JavaScript', 'thesis/app2.jpg'),
  ],
};
