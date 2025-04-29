This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Notes:

- Color Scheme: [link](https://www.color-hex.com/color-palette/104061)
<<<<<<< HEAD

       {/* Expanded Box */}
        <AnimatePresence>
          {expanded !== null && (
            <motion.div
              key="expanded-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-opacity-90 fixed inset-0 my-3 mr-16 ml-9 flex items-center justify-center rounded-lg bg-black"
              onClick={() => setExpanded(null)}
            >
              <div className="flex flex-col items-center justify-center rounded-xl bg-white p-10 text-3xl text-black shadow-lg">
                Box {expanded + 1} Content
                <p className="mt-4 text-base">Click anywhere to close</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button Grid */}
        <AnimatePresence>
          {expanded === null && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-row flex-wrap items-center justify-center gap-5 rounded-lg bg-black py-10"
            >
              {boxes.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setExpanded(idx)}
                  className="flex h-70 w-70 cursor-pointer flex-row items-center justify-center bg-white transition hover:bg-[#5fa3fa]/30"
                >
                  <span className="text-black">Box {idx + 1}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
=======
>>>>>>> 72eeb80bf92601f8181ed9bbd7b0473ab117570f
