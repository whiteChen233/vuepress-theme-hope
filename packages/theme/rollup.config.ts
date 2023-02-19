import { fs, path } from "@vuepress/utils";

import { bundle } from "../../scripts/rollup.js";

const getDirFiles = (dir: string): string[] => {
  const result = fs.readdirSync(path.resolve("./src/client", dir));

  return [
    ...result
      .filter((file) =>
        // ts files
        file.endsWith(".ts")
      )
      .map((file) => `${dir}/${file.replace(/\.ts$/, "")}`),
    ...result
      .filter((file) => !file.includes("."))
      .map((file) => getDirFiles(`${dir}/${file}`))
      .flat(),
  ];
};

const getEntryFile = (entry: string): string | null =>
  fs.existsSync(path.resolve("./src/client", entry, "index.ts"))
    ? `${entry}/index`
    : null;

export default [
  ...bundle("node/index", {
    external: ["bcrypt-ts/node", "chokidar"],
  }),
  ...bundle(
    {
      base: "client",
      files: [
        ...getDirFiles("components"),
        ...getDirFiles("layouts"),
        ...["composables", "utils"]
          .map(getEntryFile)
          .filter((item): item is string => item !== null),
      ],
    },
    {
      external: [
        /^@theme-hope\//,
        "@vuepress/plugin-theme-data/client",
        /\.jpg$/,
      ],
    }
  ),
  ...fs
    .readdirSync(path.resolve("./src/client/modules"))
    .map((folder) => `modules/${folder}`)
    .map((file) => [
      getDirFiles(`${file}/components`),
      getDirFiles("layouts"),
      ["composables", "utils"]
        .map((folder) => `${file}/${folder}`)
        .map(getEntryFile)
        .filter((item): item is string => item !== null),
    ])
    .map((files) =>
      files.map((files) =>
        bundle(
          {
            base: "client",
            files,
          },
          {
            external: [
              /^@theme-hope\//,
              "@vuepress/plugin-theme-data/client",
              /\.jpg$/,
            ],
          }
        )
      )
    )
    .flat(2),
];
