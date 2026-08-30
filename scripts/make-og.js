// One-off generator for public/og.jpg. Run from the project root:
//   npm run og
// Intentionally NOT part of the build: text rasterisation depends on system
// fonts, so running it inside the Debian container would produce tofu boxes.
// The generated JPEG is committed as a static asset instead.
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

// Matches the live brand palette in src/styles/ds-modernist.css / design.md.
const NAVY = '#0d1b2a'; // --color-navy
const GREEN = '#06c755'; // --color-line (LINE brand, used for the site's LINE CTAs)
const GOLD = '#e5a50a'; // --color-primary-active

// Thai-capable stacks. Leelawadee UI / Tahoma ship with Windows.
const THAI = "'Leelawadee UI', 'Tahoma', 'Segoe UI', sans-serif";
const LATIN = "'Archivo', 'Segoe UI', 'Arial', sans-serif";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${NAVY}"/>

  <text x="72" y="88" font-family="${LATIN}" font-size="26" font-weight="bold"
        letter-spacing="6" fill="#ffffff">TAWAN CAR RENT</text>
  <text x="72" y="128" font-family="${THAI}" font-size="26" fill="${GOLD}"
        >รถเช่าหาดใหญ่ · สงขลา · ภาคใต้ตอนล่าง</text>

  <text x="72" y="290" font-family="${THAI}" font-size="132" font-weight="bold"
        fill="#ffffff">เช่ารถ วันละ 800.-</text>

  <text x="72" y="370" font-family="${THAI}" font-size="34" fill="#ffffff"
        opacity="0.88">ไม่ต้องใช้บัตรเครดิต · ฟรีรับส่งสนามบิน · ประกันภัยชั้น 1</text>

  <rect x="0" y="470" width="1200" height="160" fill="${GREEN}"/>
  <text x="72" y="545" font-family="${LATIN}" font-size="52" font-weight="bold"
        fill="#ffffff">LINE @tawan8118</text>
  <text x="72" y="592" font-family="${THAI}" font-size="30" fill="#ffffff"
        opacity="0.92">โทร 091-046-8118 · เปิดทุกวัน 07:00–22:00</text>

  <rect x="928" y="470" width="4" height="160" fill="#ffffff" opacity="0.3"/>
  <text x="1128" y="542" font-family="${LATIN}" font-size="62" font-weight="bold"
        fill="#ffffff" text-anchor="end">฿800</text>
  <text x="1128" y="580" font-family="${THAI}" font-size="26" fill="#ffffff"
        opacity="0.9" text-anchor="end">เริ่มต้น/วัน</text>
</svg>`;

sharp(Buffer.from(svg))
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(path.join(here, '..', 'public', 'og.jpg'))
  .then((info) => console.log('wrote public/og.jpg', info.width + 'x' + info.height, info.size + ' bytes'))
  .catch((e) => console.error('ERR', e.message));
