# 🎉 TABÚ — Juego para peques (8 a 12 años)

Una app para jugar al **Tabú** en el móvil o la tablet. Colorida, divertida y pensada para niños.

## ✨ Qué incluye

- **301 palabras** distintas, cada una con sus **5 palabras tabú** (prohibidas), en español.
- De **2 a 4 jugadores** por turnos, cada uno con su **nombre** y su emoji.
- **Turnos cronometrados**: 30s, 1 minuto o 90s (configurable). Cuando suena el tiempo, el móvil pasa al siguiente jugador.
- **3 botones** durante el turno:
  - ✅ **ACIERTO** → +1 punto.
  - ❌ **TABÚ** → -1 punto (si dices una palabra prohibida).
  - ⏭️ **SALTAR** → cambia de palabra (0 puntos).
- **Marcador** después de cada turno y **pantalla de ganador** al final.
- Confeti 🎊, sonidos y vibración para que sea más divertido.
- Funciona **sin conexión a internet** una vez abierta.

## ▶️ Cómo jugar (lo más fácil)

1. Copia toda esta carpeta al móvil o tablet (por cable, correo, Google Drive, etc.).
2. Abre el archivo **`index.html`** con el navegador **Chrome**.
3. ¡A jugar!

> Truco: gira la pantalla en vertical para que se vea mejor.

## 📲 Instalarla como una app (recomendado)

Para que tenga su icono en la pantalla de inicio y se abra a pantalla completa
como una app de verdad, hay que **servir los archivos** (no abrirlos como archivo suelto).

### Opción A — Servidor rápido en el ordenador (para probar)

En la carpeta del proyecto, ejecuta uno de estos comandos y luego abre la dirección que aparece desde el móvil (estando en la misma wifi):

```bash
# Si tienes Python instalado:
python -m http.server 8000

# Si tienes Node.js:
npx serve
```

Después, en el móvil, abre `http://IP-DEL-ORDENADOR:8000` en Chrome,
pulsa el menú **⋮ → "Añadir a pantalla de inicio" / "Instalar app"**.

### Opción B — Subirla a internet (gratis)

Sube esta carpeta a un sitio como **Netlify Drop** (https://app.netlify.com/drop)
o **GitHub Pages**. Te darán un enlace `https://...` que puedes abrir en el móvil
e **instalar** desde el menú de Chrome.

## 📁 Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | El juego completo (interfaz + lógica). |
| `words.js` | La lista de palabras y sus tabúes. **Puedes añadir o cambiar palabras aquí.** |
| `manifest.json` | Configuración para instalar la app. |
| `sw.js` | Permite jugar sin internet. |
| `icon.svg` | El icono de la app. |

## ✏️ Añadir o cambiar palabras

Abre `words.js` con cualquier editor de texto. Cada palabra es una línea así:

```js
{ p: "PERRO", t: ["gato", "ladrar", "mascota", "hueso", "cola"] },
```

- `p` = la palabra que hay que explicar.
- `t` = las 5 palabras tabú (prohibidas). Pon siempre 5.

Añade nuevas líneas dentro de los corchetes `[ ... ]` y guarda. ¡Listo!

---

¡Que os divirtáis! 🥳
