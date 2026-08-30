# ตะวัน (TAWAN CAR RENT) — Color Theme

โทนสีอ้างอิงจาก Color Panel ของแบรนด์ ปรับให้ผิวเว็บเป็น **light tone** (พื้นสว่าง ตัวอักษรเข้ม)
เอกสารนี้กำหนด **สีอย่างเดียว** — โครงสร้าง layout, component และดีไซน์เดิมไม่เปลี่ยน

Typeface: **Prompt** (Bold / Medium / Regular) — คงตามเดิม

---

## 1. Brand palette (สีหลักจาก panel)

| ชื่อ | HEX | ใช้กับ |
|---|---|---|
| Sunshine Yellow | `#FFC107` | สีแบรนด์หลัก — ปุ่ม primary, logo, highlight |
| Sun Gold | `#FDB813` | สถานะ hover/active ของ primary, ไล่เฉด |
| Light Sun | `#FFF6D6` | พื้นอ่อน, badge, แถบเน้น, hover ของแถวตาราง |
| Sun Charcoal | `#222222` | หัวเรื่อง, ตัวอักษรหลัก |
| Warm Gray | `#6B7280` | ตัวอักษรรอง, ไอคอนสถานะปิด, placeholder |
| Sun Navy | `#0D1B2A` | footer, พื้นเข้มเฉพาะจุด, ตัวอักษรบนพื้นเหลือง |
| Fresh Green | `#28A745` | สถานะสำเร็จ, "ว่าง/พร้อมให้เช่า" |

## 2. Neutrals สำหรับโทนสว่าง (สีเสริม — ไม่มีใน panel)

| Token | HEX | ใช้กับ |
|---|---|---|
| Base | `#FFFFFF` | พื้นการ์ด, พื้น modal, พื้น input |
| Canvas | `#FBFBF9` | พื้นหลังหน้าเว็บ (ขาวอมอุ่นนิดเดียว ไม่ให้แสบตา) |
| Subtle | `#F5F6F8` | พื้น section สลับ, table header, พื้น input แบบ disabled |
| Border | `#E5E7EB` | เส้นขอบทั่วไป, เส้นคั่น |
| Border Strong | `#D1D5DB` | ขอบ input ตอน hover, ขอบที่ต้องเห็นชัด |

## 3. Semantic tokens

| Token | HEX | หมายเหตุ |
|---|---|---|
| `--color-primary` | `#FFC107` | |
| `--color-primary-hover` | `#FDB813` | |
| `--color-primary-active` | `#E5A50A` | เข้มลงจาก Sun Gold ~8% |
| `--color-primary-soft` | `#FFF6D6` | พื้นอ่อนของ primary |
| `--color-on-primary` | `#222222` | **ห้ามใช้ตัวอักษรสีขาวบนพื้นเหลือง** (contrast ไม่ผ่าน) |
| `--color-text` | `#222222` | |
| `--color-text-muted` | `#6B7280` | |
| `--color-text-inverse` | `#FFFFFF` | ใช้บนพื้น Sun Navy เท่านั้น |
| `--color-success` | `#28A745` | soft: `#E9F7EE` |
| `--color-warning` | `#F59E0B` | soft: `#FEF3C7` — เข้มกว่า primary เพื่อไม่ให้สับสนกับปุ่ม |
| `--color-danger` | `#DC3545` | soft: `#FDECEE` |
| `--color-info` | `#0D1B2A` | soft: `#EEF1F5` |
| `--color-focus` | `#FDB813` | ring 3px + offset 2px |

## 4. CSS variables

```css
:root {
  /* brand */
  --color-primary:        #FFC107;
  --color-primary-hover:  #FDB813;
  --color-primary-active: #E5A50A;
  --color-primary-soft:   #FFF6D6;
  --color-on-primary:     #222222;
  --color-navy:           #0D1B2A;

  /* surfaces (light tone) */
  --color-canvas:         #FBFBF9;
  --color-surface:        #FFFFFF;
  --color-surface-subtle: #F5F6F8;
  --color-border:         #E5E7EB;
  --color-border-strong:  #D1D5DB;

  /* text */
  --color-text:           #222222;
  --color-text-muted:     #6B7280;
  --color-text-inverse:   #FFFFFF;

  /* status */
  --color-success:        #28A745;
  --color-success-soft:   #E9F7EE;
  --color-warning:        #F59E0B;
  --color-warning-soft:   #FEF3C7;
  --color-danger:         #DC3545;
  --color-danger-soft:    #FDECEE;
  --color-info:           #0D1B2A;
  --color-info-soft:      #EEF1F5;

  /* effects */
  --gradient-sun: linear-gradient(135deg, #FFD54A 0%, #FFC107 55%, #FDB813 100%);
  --shadow-sm: 0 1px 2px rgba(34, 34, 34, .06);
  --shadow-md: 0 4px 16px rgba(34, 34, 34, .08);
  --shadow-primary: 0 6px 18px rgba(253, 184, 19, .28);
  --focus-ring: 0 0 0 3px rgba(253, 184, 19, .45);
}
```

