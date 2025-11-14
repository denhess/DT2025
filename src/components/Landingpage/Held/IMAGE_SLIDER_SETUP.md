# Image Slider Implementation - Setup Guide

## ✅ Implementierung abgeschlossen!

Es wurden **zwei Varianten** der SplitscreenOne Komponente erstellt:

### 🎯 Variante 1: Mit react-compare-slider (EMPFOHLEN)
**Datei:** `SplitscreenOne.tsx`
- ✅ Professionell & getestet
- ✅ 0 dependencies (nur react-compare-slider)
- ✅ Touch & Desktop optimiert
- ✅ Custom Handle mit gelber Border

### 🎯 Variante 2: Pure React (KEINE DEPENDENCIES)
**Datei:** `SplitscreenOnePure.tsx`  
- ✅ Keine externe Library benötigt
- ✅ Komplett selbst implementiert
- ✅ Touch & Desktop optimiert
- ✅ Leichtgewichtig

---

## 📦 Installation & Setup

### Option A: Variante 1 verwenden (react-compare-slider)

1. **Package installieren:**
```bash
cd C:\Users\dh\Documents\DT-Website\design-rech-web2\20250131\nxt-src
npm install react-compare-slider
```

2. **Fertig!** Die Komponente `SplitscreenOne.tsx` ist bereits aktiv.

3. **Testen:**
```bash
npm run dev
```

Öffne: `http://localhost:3000/erfolgsgeschichte`

---

### Option B: Variante 2 verwenden (Pure React)

1. **Keine Installation nötig!** 

2. **Export umbenennen:**
Öffne `SplitscreenOnePure.tsx` und ändere:
```tsx
// Von:
export function SplitscreenOnePure() {

// Zu:
export function SplitscreenOne() {
```

3. **Datei umbenennen:**
```bash
# Alte Datei sichern (optional)
ren SplitscreenOne.tsx SplitscreenOne.old.tsx

# Pure Version aktivieren
ren SplitscreenOnePure.tsx SplitscreenOne.tsx
```

4. **Testen:**
```bash
npm run dev
```

---

## 🎨 Styling-Anpassungen

### Labels anpassen
**Vorher Label** (links unten):
```tsx
<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
  <h3 className="text-black font-bold text-lg">VORHER</h3>
</div>
```

**Nachher Label** (rechts unten):
```tsx
<div className="absolute bottom-8 right-8 bg-yellow-300 px-4 py-2 rounded-lg shadow-lg">
  <h3 className="text-black font-bold text-lg">NACHHER</h3>
</div>
```

### Slider Handle Farbe ändern
**Aktuell:** Gelbe Border (`border-yellow-300`)  
**Ändern zu Weiß:**
```tsx
border-4 border-white  // statt border-yellow-300
```

### Slider Höhe anpassen
**Aktuell:** `h-[70vh]` (70% Viewport Height)  
**Ändern:**
```tsx
h-[80vh]  // 80% der Bildschirmhöhe
h-[600px] // Feste Höhe in Pixeln
```

---

## 📱 Mobile & Desktop Optimierung

Beide Varianten sind bereits vollständig optimiert:

✅ **Touch-Gesten** (Mobile)  
✅ **Maus-Drag** (Desktop)  
✅ **Responsive Padding**  
✅ **Viewport-basierte Höhe**  
✅ **GSAP Fade-in Animation**

---

## 🐛 Troubleshooting

### Problem: "Module not found: react-compare-slider"
**Lösung:** Package installieren:
```bash
npm install react-compare-slider
```

### Problem: TypeScript Fehler
**Lösung:** Dev Server neu starten:
```bash
# Strg+C zum Stoppen
npm run dev
```

### Problem: Bilder werden nicht angezeigt
**Lösung:** Bildpfade prüfen:
- Vorher: `/landingpage/held/pictures/BeforeAfterSlider/Before.webp`
- Nachher: `/landingpage/held/pictures/BeforeAfterSlider/After.webp`

Diese müssen im `public/` Ordner liegen!

---

## 🚀 Nächste Schritte

1. ✅ **Entscheide dich für Variante 1 oder 2**
2. ✅ **Installiere ggf. react-compare-slider** (nur Variante 1)
3. ✅ **Teste auf Mobile & Desktop**
4. ✅ **Optional: Passe Farben/Labels an**

---

## 📝 Technische Details

**Framework:** Next.js 15.1.4 + React 19  
**Styling:** Tailwind CSS  
**Animation:** GSAP + ScrollTrigger  
**Bilder:** WebP Format  
**Library:** react-compare-slider (Variante 1)

---

## ❓ Fragen?

- Brauchst du weitere Anpassungen?
- Soll ich die Labels anders positionieren?
- Andere Farben für den Slider Handle?
- Performance-Optimierungen gewünscht?

Einfach Bescheid geben! 😊
