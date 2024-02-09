# Full-Stack-E-Commerce-Dashboard-CMS-Next.js-13-App-Router-React-Tailwind-Prisma-PostgreSQL-Neon.tech

### Izgrađeno s:
- TypeScript
- [TailwindCSS](https://tailwindcss.com) - Framework za CSS sa fokusom na efikasnost.
- [React](https://reactjs.org/) - JavaScript biblioteka.
- [NextJS](https://nextjs.org) - Next.js omogućava kreiranje full-stack web aplikacija proširujući najnovije mogućnosti React-a.
- [Prisma](https://www.prisma.io) - ORM (Object-Relational Mapping) za Node.js i TypeScript.
- [Neon.tech](https://neon.tech/) - Neon.tech je serverless PostgreSQL platforma.
- [PostgreSQL](https://www.postgresql.com) - Relacijski sistem za upravljanje bazama podataka.
- [Zustand](https://zustand-demo.pmnd.rs) - Mali, brz i skalabilan alat za upravljanje stanjem koristeći pojednostavljene principe flux-a.
- [Clerk](https://clerk.com) - Integrira potpune korisničke upravljačke korisničke interfejse i API-je, prilagođene za React, Next.js i moderni web.
- [Stripe](https://stripe.com) - Skup API-ja koji omogućava online procesiranje plaćanja i rješenja za e-trgovine svih veličina.
- [shadcn UI](https://ui.shadcn.com) - Komponente prelijepog dizajna koje možete kopirati i zalijepiti u svoje aplikacije. Pristupačno. Prilagodljivo. Open Source.


Ključne funkcionalnosti:

- Admin kontrolna tabla koja služi kao CMS, Admin i API!
- Mogućnost upravljanja s više prodavaca / prodavnica putem ovog jedinstvenog CMS-a! (Na primjer, možete imati "Prodavnicu organskog voća", "Prodavnicu džemova" i "Prodavnicu sokova", a CMS će generisati API rute za sve te pojedinačno!)
- Mogućnost kreiranja, ažuriranja i brisanja kategorija!
- Mogućnost kreiranja, ažuriranja i brisanja proizvoda!
- Mogućnost dodavanja više slika za proizvode i mijenjanja istih kad god želite!
- Mogućnost kreiranja, ažuriranja i brisanja filtera poput "Starosti proizvoda" i "Veličine", te njihovo povezivanje u formi za kreiranje "Proizvoda".
- Mogućnost kreiranja, ažuriranja i brisanja "Billboard-a" koji predstavljaju velike tekstove na vrhu stranice. Mogućnost povezivanja s jednom kategorijom ili korišćenje samostalno (Admin generiše API za sve te slučajeve!)
- Mogućnost pretrage kroz sve kategorije, proizvode, veličine, boje, billboard-e s uključenom paginacijom!
- Mogućnost kontrole koje su proizvodi "istaknuti" kako bi se prikazali na početnoj stranici!
- Mogućnost pregleda narudžbi, prodaje, itd.
- Mogućnost pregleda grafikona prihoda itd.
- Clerk za autentikaciju
- Kreiranje narudžbi
- Stripe za plaćanje
- PostgreSQL + Prisma + Neon.tech

### Preduslovi

**Node version 14.x**

### Kloniranje repozitorija

```shell
git clone https://github.com/BosneviNedzma/e-commerce.git
```

### Instalacija paketa

```shell
npm i
```

### Postavljanje .env datoteke


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Ovo je ubačeno pomoću prisma init:
# Promjenljive okoline deklarisane u ovoj datoteci automatski su dostupne Prisma-i.
# Pogledajte dokumentaciju za više detalja: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma podržava native format za veze za PostgreSQL, MySQL, SQLite, SQL Server, MongoDB i CockroachDB.
# Pogledajte dokumentaciju za sve opcije veze: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=
```

### Konekcija
```shell
npm prisma generate
npm prisma db push
```


### Pokreni aplikaciju

```shell
npm run dev
```