## 5. Tailwind config

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#FFC107',
        hover:   '#FDB813',
        active:  '#E5A50A',
        soft:    '#FFF6D6',
      },
      navy:    '#0D1B2A',
      canvas:  '#FBFBF9',
      surface: { DEFAULT: '#FFFFFF', subtle: '#F5F6F8' },
      line:    { DEFAULT: '#E5E7EB', strong: '#D1D5DB' },
      ink:     { DEFAULT: '#222222', muted: '#6B7280' },
      success: { DEFAULT: '#28A745', soft: '#E9F7EE' },
      warning: { DEFAULT: '#F59E0B', soft: '#FEF3C7' },
      danger:  { DEFAULT: '#DC3545', soft: '#FDECEE' },
    },
    fontFamily: { sans: ['Prompt', 'sans-serif'] },
  }
}
```

## 6. การใช้กับ component (โครงสร้างเดิม เปลี่ยนแค่สี)

**Page** — พื้น `--color-canvas`, การ์ดทุกใบพื้น `--color-surface` + ขอบ `--color-border` + `--shadow-sm`

**Primary button** — พื้น `--color-primary`, ตัวอักษร `--color-on-primary`, hover → `--color-primary-hover` + `--shadow-primary`, active → `--color-primary-active`, disabled → พื้น `#F5F6F8` ตัวอักษร `#9CA3AF`

**Secondary button** — พื้น `--color-surface`, ขอบ `--color-border-strong`, ตัวอักษร `--color-text`, hover → พื้น `--color-primary-soft` + ขอบ `--color-primary`

**Text link** — `--color-text` ปกติ, hover → `--color-primary-active` + underline

**Input / select / date** — พื้น `--color-surface`, ขอบ `--color-border`, placeholder `--color-text-muted`, focus → ขอบ `--color-primary` + `--focus-ring`, error → ขอบ `--color-danger` + ข้อความ `--color-danger`

**Toggle / checkbox** — เปิด: พื้น `--color-primary` หมุดสีขาว / ปิด: พื้น `#D1D5DB`

**Rating star** — เต็ม `--color-primary`, ว่าง `#E5E7EB`

**Progress bar** — ราง `#EEF0F3`, แถบ `--gradient-sun`

**Table** — header พื้น `--color-surface-subtle`, เส้นคั่น `--color-border`, hover แถว `--color-primary-soft`

**Badge สถานะรถ** — ว่าง: `--color-success-soft` / `--color-success` · จอง: `--color-primary-soft` / `#8A6100` · ซ่อม: `--color-danger-soft` / `--color-danger`

**Hero** — พื้น gradient จาก `#FFFFFF` → `#FFF6D6` → `#FFE9A8` (สว่างเสมอ) หัวเรื่อง `--color-text` คำเน้น `--color-primary-active`

**Navbar** — พื้น `--color-surface` โปร่ง + blur, ขอบล่าง `--color-border`, เมนู active `--color-primary-active`

**Footer** — จุดเดียวที่เป็นพื้นเข้ม: `--color-navy` + ตัวอักษร `--color-text-inverse` (ตัวอักษรรองใช้ `rgba(255,255,255,.7)`)

## 7. กฎที่ต้องคุมไว้

1. พื้นหลังใหญ่ทุกส่วนใช้ขาว/ครีมอ่อนเท่านั้น — สีเข้มใช้ได้เฉพาะ footer และตัวอักษร
2. เหลืองเป็น **accent** ไม่ใช่พื้นหลังใหญ่ ใช้ไม่เกิน ~10% ของพื้นที่หน้า เพื่อให้ปุ่ม CTA ยังเด่น
3. ตัวอักษรบนพื้นเหลืองต้องเป็น `#222222` เสมอ (ขาวบน `#FFC107` = contrast 1.8:1 ไม่ผ่าน AA)
4. ตัวอักษรบนพื้นขาว: หลัก `#222222` (15.9:1) รอง `#6B7280` (4.8:1) — ห้ามอ่อนกว่า `#6B7280` สำหรับ body text
5. เหลืองห้ามใช้สื่อสถานะเตือน ให้ใช้ `--color-warning` (`#F59E0B`) แทน จะได้ไม่ชนกับสีแบรนด์
6. เงาใช้ฐานสี `#222222` แบบ opacity ต่ำ — ห้ามใช้เงาสีดำสนิท จะทำให้โทนหนัก
