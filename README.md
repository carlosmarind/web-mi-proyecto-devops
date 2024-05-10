## Instrucciones

Primero ejecutar la instalacion de dependencias con:

```bash
npm install
# luego
npx playwright install 
# luego si da error de alsa en linux
sudo apt-get install libnss3 libnspr4 libasound2t64
# en un terminal abre y deja corriendo tu aplicacion con 
npm run dev
# y en otro terminal ejecuta  los test con 
npm run test
```

